"""Checks that the repo ships only the Claude Code and Cursor integrations."""

import json
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

REMOVED_PATHS = [
    ".agents",
    ".codex-plugin",
    ".opencode",
    "extensions",
    "GEMINI.md",
    "gemini-extension.json",
    "kimi.plugin.json",
    "qwen-extension.json",
    "plugin.json",
    "package.json",
    "skills/tenho-tdah/agents",
    "hooks/always-on.sh",
    "hooks/always-on.ps1",
    "scripts/check_pi_extension.py",
    "scripts/check_context_compat.ts",
    ".github/workflows/pi-load-check.yml",
    "tests/test_opencode_plugin.py",
    "tests/opencode_plugin_driver.mjs",
    "tests/test_omp_package.py",
]

KEPT_INSTALL_SECTIONS = ["Claude Code", "Cursor"]


class RemovedIntegrationsTest(unittest.TestCase):
    def test_non_claude_cursor_files_are_gone(self):
        for relative in REMOVED_PATHS:
            with self.subTest(path=relative):
                self.assertFalse((ROOT / relative).exists())

    def test_translations_keep_only_english(self):
        for folder, stem in ((".github/readme", "README"), (".github/install", "INSTALL")):
            names = sorted(path.name for path in (ROOT / folder).iterdir())
            self.assertEqual(names, [stem + ".en.md"])


class InstallDocsScopeTest(unittest.TestCase):
    def test_install_guides_cover_only_claude_code_and_cursor(self):
        paths = [ROOT / "INSTALL.md", ROOT / ".github/install/INSTALL.en.md"]
        for path in paths:
            with self.subTest(file=path.name):
                text = path.read_text(encoding="utf8")
                names = re.findall(r"<summary><strong>(.*?)</strong></summary>", text)
                self.assertEqual(len(names), len(KEPT_INSTALL_SECTIONS))
                for name, expected in zip(names, KEPT_INSTALL_SECTIONS):
                    self.assertTrue(name.startswith(expected))


class RuntimeScopeTest(unittest.TestCase):
    def test_hook_declaration_targets_only_claude_code(self):
        text = (ROOT / "hooks" / "hooks.json").read_text(encoding="utf8")
        self.assertIn("CLAUDE_PLUGIN_ROOT", text)
        self.assertNotIn("process.env.PLUGIN_ROOT", text)

    def test_eval_runner_example_has_only_claude(self):
        runners = json.loads((ROOT / "evals" / "runners.example.json").read_text())
        self.assertEqual(list(runners), ["claude"])

    def test_eval_harness_has_no_codex_parser(self):
        text = (ROOT / "scripts" / "run_evals.py").read_text(encoding="utf8")
        self.assertNotIn("codex", text)


if __name__ == "__main__":
    unittest.main()
