# Chess Bot

> **Categoria:** Projeto Pessoal  
> **Repositório:** [github.com/ravsil/chess-bot](https://github.com/ravsil/chess-bot)  
> **Executar:** [▶ Jogar Chess Bot no Navegador](#run:chess-bot.md)

**Chess Bot** é um motor de xadrez (*chess engine*) e servidor web desenvolvido do zero em **Go**, acompanhado de uma interface gráfica interativa para navegador. O projeto implementa toda a representação de estado do tabuleiro via **Bitboards de 64 bits**, geração completa de movimentos legais e uma inteligência artificial adversária baseada no algoritmo **Minimax com Poda Alfa-Beta**.

---

## Stack Tecnológico

- **Backend & Engine:** Go (Golang 1.22), Servidor HTTP nativo (`net/http`), Concorrência e Sincronização (`sync.RWMutex`)
- **Representação de Dados:** Bitboards (`uint64`) com máscaras de bits pré-calculadas para peças deslizantes (*sliders*: torres, bispos e rainhas) e ataques diretos
- **Inteligência Artificial:** Algoritmo **Minimax** com **Poda Alfa-Beta (*Alpha-Beta Pruning*)**, tabela de transposição/memoização concorrente e função de avaliação posicional/material
- **Frontend:** JavaScript (Vanilla ES6+), HTML5, CSS3 (Tabuleiro interativo com destaque de movimentos válidos e animações inspiradas no Chess.com)

---

## Arquitetura e Funcionalidades

### Motor de Xadrez (`game/`)
- **Bitboards (`board.go`, `pieces.go`, `sliders.go`):** Cada tipo e cor de peça é representado por um inteiro de 64 bits (`uint64`), onde cada bit corresponde a uma casa do tabuleiro. Operações bitwise permitem calcular ataques, bloqueios e movimentos em tempo constante.
- **Regras Completas Implementadas:**
  - Movimentação de todas as peças (`pawn.go`, `knight.go`, `bishop.go`, `rook.go`, `queen.go`, `king.go`)
  - Filtragem estrita de movimentos ilegais que deixariam o próprio rei em xeque
  - **Roque (*Castling*):** Roque curto e longo com verificação de casas atacadas e histórico de movimentação
  - **Captura *En Passant***
  - **Promoção de Peão**
- **Visualização em Terminal:** Além da interface web, o servidor imprime o estado atualizado do tabuleiro no console utilizando símbolos Unicode de xadrez (`♔ ♕ ♖ ♗ ♘ ♙`).

### Inteligência Artificial (`bot/gobot.go`)
- Busca em árvore de jogos utilizando **Minimax com Poda Alfa-Beta** para cortar ramos subótimos e aprofundar a análise de jogadas.
- Cache de estados avaliados protegido por `sync.RWMutex` para evitar recálculos de transposições.

### Servidor e Interface Web (`server.go`, `bot/routes.go`, `src/`)
- API REST JSON leve expondo os endpoints `/getBoard`, `/getMoves` e `/movePiece`.
- Interface gráfica responsiva no navegador que exibe indicadores visuais de casas válidas ao selecionar uma peça e executa a resposta do bot automaticamente após cada lance do jogador.

---

## Como Executar

```bash
git clone git@github.com:ravsil/chess-bot.git
cd chess-bot
go run server.go
```

Em seguida, abra `http://localhost:8080` no navegador para jogar contra o bot.
