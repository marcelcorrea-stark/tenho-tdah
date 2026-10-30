# How to install

<details>
<summary><strong>Claude Code</strong></summary>

### Install

```bash
claude plugin marketplace add marcelcorrea-stark/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

Type `/tenho-tdah`.

### Verify

```bash
claude plugin list
```

### Update

```bash
claude plugin marketplace update tenho-tdah
claude plugin update tenho-tdah@tenho-tdah
```

The first command refreshes the marketplace listing. The second updates the installed plugin. Restart Claude Code to load it.

`claude plugin update` skips a plugin whose `version` has not changed. If you maintain a fork, bump `version` in `.claude-plugin/plugin.json` after you edit the rules.

### Uninstall

```bash
claude plugin uninstall tenho-tdah
claude plugin marketplace remove tenho-tdah
```

Or keep it installed and turn it off: `claude plugin disable tenho-tdah`.

### Always-on (optional)

A `SessionStart` hook loads the full ruleset at the start of every session, no `/tenho-tdah` needed:

```bash
touch ~/.claude/.tenho-tdah-always
```

If you use a custom Claude configuration directory, create the flag there instead:

```bash
touch "$CLAUDE_CONFIG_DIR/.tenho-tdah-always"
```

Back to on-demand:

```bash
rm ~/.claude/.tenho-tdah-always
```

The hook only fires when the flag file exists, so installing the plugin changes nothing by itself. "parar modo tdah" still turns it off for the current session.

</details>

<details>
<summary><strong>Cursor</strong></summary>

### Install

```bash
npx skills add marcelcorrea-stark/tenho-tdah                  # this workspace
npx skills add marcelcorrea-stark/tenho-tdah -g               # all projects
npx skills add marcelcorrea-stark/tenho-tdah -a cursor -y     # Cursor only
```

New Cursor chat, type `/tenho-tdah`.

Without the CLI, copy the skill folder into the path Cursor scans:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.cursor/skills
cp -R tenho-tdah/skills/tenho-tdah ~/.cursor/skills/
```

### Verify

```bash
npx skills list
npx skills ls -g    # if installed globally
```

### Update

```bash
npx skills update tenho-tdah
npx skills update -g    # if installed globally
```

### Uninstall

```bash
npx skills remove tenho-tdah
npx skills remove tenho-tdah -g    # if installed globally
```

### Always-on (optional)

Paste this into Cursor under **Settings → Rules → User Rules**, or a project rule under `.cursor/rules/` with `alwaysApply: true`.

```markdown
## Output style

The reader has ADHD. Shape every response so it can be acted on:

1. Lead with the answer or next action: command, path, or snippet first.
2. Number multi-step work; one bounded action per step.
3. End with one next action doable in under two minutes.
4. Finish the current issue before raising a new one.
5. Restate progress each turn ("step 3 of 5 done").
6. Give time estimates in concrete units, never "a bit".
7. After a change, show what now works.
8. Errors: state location, cause, and fix. No drama.
9. Cap lists to 5 items.
10. No preamble, no recaps, no closers.

Exceptions: explain fully when asked to explain. Confirm before destructive actions. After three failed fixes, stop and name the doubtful assumption. If the request is ambiguous, ask one short question.
```
</details>


## How activation works

1. **Installed, not invoked.** In Claude Code, nothing happens until you invoke the skill explicitly: it honors `disable-model-invocation: true` in `SKILL.md`. Cursor's handling of that field was not verified here; Cursor may load the skill description at startup and activate the skill on its own.
2. **You invoke it explicitly.** Type `/tenho-tdah`. Rules stay on for that session. "parar modo tdah" or "modo normal" turns them off.
3. **You create the `~/.claude/.tenho-tdah-always` file** (Claude Code). A `SessionStart` hook loads the full ruleset from the first message, every session.
4. **You add the always-on snippet above** (Cursor). Keeps the core rules in persistent context.

In Claude Code, no middle ground: if you did not turn it on, it is off.

## Troubleshooting

**`/tenho-tdah` not in autocomplete.** Restart the agent. The plugin index is read at startup.

**Always-on flag has no effect.** Update the plugin (`claude plugin marketplace update tenho-tdah`, then `claude plugin update tenho-tdah@tenho-tdah`) and restart. Hooks are read at startup, and the flag needs the plugin version that ships `hooks/hooks.json`.

**`claude plugin marketplace add` fails.** Use the `owner/repo` form. A local path must point at the repo root, not `.claude-plugin/`.

**Installed but replies still preamble.** Open a new session. If it still drifts, tighten the wording in `skills/tenho-tdah/SKILL.md`.

**Want different rules.** Fork, edit `skills/tenho-tdah/SKILL.md`, then swap your copy in:

```bash
claude plugin uninstall tenho-tdah            # drop the upstream copy first:
claude plugin marketplace remove tenho-tdah   # fork and upstream share both names
claude plugin marketplace add <your-username>/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

Restart, then re-invoke `/tenho-tdah`.

**Skill missing after `npx skills add`.** Start a new agent chat. Skills are indexed at session start. Confirm the folder landed where your agent scans (`~/.cursor/skills/`) and that the frontmatter `name` matches the folder name.
