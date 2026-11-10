# IM-3D — Modelagem Arquitetônica 3D do Instituto Multidisciplinar (UFRRJ)

> **Categoria:** Projetos Pessoais / Modelagem 3D & Level Design  
> **Repositório:** [github.com/ravsil/IM-3D](https://github.com/ravsil/IM-3D)  
> **Executar:** [▶ Abrir Visualizador 3D Interativo no Navegador](#run:IM-3D.md)

Projeto de reconstrução e modelagem arquitetônica tridimensional do bloco de aulas do **Instituto Multidisciplinar (IM)** da **Universidade Federal Rural do Rio de Janeiro (UFRRJ — Câmpus Nova Iguaçu)** utilizando geometria construtiva baseada em *brushes* convexos no formato `.map` (TrenchBroom / Quake Map Format).

---

## Stack Tecnológico

- **Ferramenta de Modelagem:** TrenchBroom (Editor de níveis e geometria CSG baseada em planos)
- **Formatos de Geometria:** Quake Standard `.map` e Valve 220 `.map` (Poliedros convexos definidos por interseção de semi-espaços `( x1 y1 z1 ) ( x2 y2 z2 ) ( x3 y3 z3 )`)
- **Visualizador Web Interativo:** WebGL (Renderização 3D em tempo real com iluminação direcional/hemisférica, *wireframe* de arestas de *brushes*, câmera em órbita CAD e voo em 1ª pessoa WASD, e filtro de corte transversal de andares *Z-Clip*)

---

## Mapas e Modelos 3D Incluídos

### 1. Prédio Completo do IM — UFRRJ Nova Iguaçu (`ufrrj.map`)
Reconstrução estrutural completa em escala dos três pavimentos do prédio do Instituto Multidisciplinar (`2.578` *brushes* geométricos):
- **1º Andar (Térreo):** Entrada principal, pátio central / área de convivência, corredores de salas de aula, banheiros, escadarias e base da rampa.
- **2º Andar:** Corredores superiores, passarelas, salas de aula, laboratórios e acesso intermediário da rampa e escadas.
- **3º Andar:** Pavimento superior completo com salas, corredores, guarda-corpos e cobertura.
- **Circulação Vertical:** Modelagem detalhada das escadas e da rampa característica do bloco do IM.

### 2. Sala de Aula Detalhada (`sala.map`)
Modelo interno detalhado de uma sala de aula padrão do Instituto Multidisciplinar (`829` *brushes* no formato Valve 220):
- Carteiras e cadeiras alinhadas, mesa do professor, quadro, janelas, portas, pilares estruturais e luminárias.

### 3. Banheiro Detalhado (`banheiro.map`)
Modelo interno em escala detalhada de um dos banheiros do prédio (`1.448` *brushes* no formato Valve 220):
- Cabines individuais com divisórias e portas, bancada com pias, torneiras, espelhos, revestimento de piso/parede e luminárias.

---

## Representação Matemática dos Arquivos `.map`

Nos arquivos `.map` do TrenchBroom, cada elemento arquitetônico (parede, laje, degrau, rampa, pilar ou mobiliário) é descrito como um *brush* convexo — isto é, a interseção de $k \ge 4$ semi-espaços fechados em $\mathbb{R}^3$. Cada linha dentro de um bloco `{ ... }` define um plano orientado através de três pontos não-colineares $P_1, P_2, P_3 \in \mathbb{R}^3$ seguidos pelos parâmetros de mapeamento de textura:

```text
// brush 0
{
( 16 68 0 ) ( 16 69 0 ) ( 16 68 1 ) __TB_empty 0 0 0 1 1
( 16 68 0 ) ( 16 68 1 ) ( 17 68 0 ) __TB_empty 0 0 0 1 1
( 16 68 0 ) ( 17 68 0 ) ( 16 69 0 ) __TB_empty 0 0 0 1 1
( 20 96 4 ) ( 20 97 4 ) ( 21 96 4 ) __TB_empty 0 0 0 1 1
( 20 96 4 ) ( 21 96 4 ) ( 20 96 5 ) __TB_empty 0 0 0 1 1
( 20 96 4 ) ( 20 96 5 ) ( 20 97 4 ) __TB_empty 0 0 0 1 1
}
```

Para renderizar diretamente esses mapas no navegador, o pipeline geométrico calcula as interseções de todas as trincas de planos de cada *brush*, filtra os vértices que satisfazem simultaneamente todas as inequações lineares $n_i \cdot x + d_i \le \epsilon$, ordena ciclicamente os polígonos de cada face em torno de sua normal externa e triangula a malha resultante para exibição em WebGL.
