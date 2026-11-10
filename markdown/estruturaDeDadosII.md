# Estruturas de Dados II

> **Categoria:** Graduação — Disciplina TN730 - Estruturas de Dados II (UFRRJ)  
> **Repositório:** [github.com/ravsil/estruturaDeDadosII](https://github.com/ravsil/estruturaDeDadosII)

Repositório de projetos práticos e experimentos desenvolvidos na disciplina de **Estruturas de Dados II** do curso de Ciência da Computação da UFRRJ. O foco das implementações é o gerenciamento eficiente de grandes volumes de dados em **memória secundária (arquivos binários)**, algoritmos de ordenação externa, árvores de indexação e tabelas de dispersão (*hash tables*).

---

## Stack Tecnológico

- **Linguagem:** C++ (C++17)
- **Conceitos & Estruturas:** Manipulação direta de arquivos binários (`fread`, `fwrite`, `fseek`), Ordenação Externa (Seleção Natural e Intercalação Ótima com Árvore de Vencedores), Indexação em Disco com Árvore B+, Tabelas Hash em Endereçamento Aberto
- **Build:** GNU Make (`Makefile`) & G++

---

## Projetos (Organizados por Branches)

### 1. [Particionamento — Seleção Natural](https://github.com/ravsil/estruturaDeDadosII/tree/particionamento)
Implementação do algoritmo de **Seleção Natural** com reservatório em disco para a geração de partições ordenadas (`p1.dat`, `p2.dat`, ...) a partir de um arquivo binário de clientes maior que a capacidade da memória principal.

### 2. [Intercalação — Árvore de Vencedores](https://github.com/ravsil/estruturaDeDadosII/tree/intercalacao)
Implementação do algoritmo de **Intercalação de Múltiplas Vias** utilizando uma **Árvore de Vencedores (*Winner Tree*)** para mesclar eficientemente todas as partições geradas na etapa de seleção natural em um único arquivo final ordenado.

### 3. [Indexação com Árvore B+](https://github.com/ravsil/estruturaDeDadosII/tree/arvorebmais)
Implementação completa de uma **Árvore B+ (`BPlusTree`)** persistida em arquivos binários de índice e de dados. Suporta inserção de registros com divisão (*split*) automática de páginas folhas e nós internos, manutenção de ponteiros encadeados entre folhas e busca logarítmica por chave primária (`codCliente`).

### 4. [Endereçamento Aberto — Análise Comparativa de Sondagem em Tabelas Hash](https://github.com/ravsil/estruturaDeDadosII/tree/enderecamento_aberto)
Estudo experimental comparando o desempenho de três métodos clássicos de tratamento de colisão em tabelas hash com endereçamento aberto:
- **Tentativa Linear**
- **Tentativa Quadrática**
- **Dispersão Dupla (*Double Hashing*)**

#### Resumo dos Resultados Experimentais
Os testes avaliaram tabelas de tamanho $M \in \{1.000, 100.000, 1.000.000\}$ sob fatores de carga $\alpha \in \{0.7, 0.8, 0.9\}$:
- **Tentativa Linear:** Sofre severamente com *agrupamento primário* conforme $\alpha$ cresce (chegando a ~245 milhões de colisões e $2.34\ \mu\text{s}$ por busca em $M=1\text{M}, \alpha=0.9$).
- **Tentativa Quadrática:** Reduz drasticamente as colisões (~4.5 milhões em $M=1\text{M}, \alpha=0.9$, busca em $0.42\ \mu\text{s}$), embora ainda apresente *agrupamento secundário*.
- **Dispersão Dupla:** Apresentou o melhor desempenho geral (~1.3 milhão de colisões e $0.27\ \mu\text{s}$ por busca em $M=1\text{M}, \alpha=0.9$), demonstrando na prática a importância de utilizar tamanhos de tabela primos ($M$ primo) para garantir a cobertura completa de todas as posições sob fatores de carga elevados.
