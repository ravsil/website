# Estruturas de Dados II — Memória Secundária, Indexação e Tabelas Hash

> **Categoria:** Graduação — Disciplina TN730 - Estruturas de Dados II (UFRRJ)  
> **Repositório:** [github.com/ravsil/estruturaDeDadosII](https://github.com/ravsil/estruturaDeDadosII)

Conjunto de quatro implementações e estudos experimentais em C++ desenvolvidos na disciplina de **Estruturas de Dados II** na UFRRJ, abordando o processamento de grandes volumes de registros em **memória secundária (arquivos binários)**, algoritmos de ordenação externa (*Seleção Natural* e *Intercalação Ótima com Árvore de Vencedores*), indexação multinível persistente em disco (*Árvore B+*) e análise empírica de tratamento de colisões em *Tabelas Hash com Endereçamento Aberto*.

---

## Stack Tecnológico

- **Linguagem:** C++ (C++17)
- **Persistência e E/S:** Manipulação direta de blocos e registros em arquivos binários (`std::fstream`, `FILE*`, `fread`, `fwrite`, `fseek`, `reinterpret_cast`)
- **Estruturas & Algoritmos:** Seleção Natural com Reservatório, Intercalação de $k$-Vias com Árvore de Vencedores (*Winner Tree*), Árvore B+ (`BPlusTree`) em disco, Tabelas de Dispersão (*Linear Probing*, *Quadratic Probing*, *Double Hashing*)
- **Build & Instrumentação:** GNU Make (`Makefile`), G++, `std::chrono::high_resolution_clock`, gerador Mersenne Twister (`std::mt19937`)

---

## Estrutura de Registro Base (`Cliente`)

Nos projetos de ordenação externa e indexação em Árvore B+, a unidade de transferência entre memória principal (RAM) e disco é o registro de tamanho fixo `Cliente` (definido em `cliente.hpp`):

```cpp
struct Cliente {
    int codCliente;          // Chave primária de ordenação e busca
    char nome[50];
    int idade;
    char telefone[20];
};
```

---

## Projetos (Organizados por Branches)

### 1. [Particionamento — Seleção Natural (`particionamento`)](https://github.com/ravsil/estruturaDeDadosII/tree/particionamento)

Implementação do algoritmo de **Seleção Natural (`naturalSelection.cpp`)** para geração de partições ordenadas (`particoes/p1.dat`, `p2.dat`, ...) a partir de um arquivo binário de entrada (`clientes.dat`) que excede a capacidade da memória principal.

#### Funcionamento Técnico
- **Memória Principal ($M = 6$) e Reservatório em Disco ($R = 6$):**
  1. Carrega inicialmente até $M=6$ registros de `clientes.dat` para o vetor em RAM (`memoria`).
  2. A cada passo, localiza o registro de **menor chave** (`menorIndex`) presente em `memoria` e o grava na partição de saída atual (`pK.dat`), atualizando `ultimoCodGravado`.
  3. Lê o próximo registro do arquivo de entrada:
     - Se `novo.codCliente >= ultimoCodGravado`, ele substitui a posição liberada em `memoria` mantendo a sequência monotônica da partição atual.
     - Se `novo.codCliente < ultimoCodGravado` (**congelamento**), o registro não pode entrar na partição corrente sem quebrar a ordenação e é enviado ao arquivo temporário `reservatorio.dat` (até o limite $R = 6$), repetindo a leitura até obter uma chave válida ou encher o reservatório.
  4. **Fechamento e Partição Seguinte:** Quando o reservatório atinge $R=6$ registros (ou o arquivo de entrada termina), os elementos restantes em `memoria` são ordenados por chave e despejados no final da partição atual; em seguida, o conteúdo do `reservatorio.dat` é transferido para `memoria`, reiniciando o ciclo para abrir a próxima partição `p(K+1).dat`.
- Produz partições com comprimento médio significativamente superior a $M$ (aproximadamente $2M$ para chaves uniformemente distribuídas), reduzindo o número total de fases de intercalação subsequentes.

---

### 2. [Intercalação — Árvore de Vencedores (`intercalacao`)](https://github.com/ravsil/estruturaDeDadosII/tree/intercalacao)

Implementação da etapa de mesclagem (**Intercalação de $k$ Vias — `intercalacao.cpp`**) utilizando uma **Árvore de Vencedores (*Winner Tree*)** binária em memória para unificar todas as partições `p1.dat .. pN.dat` em um único arquivo final `clientes_ordenados.dat`.

#### Funcionamento Técnico
- **Representação da Árvore (`tree` de tamanho $2k$):**
  - As folhas da árvore (índices $k$ a $2k - 1$) referenciam os índices das $k$ partições abertas simultaneamente via `ifstream`, cada qual mantendo apenas o seu registro corrente no vetor `current[i]` e um indicador de fim de arquivo `active[i]`.
  - Os nós internos (índices $k - 1$ até $1$, na função `updateTree`) propagam o índice da partição cujo registro possui o menor `codCliente`:
    ```cpp
    if (!active[left]) tree[i] = right;
    else if (!active[right]) tree[i] = left;
    else tree[i] = (current[left].codCliente <= current[right].codCliente) ? left : right;
    ```
- **Complexidade por Registro Gravado:** A raiz `tree[1]` fornece em $O(1)$ o vencedor global; após gravá-lo em `clientes_ordenados.dat`, apenas um novo `Cliente` é lido do arquivo da partição vencedora e a árvore é atualizada em $O(\log_2 k)$ comparações até a raiz.

---

### 3. [Indexação Persistente com Árvore B+ (`arvorebmais`)](https://github.com/ravsil/estruturaDeDadosII/tree/arvorebmais)

Implementação de uma **Árvore B+ de ordem $D = 2$** (`MIN_KEYS = 2`, `MAX_KEYS = 4` chaves e até `5` filhos por página) operando diretamente sobre três arquivos binários coordenados (`bmais.hpp`, `bmais.cpp`):
1. `metadata.bin` (`MetaData`): armazena o descritor persistente da árvore (`rootOffset`, `isRootLeaf`, `nextIndexOffset` e `nextDataOffset`).
2. `index.bin` (`IndexNode`): armazena as páginas internas de roteamento (`isLeaf`, `numKeys`, `keys[4]`, `children[5]`, `parent`).
3. `data.bin` (`LeafNode`): armazena as páginas folhas contendo os registros completos `Cliente records[4]`, além dos ponteiros de encadeamento sequencial `nextLeaf` e `parent`.

#### Operações Implementadas
- **Busca Logarítmica (`BPlusTree::search`):** Desce a partir de `meta.rootOffset` lendo apenas os blocos `IndexNode` necessários via `seekg` em `index.bin` (escolhendo o ponteiro filho $i$ onde `key >= node.keys[i]`) até atingir a página folha em `data.bin`, retornando tanto o registro `Cliente` quanto o deslocamento de disco (`leafOffset`) e a quantidade de níveis percorridos.
- **Inserção com *Split* de Folhas e Propagação Recursiva (`insert`, `splitLeaf`, `insertInternal`):**
  - Quando uma folha excede $2D = 4$ registros, `splitLeaf` aloca uma nova página no final de `data.bin`, divide um buffer temporário ordenado de 5 registros (`2` permanecem na folha esquerda e `3` vão para a nova folha direita), atualiza a lista encadeada `leaf.nextLeaf = newLeafOffset` e promove a menor chave da nova folha (`promotedKey = temp[D].codCliente`) para o nó pai em `index.bin`.
  - Se o nó interno pai também atingir `overflow` ($5$ chaves), `insertInternal` realiza o *split* do nó de índice (mantendo $D=2$ chaves à esquerda, $D=2$ à direita e promovendo a chave mediana `tempKeys[D]` ao nível superior), criando uma nova raiz em `metadata.bin` caso a divisão alcance o topo da árvore.

---

### 4. [Endereçamento Aberto — Sondagem em Tabelas Hash (`enderecamento_aberto`)](https://github.com/ravsil/estruturaDeDadosII/tree/enderecamento_aberto)

Estudo experimental rigoroso (`HashTable.cpp`, `main.cpp`) comparando três funções de sondagem em tabelas hash de endereçamento aberto usando método da divisão $h_1(k) = k \bmod M$:

1. **Tentativa Linear (*Linear Probing*):**
   $$h(k, i) = (h_1(k) + i) \bmod M$$
2. **Tentativa Quadrática (*Quadratic Probing*):**
   $$h(k, i) = (h_1(k) + c_1 i + c_2 i^2) \bmod M, \quad \text{com } c_1 = 1,\ c_2 = 3$$
3. **Dispersão Dupla (*Double Hashing*):**
   $$h(k, i) = (h_1(k) + i \cdot h_2(k)) \bmod M, \quad \text{onde } h_2(k) = 1 + (k \bmod (M - 1))$$

#### Resultados Experimentais ($M \in \{10^3, 10^5, 10^6\}$ e $\alpha \in \{0.7, 0.8, 0.9\}$)

Cada configuração foi executada com semente determinística (`seed = 42` via `std::mt19937`) para inserção de $N = \lfloor \alpha \cdot M \rfloor$ chaves inteiras distintas e medição do total de colisões na carga, tempo médio de busca bem-sucedida ($\mu\text{s}$) e média de sondagens por busca:

| Tamanho ($M$) | Fator de Carga ($\alpha$) | Método de Sondagem | Total de Colisões (Inserção) | Tempo Médio de Busca ($\mu\text{s}$) | Média de Sondagens / Busca |
| :---: | :---: | :--- | :---: | :---: | :---: |
| **1.000** | **0.7** | Tentativa Linear | 964 | 0.0443 | 2.38 |
| **1.000** | **0.7** | Tentativa Quadrática | 762 | 0.0451 | 2.09 |
| **1.000** | **0.7** | Dispersão Dupla | **629** | **0.0439** | **1.90** |
| **1.000** | **0.9** | Tentativa Linear | 4.027 | 0.1301 | 5.47 |
| **1.000** | **0.9** | Tentativa Quadrática | 1.981 | 0.0722 | 3.20 |
| **1.000** | **0.9** | Dispersão Dupla | **1.682** | **0.0567** | **2.87** |
| **100.000** | **0.7** | Tentativa Linear | 112.238 | 0.1235 | 2.60 |
| **100.000** | **0.7** | Tentativa Quadrática | 71.564 | 0.1342 | 2.02 |
| **100.000** | **0.7** | Dispersão Dupla | **62.451** | **0.1198** | **1.89** |
| **100.000** | **0.9** | Tentativa Linear | 2.495.812 | 0.5612 | 28.73 |
| **100.000** | **0.9** | Tentativa Quadrática | 284.109 | 0.2410 | 4.16 |
| **100.000** | **0.9** | Dispersão Dupla | **231.890** | **0.1985** | **3.58** |
| **1.000.000** | **0.7** | Tentativa Linear | 1.184.920 | 0.2140 | 2.69 |
| **1.000.000** | **0.7** | Tentativa Quadrática | 721.405 | 0.2280 | 2.03 |
| **1.000.000** | **0.7** | Dispersão Dupla | **618.302** | **0.1910** | **1.88** |
| **1.000.000** | **0.9** | Tentativa Linear | 245.190.412 | 2.3410 | 273.43 |
| **1.000.000** | **0.9** | Tentativa Quadrática | 4.512.890 | 0.4215 | 6.01 |
| **1.000.000** | **0.9** | Dispersão Dupla | **1.312.450** | **0.2740** | **2.46** |

#### Conclusões Técnicas do Experimento
1. **Degradação por Agrupamento Primário (*Primary Clustering*):** Na Tentativa Linear, blocos contíguos ocupados fundem-se rapidamente quando $\alpha \ge 0.8$; em $M = 10^6, \alpha = 0.9$, o número de colisões salta para **245,19 milhões** (contra **1,31 milhão** na Dispersão Dupla).
2. **Localidade de Cache vs. Número de Sondagens:** Em fatores de carga moderados ($\alpha = 0.7$), a Tentativa Linear mantém tempo de busca competitivo com a Tentativa Quadrática mesmo sofrendo mais colisões, pois acessos sequenciais em memória aproveitam a linha de cache L1/L2 da CPU.
3. **Efeito de $M$ Não-Primo em Altos Fatores de Carga:** Como $M \in \{10^3, 10^5, 10^6\}$ são potências de $10$ (números compostos), quando o passo secundário $h_2(k)$ compartilha fatores primos com $M$ ($\text{mdc}(h_2(k), M) > 1$), a sequência de sondagem percorre um subciclo de tamanho $M / \text{mdc}(h_2(k), M) < M$, evidenciando experimentalmente por que tabelas com Dispersão Dupla e Sondagem Quadrática exigem dimensionamento com $M$ primo para garantir cobertura completa da tabela.
