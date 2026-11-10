# Show do Milhão

> **Categoria:** Projeto Pessoal  
> **Repositório:** [github.com/ravsil/Show-do-Milhao-website](https://github.com/ravsil/Show-do-Milhao-website)  
> **Executar:** [▶ Jogar Show do Milhão no Navegador](#run:show-do-milhao.md)

Quiz web interativo inspirado no clássico programa de televisão brasileiro **Show do Milhão** (SBT). O jogador responde a 15 perguntas de conhecimentos gerais com dificuldade progressiva (*Fácil*, *Médio* e *Difícil*) com o objetivo de alcançar a pontuação máxima, contando com as ajudas clássicas do programa: **Cartas**, **Placas**, **Universitários** e **Pulos**.

---

## Stack Tecnológico

- **Linguagens:** JavaScript (ES6+), HTML5, CSS3
- **Bibliotecas:** jQuery
- **Lógica de Jogo:** Embaralhamento dinâmico de alternativas (Fisher-Yates shuffle), máquina de estados de dificuldade por faixas de perguntas e regra especial que proíbe ajudas na pergunta final
- **Persistência:** `localStorage` para armazenamento persistente dos recordes (*High Scores*) e pontuação mais recente
- **Arquitetura Original:** Servidor Node.js nativo (`http`, `fs`) com rotas de API para pontuações e catálogo de perguntas em JSON

---

## Funcionalidades Principais

- **15 Perguntas de Dificuldade Gradual:**
  - Perguntas 1 a 3: Nível Fácil (aquecimento)
  - Perguntas 4 a 10: Nível Médio
  - Perguntas 11 a 15: Nível Difícil (alta complexidade)
- **Ajudas do Jogo:**
  - **Pulos (Skip):** Permite pular até 3 perguntas durante a partida sem penalidade.
  - **Cartas:** Sistema interativo de escolha entre 4 cartas viradas que elimina 0, 1, 2 ou 3 alternativas incorretas com base na sorte.
  - **Placas:** Simulação da plateia levantando placas, indicando qual opção obteve mais votos.
  - **Universitários:** Consulta a opinião simulada de estudantes universitários.
  - **Regra da Pergunta do Milhão:** Ajudas são automaticamente bloqueadas na pergunta 15.
- **Tabela de Recordes (High Scores):**
  - Registro de nome e pontuação do jogador na tela de término (`end.html`).
  - Tela de placar geral ordenada por maior pontuação.
