# Loud Depression

> **Categoria:** Graduação & Jogos — Disciplina de Computação Gráfica (UFRRJ)  
> **Repositório:** [github.com/helcioDuarte/jogoCG](https://github.com/helcioDuarte/jogoCG)

**Loud Depression** é um jogo 3D de *survival horror*, exploração e resolução de puzzles ambientado no campus da UFRRJ, desenvolvido em grupo para a disciplina de Computação Gráfica.

---

## Stack Tecnológico

- **Engine:** Godot Engine 4 (GDScript)
- **Modelagem 3D:** Blender (Modelagem e animação de personagens e inimigos)
- **Level Design & Mapas:** TrenchBroom (Construção da geometria dos prédios e andares da universidade)
- **Técnicas de Computação Gráfica & Jogos:**
  - **Sistemas de Partículas:** Faíscas dinâmicas na colisão de armas com paredes e efeitos visuais de impacto ao atingir inimigos
  - **Iluminação, Neblina Volumétrica e Shaders:** Ambientação noturna imersiva e destaque visual (brilho) em itens coletáveis por proximidade
  - **Visualização de IA (Debug View):** Tela de depuração em tempo real acionada por tecla para inspecionar malhas de navegação (*pathfinding*) e estados dos inimigos
  - **Sistema de Inventário e Persistência:** Gerenciamento de armas e consumíveis empilháveis, além de pontos de salvamento (*save points*) distribuídos pelos andares

---

## Integrantes do Grupo

- Helcio Duarte Dantas
- Pedro Henrique Silva de Albuquerque
- Rafael França de Araujo
- Rafael Vieira da Silva

---

## História e Ambientação

O protagonista (**Else Duarte**) chega em seu primeiro dia de aula na universidade e, após aceitar uma substância misteriosa, apaga e acorda desnorteado à noite no gramado em frente ao letreiro da Rural. Uma neblina densa cobre o campus, os portões de saída estão trancados e barulhos aterrorizantes ecoam pelos prédios. Para escapar com vida, ele precisa explorar os andares do bloco, resolver puzzles, coletar armas e enfrentar as criaturas que dominaram a faculdade.

---

## Core Gameplay & Mecânicas

- **Exploração 3D e Movimentação:** Caminhada e corrida pelo campus (gramado, térreo, segundo e terceiro andares, auditório e bandejão).
- **Combate Corpo a Corpo (Melee) e à Distância:**
  - *Cano (Melee):* Dano baixo
  - *Faca (Melee):* Dano médio
  - *Revólver (Ranged):* Alcance médio e dano alto, com mira assistida
- **Inventário e Recursos:** Coleta de chaves para progressão de puzzles, munição e itens de cura empilháveis (kits médicos e ervas medicinais).
- **Feedback Visual de Vida:** O jogo não exibe barra de vida convencional na tela (HUD minimalista); o estado de saúde do protagonista é comunicado através de indicativos visuais na tela.
- **Progressão e Boss Fight:**
  - *Objetivo Principal:* Investigar os ruídos vindos do Bandejão, destrancar o acesso resolvendo o puzzle do Auditório e enfrentar o chefe (**Homem Urso Comilão**) após a cutscene.
  - *Save System:* Os banheiros de cada andar funcionam como pontos de salvamento (*checkpoints*).
