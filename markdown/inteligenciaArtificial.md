# Inteligência Artificial — Busca Cega e Busca Heurística no 8-Puzzle

> **Categoria:** Graduação — Disciplina TN724 - Inteligência Artificial (UFRRJ)  
> **Repositório:** [github.com/ravsil/inteligenciaArtificial](https://github.com/ravsil/inteligenciaArtificial)

Implementação e análise comparativa de **cinco algoritmos clássicos de busca em espaço de estados** (três buscas cegas/sem informação e duas buscas informadas/heurísticas) aplicados ao problema combinatório do **8-Puzzle** ($9! / 2 = 181.440$ estados alcançáveis), desenvolvidos na disciplina de **Inteligência Artificial** na UFRRJ.

---

## Stack Tecnológico

- **Linguagem:** Python 3
- **Ferramentas & Bibliotecas:** Jupyter Notebook (`puzzle.ipynb`), Matplotlib (gráficos comparativos em escala logarítmica), `psutil` (monitoramento de alocação real de memória RSS do processo), `collections.deque` (fila FIFO de complexidade $O(1)$), `heapq` (fila de prioridade *min-heap*)

---

## Modelagem do Espaço de Estados e Otimizações de Memória

Um dos focos centrais da implementação (`utils.py` em ambas as branches) foi reduzir o *overhead* de memória do interpretador Python ao armazenar dezenas de milhares de estados simultaneamente na fronteira e no dicionário de visitados:

1. **Codificação Compacta de Estado como Inteiro (`tuple_to_int` / `int_to_tuple`):**
   - Em vez de armazenar tuplas de 9 elementos `(1, 2, 3, 4, 5, 6, 7, 8, 0)` ou listas bidimensionais nas estruturas de busca, o espaço vazio `0` é mapeado para o dígito `9` (`0` $\to$ `9`) — evitando a perda de zeros à esquerda quando o espaço vazio ocupa a posição inicial `(0, ...)` — e o tabuleiro é compactado em um único inteiro de 9 dígitos (ex.: estado objetivo `(1, 2, 3, 4, 5, 6, 7, 8, 0)` $\equiv$ `123456789`).
2. **Dicionário Único de Predecessores (`visited_states: dict[int, int]`):**
   - O controle de estados já explorados e a árvore de busca são unificados em um único dicionário `visited_states[filho] = pai` (com `visited_states[estado_inicial] = 0`).
   - Quando o estado objetivo `123456789` é atingido, a função `rebuild_path` reconstrói toda a sequência de movimentos (`Up`, `Down`, `Left`, `Right`) retrocedendo os ponteiros `int` até a raiz e inferindo a transição pela diferença posicional do dígito `9` ($\Delta \in \{-3, +3, -1, +1\}$).
3. **Geração de Sucessores (`find_neighbors`):**
   - Localiza o índice $idx \in \{0..8\}$ do espaço vazio (`0`), converte para coordenadas de linha e coluna ($\text{row} = idx // 3$, $\text{col} = idx \bmod 3$) e aplica os deslocamentos ortogonais válidos dentro dos limites $0 \le r, c < 3$.

---

## Projetos (Organizados por Branches)

### 1. [Buscas Sem Informação / Cegas (`8-puzzle`)](https://github.com/ravsil/inteligenciaArtificial/tree/8-puzzle)

Exploração exaustiva do grafo de estados sem conhecimento heurístico de proximidade ao objetivo:

- **`bfs.py` — Busca em Largura (*Breadth-First Search*):**
  - Utiliza uma fila FIFO (`collections.deque`) expandindo o grafo camada por camada em função da profundidade $d$.
  - **Propriedades:** Completa e **ótima** (para custos de passo uniformes), porém apresenta complexidade espacial $O(b^d)$ — mantendo toda a fronteira na memória RAM.
- **`dfs.py` — Busca em Profundidade (*Depth-First Search*):**
  - Utiliza uma pilha LIFO (`list.append` / `list.pop`) com verificação em `visited_states` para evitar loops infinitos no grafo cíclico do 8-Puzzle.
  - **Propriedades:** Completo em espaços finitos com controle de visitados, mas **não-ótimo** — frequentemente mergulha em ramos profundos e retorna soluções com dezenas de milhares de movimentos para instâncias que exigem menos de 30 passos.
- **`idfs.py` — Busca em Profundidade Iterativa (*Iterative Deepening Search*):**
  - Executa buscas em profundidade limitadas (`dls`) incrementando iterativamente o limite $L = 0, 1, 2, \dots$ até atingir a solução, mantendo na pilha tuplas `(state_int, depth)` e limpando a tabela a cada nova iteração.
  - **Propriedades:** Combina a garantia de encontrar soluções curtas com o baixo consumo instantâneo de memória da busca em profundidade, ao custo de reexpandir os níveis superiores.

---

### 2. [Buscas Com Informação / Heurísticas (`8-puzzle2`)](https://github.com/ravsil/inteligenciaArtificial/tree/8-puzzle2)

Guiam a fila de prioridade (`heapq`) através da heurística admissível e consistente de **Distância de Manhattan** (`manhattan_distance` em `utils.py`), que soma a distância retilínea de cada peça $v \in \{1..8\}$ até sua coordenada final $(r^*, c^*) = ((v-1)//3, (v-1)\bmod 3)$:
$$h(n) = \sum_{v=1}^{8} \left( |r_v - r_v^*| + |c_v - c_v^*| \right)$$

- **`gulosa.py` — Busca Gulosa (*Greedy Best-First Search*):**
  - Ordena o *min-heap* exclusivamente pela estimativa heurística $f(n) = h(n)$ (`heapq.heappush(heap, (manhattan_distance(neighbor), neighbor_int))`).
  - **Propriedades:** Extremamente rápida e com baixíssimo número de nós expandidos, mas **não garante otimalidade** por ignorar o custo acumulado $g(n)$ já percorrido desde a origem.
- **`astar.py` — Algoritmo A\* (*A-Star*):**
  - Ordena o *min-heap* combinando o custo real do caminho percorrido $g(n)$ (`steps + 1`) com a heurística admissível $h(n)$:
    $$f(n) = g(n) + h(n)$$
  - Mantém adicionalmente um dicionário `g_score` para permitir o relaxamento ótimo caso um mesmo estado seja alcançado por um caminho de menor custo (`tentative_g < g_score[neighbor]`).
  - **Propriedades:** **Completo e ótimo**, reduzindo em mais de uma ordem de grandeza o número de estados visitados em relação à BFS nas instâncias difíceis.

---

## Bateria de Casos de Teste e Análise Experimental (`puzzle.ipynb`)

Os algoritmos foram avaliados em quatro configurações representativas do espaço de estados:

| Caso de Teste | Configuração Inicial | Característica da Instância |
| :--- | :---: | :--- |
| **Caso 1 (Difícil)** | `(0, 8, 7, 6, 5, 4, 3, 2, 1)` | Tabuleiro completamente invertido ($d^* = 28$ movimentos ótimos). |
| **Caso 2 (Trivial)** | `(1, 2, 3, 4, 5, 6, 7, 0, 8)` | Apenas $1$ movimento de distância do estado objetivo (`Right`). |
| **Caso 3 (Intermediário)** | `(1, 2, 3, 4, 5, 0, 7, 8, 6)` | Solução curta em $2$ movimentos (`Down`, `Right`), usada para expor a degradação do DFS quando a ordem de expansão dos vizinhos explora primeiro o ramo errado. |
| **Caso 4 (Insolúvel)** | `(1, 2, 3, 4, 5, 7, 6, 0, 8)` | Permutação com número **ímpar** de inversões ($1$ inversão: `7` antes de `6`). Como movimentos no grid $3\times 3$ preservam a paridade de inversões, força os algoritmos a explorar toda a componente conexa de $9!/2 = 181.440$ estados antes de retornar `None`. |

### Resultados Comparativos no Caso 1 — Tabuleiro Invertido `(0, 8, 7, 6, 5, 4, 3, 2, 1)`

| Algoritmo | Encontrou Solução Ótima? | Tamanho do Caminho (Passos) | Estados Visitados (Ordem de Grandeza) | Comportamento Observado |
| :--- | :---: | :---: | :---: | :--- |
| **BFS** | **Sim** | **28** | ~170.000+ | Explora quase todo o espaço de estados até a camada 28; maior consumo de RAM. |
| **DFS** | Não | > 40.000 | ~60.000+ | Segue em profundidade arbitrária gerando milhares de movimentos redundantes. |
| **IDFS** | Sim / Limite | 28 | Elevado (reexpansões) | Baixo uso de memória por iteração, porém alto tempo de CPU pelas reexpansões acumuladas até $L=28$. |
| **Busca Gulosa** | Não | ~46–64 | **~300 – 800** | Menor tempo de execução e mínimo uso de memória, mas caminho subótimo. |
| **A\* (Manhattan)** | **Sim** | **28** | **~6.000 – 12.000** | Encontra o caminho ótimo de 28 movimentos expandindo menos de $7\%$ dos estados visitados pela BFS. |
