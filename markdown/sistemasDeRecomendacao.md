# Sistemas de Recomendação — Avaliação Experimental no MovieLens 100k

> **Categoria:** Graduação — Disciplina de Sistemas de Recomendação (UFRRJ)  
> **Repositório:** [github.com/ravsil/sistemasDeRecomendacao](https://github.com/ravsil/sistemasDeRecomendacao)

Framework experimental em Python desenvolvido do zero (utilizando apenas NumPy, Pandas e estruturas nativas para a lógica dos recomendadores) para implementação, ajuste de hiperparâmetros via validação cruzada, análise de sensibilidade e avaliação empírica de **8 algoritmos de Filtragem Colaborativa** (4 baseados em memória e 4 baseados em modelo) sobre a base de dados **MovieLens 100k** (`943` usuários, `1.682` itens e `100.000` avaliações explícitas de $1$ a $5$).

---

## Stack Tecnológico

- **Linguagens:** Python 3, Shell Script, LaTeX (Artigo científico no formato ACM — `relatorio/relatorio.tex`)
- **Bibliotecas:** NumPy, Pandas, Scikit-Learn (utilizado exclusivamente para métricas auxiliares de avaliação), Matplotlib
- **Dataset:** MovieLens 100k (`u1`–`u5` para 5-Fold Cross-Validation e `ua.base`/`ua.test` para avaliação final com 10 itens de teste por usuário)
- **Métricas Implementadas (`evaluation_metrics/`):**
  - *Predição de Nota (Erro):* **RMSE** (*Root Mean Squared Error*) e **MAE** (*Mean Absolute Error*)
  - *Qualidade de Ranking Top-K ($K=10$, relevância $r_{ui} \ge 4$):* **Precision@10**, **Recall@10**, **NDCG@10** (*Normalized Discounted Cumulative Gain*) e **MAP@10** (*Mean Average Precision*)

---

## Formulação e Implementação dos Algoritmos

### 1. Abordagens Baseadas em Memória (`memoryBased/`)

- **`simple_memory.py` (Média Ponderada Global e do Usuário):**
  Prediz a nota combinando a média histórica do usuário $\bar{r}_u$ e a média de avaliação do item $\bar{r}_i$ ponderadas por $\alpha \in [0, 1]$, utilizando a média global $\mu$ como *fallback* para *cold-start*:
  $$\hat{r}_{ui} = \alpha \bar{r}_u + (1 - \alpha) \bar{r}_i$$

- **`user_based.py` (Filtragem Colaborativa Baseada em Usuário — User-kNN):**
  Centraliza as avaliações subtraindo a média de cada usuário ($r'_{uv} = r_{uv} - \bar{r}_u$) para eliminar o viés de escala individual e computa a similaridade de cosseno entre os vetores centrados (equivalente à Correlação de Pearson sobre os itens co-avaliados). Seleciona os $k$ vizinhos mais próximos de $u$ que avaliaram o item $i$ ($N_i^k(u)$):
  $$\hat{r}_{ui} = \bar{r}_u + \frac{\sum_{v \in N_i^k(u)} \text{sim}(u, v) \cdot (r_{vi} - \bar{r}_v)}{\sum_{v \in N_i^k(u)} |\text{sim}(u, v)|}$$

- **`item_based.py` (Filtragem Colaborativa Baseada em Item — Item-kNN):**
  Computa a similaridade entre itens utilizando **Cosseno Ajustado (*Adjusted Cosine*)**, subtraindo a média do usuário $\bar{r}_u$ em cada co-avaliação para capturar a relação intrínseca entre pares de filmes $(i, j)$:
  $$\text{sim}(i, j) = \frac{\sum_{u \in U_{ij}} (r_{ui} - \bar{r}_u)(r_{uj} - \bar{r}_u)}{\sqrt{\sum_{u \in U_i} (r_{ui} - \bar{r}_u)^2} \sqrt{\sum_{u \in U_j} (r_{uj} - \bar{r}_u)^2}}$$

- **`slope_one.py` (Slope One com Suavização por Shrinkage):**
  Modela a diferença média de avaliação $d_{ij}$ entre cada par de itens co-avaliados pelo conjunto de usuários $U_{ij}$, aplicando regularização por contagem (*shrinkage* $\beta$) para evitar que pares com pouquíssimas co-avaliações dominem a predição:
  $$d_{ij} = \frac{\sum_{u \in U_{ij}} (r_{ui} - r_{uj})}{|U_{ij}| + \beta}, \qquad \hat{r}_{ui} = \frac{\sum_{j \in R_u \setminus \{i\}} (r_{uj} + d_{ij}) \cdot |U_{ij}|}{\sum_{j \in R_u \setminus \{i\}} |U_{ij}|}$$

---

### 2. Abordagens Baseadas em Modelo (`modelBased/`)

- **`simple_model.py` (Baseline Bias Model via SGD):**
  Decompõe a avaliação na média global $\mu$ somada aos desvios sistemáticos do usuário $b_u$ e do item $b_i$, otimizados via Gradiente Descendente Estocástico (SGD) com taxa de aprendizado $\gamma$ e regularização $L_2$ ($\lambda$):
  $$\hat{r}_{ui} = \mu + b_u + b_i, \qquad \min_{b_*} \sum_{(u,i) \in \mathcal{K}} (r_{ui} - \mu - b_u - b_i)^2 + \lambda (b_u^2 + b_i^2)$$

- **`regularized_svd.py` (SVD Regularizado / FunkSVD com Vieses):**
  Fatora a matriz de avaliações projetando usuários e itens em um espaço latente de dimensão $f$ ($p_u, q_i \in \mathbb{R}^f$) combinado aos termos de viés:
  $$\hat{r}_{ui} = \mu + b_u + b_i + p_u^T q_i$$
  Os parâmetros são atualizados a cada interação observada via SGD a partir do erro $e_{ui} = r_{ui} - \hat{r}_{ui}$:
  $$b_u \leftarrow b_u + \gamma (e_{ui} - \lambda b_u), \qquad p_u \leftarrow p_u + \gamma (e_{ui} q_i - \lambda p_u), \qquad q_i \leftarrow q_i + \gamma (e_{ui} p_u - \lambda q_i)$$

- **`bpr.py` (*Bayesian Personalized Ranking* — BPR-MF):**
  Voltado diretamente à tarefa de ranqueamento personalizado a partir de feedback implícito (convertendo notas $r_{ui} \ge 4$ em interações positivas $I_u^+$). Otimiza a probabilidade posterior de preferência par-a-par em trincas $(u, i, j)$ onde $i \in I_u^+$ e $j \notin I_u^+$ (amostrado negativamente):
  $$\mathcal{L}_{\text{BPR}} = \sum_{(u, i, j)} \ln \sigma(\hat{x}_{uij}) - \lambda \|\Theta\|^2, \qquad \hat{x}_{uij} = (b_i - b_j) + p_u^T (q_i - q_j)$$
  Como os escores $\hat{x}_{ui}$ não estão na escala $1\text{--}5$, este modelo é avaliado exclusivamente nas métricas de qualidade de ranking Top-K.

- **`fm.py` (*Factorization Machines* de Grau 2):**
  Converte o par $(u, i)$ em um vetor esparso *one-hot* $x \in \{0, 1\}^{|U| + |I|}$ (com exatamente duas entradas ativas $x_u = 1$ e $x_i = 1$) e modela tanto os efeitos lineares quanto a interação de segunda ordem fatorada em complexidade linear $O(k \cdot d)$:
  $$\hat{y}(x) = w_0 + \sum_{l=1}^{d} w_l x_l + \sum_{l=1}^{d} \sum_{m=l+1}^{d} \langle v_l, v_m \rangle x_l x_m$$

---

## Ajuste de Hiperparâmetros (5-Fold Cross-Validation)

Em `hyperparameter_tuning.py`, os algoritmos foram submetidos a busca em grade (*Grid Search*) sobre as 5 partições oficiais (`u1.base`/`u1.test` a `u5.base`/`u5.test`). Enquanto modelos de erro foram otimizados por menor RMSE médio, o BPR foi otimizado maximizando diretamente o **NDCG@10**:

| Algoritmo | Melhores Hiperparâmetros Encontrados (5-Fold CV) | Métrica Alvo (Média CV) |
| :--- | :--- | :---: |
| **Simple Memory** | `alpha = 0.3` | RMSE: `0.9756` |
| **User-Based kNN** | `k = 30`, `sim = 'cosine'` (centrado) | RMSE: `0.9504` |
| **Item-Based kNN** | `k = 30`, `sim = 'adjusted_cosine'` | RMSE: `0.9410` |
| **Slope One** | `shrinkage = 15` | RMSE: `0.9428` |
| **Simple Model (Bias SGD)** | `lr = 0.01`, `reg = 0.02`, `n_epochs = 20` | RMSE: `0.9437` |
| **Regularized SVD** | `n_factors = 20`, `lr = 0.005`, `reg = 0.05`, `n_epochs = 30` | RMSE: `0.9317` |
| **Factorization Machines** | `n_factors = 10`, `lr = 0.01`, `reg = 0.02`, `n_epochs = 20` | RMSE: `0.9400` |
| **BPR (Pairwise Ranking)** | `n_factors = 20`, `lr = 0.01`, `reg = 0.01`, `n_epochs = 20` | NDCG@10: `0.2141` |

---

## Resultados Finais Consolidados (`ua.base` / `ua.test`)

Avaliação final executada por `run_best.py` sobre a partição `ua` (90.570 avaliações de treino e 9.430 de teste — exatamente 10 avaliações ocultas por usuário):

| Algoritmo | RMSE $\downarrow$ | MAE $\downarrow$ | Precision@10 $\uparrow$ | Recall@10 $\uparrow$ | NDCG@10 $\uparrow$ | MAP@10 $\uparrow$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Simple Memory** | 0.9963 | 0.7931 | 0.0063 | 0.0110 | 0.0074 | 0.0029 |
| **User-Based kNN** | 0.9708 | 0.7619 | 0.0036 | 0.0053 | 0.0041 | 0.0014 |
| **Item-Based kNN** | 0.9616 | 0.7514 | 0.0108 | 0.0167 | 0.0138 | 0.0061 |
| **Slope One** | 0.9628 | 0.7545 | 0.0094 | 0.0155 | 0.0112 | 0.0044 |
| **Simple Model** | 0.9636 | 0.7610 | 0.0970 | 0.1456 | 0.1235 | 0.0564 |
| **Regularized SVD** | **0.9527** | **0.7495** | 0.0882 | 0.1319 | 0.1116 | 0.0493 |
| **Factorization Machines** | 0.9585 | 0.7549 | 0.0684 | 0.1045 | 0.0861 | 0.0365 |
| **BPR (Implicit Ranking)** | — | — | **0.2314** | **0.3694** | **0.3204** | **0.1810** |

### Principais Conclusões Experimentais (`relatorio.tex`)
1. **Dicotomia Predição de Nota vs. Qualidade de Ranking (*Rating Prediction vs. Top-K Ranking*):**
   Modelos treinados para minimizar erro quadrático sobre notas observadas (**Regularized SVD**, com menor RMSE de `0.9527` e MAE de `0.7495`) sofrem de viés de seleção (*missing-not-at-random*) ao ordenar todos os itens candidatos não vistos: um filme de nicho avaliado apenas duas vezes com nota `5.0` recebe estimativa próxima de `5.0` nos métodos de memória/regressão e contamina o topo da lista recomendada.
2. **Superioridade do Otimizador Pairwise (BPR) para Top-K:**
   Ao amostrar itens não consumidos como exemplos negativos implícitos e otimizar diretamente a margem de preferência $\hat{x}_{uij}$, o **BPR** alcançou **NDCG@10 de `0.3204`** e **Recall@10 de `0.3694`** (quase $3\times$ superior ao SVD e mais de $20\times$ superior aos métodos baseados em memória).
3. **Análise de Sensibilidade (`sensitivity_analysis.py`):**
   - Em *User-kNN* e *Item-kNN*, o RMSE cai acentuadamente de $k=5$ até $k=30$ e estabiliza a partir de $k=40$.
   - No *SVD Regularizado*, o aumento de `n_factors` sem regularização adequada ($\lambda < 0.02$) provoca *overfitting* nas épocas finais, enquanto $\lambda = 0.05$ permite aproveitar $f=20\text{--}50$ fatores latentes com ganho consistente.

---

## Estrutura do Projeto e Execução

```text
.
├── dataset_Diagnostic/         # Carregamento do MovieLens 100k e estatísticas de esparsidade
├── evaluation_metrics/         # Implementações de RMSE, MAE, Precision@K, Recall@K, NDCG@K, MAP@K
├── memoryBased/                # SimpleMemory, UserBased, ItemBased e SlopeOne
├── modelBased/                 # SimpleModel, RegularizedSVD, BPR e FactorizationMachines
├── relatorio/                  # Artigo científico em LaTeX (formato ACM) e figuras geradas
├── run.py                      # Execução padrão comparativa
├── hyperparameter_tuning.py    # Grid Search em 5-Fold Cross-Validation (u1..u5)
├── run_best.py                 # Avaliação final com os melhores hiperparâmetros em ua.base/ua.test
├── sensitivity_analysis.py     # Estudo de variação individual de hiperparâmetros
└── charts.py                   # Geração dos gráficos comparativos e matrizes de confusão
```

## Ajuste de Hiperparâmetros (5-Fold Cross-Validation)

Em `hyperparameter_tuning.py`, os algoritmos foram submetidos a busca em grade (*Grid Search*) sobre as 5 partições oficiais (`u1.base`/`u1.test` a `u5.base`/`u5.test`). Enquanto modelos de erro foram otimizados por menor RMSE médio, o BPR foi otimizado maximizando diretamente o **NDCG@10**:

| Algoritmo | Melhores Hiperparâmetros Encontrados (5-Fold CV) | Métrica Alvo (Média CV) |
| :--- | :--- | :---: |
| **Simple Memory** | `alpha = 0.3` | RMSE: `0.9756` |
| **User-Based kNN** | `k = 30`, `sim = 'cosine'` (centrado) | RMSE: `0.9504` |
| **Item-Based kNN** | `k = 30`, `sim = 'adjusted_cosine'` | RMSE: `0.9410` |
| **Slope One** | `shrinkage = 15` | RMSE: `0.9428` |
| **Simple Model (Bias SGD)** | `lr = 0.01`, `reg = 0.02`, `n_epochs = 20` | RMSE: `0.9437` |
| **Regularized SVD** | `n_factors = 20`, `lr = 0.005`, `reg = 0.05`, `n_epochs = 30` | RMSE: `0.9317` |
| **Factorization Machines** | `n_factors = 10`, `lr = 0.01`, `reg = 0.02`, `n_epochs = 20` | RMSE: `0.9400` |
| **BPR (Pairwise Ranking)** | `n_factors = 20`, `lr = 0.01`, `reg = 0.01`, `n_epochs = 20` | NDCG@10: `0.2141` |

---

## Resultados Finais Consolidados (`ua.base` / `ua.test`)

Avaliação final executada por `run_best.py` sobre a partição `ua` (90.570 avaliações de treino e 9.430 de teste — exatamente 10 avaliações ocultas por usuário):

| Algoritmo | RMSE $\downarrow$ | MAE $\downarrow$ | Precision@10 $\uparrow$ | Recall@10 $\uparrow$ | NDCG@10 $\uparrow$ | MAP@10 $\uparrow$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Simple Memory** | 0.9963 | 0.7931 | 0.0063 | 0.0110 | 0.0074 | 0.0029 |
| **User-Based kNN** | 0.9708 | 0.7619 | 0.0036 | 0.0053 | 0.0041 | 0.0014 |
| **Item-Based kNN** | 0.9616 | 0.7514 | 0.0108 | 0.0167 | 0.0138 | 0.0061 |
| **Slope One** | 0.9628 | 0.7545 | 0.0094 | 0.0155 | 0.0112 | 0.0044 |
| **Simple Model** | 0.9636 | 0.7610 | 0.0970 | 0.1456 | 0.1235 | 0.0564 |
| **Regularized SVD** | **0.9527** | **0.7495** | 0.0882 | 0.1319 | 0.1116 | 0.0493 |
| **Factorization Machines** | 0.9585 | 0.7549 | 0.0684 | 0.1045 | 0.0861 | 0.0365 |
| **BPR (Implicit Ranking)** | — | — | **0.2314** | **0.3694** | **0.3204** | **0.1810** |

### Principais Conclusões Experimentais (`relatorio.tex`)
1. **Dicotomia Predição de Nota vs. Qualidade de Ranking (*Rating Prediction vs. Top-K Ranking*):**
   Modelos treinados para minimizar erro quadrático sobre notas observadas (**Regularized SVD**, com menor RMSE de `0.9527` e MAE de `0.7495`) sofrem de viés de seleção (*missing-not-at-random*) ao ordenar todos os itens candidatos não vistos: um filme de nicho avaliado apenas duas vezes com nota `5.0` recebe estimativa próxima de `5.0` nos métodos de memória/regressão e contamina o topo da lista recomendada.
2. **Superioridade do Otimizador Pairwise (BPR) para Top-K:**
   Ao amostrar itens não consumidos como exemplos negativos implícitos e otimizar diretamente a margem de preferência $\hat{x}_{uij}$, o **BPR** alcançou **NDCG@10 de `0.3204`** e **Recall@10 de `0.3694`** (quase $3\times$ superior ao SVD e mais de $20\times$ superior aos métodos baseados em memória).
3. **Análise de Sensibilidade (`sensitivity_analysis.py`):**
   - Em *User-kNN* e *Item-kNN*, o RMSE cai acentuadamente de $k=5$ até $k=30$ e estabiliza a partir de $k=40$.
   - No *SVD Regularizado*, o aumento de `n_factors` sem regularização adequada ($\lambda < 0.02$) provoca *overfitting* nas épocas finais, enquanto $\lambda = 0.05$ permite aproveitar $f=20\text{--}50$ fatores latentes com ganho consistente.

---

## Estrutura do Projeto e Execução

```text
.
├── dataset_Diagnostic/         # Carregamento do MovieLens 100k e estatísticas de esparsidade
├── evaluation_metrics/         # Implementações de RMSE, MAE, Precision@K, Recall@K, NDCG@K, MAP@K
├── memoryBased/                # SimpleMemory, UserBased, ItemBased e SlopeOne
├── modelBased/                 # SimpleModel, RegularizedSVD, BPR e FactorizationMachines
├── relatorio/                  # Artigo científico em LaTeX (formato ACM) e figuras geradas
├── run.py                      # Execução padrão comparativa
├── hyperparameter_tuning.py    # Grid Search em 5-Fold Cross-Validation (u1..u5)
├── run_best.py                 # Avaliação final com os melhores hiperparâmetros em ua.base/ua.test
├── sensitivity_analysis.py     # Estudo de variação individual de hiperparâmetros
└── charts.py                   # Geração dos gráficos comparativos e matrizes de confusão
```

