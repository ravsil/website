# Compilador da Linguagem Maphra

> **Categoria:** Graduação — Disciplina de Compiladores (UFRRJ)  
> **Repositório:** [github.com/Dropez7/compiladores](https://github.com/Dropez7/compiladores)  
> **Executar:** [▶ Abrir Playground do Compilador Maphra](#run:compiladores.md)

**Maphra** é uma linguagem de programação criada na disciplina de Compiladores do curso de Ciência da Computação da UFRRJ. O compilador realiza análise léxica, sintática e semântica, traduzindo programas escritos em Maphra (`.mpr`) para **código intermediário de 3 endereços em C**, que é em seguida compilado com `gcc`.

![peixinho](markdown/img/peixinho.svg)

---

## Stack Tecnológico

- **Linguagens:** C, C++, Maphra
- **Análise Léxica:** Lex / Flex (`src/lex.l`)
- **Análise Sintática & Semântica:** Yacc / Bison (`src/sin.y`)
- **Geração de Código:** Tradução para código de 3 endereços em C com gerenciamento dinâmico de escopo, tabela de símbolos, sobrecarga de funções, structs e alocação/liberação automática de vetores e matrizes (`src/utils.hpp`)
- **Build Automation:** GNU Make (`Makefile`) e GCC/G++

---

## Recursos da Linguagem

### 1. Sintaxe Básica

#### Quebras de Linha
Cada linha de código pode ou não terminar com `;`, sendo seu uso facultativo:

```go
print("Hello");
print("World!")
```

#### Comentários
Suporta comentários de linha única e de múltiplas linhas:

```go
// Este é um comentário de uma linha.

/*
  Este é um comentário
  de múltiplas linhas.
*/
```

---

### 2. Tipos e Variáveis

#### Tipos Primitivos
Suporta os tipos `int`, `float`, `bool` (`T` para verdadeiro, `F` para falso) e `string`, além de inferência implícita na primeira atribuição.

```go
int a
a = 10
float b = 3.14
bool c = T
string d = "Olá!"

e = 2025
```

#### Troca de Variáveis (Swap Múltiplo)

```go
int x = 10;
int y = 20;
x, y = y, x;
```

---

### 3. Operadores e Expressões

#### Aritméticos e Lógicos
```go
a = 10 + 5;
b = a - 5; 
c = b * 2; 
d = c / 4;
d++; d--; d += 10;

// Lógicos: AND (^), OR (?), NOT (~)
a ^ b
a ? b
~a
```

#### Condicional (Ternário estilo Python)
```go
int idade = 21;
string status = "Maior de idade" if idade >= 18 else "Menor de idade";
print(status);
```

---

### 4. Entrada e Saída (I/O)

```go
print("É possível imprimir diversos argumentos", 1, 3.14, foo)

int a = input("Digite um número: ")
string b = input("Digite uma string: ")
```

---

### 5. Estruturas de Controle e Repetição

Suporta `if / else if / else`, `switch / case / dafoe` (default), além de laços `for`, `for (cond)` (estilo while), `do ... for` (do-while) e `for (tipo el in vetor)` (for-each):

```go
foo = "hello"

switch (foo) {
  case "hello":
    print("foo é hello")
    break
  case "world":
    print("foo é world")
    break
  dafoe:
    print("foo não é nem hello nem world")
}
```

---

### 6. Funções, Sobrecarga e Structs com Métodos (`bind`)

Funções são declaradas com `func` e identificadas pela assinatura dos parâmetros, permitindo **sobrecarga de funções**. Além disso, `struct` permite aninhamento e vinculação de métodos via `bind` (inclusive em tipos primitivos):

```go
struct Point {
  int x
  int y
}

struct Square {
  Point p1
  Point p2
  Point p3
  Point p4
}

bind Square getArea(): int {
  return (this.p2.x - this.p1.x) * (this.p3.y - this.p1.y)
}

bind float squared(float a): float {
  return a * a
}
```

---

### 7. Vetores Dinâmicos, Slices e Matrizes

```go
int numeros[];
numeros.append(10);
numeros.append(20);
numeros.append(30);
numeros.append(40);

int fatia[] = numeros[1:3];

for (int el in fatia) {
    print(el);
}
```

---

### 8. Comandos Guardados de Dijkstra (`wd` / `wheeldecide`)

Suporte nativo a comandos guardados não-determinísticos de Dijkstra através da palavra-chave `wd` (ou `wheeldecide`), tanto em seleção única quanto em laço (`do wd`):

```go
do wd {
    opt q1 > q2 {
        q1, q2 = q2, q1
    }
    opt q2 > q3 {
        q2, q3 = q3, q2
    }
    opt q3 > q4 {
        q3, q4 = q4, q3
    }
}
```
