# インストール方法

<details>
<summary><strong>Antigravity (<code>agy</code>)</strong></summary>

### インストール

```bash
agy plugin install https://github.com/marcelcorrea-stark/tenho-tdah
```

### 確認

```bash
agy plugin list
```

### 更新

```bash
agy plugin uninstall tenho-tdah
agy plugin install https://github.com/marcelcorrea-stark/tenho-tdah
```

### アンインストール

```bash
agy plugin uninstall tenho-tdah
```

インストールしたまま無効化する場合：`agy plugin disable tenho-tdah`

### 常時有効（任意）

`~/.gemini/GEMINI.md` に追加：

```markdown
## 出力スタイル

読み手はADHDです。すぐ行動に移せるよう、すべての回答を以下のように構成してください：

1. 答えや次に取るべき行動から始める：コマンド、パス、コードスニペットを最優先で提示する。
2. 複数ステップの作業には番号を付ける（1ステップにつき明確な行動1つ）。
3. 2分以内に完了できる具体的な次の行動を1つ提示して終える。
4. 新しい論点を挙げる前に、現在の問題を解決して終わらせる。
5. ターンごとに進捗を明記する（例: 「5ステップ中3ステップ完了」）。
6. 所要時間は「少し」などの曖昧な表現を使わず、分単位などの具体的な数値で示す。
7. 変更後は、何が動作するようになったかを目に見える形で示す。
8. エラーは場所・原因・修正方法を淡々と伝える（大げさな表現は避ける）。
9. リストは最大5項目までに抑える。
10. 前置き、要約、締めの挨拶は入れない。

例外規定：解説を求められた場合は十分に説明する。破壊的な操作を行う前には必ず確認を取る。修正に3回失敗した場合は一度停止し、前提条件のどこに誤りがあるかを指摘する。指示が曖昧な場合は短い質問を1つだけ行う。
```

</details>

<details>
<summary><strong>Claude Code</strong></summary>

### インストール

```bash
claude plugin marketplace add marcelcorrea-stark/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

`/tenho-tdah` と入力します。

### 確認

```bash
claude plugin list
```

### 更新

```bash
claude plugin marketplace update tenho-tdah
claude plugin update tenho-tdah@tenho-tdah
```

### アンインストール

```bash
claude plugin uninstall tenho-tdah
claude plugin marketplace remove tenho-tdah
```

インストールしたまま無効化する場合：`claude plugin disable tenho-tdah`

### 常時有効（任意）

`SessionStart` フックが毎セッション開始時に完全なルールセットを読み込むため、`/tenho-tdah` の入力が不要になります：

```bash
touch ~/.claude/.tenho-tdah-always
```

カスタムの Claude 設定ディレクトリを使用している場合は、代わりにそこにフラグファイルを作成します：

```bash
touch "$CLAUDE_CONFIG_DIR/.tenho-tdah-always"
```

手動呼び出し（オンデマンド）に戻す場合：

```bash
rm ~/.claude/.tenho-tdah-always
```

フックはフラグファイルが存在する場合にのみ動作するため、プラグインをインストールしただけでは動作に影響しません。現在のセッションでのみ無効化したい場合は `parar modo tdah` と入力してください。

</details>


<details>
<summary><strong>Codex</strong></summary>

### インストール

```bash
codex plugin marketplace add marcelcorrea-stark/tenho-tdah --ref main
codex plugin add tenho-tdah@tenho-tdah
```

`$tenho-tdah` と明示的に入力してスキルを呼び出します。Codex が自動で有効化することはありません。

### 確認

```bash
codex plugin list
```

### 更新

```bash
codex plugin marketplace upgrade tenho-tdah
codex plugin remove tenho-tdah
codex plugin add tenho-tdah@tenho-tdah
```

### アンインストール

```bash
codex plugin remove tenho-tdah
codex plugin marketplace remove tenho-tdah
```

### 常時有効（任意）

`~/.codex/AGENTS.md` に追加：

```markdown
## 出力スタイル

読み手はADHDです。すぐ行動に移せるよう、すべての回答を以下のように構成してください：

