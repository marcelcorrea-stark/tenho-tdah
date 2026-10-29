import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  getAgentDir,
  type ExtensionAPI,
  type ExtensionContext,
} from "@earendil-works/pi-coding-agent";
import {
  contextMessages,
  latestMarkerIsActive,
} from "./context-compat";

const EXTENSION_DIR = dirname(fileURLToPath(import.meta.url));
const SKILL_PATH = join(
  EXTENSION_DIR,
  "..",
  "skills",
  "tenho-tdah",
  "SKILL.md",
);
const STATE_ENTRY_TYPE = "tenho-tdah-state";
const RULES_MESSAGE_TYPE = "tenho-tdah-rules";
const DISABLED_MESSAGE_TYPE = "tenho-tdah-disabled";
const STATUS_KEY = "tenho-tdah";
const DISABLE_CONFIRMATION = "Modo TDAH desativado.";
const STOP_PHRASES = new Set(["parar modo tdah", "modo normal"]);
const RULES_HEADER =
  'MODO TDAH ATIVO. O conjunto de regras abaixo vale para toda resposta até ser desligado. "parar modo tdah" ou "modo normal" desliga para esta sessão.';
const DISABLED_NOTICE =
  "MODO TDAH DESLIGADO. Ignore o conjunto de regras tenho-tdah injetado antes nesta conversa e volte ao seu estilo de resposta padrão.";

type TdahModeState = {
  enabled: boolean;
};

type TdahConfig = {
  alwaysOn?: boolean;
  hideStatus?: boolean;
};

function loadConfig(): TdahConfig {
  try {
    return JSON.parse(
      readFileSync(join(getAgentDir(), "tenho-tdah.json"), "utf8"),
    );
  } catch {
    return {};
  }
}

function stripFrontmatter(content: string): string {
  return content
    .replace(
      /^---[^\S\r\n]*\r?\n[\s\S]*?\r?\n---[^\S\r\n]*(?:\r?\n|$)/,
      "",
    )
    .trim();
}

function loadRules(): string {
  let content: string;

  try {
    content = readFileSync(SKILL_PATH, "utf8");
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Não foi possível carregar as regras tenho-tdah de ${SKILL_PATH}: ${reason}`,
    );
  }

  const rules = stripFrontmatter(content);
  if (!rules) {
    throw new Error(`O arquivo de regras tenho-tdah está vazio: ${SKILL_PATH}`);
  }

  return rules;
}

function getSavedState(ctx: ExtensionContext): boolean | undefined {
  let savedState: boolean | undefined;

  for (const entry of ctx.sessionManager.getBranch()) {
    if (entry.type !== "custom" || entry.customType !== STATE_ENTRY_TYPE) {
      continue;
    }

    const data = entry.data as Partial<TdahModeState> | undefined;
    if (typeof data?.enabled === "boolean") {
      savedState = data.enabled;
    }
  }

  return savedState;
}

/**
 * Whether the rules are still live in the context the model actually receives.
 *
 * Only the newest marker counts: a later "disabled" notice cancels an earlier
 * ruleset, and compaction drops summarized entries so the ruleset has to be
 * injected again.
 */
function rulesAreInContext(ctx: ExtensionContext): boolean {
  return latestMarkerIsActive(
    contextMessages(ctx.sessionManager),
    RULES_MESSAGE_TYPE,
    DISABLED_MESSAGE_TYPE,
  );
}

export default function tenhoTdahExtension(pi: ExtensionAPI) {
  const rules = loadRules();
  const alwaysOnFlag = join(getAgentDir(), ".tenho-tdah-always");
  const config = loadConfig();
  let enabled = false;

  const updateStatus = (ctx: ExtensionContext): void => {
    if (!enabled || config.hideStatus) {
      ctx.ui.setStatus(STATUS_KEY, undefined);
      return;
    }

    const dot = ctx.ui.theme.fg("success", "●");
    const label = ctx.ui.theme.fg("accent", "TDAH ATIVO");
    ctx.ui.setStatus(STATUS_KEY, `${dot} ${label}`);
  };

  /**
   * Keep the conversation in sync with the current mode, the way the Claude Code
   * SessionStart hook does: inject the ruleset once, never per request.
   */
  const syncContext = (ctx: ExtensionContext): void => {
    const injected = rulesAreInContext(ctx);

    if (enabled && !injected) {
      pi.sendMessage(
        {
          customType: RULES_MESSAGE_TYPE,
          content: `${RULES_HEADER}\n\n${rules}`,
          display: false,
        },
        { triggerTurn: false },
      );
      return;
    }

    if (!enabled && injected) {
      pi.sendMessage(
        {
          customType: DISABLED_MESSAGE_TYPE,
          content: DISABLED_NOTICE,
          display: false,
        },
        { triggerTurn: false },
      );
    }
  };

  const restoreState = (ctx: ExtensionContext): void => {
    const savedState = getSavedState(ctx);
    const enabledByDefault =
      pi.getFlag("tdah") === true ||
      config.alwaysOn === true ||
      existsSync(alwaysOnFlag);

    enabled = savedState ?? enabledByDefault;
    updateStatus(ctx);
    syncContext(ctx);
  };

  const setEnabled = (nextEnabled: boolean, ctx: ExtensionContext): void => {
    enabled = nextEnabled;
    pi.appendEntry(STATE_ENTRY_TYPE, { enabled } satisfies TdahModeState);
    updateStatus(ctx);
    syncContext(ctx);
    ctx.ui.notify(`Modo TDAH ${enabled ? "ativado" : "desativado"}`, "info");
  };

  pi.registerFlag("tdah", {
    description: "Iniciar com a saída adaptada para TDAH ativada",
    type: "boolean",
    default: false,
  });

  pi.registerCommand("tenho-tdah", {
    description: "Alternar a saída adaptada para TDAH nesta sessão",
    handler: async (args, ctx) => {
      const argument = args.trim().toLowerCase();

      if (argument === "") {
        setEnabled(!enabled, ctx);
        return;
      }

      if (argument === "on") {
        setEnabled(true, ctx);
        return;
      }

      if (argument === "off" || argument === "stop") {
        setEnabled(false, ctx);
        return;
      }

      ctx.ui.notify("Uso: /tenho-tdah [on|off]", "warning");
    },
  });

  pi.on("input", async (event, ctx) => {
    const input = event.text.trim().toLowerCase();

    // Keep the built-in skill command working as an alias without letting Pi
    // expand a second copy of the same rules into the conversation.
    if (input === "/skill:tenho-tdah") {
      setEnabled(true, ctx);
      return { action: "handled" };
    }

    if (enabled && STOP_PHRASES.has(input)) {
      setEnabled(false, ctx);

      if (ctx.hasUI) {
        return { action: "handled" };
      }

      return {
        action: "transform",
        text: `Responda exatamente: ${DISABLE_CONFIRMATION}`,
      };
    }

    return { action: "continue" };
  });

  pi.on("session_start", async (_event, ctx) => restoreState(ctx));
  pi.on("session_tree", async (_event, ctx) => restoreState(ctx));
  pi.on("session_compact", async (_event, ctx) => syncContext(ctx));
}
