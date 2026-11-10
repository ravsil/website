# A Lenda de Anura

> **Categoria:** Graduação & Jogos — Disciplina TN706 - Programação Estruturada (UFRRJ)  
> **Repositório:** [github.com/ravsil/jogoPE](https://github.com/ravsil/jogoPE)  
> **Executar:** [▶ Jogar A Lenda de Anura no Navegador](#run:jogoPE.md)

**A Lenda de Anura** é um jogo RPG desenvolvido inteiramente em **C** que roda diretamente no **terminal Linux**, utilizando a biblioteca `ncurses` para renderização gráfica baseada em caracteres (pixel art em terminal), diálogos com retratos de personagens, exploração de mapas, combate em turnos e sistema de salvamento.

---

## Stack Tecnológico

- **Linguagens:** C (Engine e lógica do jogo), Python (`imgToTerminal.py`)
- **Interface Gráfica em Terminal:** Biblioteca `ncurses` (`graphics.h`, `mainMenu.h`) com paleta customizada de 16 cores ANSI/Hex
- **Pipeline de Arte:** Script em Python (`imgToTerminal.py` com Pillow/PIL) desenvolvido para converter imagens e sprites 2D diretamente em matrizes de códigos de cores renderizáveis pelo motor em C
- **Arquitetura do Jogo:**
  - `game.c`: Loop principal, máquina de estados e transição de telas/cutscenes
  - `logic.h`: Movimentação pelo mapa, colisões, coleta de itens e progressão de fases
  - `combat.h`: Sistema de batalha, atributos, ataques e encontros com inimigos
  - `save.c`: Persistência de progresso em arquivos binários

---

## Como Jogar Adequadamente

Para que os gráficos e retratos de diálogo sejam exibidos na proporção correta na tela, a resolução de caracteres do terminal deve ser de pelo menos **672×112**.

Para obter a experiência visual planejada, configure a paleta de 16 cores do seu terminal com os seguintes valores hexadecimais:
- `#C5E09D` · `#FFFFFF` · `#000000` · `#875198`
- `#FEFF81` · `#2B8A5F` · `#4ABA63` · `#87CF79`
- `#226AA1` · `#419AC3` · `#C083FE` · `#EA4F4F`
- `#64754F` · `#C2BA6E` · `#BE294E` · `#EFDBA7`
