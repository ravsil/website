# Sistemas de Recomendação — RecSys Framework

> **Categoria:** Graduação — Disciplina de Sistemas de Recomendação (UFRRJ)  
> **Repositório:** [github.com/ravsil/sistemasDeRecomendacao](https://github.com/ravsil/sistemasDeRecomendacao)

Este projeto consiste em um framework modular em Python para implementação, otimização de hiperparâmetros, análise de sensibilidade e comparação experimental de algoritmos de **Sistemas de Recomendação** (filtragem colaborativa baseada em memória e baseada em modelo) sobre o dataset **MovieLens 100k**.

---

## Stack Tecnológico

- **Linguagens:** Python, Shell Script, LaTeX (Relatório científico no formato ACM)
- **Bibliotecas:** NumPy, Pandas, Scikit-Learn, Matplotlib
- **Dataset:** MovieLens 100k (`u1`–`u5` splits para validação cruzada de 5 folds)
- **Métricas Implementadas:**
  - *Previsão de Nota (Rating Prediction):* RMSE e MAE
  - *Qualidade de Ranking (Top-K Recommendation):* Precision@K, Recall@K, NDCG@K e MAP@K

---

## Algoritmos Implementados

### Baseados em Memória (`memoryBased/`)
- **`simple_memory.py`:** Baselines estatísticos (popularidade global, médias por usuário e por item).
- **`user_based.py`:** Filtragem colaborativa kNN baseada em usuários com similaridade de cosseno sobre avaliações centradas na média.
- **`item_based.py`:** Filtragem colaborativa kNN baseada em itens com similaridade *adjusted-cosine*.
- **`slope_one.py`:** Algoritmo Slope One com suavização por contagem (*shrinkage*).

### Baseados em Modelo (`modelBased/`)
- **`simple_model.py`:** Modelo linear baseline com termos de viés (bias global, de usuário e de item).
- **`regularized_svd.py`:** Fatoração de Matrizes via SVD Regularizado treinado com Gradiente Descendente Estocástico (SGD).
- **`bpr.py`:** *Bayesian Personalized Ranking* (BPR) com otimização par-a-par (*pairwise ranking*) voltada para feedback implícito.
- **`fm.py`:** *Factorization Machines* (FM) com codificação *one-hot* de interações usuário-item.

---

## Pipeline Experimental e Execução

1. **Instalação e Download do Dataset:**
   ```bash
   pip install -r requirements.txt
   ./movielens_install.sh
   ```

2. **Execução Padrão dos Algoritmos:**
   ```bash
   python run.py
   ```

3. **Busca de Hiperparâmetros (Grid Search 5-Fold CV):**
   ```bash
   python hyperparameter_tuning.py
   python run_best.py
   ```

4. **Análise de Sensibilidade e Geração de Gráficos (ROC, Scatter, Matriz de Confusão):**
   ```bash
   python sensitivity_analysis.py
   python charts.py
   ```

5. **Compilação do Artigo/Relatório Final (Template ACM):**
   ```bash
   pdflatex relatorio/relatorio.tex
   ```
