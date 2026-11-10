# DataRural — Plataforma de Datasets da UFRRJ

> **Categoria:** Graduação — Trabalho de Conclusão de Curso (TCC) na UFRRJ  
> **Repositórios:** [Aplicação Web (Adonis)](https://github.com/dataRural/adonis) · [Documentação](https://github.com/dataRural/docs) · [Monografia (LaTeX)](https://github.com/dataRural/monografia)

**DataRural** é a plataforma repositório institucional de dados abertos e restritos de pesquisa da Universidade Federal Rural do Rio de Janeiro (UFRRJ). Desenvolvida como Trabalho de Conclusão de Curso (TCC) em Ciência da Computação (em coautoria com Helcio Duarte Dantas e orientação do Prof. Filipe Braida do Carmo), a plataforma é destinada ao compartilhamento, versionamento, gestão de acesso por grupos de pesquisa e catalogação de conjuntos de dados agrícolas, ambientais e acadêmicos.

---

## Stack Tecnológico

- **Linguagens:** TypeScript, SQL, LaTeX (Monografia)
- **Backend:** AdonisJS v6 (Node.js), Lucid ORM, VineJS (Validação), Bouncer (Policies de Autorização), Ally (Social Login)
- **Frontend:** React, Inertia.js, TailwindCSS, Vite
- **Banco de Dados:** PostgreSQL
- **Arquitetura & DevOps:** Monorepo com pnpm Workspaces e TurboRepo, Docker & Docker Compose (PostgreSQL, pgAdmin, Mailpit), Docsify (Documentação técnica)

---

## Funcionalidades Principais

### Gestão e Publicação de Datasets
- **Assistente de Publicação Multi-etapas:** Upload de arquivos CSV com inferência automática de colunas, validações de qualidade (codificação UTF-8, detecção de linhas vazias, consistência de tipos) e cálculo de nota estimada de usabilidade (score meter).
- **Versionamento de Datasets:** Histórico completo de versões de conjuntos de dados com controle de download e atualização de documentação por versão.
- **Licenciamento e Citação:** Suporte a licenças abertas (CC BY 4.0, CC BY-SA, CC BY-NC, ODbL, CC0 e licenças personalizadas), geração automática de citação acadêmica e suporte a identificadores DOI.

### Grupos de Pesquisa e Controle de Acesso
- **Grupos de Usuários:** Criação e gestão de grupos de pesquisa com atribuição de papéis hierárquicos (*Dono*, *Admin*, *Editor*, *Visualizador*).
- **Visibilidade Restrita por Grupo:** Associação de datasets privados a grupos de pesquisa, garantindo que apenas membros autorizados tenham permissão de visualização, download ou edição.
- **Auditoria e Internacionalização:** Sistema de logs de auditoria para rastreamento de ações e suporte a múltiplos idiomas (i18n).

### Busca, Catalogação e Visualização
- **Filtro por Áreas do Conhecimento:** Organização dinâmica dos dados por áreas institucionais (Agronomia, Veterinária, Clima e Meteorologia, Ciências Biológicas, Florestas, Ciências Exatas, entre outras).
- **Painel de Controle (Dashboard):** Gestão integrada de datasets pessoais, favoritos e de grupos com filtros por status (*Publicado*, *Em revisão*, *Rascunho*, *Privado*).
- **Pré-visualização Interativa:** Leitura de amostras de dados, esquema de colunas e documentação (`README.md`) integrada diretamente à página do dataset.

---

## Estrutura do Monorepo

```text
.
├── apps/
│   └── web/                    # Aplicação principal (AdonisJS + Inertia.js + React)
│       ├── app/
│       │   ├── auth/           # Módulo de Autenticação
│       │   ├── dataset/        # Módulo de Datasets (Controllers, Models, UI, Migrations)
│       │   ├── groups/         # Módulo de Grupos de Usuários e Permissões
│       │   ├── marketing/      # Módulo de Páginas Públicas e Landing Page
│       │   ├── users/          # Módulo de Gestão de Usuários e Perfis
│       │   ├── common/         # Componentes React compartilhados e Design System
│       │   └── core/           # Middlewares, Bouncer Policies e Exceções
│       ├── config/             # Configurações do AdonisJS (database, auth, inertia, etc.)
│       ├── database/           # Seeders e Migrações globais
│       └── start/              # Rotas e inicialização do servidor
├── packages/                   # Pacotes compartilhados (UI, configurações)
├── docker-compose.yaml         # Configuração dos serviços Docker (Postgres, Mailpit, pgAdmin)
├── pnpm-workspace.yaml         # Configuração do Workspace pnpm
└── turbo.json                  # Configuração do TurboRepo
```

---

## Como Executar Localmente

```bash
git clone git@github.com:dataRural/adonis.git
cd adonis
pnpm install
cp apps/web/.env.example apps/web/.env
node apps/web/ace generate:key
docker compose up -d
pnpm --filter web exec node ace migration:run
pnpm --filter web exec node ace db:seed
pnpm run dev
```
