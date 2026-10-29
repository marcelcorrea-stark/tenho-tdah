# Como instalar

<details>
<summary><strong>Antigravity (<code>agy</code>)</strong></summary>

### Instalar

```bash
agy plugin install https://github.com/marcelcorrea-stark/tenho-tdah
```

### Verificar

```bash
agy plugin list
```

### Atualizar

```bash
agy plugin uninstall tenho-tdah
agy plugin install https://github.com/marcelcorrea-stark/tenho-tdah
```

### Desinstalar

```bash
agy plugin uninstall tenho-tdah
```

Ou mantenha instalado e desative: `agy plugin disable tenho-tdah`.

### Sempre ativo (opcional)

Adicione ao `~/.gemini/GEMINI.md`:

```markdown
## Estilo de resposta

O leitor tem TDAH. Molde toda resposta para que ele consiga agir sobre ela:

1. Comece pela resposta ou pela próxima ação: comando, caminho ou trecho de código primeiro.
2. Numere tarefas de vários passos; uma ação delimitada por passo.
3. Termine com uma próxima ação possível em menos de dois minutos.
4. Termine o problema atual antes de levantar outro.
5. Repita o progresso a cada turno ("passo 3 de 5 concluído").
6. Dê estimativas de tempo em unidades concretas, nunca "um pouco".
7. Depois de uma mudança, mostre o que passou a funcionar.
8. Erros: diga local, causa e correção. Sem drama.
9. Limite listas a 5 itens.
10. Sem preâmbulo, sem recapitulação, sem fechos.

Exceções: explique por completo quando pedirem para explicar. Confirme antes de ações destrutivas. Após três correções que falharam, pare e nomeie a suposição duvidosa. Se o pedido for ambíguo, faça uma pergunta curta.
```

</details>

<details>
<summary><strong>AstronClaw (custom skill)</strong></summary>

