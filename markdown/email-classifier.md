# E-mail Classifier

> **Categoria:** Projeto Pessoal  
> **Repositório:** [github.com/ravsil/email-classifier](https://github.com/ravsil/email-classifier)  
> ** Aplicação Online:** [emailclassifier.ravsil.dev](https://emailclassifier.ravsil.dev)

**E-mail Classifier** é uma aplicação web desenvolvida com o intuito de classificar e-mails automaticamente utilizando técnicas de aprendizado de máquina / processamento de texto para melhorar a organização e a eficiência no gerenciamento de mensagens. Os e-mails são classificados em duas categorias principais: **Produtivo** e **Improdutivo**.

---

## Stack Tecnológico

- **Linguagens:** JavaScript (ES6+), HTML5, CSS3
- **Processamento & Classificação:** Classificador de texto executando diretamente no navegador (Client-Side ML), com suporte a treinamento incremental personalizado pelo usuário
- **Formatos Suportados:** Parser nativo de arquivos de caixa de correio `.mbox` e entrada manual de mensagens
- **Persistência:** Armazenamento local (`localStorage`) para retenção de e-mails, classificadores customizados e templates de respostas automáticas
- **Deploy:** GitHub Pages com domínio customizado (`emailclassifier.ravsil.dev`)

---

## Funcionalidades

- Classificação automática de e-mails em *Produtivo* ou *Improdutivo*
- Interface web limpa e intuitiva com painel de configurações (`settings.html`)
- Importação em lote de e-mails através de arquivos `.mbox`
- Adição manual de e-mails para teste e triagem
- Treinamento personalizado para ajustar e criar novos classificadores
- Geração e gerenciamento de respostas automáticas sugeridas para cada categoria
- Personalização completa de regras de resposta e parâmetros de classificação

---

## Como Executar Localmente

O projeto está disponível online em [emailclassifier.ravsil.dev](https://emailclassifier.ravsil.dev), mas também pode ser executado localmente:

```bash
git clone git@github.com:ravsil/email-classifier.git
cd email-classifier
python3 -m http.server 8000
```

Após iniciar o servidor, acesse `http://localhost:8000` no navegador.  
> **Nota:** Caso não possua um arquivo `.mbox`, [uma amostra de testes está disponível no repositório](https://github.com/ravsil/email-classifier/blob/main/assets/sample.mbox).
