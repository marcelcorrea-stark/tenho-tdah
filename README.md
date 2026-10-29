<p align="center">
  <img src="./logo.png" alt="tenho-tdah" width="140" />
</p>
<p align="center">
  <strong align="center">Respostas amigáveis para quem tem TDAH. Sem precisar de diagnóstico!</strong>
</p>
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/marcelcorrea-stark/tenho-tdah?style=flat" alt="Licença"></a>
</p>

<p align="center">
  <a href=".github/readme/README.en.md" title="English" aria-label="English">🇬🇧</a> ·
  <a href=".github/readme/README.zh-CN.md" title="简体中文" aria-label="简体中文">🇨🇳</a> ·
  <a href=".github/readme/README.es.md" title="Español" aria-label="Español">🇪🇸</a> ·
  <a href=".github/readme/README.id.md" title="Bahasa Indonesia" aria-label="Bahasa Indonesia">🇮🇩</a> ·
  <strong title="Português (Brasil)" aria-label="Português (Brasil)">🇧🇷</strong> ·
  <a href=".github/readme/README.ja.md" title="日本語" aria-label="日本語">🇯🇵</a> ·
  <a href=".github/readme/README.vi.md" title="Tiếng Việt" aria-label="Tiếng Việt">🇻🇳</a> ·
  <a href=".github/readme/README.ko.md" title="한국어" aria-label="한국어">🇰🇷</a> ·
  <a href=".github/readme/README.fa.md" title="فارسی" aria-label="فارسی">🇮🇷</a> ·
  <a href=".github/readme/README.th.md" title="ภาษาไทย" aria-label="ภาษาไทย">🇹🇭</a> ·
  <a href=".github/readme/README.ar.md" title="العربية" aria-label="العربية">🇸🇦</a> ·
  <a href=".github/readme/README.fr.md" title="Français" aria-label="Français">🇫🇷</a>
</p>


## Instalação

Copie e cole no prompt da sua CLI:

```text
Instale a skill/plugin tenho-tdah de https://github.com/marcelcorrea-stark/tenho-tdah, consulte o AGENTS.md do repositório para as instruções.
```

Ou 🔗 [consulte as instruções de instalação](INSTALL.md).

## O que ela faz

Uma skill para o seu assistente de código que impede que ele enterre a resposta. Ação primeiro. Passos numerados. Nada de "Espero ter ajudado!"

[Kacper Rutkiewicz | AI Made Simple](https://youtu.be/NEl8kPWZP_Y) (em inglês) fez uma boa análise de uma versão anterior da skill.

## O que muda


<table>
<tr>
<td width="50%">

## Antes

> Ótima pergunta! Deixa eu pensar sobre isso. Seu fluxo de autenticação tem algumas partes envolvidas: o middleware, a verificação do token e o tratamento do cookie. Olhando o `src/auth.ts`, a função `verifyToken` (por volta das linhas 42-58) parece estar usando uma API antiga do `jsonwebtoken`. Uma abordagem seria atualizar o pacote e reescrever essa função. Depois da mudança, você vai querer rodar os testes de autenticação para confirmar que nada quebrou. Aliás, talvez valha a pena revisar as versões das suas dependências no geral. Espero ter ajudado! Me avise se quiser se aprofundar.

</td>

<td width="50%">

## Depois

> Edite `src/auth.ts:42` para atualizar a validação do token.
>
> 1. Abra `src/auth.ts`
> 2. Substitua `verifyToken` (linhas 42–58) pelo trecho abaixo
> 3. Rode `npm test -- auth.spec.ts`
>
> Próximo passo: cole a primeira linha de falha se algum teste quebrar.

</td>
</tr>
</table>


## As regras

10 regras. Texto completo no [SKILL.md](./skills/tenho-tdah/SKILL.md).

1. Comece pela próxima ação.
2. Numere tarefas de vários passos.
3. Termine com um próximo passo concreto.
4. Corte as tangentes.
5. Repita o estado a cada turno.
6. Estimativas de tempo específicas (minutos, não "um pouco").
7. Deixe as conquistas visíveis.
8. Erros relatados de forma objetiva.
9. Limite listas a 5 itens.
10. Sem preâmbulo. Sem recapitulação. Sem frases de encerramento.

## Personalize

Faça um fork, edite `skills/tenho-tdah/SKILL.md` e troque pela sua cópia:

```bash
claude plugin uninstall tenho-tdah            # remova a cópia do upstream primeiro:
claude plugin marketplace remove tenho-tdah   # fork e upstream compartilham os dois nomes
claude plugin marketplace add <seu-usuario>/tenho-tdah
claude plugin install tenho-tdah@tenho-tdah
```

Reinicie o seu assistente de código e invoque `/tenho-tdah` de novo.

## Créditos

Baseado livremente em *The Adult ADHD Tool Kit*, de J. Russell Ramsay e Anthony L. Rostain. Adaptado para como um LLM deveria responder, não para como uma pessoa deveria organizar o dia.

Fork em pt-BR de [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd), de Ayoub G.

## Licença

[MIT](LICENSE).

Dê uma ⭐ se isso te poupou de rolar a tela por mais um "Ótima pergunta!"