1. 答えや次に取るべき行動から始める：コマンド、パス、コードスニペットを最優先で提示する。
2. 複数ステップの作業には番号を付ける（1ステップにつき明確な行動1つ）。
3. 2分以内に完了できる具体的な次の行動を1つ提示して終える。
4. 新しい論点を挙げる前に、現在の問題を解決して終わらせる。
5. ターンごとに進捗を明記する（例: 「5ステップ中3ステップ完了」）。
6. 所要時間は「少し」などの曖昧な表現を使わず、分単位などの具体的な数値で示す。
7. 変更後は、何が動作するようになったかを目に見える形で示す。
8. エラーは場所・原因・修正方法を淡々と伝える（大げさな表現は避ける）。
9. リストは最大5項目までに抑える。
10. 前置き、要約、締めの挨拶は入れない。

例外規定：解説を求められた場合は十分に説明する。破壊的な操作を行う前には必ず確認を取る。修正に3回失敗した場合は一度停止し、前提条件のどこに誤りがあるかを指摘する。指示が曖昧な場合は短い質問を1つだけ行う。
```

</details>

<details>
<summary><strong>Gemini CLI</strong></summary>

Gemini CLI にはプラグインマーケットプレイスがないため、公式には2つの導入方法があります。**カスタムコマンド**（オプトイン形式。呼び出すまでオフ）または **拡張機能**（インストール後は常時有効）です。このスキルの標準的な動作に合わせるなら、コマンド方式が適しています。全セッションで常にルールを適用したい場合以外は、コマンド方式を選んでください。

### インストール（コマンド方式、オプトイン）

```bash
mkdir -p ~/.gemini/commands
curl -fsSL https://raw.githubusercontent.com/marcelcorrea-stark/tenho-tdah/main/skills/tenho-tdah/agents/gemini.toml \
  -o ~/.gemini/commands/tenho-tdah.toml
```

新しいセッションを開始して `/tenho-tdah` と入力します。そのセッション中は有効な状態が続きます。

### インストール（拡張機能方式、常時有効）

```bash
gemini extensions install https://github.com/marcelcorrea-stark/tenho-tdah
```

拡張機能が `GEMINI.md` を読み込み、そこから完全なスキルがインポートされるため、最初のメッセージからルールが適用されます。`git` のインストールが必要です。

### 確認

```bash
gemini extensions list          # 拡張機能方式
ls ~/.gemini/commands           # コマンド方式: tenho-tdah.toml が存在することを確認
```

または、セッション内で `/` と入力し、一覧に `tenho-tdah` が表示されることを確認します。

### 更新

```bash
gemini extensions update tenho-tdah    # 拡張機能方式
# コマンド方式: 上記の curl コマンドを再実行
```

### アンインストール

```bash
gemini extensions uninstall tenho-tdah    # 拡張機能方式
rm ~/.gemini/commands/tenho-tdah.toml     # コマンド方式
```

</details>

<details>
<summary><strong>GitHub Copilot (VS Code および Copilot CLI)</strong></summary>

Copilot は Agent Skills をネイティブに読み込むため、変換不要でそのまま `SKILL.md` を利用できます。プロジェクト内では `.github/skills/`、`.claude/skills/`、`.agents/skills/` を、グローバル環境では `~/.copilot/skills/`、`~/.claude/skills/`、`~/.agents/skills/` をスキャンします。

### インストール

```bash
npx skills add marcelcorrea-stark/tenho-tdah -a github-copilot        # このプロジェクトのみ
npx skills add marcelcorrea-stark/tenho-tdah -a github-copilot -g     # 全プロジェクト共通
```

CLI を使わない場合は、Copilot がスキャンするいずれかのディレクトリにスキルフォルダーをコピーします：

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.copilot/skills
cp -R tenho-tdah/skills/tenho-tdah ~/.copilot/skills/
```

### 確認

チャット入力欄に `/` と入力し、`tenho-tdah` が表示されることを確認します。または：

```bash
npx skills list
npx skills ls -g    # グローバルにインストールした場合
```

### 更新

```bash
npx skills update tenho-tdah
```

または、`git pull` の後にフォルダーを再度コピーします。

### アンインストール

```bash
npx skills remove tenho-tdah
```

