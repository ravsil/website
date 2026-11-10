# Sistemas Operacionais — Shell, Escalonamento, Alocador de Memória e Biblioteca de Concorrência

> **Categoria:** Graduação — Disciplina de Sistemas Operacionais (UFRRJ)  
> **Repositório:** [github.com/ravsil/sistemasOperacionais](https://github.com/ravsil/sistemasOperacionais)

Conjunto de quatro projetos de programação de sistemas em baixo nível desenvolvidos na disciplina de **Sistemas Operacionais** na UFRRJ. As implementações exploram chamadas de sistema (*syscalls*) do kernel Linux, criação e gerenciamento de processos e threads (`fork`, `execvp`, `clone`), rastreamento de eventos de escalonamento de CPU no kernel (`ftrace` / `trace-cmd`), alocação dinâmica de memória com arenas locais por thread (`mmap`, *segregated free lists*) e construção de primitivas de sincronização e concorrência do zero.

---

## Stack Tecnológico

- **Linguagens:** C (C11 / GNU C com extensões POSIX e Linux), Python 3, Shell Script
- **APIs do Kernel Linux & POSIX:** `<sys/wait.h>`, `<sys/mman.h>` (`mmap`), `<sched.h>` (`clone` com flags `CLONE_VM | CLONE_FS | CLONE_FILES | CLONE_SIGHAND`), `<pthread.h>`, `<signal.h>`, intrínsecos atômicos de hardware (`__sync_lock_test_and_set`, `__sync_lock_release`) e *Thread-Local Storage* (`__thread`)
- **Instrumentação & Visualização:** `trace-cmd` (`sched_switch`, `sched_wakeup`), Pandas, Matplotlib, Tkinter (`FigureCanvasTkAgg`)

---

## Projetos (Organizados por Branches)

### 1. [Interpretador de Comandos / Shell UNIX (`terminal`)](https://github.com/ravsil/sistemasOperacionais/tree/terminal)

Implementação em C (`main.c`) de um *shell* interativo para Linux com suporte a comandos internos (*built-ins*), execução de binários externos e encadeamento condicional de processos.

#### Detalhes de Implementação
- **Prompt Dinâmico e Tratamento de Sinais:**
  - Ignora o sinal de interrupção `SIGINT` (`signal(SIGINT, SIG_IGN)`) no processo pai do shell para que o atalho `Ctrl+C` não encerre a sessão interativa.
  - Exibe o diretório de trabalho atual em tempo real obtido via `getcwd()` com estilização ANSI em cores.
- **Tokenização e Encadeamento com `&&`:**
  - Faz o *parsing* da linha de comando dividindo instruções encadeadas pelo operador `&&` (`strtok(input, "&")`) e separa os argumentos de cada subcomando para o vetor `args[]`.
- **Comandos Internos e Criação de Processos (`fork` + `execvp` + `wait`):**
  - Executa nativamente `cd` (via syscall `chdir()`, tratando `cd` sem argumentos com retorno para `$HOME`), `clear` (sequência de escape `\033[H\033[J`) e `exit`.
  - Para programas externos, invoca `fork()`: o processo filho substitui sua imagem de memória via `execvp(args[0], args)`, enquanto o processo pai aguarda a conclusão síncrona com `wait(NULL)`.

---

### 2. [Monitoramento de Escalonamento de CPU por Núcleo (`monitoramento`)](https://github.com/ravsil/sistemasOperacionais/tree/monitoramento)

Pipeline de geração de carga multithread em C, captura de eventos do escalonador do kernel Linux (`CFS`) e visualização gráfica em Python da ocupação e migração de threads entre os núcleos lógicos da CPU.

#### Componentes do Projeto
1. **Gerador de Carga Multithread (`benchmark.c`):**
   - Dispara `4` threads POSIX (`pthread_create`) executando em paralelo um conjunto intensivo de tarefas *CPU-bound*:
     - Multiplicação de matrizes densas $500 \times 500$ (`matrix_multiplication`) com complexidade $O(N^3)$;
     - Cálculo recursivo de Fibonacci para $n = 40$ (`fibonacci(40)`);
     - Verificação de primalidade por divisão de tentativa para todos os inteiros até $100.000$ (`prime_calculation`).
2. **Captura de Rastro do Kernel (`run.sh`):**
   - Compila o benchmark com `-pthread` e executa `sudo trace-cmd record -e sched_switch -e sched_wakeup ./benchmark`, gerando o relatório textual `trace_report.txt` via `trace-cmd report`.
3. **Parser de Eventos `sched_switch` e Interface Gráfica (`main.py`):**
   - Analisa `trace_report.txt` via expressões regulares extraindo o núcleo `[cpu]`, `timestamp` e o identificador `next_comm:next_pid` de cada troca de contexto (`sched_switch`) envolvendo as threads do processo `benchmark`.
   - Constrói uma interface gráfica interativa em **Tkinter + Matplotlib** (`FigureCanvasTkAgg`) com checkboxes para filtrar individualmente os núcleos (`CPU 0` a `CPU 7`) e plota a linha do tempo de execução de cada thread ao longo dos segundos.

---

### 3. [Alocador Dinâmico de Memória Escalável para Multithreading (`malloc`)](https://github.com/ravsil/sistemasOperacionais/tree/malloc)

Implementação de um alocador dinâmico de memória customizado (`mymalloc.h`) projetado para minimizar a contenção de *locks* em aplicações multithread, comparado experimentalmente contra o `malloc`/`free` padrão da `glibc`.

#### Arquitetura Interna do `mymalloc`
- **Heap Global via `mmap` (`MyMallocInit`):**
  - Solicita ao sistema operacional uma região contígua de memória virtual anônima (`mmap(NULL, size, PROT_READ | PROT_WRITE, MAP_PRIVATE | MAP_ANONYMOUS, -1, 0)`) sem depender de `sbrk`.
- **Arenas por Thread em TLS (`__thread Arena* thread_arena`):**
  - Cada thread possui sua própria estrutura `Arena` armazenada em *Thread-Local Storage* (`__thread`), contendo um buffer privado de `1 MB` (`ARENA_SIZE`) e um ponteiro de topo (`offset`).
  - Alocações rápidas são atendidas diretamente do buffer local da thread **sem necessidade de adquirir nenhum mutex global**.
- **Listas Livres Segregadas com Locks Finos (`free_lists[16]` e `freelist_locks[16]`):**
  - Mantém `NUM_FREELISTS = 16` listas encadeadas de blocos livres organizadas por classe de tamanho (`get_freelist_index(size) = size >> 3`), cada uma protegida por seu próprio mutex independente (`freelist_locks[index]`).
  - Na alocação (`mymalloc`), alinha o tamanho solicitado a múltiplos de `8 bytes` (`ALIGN8`), busca primeiro um bloco compatível na classe correspondente, realiza **divisão de bloco (*block splitting* — `split_block`)** caso a sobra comporte um novo `Block` + `8 bytes`, e recorre à arena local da thread ou ao heap global como *fallback*.
  - Na liberação (`myfree`), marca o cabeçalho `Block` como livre e o insere na cabeça da *free list* correspondente.
- **Benchmarks (`benchmark.c` e `benchmark2.c`):**
  - `benchmark.c`: avalia 1.000.000 de ciclos de alocação/escrita/liberação sequenciais.
  - `benchmark2.c`: avalia a escalabilidade concorrente com `4` threads realizando simultaneamente 100.000 alocações e liberações de blocos de `64 bytes`.

---

### 4. [Biblioteca de Concorrência e Paralelismo em C (`biblioteca`)](https://github.com/ravsil/sistemasOperacionais/tree/biblioteca)

Construção de uma biblioteca completa de concorrência em C (`paralelismo/paralelismo.h`) implementando suas próprias threads sobre a chamada de sistema `clone()` do Linux e estruturas de sincronização inspiradas em POSIX Threads e na linguagem Go.

#### Primitivas Implementadas (`paralelismo/`)
- **`thread.h` — Threads Nativas via Syscall `clone()`:**
  - `cria_thread`: aloca uma pilha de `1 MB` (`STACK_SIZE = 1024 * 1024`) e invoca diretamente `clone()` compartilhando espaço de endereçamento, sistema de arquivos, descritores e tabela de sinais (`CLONE_FS | CLONE_FILES | CLONE_SIGHAND | CLONE_VM`).
  - Integra-se automaticamente a um `WaitGroup` opcional passado na criação e mantém um contador atômico global de threads ativas (`nThreads`).
- **`mutex.h` — Spinlock Atômico de Hardware:**
  - Implementa exclusão mútua (`lock` / `unlock`) diretamente com as instruções atômicas do compilador/processador `__sync_lock_test_and_set(&m->locked, 1)` e `__sync_lock_release(&m->locked)`.
- **`atomic_int.h` — Inteiros Atômicos (`AtomicInt`):**
  - Encapsula operações seguras entre threads (`cria_atomic`, `atomic_get`, `atomic_set`, `atomic_increment`, `atomic_decrement`, `atomic_sum`).
- **`cond.h` — Variáveis de Condição com Detecção Automática de Deadlock:**
  - Implementa fila encadeada de nós em espera (`WaitNode`), `cond_wait`, `cond_signal` e `cond_broadcast`.
  - **Detecção de Deadlock:** Ao bloquear uma thread em `cond_wait`, verifica atomicamente se o número de threads bloqueadas atingiu o total de threads ativas do programa (`waiting_threads == atomic_get(&nThreads)`). Caso positivo, aborta a execução imediatamente com diagnóstico explícito (`"Todas as threads estão esperando, deadlock detectado"`).
- **`semaforo.h` — Semáforos Contadores (`Semaforo`):**
  - Implementa as operações clássicas de Dijkstra `down()` (decrementa ou bloqueia enquanto `count == 0`) e `up()` (incrementa e sinaliza threads bloqueadas).
- **`wait_group.h` — Barreira `WaitGroup` (estilo Go):**
  - Sincroniza a conclusão de grupos de tarefas paralelas através de `add(wg, delta)`, `done(wg)` e `wait(wg)`.
- **`channel.h` e `complex_channel.h` — Canais Tipados com Buffer Circular (estilo Go):**
  - Implementa passagem de mensagens sincronizada entre threads produtoras e consumidoras via buffer circular limitado (`capacity`, `head`, `tail`, `size`) tanto para inteiros (`Channel`: `send`, `receive`, `fechar_channel`) quanto para ponteiros genéricos `void*` (`ComplexChannel`: `complex_send`, `complex_receive`, `fechar_complex_channel`).
- **Validação e Testes (`exemplos.c`, `testes/matrix_mult.c`, `testes/matrix_mult_pthread.c`):**
  - Inclui bateria de exemplos demonstrando cada primitiva (incluindo simulação intencional de *deadlock*) e um comparativo de desempenho na multiplicação paralela de matrizes $1000 \times 1000$ entre a biblioteca construída e `pthread`.
