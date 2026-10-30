# Como instalar

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
<summary><strong>Cursor</strong></summary>

### Instalar

```bash
npx skills add marcelcorrea-stark/tenho-tdah                  # este workspace
npx skills add marcelcorrea-stark/tenho-tdah -g               # todos os projetos
npx skills add marcelcorrea-stark/tenho-tdah -a cursor -y     # só o Cursor
```

Abra um novo chat do Cursor e digite `/tenho-tdah`.

Sem a CLI, copie a pasta da skill para o caminho que o Cursor varre:

```bash
git clone https://github.com/marcelcorrea-stark/tenho-tdah
mkdir -p ~/.cursor/skills
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

Cole isto em **Settings → Rules → User Rules** do Cursor, ou em uma regra de projeto em `.cursor/rules/` com `alwaysApply: true`.

```markdown
## Estilo de resposta

O leitor tem TDAH. Molde toda resposta para que ele consiga agir sobre ela:

1. Comece pela resposta ou pela próxima ação: comando, caminho ou trecho de código primeiro.
2. Numere tarefas de vários passos; uma ação delimitada por passo.
3. Termine com uma próxima ação possível em menos de dois minutos.
4. Termine o problema atual antes de levantar outro.
5. Repita o progresso a cada turno ("passo 2 de 4 concluído").
6. Dê estimativas de tempo em faixas aproximadas e unidades concretas, nunca "um pouco". Sem base, diga "não sei estimar".
7. Depois de uma mudança, mostre o que passou a funcionar.
8. Erros: diga local, causa e correção; escopo só se verificado. Sem drama. Incerteza em uma linha: "Sei: X. Não sei: Y. Para saber: Z."
9. Limite listas a 5 itens.
10. Sem preâmbulo, sem recapitulação, sem fechos.

Exceções: entregue o conteúdo completo quando pedirem explicação, plano ou detalhe. Confirme antes de ações destrutivas. Após três correções que falharam, pare e nomeie a suposição duvidosa. Se o pedido for ambíguo, faça uma pergunta curta.
```
</details>


## Como a ativação funciona

1. **Instalada, não invocada.** No Claude Code, nada acontece até você invocar a skill explicitamente: ele respeita `disable-model-invocation: true` no `SKILL.md`. No Cursor, o comportamento desse campo não foi verificado aqui; o Cursor pode carregar a descrição da skill na inicialização e ativá-la por conta própria.
2. **Você a invoca explicitamente.** Digite `/tenho-tdah`. As regras permanecem ativas durante essa sessão. "parar modo tdah" ou "modo normal" as desativa.
3. **Você cria o arquivo `~/.claude/.tenho-tdah-always`** (Claude Code). Um hook `SessionStart` carrega todas as regras desde a primeira mensagem, em toda sessão.
4. **Você adiciona o snippet de sempre ativo acima** (Cursor). Mantém as regras principais no contexto persistente.

No Claude Code não há meio-termo: se você não ativou, está desativada.

## Solução de problemas

**`/tenho-tdah` não aparece no autocompletar.** Reinicie o agente. O índice de plugins é lido na inicialização.

**O arquivo de sinalização de sempre ativo não tem efeito.** Atualize o plugin (`claude plugin marketplace update tenho-tdah`, depois `claude plugin update tenho-tdah@tenho-tdah`) e reinicie. Os hooks são lidos na inicialização, e o arquivo de sinalização exige a versão do plugin que traz `hooks/hooks.json`.

**`claude plugin marketplace add` falha.** Use a forma `owner/repo`. Um caminho local deve apontar para a raiz do repositório, não para `.claude-plugin/`.

**Instalada, mas as respostas ainda têm preâmbulo.** Abra uma nova sessão. Se ainda desandar, reforce o texto em `skills/tenho-tdah/SKILL.md`.

**Quer regras diferentes.** Faça um fork, edite `skills/tenho-tdah/SKILL.md` e troque pela sua cópia:

```bash
claude plugin uninstall tenho-tdah            # remova a cópia do upstream primeiro:
claude plugin marketplace remove tenho-tdah   # fork e upstream compartilham os dois nomes
claude plugin marketplace add <seu-usuario>/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

Reinicie e invoque `/tenho-tdah` de novo.

**Skill ausente depois de `npx skills add`.** Abra um novo chat do agente. As skills são indexadas no início da sessão. Confirme que a pasta foi parar onde o seu agente varre (`~/.cursor/skills/`) e que o `name` do frontmatter é igual ao nome da pasta.
