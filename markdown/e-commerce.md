# BDV E-commerce

> **Categoria:** Graduação — Ciência da Computação (UFRRJ)  
> **Repositório:** [github.com/ravsil/e-commerce](https://github.com/ravsil/e-commerce)  
> **Executar:** [▶ Abrir BDV E-commerce no Navegador](#run:e-commerce.md)

**BDV E-commerce** é uma plataforma web completa de comércio eletrônico voltada para a venda de vestuário masculino e feminino. O sistema permite a navegação pelo catálogo de produtos, busca global em tempo real, gerenciamento de carrinho de compras (tanto para visitantes quanto para usuários autenticados, realizando a mesclagem automática ao fazer login), controle de estoque, painel administrativo e processamento de pagamentos.

---

## Stack Tecnológico

- **Linguagens:** TypeScript, JavaScript, SQL, HTML5, CSS3
- **Backend:** AdonisJS v6 (Node.js), Lucid ORM, VineJS (Validação de Dados), Bouncer (Controle de Permissões e Autorização)
- **Frontend:** Edge.js (Server-Side Rendering Templates), TailwindCSS v4, Vite
- **Banco de Dados:** PostgreSQL (executado em container Docker)
- **Pagamentos:** Integração com **Stripe API** (Checkout e processamento de cartão de crédito)
- **Ingestão de Dados:** Script Node.js (`merge_csv.cjs` com `csv-parse`) para processamento, validação de imagens e conversão monetária de catálogo real a partir de dataset do Kaggle

---

## Funcionalidades

- **Catálogo e Busca Global:** Listagem paginada de produtos com múltiplas imagens, página de detalhes do item e barra de busca global com *debounce* e paginação assíncrona.
- **Carrinho Híbrido (Visitante & Autenticado):** Visitantes podem adicionar produtos ao carrinho (persistido via `localStorage`/cookies) e, ao efetuarem login, o carrinho temporário é mesclado automaticamente ao carrinho da conta no banco de dados.
- **Checkout com Stripe & Controle de Estoque:** Pagamento integrado via Stripe com validação e dedução automática da quantidade disponível em estoque após a confirmação da compra.
- **Gestão de Usuários:** Cadastro, autenticação por sessão, edição de perfil e upload de foto de usuário.
- **Painel Administrativo:** Área restrita (protegida por políticas do Bouncer) para administração de usuários, criação/edição de produtos e reposição ou baixa de estoque.

---

## Como Executar

```bash
# 1. Clonar o repositório e instalar dependências
git clone git@github.com:ravsil/e-commerce.git
cd e-commerce
npm install

# 2. Configurar variáveis de ambiente (.env)
cp .env.example .env
node ace generate:key

# 3. Executar migrações e popular o banco com o dataset
make migrate
make seed

# 4. Iniciar o servidor de desenvolvimento
make run
```