O AstronClaw permite importar um arquivo Markdown como skill personalizada. Este caminho
usa o `SKILL.md` existente; consulte o [guia oficial de skills](https://github.com/iflytek/astronclaw-tutorial/blob/main/docs/guide/astronclaw/skills.md)
para os controles de upload e gerenciamento.

Este procedimento segue a documentação do AstronClaw, mas não foi testado com
esta skill. Confira as instruções exportadas antes de ativá-la.

### Instalar

1. Baixe o [SKILL.md canônico](https://raw.githubusercontent.com/marcelcorrea-stark/tenho-tdah/main/skills/tenho-tdah/SKILL.md) e salve como `SKILL.md`. Revise o conteúdo antes de enviar.
2. No AstronClaw, abra **我的技能 (My skills)**, escolha **新建 (New)** e envie esse arquivo `.md`.
3. Confirme que a skill importada se chama `tenho-tdah`. Use **启用/禁用 (Enable/Disable)** para controlar a disponibilidade.

Só o Markdown da skill é necessário. O envio manda esse arquivo para o AstronClaw;
os manifestos de plugin e os hooks do repositório não fazem parte desta configuração.

### Verificar e ativar

Confirme que `tenho-tdah` aparece em **My skills**. Use **下载 (Download)** para comparar
as instruções importadas com a skill original, depois ative-a e teste:

```text
Use a skill tenho-tdah nesta conversa. Explique como criar um repositório Git vazio em uma pasta nova.
```

Verifique se a resposta começa pela ação e numera as etapas. Esta é uma verificação
manual da skill importada; um upload bem-sucedido, por si só, não comprova que as
regras de resposta estão sendo aplicadas.

### Nota de ativação

O AstronClaw aceita tanto pedidos explícitos quanto invocação automática de skills.
O guia dele não especifica se `disable-model-invocation: true` é respeitado,
então use **Disable** quando não quiser a skill disponível. Não é preciso
depender de um comando `/tenho-tdah`.

A skill instrui o assistente a manter o estilo durante a conversa até
você dizer `parar modo tdah` ou `modo normal`. Essa instrução não altera o
interruptor da plataforma; desative a skill e comece uma nova conversa para ter
uma sessão limpa, sem ela.

### Atualizar

Baixe o `SKILL.md` canônico mais recente. Se você personalizou a cópia importada,
use **下载 (Download)** para guardar um backup antes. Para uma substituição limpa, apague
a entrada antiga `tenho-tdah`, repita a importação e rode o prompt de verificação
em uma nova conversa.

### Desinstalar

Em **My skills**, selecione `tenho-tdah` e escolha **删除 (Delete)**, depois comece uma
nova conversa. Para manter a cópia importada para depois, escolha **Disable**.

</details>

<details>
<summary><strong>Claude Code</strong></summary>

### Instalar

```bash
claude plugin marketplace add marcelcorrea-stark/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

Digite `/tenho-tdah`.

### Verificar

```bash
claude plugin list
```

### Atualizar

```bash
claude plugin marketplace update tenho-tdah
claude plugin update tenho-tdah@tenho-tdah
```

O primeiro comando atualiza a lista do marketplace. O segundo atualiza o plugin instalado. Reinicie o Claude Code para carregá-lo.

`claude plugin update` ignora um plugin cuja `version` não mudou. Se você mantém um fork, aumente a `version` em `.claude-plugin/plugin.json` depois de editar as regras.

### Desinstalar

```bash
claude plugin uninstall tenho-tdah
claude plugin marketplace remove tenho-tdah
```

Ou mantenha instalado e desative: `claude plugin disable tenho-tdah`.

### Sempre ativo (opcional)

Um hook `SessionStart` carrega todas as regras no início de cada sessão, sem precisar de `/tenho-tdah`:

```bash
touch ~/.claude/.tenho-tdah-always
```

Se você usa um diretório de configuração personalizado do Claude, crie o arquivo de sinalização nele:

```bash
touch "$CLAUDE_CONFIG_DIR/.tenho-tdah-always"
```

Para voltar ao modo sob demanda:

```bash
rm ~/.claude/.tenho-tdah-always
```

O hook só é executado quando o arquivo de sinalização existe, portanto instalar o plugin não muda nada por si só. "parar modo tdah" ainda o desativa na sessão atual.

</details>


<details>
<summary><strong>Codex</strong></summary>

### Instalar

```bash
codex plugin marketplace add marcelcorrea-stark/tenho-tdah --ref main
codex plugin add tenho-tdah@tenho-tdah
```

Invoque a skill explicitamente digitando `$tenho-tdah`. O Codex não a ativa
automaticamente.

### Verificar

```bash
codex plugin list
```

### Atualizar

```bash
codex plugin marketplace upgrade tenho-tdah
codex plugin remove tenho-tdah
codex plugin add tenho-tdah@tenho-tdah
```

### Desinstalar

```bash
codex plugin remove tenho-tdah
codex plugin marketplace remove tenho-tdah
```

### Sempre ativo (opcional)

Adicione ao `~/.codex/AGENTS.md`:

```markdown
## Estilo de resposta

O leitor tem TDAH. Molde toda resposta para que ele consiga agir sobre ela:

1. Comece pela resposta ou pela próxima ação: comando, caminho ou trecho de código primeiro.
2. Numere tarefas de vários passos; uma ação delimitada por passo.
3. Termine com uma próxima ação possível em menos de dois minutos.
4. Termine o problema atual antes de levantar outro.
5. Repita o progresso a cada turno ("passo 3 de 5 concluído").
6. Dê estimativas de tempo em unidades concretas, nunca "um pouco".
7. Depois de uma mudança, mostre o que passou a funcionar.
8. Erros: diga local, causa e correção. Sem drama.
9. Limite listas a 5 itens.
10. Sem preâmbulo, sem recapitulação, sem fechos.

Exceções: explique por completo quando pedirem para explicar. Confirme antes de ações destrutivas. Após três correções que falharam, pare e nomeie a suposição duvidosa. Se o pedido for ambíguo, faça uma pergunta curta.
```

</details>


<details>
<summary><strong>Grok (<code>grok</code>)</strong></summary>

O Grok carrega os arquivos de plugin e skill já existentes no repositório; não é preciso um manifesto separado para o Grok. Instale direto do GitHub, ative o plugin e invoque a skill. Dois passos exclusivos do Grok: `--trust` (hooks e skills ficam inativos sem ele) e `grok plugin enable` (plugins ficam desligados até serem ativados).

### Instalar

```bash
grok plugin install marcelcorrea-stark/tenho-tdah --trust
grok plugin enable tenho-tdah
```

Inicie uma nova sessão do Grok e digite `/tenho-tdah`. O Grok respeita `disable-model-invocation: true`, então nada se aplica até você invocar a skill ou ativar o modo sempre ativo.

### Verificar

```bash
grok plugin list
grok plugin details tenho-tdah
```

Confirme que `tenho-tdah` está listado, ativado e mostra uma skill mais hooks.

### Atualizar

```bash
grok plugin update tenho-tdah
```

### Desinstalar

```bash
grok plugin uninstall tenho-tdah --confirm
```

Ou mantenha instalado e desative: `grok plugin disable tenho-tdah`.

### Sempre ativo (opcional)

Adicione o bloco ao `~/.grok/AGENTS.md`, ou coloque em `~/.grok/rules/tenho-tdah.md` (o Grok carrega ambos no início da sessão):

```markdown
## Estilo de resposta

O leitor tem TDAH. Molde toda resposta para que ele consiga agir sobre ela:

1. Comece pela resposta ou pela próxima ação: comando, caminho ou trecho de código primeiro.
2. Numere tarefas de vários passos; uma ação delimitada por passo.
3. Termine com uma próxima ação possível em menos de dois minutos.
4. Termine o problema atual antes de levantar outro.
5. Repita o progresso a cada turno ("passo 3 de 5 concluído").
6. Dê estimativas de tempo em unidades concretas, nunca "um pouco".
7. Depois de uma mudança, mostre o que passou a funcionar.
8. Erros: diga local, causa e correção. Sem drama.
9. Limite listas a 5 itens.
10. Sem preâmbulo, sem recapitulação, sem fechos.

Exceções: explique por completo quando pedirem para explicar. Confirme antes de ações destrutivas. Após três correções que falharam, pare e nomeie a suposição duvidosa. Se o pedido for ambíguo, faça uma pergunta curta.
```

</details>

<details>
<summary><strong>Gemini CLI</strong></summary>

O Gemini CLI não tem marketplace de plugins, então há dois caminhos nativos: um **comando personalizado** (opt-in, desligado até você invocar) ou uma **extensão** (sempre ativa depois de instalada). O caminho do comando combina com a postura padrão desta skill; escolha-o, a menos que queira as regras em toda sessão.

### Instalar (comando, opt-in)

```bash
mkdir -p ~/.gemini/commands
curl -fsSL https://raw.githubusercontent.com/marcelcorrea-stark/tenho-tdah/main/skills/tenho-tdah/agents/gemini.toml \
  -o ~/.gemini/commands/tenho-tdah.toml
```

Inicie uma nova sessão e digite `/tenho-tdah`. Ele fica ativo durante essa sessão.

### Instalar (extensão, sempre ativa)

```bash
gemini extensions install https://github.com/marcelcorrea-stark/tenho-tdah
```

A extensão carrega o `GEMINI.md`, que importa a skill completa, então as regras valem desde a primeira mensagem. O `git` precisa estar instalado.

### Verificar

```bash
gemini extensions list          # extension route
ls ~/.gemini/commands           # command route: tenho-tdah.toml present
```

Ou digite `/` em uma sessão e confirme que `tenho-tdah` aparece na lista.

### Atualizar

```bash
gemini extensions update tenho-tdah    # extension route
# command route: re-run the curl above
```

### Desinstalar

```bash
gemini extensions uninstall tenho-tdah    # extension route
rm ~/.gemini/commands/tenho-tdah.toml     # command route
```

</details>

<details>
<summary><strong>GitHub Copilot (VS Code and Copilot CLI)</strong></summary>

O Copilot lê Agent Skills nativamente: o mesmo `SKILL.md`, sem conversão. Ele varre `.github/skills/`, `.claude/skills/` e `.agents/skills/` no projeto, e `~/.copilot/skills/`, `~/.claude/skills/` e `~/.agents/skills/` globalmente.

### Instalar

```bash
npx skills add marcelcorrea-stark/tenho-tdah -a github-copilot        # este projeto
npx skills add marcelcorrea-stark/tenho-tdah -a github-copilot -g     # todos os projetos
```

Sem a CLI, copie a pasta da skill para qualquer diretório que o Copilot varre:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.copilot/skills
cp -R tenho-tdah/skills/tenho-tdah ~/.copilot/skills/
```

### Verificar

Digite `/` no campo de chat e confirme que `tenho-tdah` aparece. Ou:

```bash
npx skills list
npx skills ls -g    # if installed globally
```

### Atualizar

```bash
npx skills update tenho-tdah
```

Ou copie a pasta de novo após um `git pull`.

### Desinstalar

```bash
npx skills remove tenho-tdah
```

Ou apague a pasta `tenho-tdah` do diretório de skills onde ela foi parar.

### Nota de ativação

O Copilot respeita `disable-model-invocation`: nada se aplica até você invocar a skill, igual ao Claude Code (testado em [#60](https://github.com/ayghri/i-have-adhd/pull/60)).

### Sempre ativo (opcional)

Adicione o bloco abaixo ao `.github/copilot-instructions.md` do projeto (o Copilot o lê em todo chat):

```markdown
## Estilo de resposta

O leitor tem TDAH. Molde toda resposta para que ele consiga agir sobre ela:

1. Comece pela resposta ou pela próxima ação: comando, caminho ou trecho de código primeiro.
2. Numere tarefas de vários passos; uma ação delimitada por passo.
3. Termine com uma próxima ação possível em menos de dois minutos.
4. Termine o problema atual antes de levantar outro.
5. Repita o progresso a cada turno ("passo 3 de 5 concluído").
6. Dê estimativas de tempo em unidades concretas, nunca "um pouco".
7. Depois de uma mudança, mostre o que passou a funcionar.
8. Erros: diga local, causa e correção. Sem drama.
9. Limite listas a 5 itens.
10. Sem preâmbulo, sem recapitulação, sem fechos.

Exceções: explique por completo quando pedirem para explicar. Confirme antes de ações destrutivas. Após três correções que falharam, pare e nomeie a suposição duvidosa. Se o pedido for ambíguo, faça uma pergunta curta.
```

</details>


<details>
<summary><strong>Hermes</strong></summary>

### Instalar

```bash
hermes skills install marcelcorrea-stark/tenho-tdah/skills/tenho-tdah
```

Digite `/tenho-tdah`. A skill é instalada em `~/.hermes/skills/` e exposta como slash command no próximo início de sessão.

Prefere explorar antes? Adicione este repositório como fonte de skills (um "tap"), depois busque e instale:

```bash
hermes skills tap add marcelcorrea-stark/tenho-tdah
hermes skills search tdah
hermes skills install marcelcorrea-stark/tenho-tdah/skills/tenho-tdah
```

### Verificar

```bash
hermes skills list
```

### Atualizar

```bash
hermes skills update tenho-tdah
```

### Desinstalar

```bash
hermes skills uninstall tenho-tdah
```

Ou remova também o tap: `hermes skills tap remove marcelcorrea-stark/tenho-tdah`.

### Sempre ativo (opcional)

Adicione ao `AGENTS.md` do seu diretório de trabalho (o Hermes o carrega por diretório), ou ao `SOUL.md` da sua persona para todas as sessões:

```markdown
## Estilo de resposta

O leitor tem TDAH. Molde toda resposta para que ele consiga agir sobre ela:

1. Comece pela resposta ou pela próxima ação: comando, caminho ou trecho de código primeiro.
2. Numere tarefas de vários passos; uma ação delimitada por passo.
3. Termine com uma próxima ação possível em menos de dois minutos.
4. Termine o problema atual antes de levantar outro.
5. Repita o progresso a cada turno ("passo 3 de 5 concluído").
6. Dê estimativas de tempo em unidades concretas, nunca "um pouco".
7. Depois de uma mudança, mostre o que passou a funcionar.
8. Erros: diga local, causa e correção. Sem drama.
9. Limite listas a 5 itens.
10. Sem preâmbulo, sem recapitulação, sem fechos.

Exceções: explique por completo quando pedirem para explicar. Confirme antes de ações destrutivas. Após três correções que falharam, pare e nomeie a suposição duvidosa. Se o pedido for ambíguo, faça uma pergunta curta.
```

</details>

<details>
<summary><strong>Kimi Code CLI</strong></summary>

### Instalar

Inicie uma sessão do Kimi Code e então:

1. Execute `/plugins`.
2. Escolha **Custom**.
3. Cole `https://github.com/marcelcorrea-stark/tenho-tdah` e pressione `Enter`.
4. Escolha **Trust and install**.

Use o slash command `/skill:tenho-tdah` para invocar a skill explicitamente.

### Atualizar

Use `/plugins` em uma sessão do Kimi Code, mova o cursor até **Tenho TDAH** e pressione `R`.

### Desinstalar

Use `/plugins` em uma sessão do Kimi Code, mova o cursor até **Tenho TDAH** e pressione `D`.


</details>

<details>
<summary><strong>OpenCode</strong></summary>

O plugin suporta o OpenCode V1 **1.18.29+** e o V2. Ele registra a skill e o comando `/tenho-tdah`, e adiciona o modo sempre ativo opcional. Versões V1 mais antigas precisam de upgrade ou do plugin da versão anterior da skill.

### Instalar

Para uso em todos os projetos:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah ~/.config/opencode/vendor/tenho-tdah
mkdir -p ~/.config/opencode/plugins
cat > ~/.config/opencode/plugins/tenho-tdah.js <<'EOF'
export { default } from '../vendor/tenho-tdah/.opencode/plugins/tenho-tdah.mjs';
EOF
```

Em uma instalação V1 existente, mantenha a entrada `plugin` no `opencode.json`. Se migrar para o loader acima, remova essa entrada.

Inicie uma nova sessão e digite `/tenho-tdah`. As regras valem até você dizer `parar modo tdah` ou `modo normal`.

#### Só skill e comando (sem sempre ativo)

Como alternativa, a partir de um checkout, copie a skill e o comando para os diretórios globais do OpenCode:

```bash
mkdir -p ~/.config/opencode/skills/tenho-tdah ~/.config/opencode/commands
cp skills/tenho-tdah/SKILL.md ~/.config/opencode/skills/tenho-tdah/SKILL.md
cp .opencode/command/tenho-tdah.md ~/.config/opencode/commands/tenho-tdah.md
```

### Verificar

Abra o OpenCode, digite `/` e confirme que `tenho-tdah` aparece na lista de comandos.

### Atualizar

```bash
git -C ~/.config/opencode/vendor/tenho-tdah pull
```

Na instalação por cópia, faça pull no seu checkout e copie os dois arquivos de novo.

### Desinstalar

Remova `~/.config/opencode/plugins/tenho-tdah.js`. Na instalação por cópia, remova `~/.config/opencode/skills/tenho-tdah/` e `~/.config/opencode/commands/tenho-tdah.md`. Em uma instalação V1 existente baseada em configuração, remova a entrada `plugin`.

### Sempre ativo (opcional)

Requer o plugin. O arquivo de sinalização adiciona o conjunto completo de regras ao prompt de sistema a cada turno:

```bash
touch ~/.config/opencode/.tenho-tdah-always
```

`parar modo tdah` ou `modo normal` pede ao agente que volte ao estilo normal na sessão atual. Apague o arquivo de sinalização para parar a injeção automática:

```bash
rm ~/.config/opencode/.tenho-tdah-always
```

Se `XDG_CONFIG_HOME` estiver definido, substitua `~/.config` nesses caminhos por esse diretório.

</details>

<details>
<summary><strong>Pi</strong></summary>

O Pi descobre este repositório como um pacote nativo: `extensions/` fornece o modo persistente por sessão e `skills/` mantém disponível o ponto de entrada de Agent Skills.

### Instalar

```bash
pi install https://github.com/marcelcorrea-stark/tenho-tdah
```

Inicie uma nova sessão do Pi. Alterne a saída amigável para TDAH na sessão atual:

```text
/tenho-tdah
```

O rodapé mostra `● TDAH ATIVO` enquanto o modo está ativo. Execute o comando de novo para desligar, ou seja explícito:

```text
/tenho-tdah on
/tenho-tdah off
parar modo tdah
```

Como o hook do Claude Code, a extensão adiciona as regras à conversa uma única vez, em vez de reescrever o prompt de sistema a cada requisição, e as adiciona de novo depois que a compactação as remove.

O comando existente de Agent Skills continua disponível como alias:

```text
/skill:tenho-tdah
```

Inicie uma nova sessão do Pi com o modo ativado por padrão:

```bash
pi --tdah
```

### Verificar

```bash
pi list
```

Confirme que o pacote do GitHub está listado, depois digite `/tenho-tdah` e verifique se `● TDAH ATIVO` aparece no rodapé.

### Atualizar

```bash
pi update https://github.com/marcelcorrea-stark/tenho-tdah
```

Ou atualize todos os pacotes do Pi não fixados com `pi update --extensions`.

### Desinstalar

```bash
pi remove https://github.com/marcelcorrea-stark/tenho-tdah
```

### Sempre ativo (opcional)

Crie um arquivo de sinalização no diretório de configuração do agente do Pi:

```bash
touch ~/.pi/agent/.tenho-tdah-always
```

A extensão verifica o arquivo a cada sessão nova, retomada, bifurcada ou recarregada. Uma escolha salva para a sessão atual prevalece sobre esse padrão, então `parar modo tdah` mantém essa sessão desativada.

Para voltar ao modo sob demanda:

```bash
rm ~/.pi/agent/.tenho-tdah-always
```

### Arquivo de configuração (opcional)

Crie `~/.pi/agent/tenho-tdah.json` no diretório de configuração do agente do Pi:

```json
{
  "alwaysOn": true,
  "hideStatus": true
}
```

- `alwaysOn`: inicia toda sessão com as regras ativas, igual ao arquivo de sinalização `.tenho-tdah-always`, que continua funcionando
- `hideStatus`: mantém oculta a entrada `● TDAH ATIVO` da barra de status; as regras e o comando `/tenho-tdah` continuam funcionando

Lido uma vez na inicialização da extensão, então reinicie o Pi depois de alterá-lo. Uma escolha salva para a sessão atual prevalece sobre `alwaysOn`, então `parar modo tdah` mantém essa sessão desativada.

Se `PI_CODING_AGENT_DIR` estiver definido, coloque o `.tenho-tdah-always` nesse diretório. Execute `/reload` ou inicie uma nova sessão depois de alterar o arquivo de sinalização.

</details>


<details>
<summary><strong>Oh My Pi (OMP)</strong></summary>

### Instalar

```bash
omp plugin marketplace add marcelcorrea-stark/tenho-tdah
omp plugin install --scope user tenho-tdah@tenho-tdah
```

Inicie uma nova sessão do OMP e execute `/tenho-tdah` para alternar o modo.

### Atualizar

```bash
omp plugin marketplace update tenho-tdah
omp plugin upgrade --scope user tenho-tdah@tenho-tdah
```

### Desinstalar

```bash
omp plugin uninstall --scope user tenho-tdah@tenho-tdah
omp plugin marketplace remove tenho-tdah
```

</details>


<details>
<summary><strong>Qwen Code</strong></summary>

### Instalar

```bash
qwen extensions install marcelcorrea-stark/tenho-tdah
```

O Qwen Code aceita o atalho do GitHub e instala o repositório como uma
extensão nativa. A extensão descobre a skill em `skills/`.

Digite `/tenho-tdah` para invocar a skill explicitamente. Instalar a extensão
não muda a saída até a skill ser invocada.

### Verificar

```bash
qwen extensions list
```

Depois inicie uma nova sessão do Qwen Code e execute:

```text
/skills
```

Confirme que `tenho-tdah` aparece na lista.

### Atualizar

```bash
qwen extensions update tenho-tdah
```

### Desinstalar

```bash
qwen extensions uninstall tenho-tdah
```

</details>

<details>
<summary><strong>Zed</strong></summary>

O Agent do Zed lê Agent Skills nativamente, usando o mesmo formato SKILL.md, sem conversão. Note que as antigas "Rules" do Zed foram substituídas por Skills, junto com as instruções do AGENTS.md.

### Instalar

No Agent Panel, abra o gerenciador de Skills e escolha **Create skill from URL** (também disponível na command palette como `agent: create skill from url`), depois cole:

```
https://github.com/marcelcorrea-stark/tenho-tdah/blob/main/skills/tenho-tdah/SKILL.md
```

Salve no escopo **User** para todos os projetos, ou no escopo **Project** para um só. Depois digite `/tenho-tdah` no Agent Panel.

Prefere o sistema de arquivos? Clone o repositório e coloque a pasta da skill no seu diretório de skills de usuário:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.agents/skills
cp -R tenho-tdah/skills/tenho-tdah ~/.agents/skills/
```

### Verificar

Abra o gerenciador de Skills no Agent Panel e confirme que `tenho-tdah` está listado. Ou digite `/` e confirme que ele aparece.

### Atualizar

Importe de novo a partir da mesma URL (sobrescreve), ou copie a pasta de novo após um `git pull`.

### Desinstalar

Remova `tenho-tdah` do gerenciador de Skills, ou apague `~/.agents/skills/tenho-tdah`.

### Sempre ativo (opcional)

Adicione ao seu `~/.config/zed/AGENTS.md` pessoal:

```markdown
## Estilo de resposta

O leitor tem TDAH. Molde toda resposta para que ele consiga agir sobre ela:

1. Comece pela resposta ou pela próxima ação: comando, caminho ou trecho de código primeiro.
2. Numere tarefas de vários passos; uma ação delimitada por passo.
3. Termine com uma próxima ação possível em menos de dois minutos.
4. Termine o problema atual antes de levantar outro.
5. Repita o progresso a cada turno ("passo 3 de 5 concluído").
6. Dê estimativas de tempo em unidades concretas, nunca "um pouco".
7. Depois de uma mudança, mostre o que passou a funcionar.
8. Erros: diga local, causa e correção. Sem drama.
9. Limite listas a 5 itens.
10. Sem preâmbulo, sem recapitulação, sem fechos.

Exceções: explique por completo quando pedirem para explicar. Confirme antes de ações destrutivas. Após três correções que falharam, pare e nomeie a suposição duvidosa. Se o pedido for ambíguo, faça uma pergunta curta.
```

</details>

<details>
<summary><strong>Cursor, Amp, and any other agent-skills harness</strong></summary>

Funciona com qualquer harness que leia agent skills. Troque `-a <agent>` pelo seu.

### Instalar

```bash
npx skills add marcelcorrea-stark/tenho-tdah                  # este workspace
npx skills add marcelcorrea-stark/tenho-tdah -g               # todos os projetos
npx skills add marcelcorrea-stark/tenho-tdah -a cursor -y     # só um agente
npx skills add marcelcorrea-stark/tenho-tdah -a opencode -y
```

Abra um novo chat do agente e digite `/tenho-tdah`.

Sem a CLI, copie a pasta da skill para o caminho que o seu agente varre:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.cursor/skills     # Cursor. Use .agents/skills para o OpenCode, ou o caminho do seu agente
cp -R tenho-tdah/skills/tenho-tdah ~/.cursor/skills/
```

### Verificar

```bash
npx skills list
npx skills ls -g    # if installed globally
```

### Atualizar

```bash
npx skills update tenho-tdah
npx skills update -g    # if installed globally
```

### Desinstalar

```bash
npx skills remove tenho-tdah
npx skills remove tenho-tdah -g    # if installed globally
```

### Sempre ativo (opcional)

Cole isto no arquivo de regras persistentes do seu agente. Cursor: **Settings → Rules → User Rules**, ou uma regra de projeto em `.cursor/rules/` com `alwaysApply: true`. OpenCode: `~/.config/opencode/AGENTS.md`.

```markdown
## Estilo de resposta

O leitor tem TDAH. Molde toda resposta para que ele consiga agir sobre ela:

1. Comece pela resposta ou pela próxima ação: comando, caminho ou trecho de código primeiro.
2. Numere tarefas de vários passos; uma ação delimitada por passo.
3. Termine com uma próxima ação possível em menos de dois minutos.
4. Termine o problema atual antes de levantar outro.
5. Repita o progresso a cada turno ("passo 3 de 5 concluído").
6. Dê estimativas de tempo em unidades concretas, nunca "um pouco".
7. Depois de uma mudança, mostre o que passou a funcionar.
8. Erros: diga local, causa e correção. Sem drama.
9. Limite listas a 5 itens.
10. Sem preâmbulo, sem recapitulação, sem fechos.

Exceções: explique por completo quando pedirem para explicar. Confirme antes de ações destrutivas. Após três correções que falharam, pare e nomeie a suposição duvidosa. Se o pedido for ambíguo, faça uma pergunta curta.
```
</details>


## Como a ativação funciona

1. **Instalada, não invocada.** No Claude Code, Qwen Code, Codex e Grok, nada acontece até você invocar a skill explicitamente. Claude Code, Qwen Code e Grok respeitam `disable-model-invocation: true` no `SKILL.md`; o Codex respeita `policy.allow_implicit_invocation: false` em `agents/openai.yaml`. Outros harnesses podem carregar a descrição de todas as skills na inicialização e ativar a skill por conta própria.
2. **Você a invoca explicitamente.** Digite `/tenho-tdah` no Claude Code, Qwen Code ou Grok, ou `$tenho-tdah` no Codex. As regras permanecem ativas durante essa sessão. "parar modo tdah" ou "modo normal" as desativa.
3. **Você cria o arquivo `~/.claude/.tenho-tdah-always`** (Claude Code). Um hook `SessionStart` carrega todas as regras desde a primeira mensagem, em toda sessão.
4. **Você adiciona o snippet de sempre ativo acima** (Grok, Codex e outros harnesses). O Grok lê `~/.grok/AGENTS.md` e `~/.grok/rules/*.md`. Mantém as regras principais no contexto persistente do seu agente.

No Claude Code, Qwen Code, Codex e Grok não há meio-termo: se você não ativou, está desativada.

## Solução de problemas

**`/tenho-tdah` não aparece no autocompletar.** Reinicie o agente. O índice de plugins é lido na inicialização. No Grok, execute também `grok plugin enable tenho-tdah` e confirme que a instalação usou `--trust`.

**O arquivo de sinalização de sempre ativo não tem efeito.** Atualize o plugin (`claude plugin marketplace update tenho-tdah`, depois `claude plugin update tenho-tdah@tenho-tdah`) e reinicie. Os hooks são lidos na inicialização, e o arquivo de sinalização exige a versão do plugin que traz `hooks/hooks.json`. O Grok não lê `~/.claude/.tenho-tdah-always`; coloque o bloco de sempre ativo em `~/.grok/AGENTS.md` ou `~/.grok/rules/tenho-tdah.md`.

**`claude plugin marketplace add` falha.** Use a forma `owner/repo`. Um caminho local deve apontar para a raiz do repositório, não para `.claude-plugin/`.

**`grok plugin install` não mostra nada.** Adicione `--trust`, depois execute `grok plugin enable tenho-tdah` e inicie uma nova sessão. Os plugins do Grok ficam desligados e sem confiança até esses dois passos.

**Instalada, mas as respostas ainda têm preâmbulo.** Abra uma nova sessão. Se ainda desandar, reforce o texto em `skills/tenho-tdah/SKILL.md`.

**Quer regras diferentes.** Faça um fork, edite `skills/tenho-tdah/SKILL.md` e troque pela sua cópia:

```bash
claude plugin uninstall tenho-tdah            # remova a cópia do upstream primeiro:
claude plugin marketplace remove tenho-tdah   # fork e upstream compartilham os dois nomes
claude plugin marketplace add <seu-usuario>/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

Reinicie e invoque `/tenho-tdah` de novo.

**Skill ausente depois de `npx skills add`.** Abra um novo chat do agente. As skills são indexadas no início da sessão. Confirme que a pasta foi parar onde o seu agente varre (`~/.cursor/skills/` para o Cursor, `.agents/skills/` para o OpenCode) e que o `name` do frontmatter é igual ao nome da pasta.
