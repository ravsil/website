# DataRural — Plataforma de Datasets da UFRRJ

> **Categoria:** Graduação — Trabalho de Conclusão de Curso (TCC) na UFRRJ  
> **Repositório:** [github.com/dataRural/adonis](https://github.com/dataRural/adonis)  
> **Executar:** [▶ Abrir Plataforma DataRural no Navegador](#run:datarural.md)

**DataRural** é a plataforma repositório institucional de dados abertos e restritos de pesquisa da Universidade Federal Rural do Rio de Janeiro (UFRRJ). A plataforma é destinada ao compartilhamento, versionamento, gestão de acesso por grupos de pesquisa e catalogação de conjuntos de dados agrícolas, ambientais e acadêmicos.

---

## Stack Tecnológico

- **Linguagens:** TypeScript, SQL
- **Backend:** AdonisJS v6 (Node.js), Lucid ORM, VineJS (Validação), Bouncer (Policies de Autorização), Ally (Social Login)
- **Frontend:** React, Inertia.js, TailwindCSS, Vite
- **Banco de Dados:** PostgreSQL
- **Arquitetura & DevOps:** Monorepo com pnpm Workspaces e TurboRepo, Docker & Docker Compose (PostgreSQL, pgAdmin, Mailpit)

---

## Funcionalidades Principais

### Gestão e Publicação de Datasets
- **Assistente de Publicação Multi-etapas (5 etapas):** Fluxo guiado (*1. Metadados*, *2. Arquivo*, *3. Esquema*, *4. Licença*, *5. Revisão*) com upload de arquivos CSV, inferência automática de colunas e tipos de dados, validações de qualidade (codificação UTF-8, detecção de linhas vazias, consistência de tipos) e cálculo de nota estimada de usabilidade (*Usability Score*).
- **Versionamento de Datasets:** Histórico completo de versões de conjuntos de dados com controle de download e atualização de documentação por versão.
- **Licenciamento e Citação:** Suporte a licenças abertas (CC BY 4.0, CC BY-SA, CC BY-NC, ODbL, CC0 e licenças personalizadas), geração automática de citação acadêmica (ABNT / BibTeX) e identificadores DOI.

### Grupos de Pesquisa e Controle de Acesso
- **Grupos de Usuários:** Criação e gestão de grupos de pesquisa com atribuição de papéis hierárquicos (*Dono*, *Admin*, *Editor*, *Visualizador*).
- **Visibilidade Restrita por Grupo:** Associação de datasets privados a grupos de pesquisa, garantindo que apenas membros autorizados tenham permissão de visualização, download ou edição.
- **Auditoria e Internacionalização (i18n):** Sistema de logs de auditoria para rastreamento de ações e suporte nativo a Português (`pt`) e Inglês (`en`), além de tema claro e escuro.

### Busca, Catalogação e Visualização
- **Filtro por Áreas do Conhecimento:** Organização dinâmica dos dados por áreas institucionais (*Agronomia*, *Veterinária*, *Clima e Meteorologia*, *Ciências Biológicas*, *Florestas*, *Ciências Exatas*, entre outras).
- **Painel de Controle (Meus Datasets):** Gestão integrada de datasets pessoais, favoritos e de grupos com filtros por status (*Publicado*, *Em revisão*, *Rascunho*, *Privado*).
- **Explorador de Dados Integrado:** Pré-visualização tabular de amostras de dados, estatísticas descritivas de colunas, esquema de tipos e documentação (`README.md`) diretamente na página do dataset.

---

## Estrutura do Monorepo

```text
.
├── apps/
│   └── web/                    # Aplicação principal (AdonisJS + Inertia.js + React)
│       ├── app/
│       │   ├── auth/           # Módulo de Autenticação (Sign In, Sign Up, Social)
│       │   ├── dataset/        # Módulo de Datasets (Controllers, Models, UI, Migrations)
│       │   ├── groups/         # Módulo de Grupos de Usuários e Permissões
│       │   ├── marketing/      # Landing Page institucional (Hero, Categorias, Destaques)
│       │   ├── users/          # Módulo de Gestão de Usuários e Perfis
│       │   ├── common/         # Design System DataRural (Navbar, Cards, Ícones, i18n)
│       │   └── core/           # Middlewares, Bouncer Policies, CSS e Exceções
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