または、配置先の skills ディレクトリから `tenho-tdah` フォルダーを削除します。

### 有効化に関する注意

Copilot は設定項目の `disable-model-invocation` に従います。Claude Code と同様に、スキルを明示的に呼び出すまでルールは適用されません（[#60](https://github.com/ayghri/i-have-adhd/pull/60) で検証済み）。

### 常時有効（任意）

プロジェクト内の `.github/copilot-instructions.md` に以下のブロックを追加します（Copilot はすべてのチャット開始時にこれを読み込みます）：

```markdown
## 出力スタイル

読み手はADHDです。すぐ行動に移せるよう、すべての回答を以下のように構成してください：

1. 答えや次に取るべき行動から始める：コマンド、パス、コードスニペットを最優先で提示する。
2. 複数ステップの作業には番号を付ける（1ステップにつき明確な行動1つ）。
3. 2分以内に完了できる具体的な次の行動を1つ提示して終える。
4. 新しい論点を挙げる前に、現在の問題を解決して終わらせる。
5. ターンごとに進捗を明記する（例: 「5ステップ中3ステップ完了」）。
6. 所要時間は「少し」などの曖昧な表現を使わず、分単位などの具体的な数値で示す。
7. 変更後は、何が動作するようになったかを目に見える形で示す。
8. エラーは場所・原因・修正方法を淡々と伝える（大げさな表現は避ける）。
9. リストは最大5項目までに抑える。
10. 前置き、要約、締めの挨拶は入れない。

例外規定：解説を求められた場合は十分に説明する。破壊的な操作を行う前には必ず確認を取る。修正に3回失敗した場合は一度停止し、前提条件のどこに誤りがあるかを指摘する。指示が曖昧な場合は短い質問を1つだけ行う。
```

</details>

<details>
<summary><strong>Hermes</strong></summary>

### インストール

```bash
hermes skills install marcelcorrea-stark/tenho-tdah/skills/tenho-tdah
```

`/tenho-tdah` と入力します。スキルは `~/.hermes/skills/` にインストールされ、次回のセッション開始時からスラッシュコマンドとして利用可能になります。

先に内容を確認したい場合は、このリポジトリをスキルソース（「tap」）として追加してから検索・インストールすることもできます：

```bash
hermes skills tap add marcelcorrea-stark/tenho-tdah
hermes skills search tdah
hermes skills install marcelcorrea-stark/tenho-tdah/skills/tenho-tdah
```

### 確認

```bash
hermes skills list
```

### 更新

```bash
hermes skills update tenho-tdah
```

### アンインストール

```bash
hermes skills uninstall tenho-tdah
```

tap も削除する場合：`hermes skills tap remove marcelcorrea-stark/tenho-tdah`

### 常時有効（任意）

作業ディレクトリ内の `AGENTS.md`（Hermes が作業ディレクトリごとに読み込みます）、または全セッション共通のペルソナ設定 `SOUL.md` に追加：

```markdown
## 出力スタイル

読み手はADHDです。すぐ行動に移せるよう、すべての回答を以下のように構成してください：

1. 答えや次に取るべき行動から始める：コマンド、パス、コードスニペットを最優先で提示する。
2. 複数ステップの作業には番号を付ける（1ステップにつき明確な行動1つ）。
3. 2分以内に完了できる具体的な次の行動を1つ提示して終える。
4. 新しい論点を挙げる前に、現在の問題を解決して終わらせる。
5. ターンごとに進捗を明記する（例: 「5ステップ中3ステップ完了」）。
6. 所要時間は「少し」などの曖昧な表現を使わず、分単位などの具体的な数値で示す。
7. 変更後は、何が動作するようになったかを目に見える形で示す。
8. エラーは場所・原因・修正方法を淡々と伝える（大げさな表現は避ける）。
9. リストは最大5項目までに抑える。
10. 前置き、要約、締めの挨拶は入れない。

例外規定：解説を求められた場合は十分に説明する。破壊的な操作を行う前には必ず確認を取る。修正に3回失敗した場合は一度停止し、前提条件のどこに誤りがあるかを指摘する。指示が曖昧な場合は短い質問を1つだけ行う。
```

</details>

<details>
<summary><strong>Kimi Code CLI</strong></summary>

### インストール

Kimi Code のセッションを開始し、以下の手順を実行します：

1. `/plugins` を実行する。
2. **Custom** を選択する。
3. `https://github.com/marcelcorrea-stark/tenho-tdah` を貼り付けて `Enter` を押す。
4. **Trust and install** を選択する。

スラッシュコマンド `/skill:tenho-tdah` を使用することで、スキルを明示的に呼び出します。

### 更新

Kimi Code セッション内で `/plugins` を実行し、**Tenho TDAH** にカーソルを合わせて `R` を押します。

### アンインストール

Kimi Code セッション内で `/plugins` を実行し、**Tenho TDAH** にカーソルを合わせて `D` を押します。

</details>

<details>
<summary><strong>OpenCode</strong></summary>

プラグインは OpenCode V1 **1.18.29以降**と V2 に対応しています。スキルと `/tenho-tdah` コマンドを登録し、任意の常時有効モードを提供します。古い V1 はアップグレードするか、以前のスキルリリースのプラグインを使用してください。

### インストール

すべてのプロジェクトで使用する場合：

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah ~/.config/opencode/vendor/tenho-tdah
mkdir -p ~/.config/opencode/plugins
cat > ~/.config/opencode/plugins/tenho-tdah.js <<'EOF'
export { default } from '../vendor/tenho-tdah/.opencode/plugins/tenho-tdah.mjs';
EOF
```

既存の V1 インストールでは、`opencode.json` の `plugin` エントリーを保持してください。上記のローダーに切り替える場合は、そのエントリーを削除してください。

新しいセッションで `/tenho-tdah` と入力します。`parar modo tdah` または `modo normal` と入力するまでルールが維持されます。

#### スキルとコマンドのみ（常時有効なし）

別の方法として、チェックアウト先からスキルとコマンドをグローバルディレクトリにコピーできます：

```bash
mkdir -p ~/.config/opencode/skills/tenho-tdah ~/.config/opencode/commands
cp skills/tenho-tdah/SKILL.md ~/.config/opencode/skills/tenho-tdah/SKILL.md
cp .opencode/command/tenho-tdah.md ~/.config/opencode/commands/tenho-tdah.md
```

### 確認

OpenCode を起動し、`/` と入力して、コマンド一覧に `tenho-tdah` があることを確認します。

### 更新

```bash
git -C ~/.config/opencode/vendor/tenho-tdah pull
```

コピー方式では、チェックアウトを更新した後に2つのファイルを再度コピーしてください。

### アンインストール

`~/.config/opencode/plugins/tenho-tdah.js` を削除します。コピー方式では `~/.config/opencode/skills/tenho-tdah/` と `~/.config/opencode/commands/tenho-tdah.md` を削除します。既存の V1 設定方式では、該当する `plugin` エントリーを削除します。

### 常時有効（任意）

プラグインが必要です。フラグを作成すると、毎ターン完全なルールセットがシステムプロンプトに追加されます：

```bash
touch ~/.config/opencode/.tenho-tdah-always
```

`parar modo tdah` または `modo normal` は、現在のセッションで通常の出力に戻るようエージェントに指示します。自動注入を停止するにはフラグを削除してください：

```bash
rm ~/.config/opencode/.tenho-tdah-always
```

`XDG_CONFIG_HOME` を設定している場合は、これらのパスの `~/.config` をそのディレクトリに置き換えてください。

</details>


<details>
<summary><strong>Pi</strong></summary>

Pi はこのリポジトリをネイティブパッケージとして認識します。`extensions/` がセッション持続モードを提供し、`skills/` によって Agent Skills のエントリーポイントも引き続き利用できます。

### インストール

```bash
pi install https://github.com/marcelcorrea-stark/tenho-tdah
```

新しい Pi セッションを開始し、現在のセッションでADHDフレンドリー出力を切り替えます：

```text
/tenho-tdah
```

有効化中はフッターに `● TDAH ATIVO` と表示されます。もう一度コマンドを実行するとオフになります。明示的に指定することも可能です：

```text
/tenho-tdah on
/tenho-tdah off
parar modo tdah
```

Claude Code のフックと同様、拡張機能は毎リクエストでシステムプロンプトを書き換えるのではなく、会話コンテキストに一度だけルールセットを追加します（コンパクション等で消えた場合は再追加されます）。

既存の Agent Skills コマンドもエイリアスとして利用可能です：

```text
/skill:tenho-tdah
```

デフォルトで有効化した状態で新しい Pi セッションを開始する場合：

```bash
pi --tdah
```

### 確認

```bash
pi list
```

GitHub パッケージが一覧にあることを確認し、`/tenho-tdah` と入力してフッターに `● TDAH ATIVO` が表示されることを確認します。

### 更新

```bash
pi update https://github.com/marcelcorrea-stark/tenho-tdah
```

または、`pi update --extensions` で固定されていない全 Pi パッケージを一括更新します。

### アンインストール

```bash
pi remove https://github.com/marcelcorrea-stark/tenho-tdah
```

### 常時有効（任意）

Pi のエージェント設定ディレクトリにフラグファイルを作成：

```bash
touch ~/.pi/agent/.tenho-tdah-always
```

拡張機能は、セッションの新規作成・再開・フォーク・リロード時にこのフラグを確認します。現在のセッションで明示的に切り替えた設定が優先されるため、`parar modo tdah` を実行すればそのセッション内では無効化されたままになります。

オンデマンドに戻す場合：

```bash
rm ~/.pi/agent/.tenho-tdah-always
```

### 設定ファイル（任意）

Pi のエージェント設定ディレクトリに `~/.pi/agent/tenho-tdah.json` を作成します：

```json
{
  "alwaysOn": true,
  "hideStatus": true
}
```

- `alwaysOn`：すべてのセッションをルール有効の状態で開始します。従来の `.tenho-tdah-always` フラグファイルも引き続き使えます。
- `hideStatus`：ステータスバーの `● TDAH ATIVO` 表示を隠します。ルールと `/tenho-tdah` コマンドは引き続き機能します。

設定は拡張機能の起動時に一度だけ読み込まれるため、変更後は Pi を再起動してください。現在のセッションに保存された選択は `alwaysOn` より優先されるため、`parar modo tdah` を実行するとそのセッションでは無効のままになります。

`PI_CODING_AGENT_DIR` が設定されている場合は、そのディレクトリ内に `.tenho-tdah-always` を配置してください。フラグを変更した後は `/reload` を実行するか、新しいセッションを開始してください。

</details>


<details>
<summary><strong>Oh My Pi (OMP)</strong></summary>

### インストール

```bash
omp plugin marketplace add marcelcorrea-stark/tenho-tdah
omp plugin install --scope user tenho-tdah@tenho-tdah
```

新しい OMP セッションを開始し、`/tenho-tdah` を実行してモードを切り替えます。

### 更新

```bash
omp plugin marketplace update tenho-tdah
omp plugin upgrade --scope user tenho-tdah@tenho-tdah
```

### アンインストール

```bash
omp plugin uninstall --scope user tenho-tdah@tenho-tdah
omp plugin marketplace remove tenho-tdah
```

</details>


<details>
<summary><strong>Qwen Code</strong></summary>

### インストール

```bash
qwen extensions install marcelcorrea-stark/tenho-tdah
```

Qwen Code は GitHub の短縮記法に対応しており、このリポジトリをネイティブ拡張機能としてインストール可能です。拡張機能は `skills/` 配下のスキルを自動検出します。

スキルを明示的に呼び出すには `/tenho-tdah` と入力します。拡張機能をインストールしても、スキルを呼び出すまで出力の変化はありません。

### 確認

```bash
qwen extensions list
```

次に新しい Qwen Code セッションを開始し、以下を実行：

```text
/skills
```

一覧に `tenho-tdah` が表示されることを確認します。

### 更新

```bash
qwen extensions update tenho-tdah
```

### アンインストール

```bash
qwen extensions uninstall tenho-tdah
```

</details>

<details>
<summary><strong>Zed</strong></summary>

Zed の Agent は Agent Skills をネイティブに読み込むため、変換不要でそのまま `SKILL.md` を利用できます（Zed の以前の「Rules」は、Skills と `AGENTS.md` の指示に置き換えられました）。

### インストール

Agent Panel で Skills マネージャーを開き、**Create skill from URL**（コマンドパレットでは `agent: create skill from url`）を選択して、以下を貼り付けます：

```
https://github.com/marcelcorrea-stark/tenho-tdah/blob/main/skills/tenho-tdah/SKILL.md
```

全プロジェクト共通で使う場合は **User** スコープ、現在のプロジェクトのみなら **Project** スコープで保存します。その後、Agent Panel で `/tenho-tdah` と入力します。

ファイルシステムを直接使う場合は、リポジトリをクローンしてユーザースキルディレクトリにスキルフォルダーを配置：

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.agents/skills
cp -R tenho-tdah/skills/tenho-tdah ~/.agents/skills/
```

### 確認

Agent Panel で Skills マネージャーを開き、`tenho-tdah` が一覧にあることを確認します。または、`/` と入力して表示されることを確認します。

### 更新

同じ URL から再インポート（上書き）するか、`git pull` の後にフォルダーを再度コピーします。

### アンインストール

Skills マネージャーから `tenho-tdah` を削除するか、`~/.agents/skills/tenho-tdah` を削除します。

### 常時有効（任意）

個人用の `~/.config/zed/AGENTS.md` に追加：

```markdown
## 出力スタイル

読み手はADHDです。すぐ行動に移せるよう、すべての回答を以下のように構成してください：

1. 答えや次に取るべき行動から始める：コマンド、パス、コードスニペットを最優先で提示する。
2. 複数ステップの作業には番号を付ける（1ステップにつき明確な行動1つ）。
3. 2分以内に完了できる具体的な次の行動を1つ提示して終える。
4. 新しい論点を挙げる前に、現在の問題を解決して終わらせる。
5. ターンごとに進捗を明記する（例: 「5ステップ中3ステップ完了」）。
6. 所要時間は「少し」などの曖昧な表現を使わず、分単位などの具体的な数値で示す。
7. 変更後は、何が動作するようになったかを目に見える形で示す。
8. エラーは場所・原因・修正方法を淡々と伝える（大げさな表現は避ける）。
9. リストは最大5項目までに抑える。
10. 前置き、要約、締めの挨拶は入れない。

例外規定：解説を求められた場合は十分に説明する。破壊的な操作を行う前には必ず確認を取る。修正に3回失敗した場合は一度停止し、前提条件のどこに誤りがあるかを指摘する。指示が曖昧な場合は短い質問を1つだけ行う。
```

</details>

<details>
<summary><strong>Cursor、Amp、その他の agent-skills 対応環境</strong></summary>

agent-skills を読み込めるすべての環境で動作します。`-a <agent>` の部分を、使用するエージェント名に置き換えてください。

### インストール

```bash
npx skills add marcelcorrea-stark/tenho-tdah                  # このプロジェクトのみ
npx skills add marcelcorrea-stark/tenho-tdah -g               # 全プロジェクト共通
npx skills add marcelcorrea-stark/tenho-tdah -a cursor -y     # 特定のエージェントのみ
npx skills add marcelcorrea-stark/tenho-tdah -a opencode -y
```

新しいエージェントチャットで `/tenho-tdah` と入力します。

CLI を使わない場合は、エージェントがスキャンするパスにスキルフォルダーをコピー：

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.cursor/skills     # Cursorの場合。OpenCodeなら .agents/skills、その他は各固有パス
cp -R tenho-tdah/skills/tenho-tdah ~/.cursor/skills/
```

### 確認

```bash
npx skills list
npx skills ls -g    # グローバルにインストールした場合
```

### 更新

```bash
npx skills update tenho-tdah
npx skills update -g    # グローバルにインストールした場合
```

### アンインストール

```bash
npx skills remove tenho-tdah
npx skills remove tenho-tdah -g    # グローバルにインストールした場合
```

### 常時有効（任意）

エージェントの永続ルール設定ファイルに以下を貼り付けます。

Cursor の場合：**Settings → Rules → User Rules**、または `.cursor/rules/` 配下のプロジェクトルールで `alwaysApply: true` を設定。

OpenCode の場合：`~/.config/opencode/AGENTS.md`。

```markdown
## 出力スタイル

読み手はADHDです。すぐ行動に移せるよう、すべての回答を以下のように構成してください：

1. 答えや次に取るべき行動から始める：コマンド、パス、コードスニペットを最優先で提示する。
2. 複数ステップの作業には番号を付ける（1ステップにつき明確な行動1つ）。
3. 2分以内に完了できる具体的な次の行動を1つ提示して終える。
4. 新しい論点を挙げる前に、現在の問題を解決して終わらせる。
5. ターンごとに進捗を明記する（例: 「5ステップ中3ステップ完了」）。
6. 所要時間は「少し」などの曖昧な表現を使わず、分単位などの具体的な数値で示す。
7. 変更後は、何が動作するようになったかを目に見える形で示す。
8. エラーは場所・原因・修正方法を淡々と伝える（大げさな表現は避ける）。
9. リストは最大5項目までに抑える。
10. 前置き、要約、締めの挨拶は入れない。

例外規定：解説を求められた場合は十分に説明する。破壊的な操作を行う前には必ず確認を取る。修正に3回失敗した場合は一度停止し、前提条件のどこに誤りがあるかを指摘する。指示が曖昧な場合は短い質問を1つだけ行う。
```
</details>


## 有効化の仕組み

1. **インストール済み・未呼び出しの状態**：Claude Code、Qwen Code、Codex では、スキルを明示的に呼び出すまで何も起こりません。Claude Code と Qwen Code は `SKILL.md` 内の設定項目である `disable-model-invocation: true` に従い、Codex は `agents/openai.yaml` 内の `policy.allow_implicit_invocation: false` に従います。その他の環境では、起動時にすべてのスキルの説明文を読み込み、自動で有効化する場合があります。
2. **明示的に呼び出す**：Claude Code や Qwen Code では `/tenho-tdah`、Codex では `$tenho-tdah` と入力します。そのセッション中はルールが有効になります。`parar modo tdah` または `modo normal` でオフにできます。
3. **`~/.claude/.tenho-tdah-always` を作成する**（Claude Code）：`SessionStart` フックにより、すべてのセッションで最初のメッセージから完全なルールセットが読み込まれます。
4. **上記の常時有効スニペットを追加する**（その他の環境）：エージェントの永続コンテキスト内に中核ルールを保持します。

Claude Code、Qwen Code、Codex には中間状態がありません。有効化していなければオフのままです。

## トラブルシューティング

**`/tenho-tdah` が自動補完に表示されない →** エージェントを再起動してください。プラグインのインデックスは起動時に読み込まれます。

**常時有効フラグが効かない →** プラグインを更新（`claude plugin marketplace update tenho-tdah` の後に `claude plugin update tenho-tdah@tenho-tdah`）して再起動してください。フックは起動時に読み込まれるほか、フラグの認識には `hooks/hooks.json` が含まれるバージョンが必要です。

**`claude plugin marketplace add` が失敗する →** `owner/repo` 形式を使用してください。ローカルパスを指定する場合は `.claude-plugin/` ではなくリポジトリのルートを指す必要があります。

**インストールしたのに回答に前置きが入る →** 新しいセッションを開いてください。それでも指示から逸脱する場合は、`skills/tenho-tdah/SKILL.md` の文言をより厳格に調整してください。

**自分好みのルールに変更したい →** Fork して `skills/tenho-tdah/SKILL.md` を編集し、自分のコピーに差し替えます：

```bash
claude plugin uninstall tenho-tdah            # 先に本家のコピーを削除
claude plugin marketplace remove tenho-tdah   # Fork版と本家で名前が重複するため
claude plugin marketplace add <your-username>/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

再起動してから、`/tenho-tdah` をもう一度呼び出してください。

**`npx skills add` の後にスキルが見つからない →** 新しいエージェントチャットを開始してください。スキルはセッション開始時にインデックス化されます。フォルダーがエージェントのスキャン対象パス（Cursor なら `~/.cursor/skills/`、OpenCode なら `.agents/skills/`）に正しく配置されていること、および frontmatter の `name` がフォルダー名と一致していることを確認してください。
