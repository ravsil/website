# Inteligência Artificial — 8-Puzzle Solver

> **Categoria:** Graduação — Disciplina TN724 - Inteligência Artificial (UFRRJ)  
> **Repositório:** [github.com/ravsil/inteligenciaArtificial](https://github.com/ravsil/inteligenciaArtificial)

Repositório contendo as implementações e análises comparativas de algoritmos de busca em espaço de estados aplicados ao problema clássico do **8-Puzzle**, desenvolvidos na disciplina de **Inteligência Artificial** na UFRRJ.

---

## Stack Tecnológico

- **Linguagem:** Python 3
- **Ferramentas & Bibliotecas:** Jupyter Notebook, Matplotlib (Visualização de métricas), `psutil` (Monitoramento de consumo de RAM em tempo real), `collections.deque` e filas de prioridade (`heapq`)

---

## Projetos (Organizados por Branches)

### 1. [8-Puzzle Solver — Buscas Cegas / Sem Informação](https://github.com/ravsil/inteligenciaArtificial/tree/8-puzzle)
Resolução do quebra-cabeça de 8 peças explorando o espaço de estados sem conhecimento heurístico prévio:
- **BFS (*Breadth-First Search* / Busca em Largura):** Garante encontrar a solução ótima (menor número de movimentos), porém com elevado consumo de memória devido ao armazenamento da fronteira em largura.
- **DFS (*Depth-First Search* / Busca em Profundidade):** Baixo consumo de memória, mas encontra caminhos subótimos extensos e requer controle de estados visitados para evitar ciclos.
- **IDFS (*Iterative Deepening Search* / Busca em Profundidade Iterativa):** Combina a otimalidade da busca em largura com a eficiência espacial da busca em profundidade, incrementando gradualmente o limite de profundidade.

### 2. [8-Puzzle Solver — Buscas Informadas / Heurísticas](https://github.com/ravsil/inteligenciaArtificial/tree/8-puzzle2)
Resolução do 8-Puzzle utilizando funções heurísticas (como Distância de Manhattan e número de peças fora do lugar) para guiar a exploração do espaço de estados:
- **Busca Gulosa (*Greedy Best-First Search*):** Expande sempre o estado que parece estar mais próximo do objetivo segundo a heurística $h(n)$, reduzindo drasticamente o tempo de busca e os nós expandidos, embora sem garantia de caminho ótimo.
- **Algoritmo A\* (*A-Star*):** Avalia os estados combinando o custo real acumulado $g(n)$ e a estimativa heurística admissível $h(n)$ ($f(n) = g(n) + h(n)$), garantindo encontrar a solução ótima enquanto expande uma fração mínima dos estados em comparação às buscas cegas.

---

## Métricas Avaliadas nos Experimentos

Nos notebooks (`puzzle.ipynb`) de ambas as etapas, os algoritmos foram submetidos a baterias de instâncias de diferentes complexidades para comparar:
- **Tempo de execução** (segundos)
- **Consumo de memória RAM** (MB monitorados via `psutil`)
- **Quantidade de nós visitados / expandidos**
- **Profundidade / Custo da solução encontrada**
