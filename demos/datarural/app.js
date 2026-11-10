// ============================================================
// DataRural — Plataforma de Datasets da UFRRJ
// Client-side Application Replica based on adonis web app
// ============================================================

const TRANSLATIONS = {
  pt: {
  "common": {
    "layout": {
      "navMain": {
        "dashboard": "Dashboard",
        "administration": "Administração",
        "users": "Usuários"
      },
      "navUser": {
        "settings": "Configurações",
        "logout": "Sair"
      }
    },
    "nav": {
      "datasets": "Datasets",
      "my_datasets": "Meus datasets",
      "favorites": "Favoritos",
      "groups": "Grupos",
      "management": "Gestão",
      "publish_dataset": "Publicar dataset",
      "sign_in": "Entrar",
      "sign_up": "Criar conta",
      "theme_light": "Tema claro",
      "theme_dark": "Tema escuro",
      "toggle_theme": "Alternar tema",
      "user_menu": {
        "default_user": "Usuário UFRRJ",
        "my_profile": "Meu perfil",
        "my_datasets": "Meus datasets",
        "my_groups": "Meus grupos",
        "favorites": "Favoritos",
        "account_settings": "Configurações da conta",
        "logout": "Sair"
      }
    },
    "footer": {
      "about_1": "Plataforma institucional de datasets da Universidade Federal Rural do Rio de Janeiro.",
      "about_2": "Dados abertos para ensino, pesquisa e extensão.",
      "platform": "Plataforma",
      "explore_datasets": "Explorar datasets",
      "publish_data": "Publicar dados",
      "resources": "Recursos",
      "documentation": "Documentação",
      "institutional": "Institucional",
      "ufrrj": "UFRRJ",
      "copyright": "© 2026 Universidade Federal Rural do Rio de Janeiro · DataRural"
    },
    "table": {
      "filters": {
        "clear_filters": "Limpar os filtros",
        "no_results": "Nenhum resultado encontrado.",
        "nb_selected": "selecionados"
      },
      "row_actions": {
        "clear": "Limpar"
      },
      "no_results": "Nenhum resultado encontrado.",
      "pagination": {
        "rows_per_page": "Linhas por página",
        "go_first_page": "Ir para a primeira página",
        "go_previous_page": "Ir para a página anterior",
        "go_next_page": "Ir para a próxima página",
        "go_last_page": "Ir para a última página",
        "page_of": "Página {current} de {total}"
      }
    },
    "confirm_dialog": {
      "cancel": "Cancelar",
      "continue": "Continuar"
    }
  },
  "marketing": {
    "hero": {
      "eyebrow": "Repositório institucional de dados abertos",
      "title_prefix": "Encontre, explore e reutilize os ",
      "title_hl": "dados da Rural",
      "lead": "Uma plataforma para publicar, versionar e consumir conjuntos de dados acadêmicos e administrativos da UFRRJ — com metadados ricos, licenças explícitas e estatísticas de uso.",
      "search_placeholder": "Buscar datasets — ex.: produção agrícola, clima, solos…",
      "search_button": "Buscar"
    },
    "publish_cta": {
      "title": "Você produz dados na Rural? Publique-os aqui.",
      "subtitle": "Transforme planilhas dispersas em um repositório vivo, documentado e reutilizável pela comunidade acadêmica.",
      "step1": "Envie seu arquivo CSV",
      "step2": "Descreva metadados e licença",
      "step3": "Publique e acompanhe o uso",
      "btn_publish": "Publicar dataset",
      "btn_my_datasets": "Meus datasets"
    },
    "datasets_section": {
      "title": "Datasets",
      "tab_recent": "Recentes",
      "tab_featured": "Em destaque",
      "view_grid": "Grade",
      "view_list": "Lista"
    },
    "categories": {
      "title": "Explore por área de conhecimento",
      "subtitle": "Dados organizados pelos institutos e unidades da Universidade.",
      "all_areas": "Todas as áreas",
      "see_more": "Ver mais áreas",
      "see_less": "Ver menos áreas"
    },
    "stats": {
      "public_datasets": "Datasets públicos",
      "knowledge_areas": "Áreas do conhecimento",
      "research_groups": "Grupos de pesquisa",
      "researchers": "Pesquisadores"
    }
  },
  "dataset": {
    "index": {
      "page": {
        "breadcrumbs": {
          "dataset": "Conjunto de dados"
        },
        "title": "Enviar conjunto de dados",
        "description": "Envie um CSV e o servidor vai armazenar localmente como uma pasta de dataset.",
        "actions": {
          "open_viewer": "Abrir visualizador de dataset"
        },
        "form": {
          "title": "Novo dataset",
          "intro": "O servidor criará a arvore de diretórios e gerará o README do envio.",
          "name": {
            "label": "Nome do dataset",
            "placeholder": "Dataset X"
          },
          "version": {
            "label": "Versao"
          },
          "file": {
            "label": "Arquivo CSV"
          },
          "description": {
            "label": "Observacoes do README",
            "placeholder": "Notas curtas que serao gravadas em README.md"
          },
          "actions": {
            "submit": "Salvar dataset",
            "saving": "Salvando..."
          },
          "note": "Nomes de dataset devem ser unicos. Para enviar um novo arquivo para um dataset existente, use o botao de atualizacao no visualizador. Os arquivos ficam em storage/datasets."
        },
        "side": {
          "title": "Caminho de armazenamento",
          "description": "Os envios seguem a estrutura de pastas definida no documento de banco de dados."
        },
        "list": {
          "title": "Datasets salvos",
          "intro": "Visualizacao simples dos datasets persistidos no banco de dados.",
          "empty": "Nenhum dataset encontrado ainda.",
          "dataset_id": "Dataset #{id}",
          "created_at": "Criado em: {date}",
          "root_path": "Caminho raiz do dataset",
          "versions": "Versões",
          "no_versions": "Nenhuma versao vinculada a este dataset."
        }
      }
    },
    "view": {
      "page": {
        "breadcrumb": "Visualizador",
        "title": "Visualizador de dataset",
        "description": "Visualize o conteudo CSV do dataset salvo localmente.",
        "actions": {
          "back_upload": "Voltar para envio",
          "open_update": "Atualizar este dataset",
          "cancel_update": "Cancelar atualizacao"
        },
        "update": {
          "intro": "Envie um novo CSV para criar outra versao do dataset selecionado.",
          "version": {
            "label": "Nome da versao"
          },
          "file": {
            "label": "Arquivo CSV"
          },
          "description": {
            "label": "Observações do README",
            "placeholder": "Notas curtas para esta nova versao"
          },
          "actions": {
            "submit": "Salvar versão",
            "saving": "Salvando versão..."
          }
        },
        "datasets": "Datasets",
        "versions": "Versões",
        "preview_title": "Prévia do conteudo",
        "readme_title": "Prévia do README",
        "no_readme": "Nenhum conteudo de README disponivel para esta versao.",
        "no_content": "Nenhum conteudo CSV disponivel para visualizacao.",
        "empty": "Nenhum dataset encontrado ainda."
      }
    },
    "dashboard": {
      "title": "Meus datasets",
      "sub": "Gerencie o que você publica, acompanhe o uso e envie novas versões.",
      "breadcrumb_home": "Início",
      "breadcrumb_my": "Meus datasets",
      "publish_btn": "Publicar dataset",
      "stats_published": "Datasets publicados",
      "stats_likes": "Curtidas totais",
      "stats_trend": "Total",
      "group_all": "Todos os grupos / Pessoal",
      "group_none": "Somente Pessoal (Sem grupo)",
      "group_prefix": "Grupo: ",
      "filter_all": "Todos",
      "filter_published": "Publicados",
      "filter_draft": "Rascunhos",
      "filter_private": "Privados",
      "search_placeholder": "Buscar nos meus datasets…",
      "empty": "Nenhum dataset encontrado."
    },
    "explore": {
      "title": "Explorar Datasets",
      "sub": "Pesquise e navegue por todos os conjuntos de dados públicos da UFRRJ.",
      "search_placeholder": "Buscar por nome, palavra-chave, departamento ou metadados…",
      "filter_by_area": "Filtrar por Área do Conhecimento",
      "clear_area_filter": "Remover filtro de área ({area})",
      "showing_count": "Exibindo {count} datasets",
      "showing_count_one": "Exibindo {count} dataset",
      "clear_filters": "Limpar filtros",
      "clear_search": "Limpar busca",
      "sort_recent": "Mais recentes",
      "sort_featured": "Maior usabilidade",
      "sort_popular": "Mais curtidos",
      "view_grid": "Visualização em grade",
      "view_list": "Visualização em lista",
      "no_datasets_found": "Nenhum dataset encontrado",
      "no_matching_filters": "Não encontramos nenhum conjunto de dados correspondente aos filtros aplicados.",
      "no_datasets_in_catalog": "Ainda não existem datasets cadastrados no catálogo.",
      "clear_search_and_filters": "Limpar busca e filtros"
    },
    "favorites": {
      "title": "Meus Favoritos",
      "sub": "Conjuntos de dados que você marcou como favoritos para acesso rápido.",
      "empty": "Você ainda não possui nenhum dataset favorito.",
      "search_placeholder": "Buscar nos seus favoritos…",
      "clear_search": "Limpar busca",
      "saved_count": "Você tem {count} datasets salvos",
      "saved_count_one": "Você tem {count} dataset salvo",
      "no_favorites_found": "Nenhum favorito encontrado",
      "no_saved_yet": "Nenhum dataset salvo ainda",
      "no_matching_search": "Não encontramos nenhum dataset nos seus favoritos com este termo.",
      "empty_hint": "Quando você encontrar datasets interessantes no catálogo, clique no botão \"Salvar\" para guardar o dataset na sua lista de favoritos.",
      "explore_catalog": "Explorar catálogo de datasets"
    },
    "show": {
      "share": "Compartilhar",
      "copy_link": "Copiar link",
      "copied": "Copiado!",
      "like": "Curtir",
      "favorite": "Favoritar",
      "download": "Download",
      "usability": "usabilidade",
      "rows_suffix": "linhas",
      "edit": "Editar",
      "new_version": "Nova versão",
      "delete": "Excluir",
      "save": "Salvar",
      "saved": "Salvo",
      "link_copied": "Link copiado!",
      "email": "Email",
      "tabs": {
        "overview": "Visão geral",
        "viewer": "Visualizador",
        "files": "Arquivos",
        "versions": "Versões"
      },
      "related_title": "Datasets relacionados",
      "related_sub": "Outros conjuntos da mesma área e linha de pesquisa.",
      "see_all": "Ver todos"
    },
    "publish": {
      "title": "Publicar Dataset",
      "title_edit": "Editar Dataset",
      "sub": "Preencha as etapas abaixo para disponibilizar seu conjunto de dados.",
      "breadcrumb_home": "Início",
      "breadcrumb_publish": "Publicar dataset",
      "breadcrumb_edit": "Editar dataset",
      "exit_btn": "Sair sem salvar",
      "step_label": "Etapa {num}",
      "steps": {
        "file": "Arquivo",
        "metadata": "Metadados",
        "schema": "Esquema",
        "license": "Licença",
        "review": "Revisão"
      },
      "step_heads": [
        {
          "h": "Envie seu arquivo de dados",
          "p": "Faça o upload do conjunto. Detectamos colunas, tipos e qualidade automaticamente."
        },
        {
          "h": "Descreva o dataset",
          "p": "Bons metadados tornam seus dados encontráveis e reutilizáveis pela comunidade."
        },
        {
          "h": "Refine o esquema",
          "p": "Confirme os tipos e descreva cada coluna — isso eleva a nota de usabilidade."
        },
        {
          "h": "Defina licença e acesso",
          "p": "Escolha como a comunidade pode reutilizar seus dados."
        },
        {
          "h": "Revise e publique",
          "p": "Confira tudo antes de enviar para a curadoria DataRural."
        }
      ],
      "actions": {
        "next": "Próximo",
        "prev": "Anterior",
        "submit": "Publicar dataset",
        "submit_save": "Salvar alterações",
        "saving": "Publicando...",
        "saving_edit": "Salvando..."
      }
    },
    "detail": {
      "about": "Sobre este conjunto de dados",
      "no_desc": "Nenhuma descrição disponível para este conjunto de dados.",
      "usability_index": "Índice de usabilidade",
      "how_calculated": "como é calculado",
      "score_out_of": "de 10",
      "quality_lead": "Pontuação alta: o conjunto tem documentação completa, proveniência rastreável e licença aberta.",
      "column_dict": "Dicionário de colunas",
      "cols_count": "{count} colunas",
      "files_panel": "Arquivos da versão",
      "primary_file": "Arquivo Principal",
      "version_history": "Histórico de versões",
      "published_on": "Publicado em {date}",
      "initial_version_note": "Versão inicial ou atualizações gerais dos dados.",
      "previous_version_note": "Versão anterior arquivada.",
      "restore_confirm": "Deseja restaurar a versão {name} como a mais recente?",
      "delete_confirm": "Tem certeza de que deseja excluir a versão {name}?",
      "view_version": "Visualizar",
      "current_badge": "Atual",
      "download": "Download",
      "restore": "Restaurar",
      "delete": "Excluir"
    },
    "viewer": {
      "main_dataset": "Dataset Principal",
      "rows": "linhas",
      "columns": "colunas",
      "mode_table": "Tabela",
      "mode_columns": "Colunas",
      "previous_page": "Anterior",
      "next_page": "Próximo",
      "page_info": "Página {current} de {total}"
    },
    "rail": {
      "license": "Licença",
      "click_terms": "Clique para ler os termos completos",
      "metadata": "Metadados",
      "format": "Formato",
      "size": "Tamanho",
      "rows_cols": "Linhas × Colunas",
      "provenance": "Proveniência",
      "temp_coverage": "Cobertura temporal",
      "geo_coverage": "Cobertura geográfica",
      "maintainers": "Mantenedores",
      "tags": "Tags"
    },
    "license_modal": {
      "title": "Termos da Licença",
      "main_terms": "Principais Termos de Uso",
      "full_legal_text": "Ver texto legal completo",
      "registered_license": "Licença registrada na plataforma",
      "understood": "Entendido"
    },
    "column_stats": {
      "kind_numeric": "numérico",
      "kind_datetime": "data/hora",
      "kind_category": "categoria",
      "min": "mín",
      "mean": "média",
      "max": "máx",
      "range": "intervalo",
      "valid_pct": "{valid}% válidos",
      "unique_count": "{count} únicos"
    },
    "card": {
      "no_title": "Sem título",
      "no_desc": "Nenhuma descrição fornecida para este conjunto de dados.",
      "default_unit": "Instituto de Ciências Exatas",
      "general_tag": "Geral",
      "recently": "Recentemente",
      "like_title": "Curtir dataset",
      "save_title": "Salvar dataset",
      "unsave_title": "Remover dos favoritos",
      "usability_title": "Índice de usabilidade",
      "proprietary_license": "Proprietária"
    },
    "step_metadata": {
      "title_label": "Título do dataset",
      "title_placeholder": "Ex.: Dados Meteorológicos (2010-2024)",
      "title_hint": "Seja específico: inclua local e período cobertos.",
      "desc_label": "Descrição",
      "desc_placeholder": "Descreva o que o conjunto contém, como foi coletado, a frequência das medições e usos recomendados.",
      "unit_label": "Unidade / Instituto",
      "area_label": "Área de conhecimento",
      "period_label": "Período de cobertura",
      "period_placeholder": "2010 – 2024",
      "region_label": "Região / Local",
      "region_placeholder": "Nova Iguaçu, RJ",
      "tags_label": "Tags",
      "tags_placeholder": "Digite e pressione Enter…"
    },
    "step_license": {
      "license_subhead": "Licença de uso",
      "commercial_use": "Uso comercial",
      "derivatives": "Derivações",
      "visibility_subhead": "Visibilidade",
      "public_title": "Público",
      "public_desc": "Qualquer pessoa pode encontrar, visualizar e baixar.",
      "restricted_title": "Restrito",
      "restricted_desc": "Acesso mediante solicitação aprovada pelo autor.",
      "group_subhead": "Grupo (opcional)",
      "no_group": "Nenhum grupo — somente você",
      "group_hint": "Membros do grupo selecionado poderão ver este dataset."
    },
    "step_review": {
      "file_card_title": "Arquivo",
      "filename": "Nome do arquivo",
      "size": "Tamanho",
      "content": "Conteúdo",
      "content_val": "{rows} linhas · {cols} colunas",
      "metadata_card_title": "Metadados",
      "title": "Título",
      "unit": "Unidade",
      "area": "Área",
      "period": "Período",
      "tags": "Tags",
      "license_vis_card_title": "Licença & visibilidade",
      "license": "Licença",
      "visibility": "Visibilidade",
      "public": "Público",
      "restricted": "Restrito",
      "edit": "Editar",
      "confirm_label": "Confirmo que tenho autorização para publicar estes dados e que eles estão de acordo com a Política de Dados Abertos da UFRRJ e a LGPD (sem dados pessoais identificáveis)."
    },
    "publish_success": {
      "heading": "Dataset enviado para curadoria!",
      "message": "foi recebido e está na fila de revisão da equipe DataRural. Você será notificado por e-mail quando ele for ao ar — normalmente em até 2 dias úteis.",
      "my_datasets": "Ir para Meus datasets",
      "preview": "Pré-visualizar página",
      "status": "Status",
      "in_review": "Em revisão",
      "version": "Versão",
      "identifier": "Identificador"
    },
    "submission_error": {
      "title": "Não foi possível enviar o dataset",
      "one_issue": "1 pendência encontrada",
      "other_issues": "{count} pendências encontradas",
      "subtitle": "Corrija os itens indicados abaixo antes de concluir a publicação:",
      "go_to_step": "Ir para {step}",
      "dismiss": "Fechar aviso"
    },
    "step_schema": {
      "select_csv": "Selecione o arquivo CSV para editar o esquema:",
      "primary": "Principal",
      "describe_cols": "Descreva as colunas:",
      "schema_tail": "{count} colunas · descrições elevam a usabilidade",
      "th_col": "Coluna",
      "th_type": "Tipo",
      "th_desc": "Descrição",
      "th_unit": "Unidade",
      "type_num": "Número",
      "type_text": "Texto",
      "type_date": "Data",
      "type_geo": "Geo",
      "desc_placeholder": "O que esta coluna representa?"
    },
    "step_file": {
      "drag_drop_title": "Arraste seus arquivos CSV aqui ou clique para selecionar",
      "drag_drop_desc": "Você pode enviar múltiplos arquivos CSV de uma só vez para o mesmo dataset.",
      "select_btn": "Selecionar arquivos",
      "selected_files": "Arquivos selecionados ({count})",
      "add_more": "Adicionar mais arquivos",
      "primary_badge": "Dataset Principal",
      "make_primary": "Definir como principal",
      "rows_cols": "{size} · {rows} linhas · {cols} colunas",
      "previewing": "Visualizando prévia",
      "remove_file": "Remover arquivo",
      "preview_subhead": "Pré-visualização:",
      "primary_label": "(Principal)",
      "first_rows": "primeiras 3 linhas de {rows}",
      "stats_tail": "{cols} colunas · {num} numéricas · {text} texto · {date} data · {geo} geo — tipos inferidos automaticamente para {filename}.",
      "qa_subhead": "Validação de qualidade:",
      "usability_title": "Usabilidade média estimada:",
      "usability_exc": "excelente",
      "usability_good": "boa",
      "usability_fair": "regular",
      "usability_desc": "Nota calculada considerando a média de qualidade dos {count} arquivos CSV enviados."
    },
    "new_version": {
      "title": "Nova versão",
      "breadcrumb_home": "Início",
      "breadcrumb_new_version": "Nova versão",
      "page_sub": "Envie um novo arquivo CSV para criar a versão {version} do dataset",
      "cancel": "Cancelar",
      "back": "Voltar",
      "continue": "Continuar",
      "step1_indicator": "Enviar arquivo",
      "step2_indicator": "Detalhes e publicar",
      "step1_title": "Envie o novo arquivo CSV",
      "step1_desc": "Faça o upload do conjunto de dados atualizado. Detectamos colunas, tipos e qualidade automaticamente.",
      "step2_title": "Detalhes da versão",
      "step2_desc": "Defina o nome da versão e adicione notas sobre as alterações.",
      "version_name_label": "Nome da versão",
      "version_change": "Versão atual: {current} → Nova: {next}",
      "version_notes_label": "Notas da versão (opcional)",
      "version_notes_placeholder": "Descreva as alterações feitas nesta versão...",
      "cols_rows": "{size} • {cols} colunas • {rows} linhas",
      "existing_versions": "Versões existentes",
      "publishing": "Enviando...",
      "publish_btn": "Publicar versão {version}"
    },
    "table": {
      "edit_metadata": "Editar metadados",
      "new_version": "Enviar nova versão",
      "public_page": "Ver página pública",
      "delete": "Excluir",
      "delete_confirm": "Tem certeza que deseja excluir o dataset \"{title}\"? Esta ação não pode ser desfeita.",
      "rows_suffix": "linhas",
      "make_private": "Clique para tornar Privado",
      "make_public": "Clique para tornar Público",
      "likes": "curtidas",
      "th_dataset": "Dataset",
      "th_status": "Status",
      "th_likes": "Curtidas",
      "th_usability": "Usabilidade",
      "empty_title": "Nenhum dataset nesta visão",
      "empty_sub": "Ajuste os filtros ou publique um novo conjunto de dados.",
      "publish_btn": "Publicar dataset"
    },
    "areas_admin": {
      "title": "Áreas de Conhecimento Cadastradas",
      "subtitle": "Gerencie as categorias de dados disponíveis para os pesquisadores ao publicar e filtrar datasets.",
      "new_area": "Nova Área",
      "loading": "Carregando áreas…",
      "empty": "Nenhuma área cadastrada. Clique em \"Nova Área\" para criar a primeira.",
      "th_icon": "Ícone / Cor",
      "th_name": "Nome da Área",
      "th_code": "Código (Slug)",
      "th_desc": "Descrição",
      "th_datasets": "Datasets",
      "th_actions": "Ações",
      "edit": "Editar",
      "delete": "Excluir",
      "modal_edit": "Editar Área do Conhecimento",
      "modal_new": "Nova Área do Conhecimento",
      "name_label": "Nome da área *",
      "name_placeholder": "Ex.: Biotecnologia, Engenharia Agrícola…",
      "code_label": "Código identificador (Slug)",
      "code_placeholder": "Ex.: biotec (deixe em branco para gerar automático)",
      "icon_label": "Ícone",
      "color_label": "Cor / Tema da Área",
      "custom_hex": "Ou cor customizada (HEX):",
      "desc_label": "Descrição (Opcional)",
      "desc_placeholder": "Breve resumo sobre o conteúdo desta área de conhecimento…",
      "cancel": "Cancelar",
      "saving": "Salvando…",
      "save_changes": "Salvar alterações",
      "create_area": "Criar área",
      "delete_title": "Excluir Área do Conhecimento",
      "delete_confirm": "Tem certeza que deseja excluir a área {name} ({code})?",
      "deleting": "Excluindo…",
      "yes_delete": "Sim, excluir"
    }
  },
  "groups": {
    "index": {
      "title": "Meus Grupos",
      "sub": "Gerencie os grupos de que você participa e compartilhe datasets com sua equipe.",
      "breadcrumb_home": "Início",
      "breadcrumb_my": "Meus grupos",
      "create_btn": "Criar grupo",
      "search_placeholder": "Buscar grupo…",
      "empty_search": "Nenhum grupo encontrado",
      "empty_search_sub": "Tente outro termo de busca.",
      "empty_no_groups": "Você ainda não participa de nenhum grupo",
      "empty_no_groups_sub": "Crie seu primeiro grupo para compartilhar datasets com sua equipe."
    },
    "show": {
      "title": "Grupo",
      "breadcrumb_home": "Início",
      "breadcrumb_my": "Meus grupos",
      "created_by": "Criado por",
      "tabs": {
        "members": "Membros",
        "datasets": "Datasets"
      },
      "edit": "Editar",
      "save": "Salvar",
      "cancel": "Cancelar",
      "delete": "Excluir grupo",
      "add_member": "Adicionar membro",
      "remove_member_confirm": "Remover {name} do grupo?",
      "remove_from_group": "Remover do grupo",
      "empty_datasets": "Nenhum dataset neste grupo",
      "empty_datasets_sub": "Adicione datasets existentes a este grupo no painel de publicação.",
      "by": "por",
      "updated": "Atualizado",
      "status": {
        "published": "Publicado",
        "review": "Em revisão",
        "draft": "Rascunho",
        "unpublished": "Privado"
      },
      "card": {
        "owner": "Dono",
        "admin": "Admin",
        "editor": "Editor",
        "viewer": "Visualizador",
        "created_by": "Criado por",
        "member_one": "membro",
        "member_other": "membros",
        "dataset_one": "dataset",
        "dataset_other": "datasets"
      },
      "roles": {
        "owner": "Dono",
        "admin": "Admin",
        "editor": "Editor",
        "viewer": "Visualizador"
      },
      "dialogs": {
        "create_group": {
          "title": "Criar grupo",
          "name_label": "Nome do grupo *",
          "name_placeholder": "Ex: Laboratório de Climatologia",
          "desc_label": "Descrição",
          "desc_placeholder": "Breve descrição do propósito do grupo (opcional)",
          "cancel": "Cancelar",
          "submit": "Criar grupo"
        },
        "add_member": {
          "title": "Adicionar membro ao grupo",
          "email_label": "Buscar usuário por nome, @username ou e-mail",
          "roles": {
            "viewer": "Pode ver datasets do grupo",
            "editor": "Pode adicionar e editar datasets",
            "admin": "Pode gerenciar membros e datasets"
          }
        }
      }
    },
    "card": {
      "members_count": "membro",
      "datasets_count": "dataset",
      "owner": "Proprietário",
      "admin": "Administrador",
      "editor": "Editor",
      "viewer": "Visualizador"
    },
    "dialogs": {
      "create_group": {
        "title": "Criar Novo Grupo",
        "sub": "Organize sua equipe e compartilhe conjuntos de dados de forma colaborativa.",
        "name_label": "Nome do grupo",
        "name_placeholder": "ex.: Laboratório de Solos e Nutrição",
        "desc_label": "Descrição (opcional)",
        "desc_placeholder": "Descreva o propósito do grupo…",
        "submit": "Criar grupo",
        "cancel": "Cancelar"
      },
      "add_member": {
        "title": "Adicionar Membro",
        "sub": "Convide um usuário registrado para participar deste grupo.",
        "email_label": "E-mail do usuário",
        "email_placeholder": "pesquisador@ufrrj.br",
        "role_label": "Função no grupo",
        "roles": {
          "admin": "Administrador — pode gerenciar membros e datasets",
          "editor": "Editor — pode adicionar e editar datasets",
          "viewer": "Visualizador — apenas visualiza datasets do grupo"
        },
        "submit": "Adicionar",
        "cancel": "Cancelar",
        "searching": "Buscando…",
        "empty_search": "Nenhum usuário encontrado.",
        "change_user": "Trocar usuário"
      }
    }
  },
  "auth": {
    "signin": {
      "title": "Acesse sua conta",
      "description": "Digite seu e-mail abaixo para acessar sua conta",
      "form": {
        "email": {
          "label": "E-mail",
          "placeholder": "Digite seu e-mail"
        },
        "password": {
          "label": "Senha",
          "placeholder": "Digite sua senha"
        }
      },
      "actions": {
        "forgot_password": "Esqueceu sua senha?",
        "submit": "Entrar",
        "google": "Entrar com o Google"
      },
      "divider": "Ou continue com",
      "no_account": {
        "text": "Ainda não tem uma conta?",
        "sign_up": "Cadastre-se"
      },
      "error": {
        "invalid": "E-mail ou senha inválidos"
      }
    },
    "forgot_password": {
      "title": "Esqueceu sua senha?",
      "description": "Digite seu e-mail abaixo para receber o link de recuperação.",
      "form": {
        "email": {
          "label": "E-mail",
          "placeholder": "usuario@ufrrj.br"
        }
      },
      "actions": {
        "submit": "Enviar"
      },
      "toast": {
        "title": "E-mail enviado",
        "description": "Enviamos o link para recuperação de senha."
      },
      "back_to_login": {
        "text": "Lembrou sua senha?",
        "login": "Entrar"
      }
    },
    "registration": {
      "title": "Crie sua conta",
      "description": "Preencha os campos abaixo para criar sua conta",
      "form": {
        "full_name": {
          "label": "Nome completo",
          "placeholder": "Seu nome completo"
        },
        "username": {
          "label": "Nome de usuário",
          "placeholder": "Escolha seu nome de usuário (ex: joaosilva)"
        },
        "email": {
          "label": "Email",
          "placeholder": "m@ufrrj.br"
        },
        "password": {
          "label": "Senha",
          "placeholder": "Digite uma senha forte"
        },
        "password_confirmation": {
          "label": "Confirme sua senha",
          "placeholder": "Repita sua senha"
        }
      },
      "actions": {
        "submit": "Criar conta"
      },
      "already_account": {
        "text": "Já tem uma conta?",
        "login": "Entrar"
      }
    },
    "emails": {
      "reset_password": {
        "subject": "Redefina sua senha para o aplicativo",
        "title": "Ops!",
        "subtitle": "Parece que você esqueceu sua senha.",
        "action_btn": "Redefinir senha",
        "default_message": "Se você não fez esta solicitação, ignore este e-mail. Caso contrário, clique no botão acima para redefinir sua senha."
      }
    },
    "reset_password": {
      "title": "Redefinir sua senha",
      "description": "Escolha uma nova senha para a sua conta.",
      "form": {
        "password": {
          "label": "Nova Senha"
        },
        "password_confirmation": {
          "label": "Confirmar Senha",
          "placeholder": "Confirme a nova senha"
        }
      },
      "actions": {
        "submit": "Redefinir Senha"
      }
    }
  },
  "users": {
    "layout": {
      "title": "Configurações",
      "description": "Gerencie seu perfil e as configurações da conta",
      "profile": "Perfil",
      "password": "Senha",
      "tokens": "Tokens"
    },
    "index": {
      "page": {
        "title": "Usuários",
        "description": "Gerencie os usuários da sua aplicação",
        "breadcrumbs": {
          "users": "Usuários"
        }
      },
      "table": {
        "columns": {
          "full_name": "Nome completo",
          "email": "E-mail",
          "role": "Papel"
        },
        "filters": {
          "search_placeholder": "Pesquisar...",
          "role": "Papel",
          "clear_filters": "Limpar os filtros",
          "no_results": "Nenhum resultado encontrado."
        },
        "row_actions": {
          "impersonate": "Entrar como",
          "edit": "Editar",
          "delete": "Excluir",
          "open_menu": "Abrir menu",
          "clear": "Limpar"
        },
        "not_provided": "Não informado"
      },
      "toolbar": {
        "invite": "Convidar",
        "add": "Adicionar"
      }
    },
    "admin": {
      "title": "Painel Administrativo",
      "sub": "Gerenciamento de usuários, permissões, áreas do conhecimento e logs de auditoria.",
      "breadcrumb_home": "Início",
      "breadcrumb_admin": "Administração",
      "tabs": {
        "users": "Gestão de Usuários",
        "areas": "Áreas do Conhecimento",
        "audits": "Logs de Auditoria"
      },
      "audits": {
        "title": "Logs de Auditoria",
        "search_placeholder": "Pesquisar por evento, usuário, tabela ou ID…",
        "search_button": "Buscar",
        "event_label": "Filtrar por evento",
        "event_all": "Todos os eventos",
        "event_create": "Criação",
        "event_update": "Atualização",
        "event_delete": "Excluir",
        "details_modal": "Detalhes da Auditoria",
        "old_values": "Valores Anteriores",
        "new_values": "Valores Novos",
        "view_details": "Ver Detalhes"
      }
    },
    "settings_layout": {
      "breadcrumb_home": "Início",
      "breadcrumb_settings": "Configurações",
      "title": "Minha Conta",
      "sub": "Gerencie seus dados pessoais, senha de acesso e preferências."
    },
    "password": {
      "breadcrumbs": {
        "settings": "Configurações"
      },
      "title": "Alterar Senha",
      "description": "Certifique-se de que sua conta esteja usando uma senha longa e aleatória para se manter segura."
    },
    "profile": {
      "breadcrumbs": {
        "settings": "Configurações"
      },
      "title": "Informações do Perfil",
      "description": "Atualize suas informações pessoais e foto de perfil.",
      "avatar_hint": "JPG, GIF ou PNG. Máximo 1MB.",
      "username": "Nome de usuário",
      "username_placeholder": "Ex: rafael_vasconcelos",
      "username_hint": "Seu perfil público estará disponível em datarural.ufrrj.br/u/{username}",
      "bio": "Biografia",
      "bio_placeholder": "Escreva uma breve biografia para o seu perfil público...",
      "institution": "Instituição / Unidade",
      "institution_placeholder": "Ex: Instituto de Ciências Exatas — UFRRJ",
      "location": "Localização",
      "location_placeholder": "Ex: Seropédica, Rio de Janeiro"
    },
    "public_profile": {
      "tab_overview": "Visão Geral",
      "tab_datasets": "Datasets",
      "tab_groups": "Grupos",
      "tab_activity": "Atividades",
      "default_user": "Usuário DataRural",
      "no_bio_own": "Sem biografia informada. Clique em Editar perfil para adicionar.",
      "no_bio_other": "Nenhuma biografia informada.",
      "edit_profile": "Editar perfil",
      "no_institution": "Nenhuma instituição informada",
      "no_location": "Nenhuma localização informada",
      "member_since": "Membro desde {date}",
      "groups_title": "Grupos ({count})",
      "no_groups": "Nenhum grupo participante.",
      "role_owner": "Dono",
      "role_admin": "Admin",
      "role_member": "Membro",
      "featured_datasets": "Datasets em Destaque",
      "no_datasets_title": "Nenhum dataset publicado ainda",
      "no_datasets_sub": "Este usuário ainda não publicou datasets no ecossistema.",
      "publish_first": "Publicar meu primeiro dataset",
      "public": "Público",
      "private": "Privado",
      "no_dataset_desc": "Sem descrição cadastrada para este conjunto de dados.",
      "recent_activity": "Atividade Recente",
      "no_recent_activity": "Nenhuma atividade recente registrada no ecossistema.",
      "published_new_version": "Publicou nova versão",
      "of_dataset": "do dataset",
      "files_count": "{count} arquivo(s)",
      "search_placeholder": "Pesquisar datasets...",
      "new_dataset": "Novo Dataset",
      "no_search_results": "Nenhum dataset encontrado para a busca especificada.",
      "label_area": "Área:",
      "label_format": "Formato:",
      "label_size": "Tamanho:",
      "label_likes": "Curtidas:",
      "label_downloads": "Downloads:",
      "groups_heading": "Grupos de Pesquisa e Laboratórios",
      "no_public_groups": "O usuário não participa de nenhum grupo público no momento.",
      "activity_history": "Histórico de Atividade",
      "published_dataset": "Publicou dataset:"
    },
    "tokens": {
      "breadcrumbs": {
        "settings": "Configurações"
      },
      "title": "Tokens",
      "description": "Gerencie aqui seus tokens de API.",
      "dialogs": {
        "add": {
          "title": "Adicionar Token",
          "description": "Preencha os detalhes abaixo para adicionar um novo token. Clique em salvar quando terminar."
        },
        "generated": {
          "title": "Token Gerado",
          "description": "Agora você pode usar o token gerado para autenticar solicitações de API. Certifique-se de armazená-lo com segurança, pois ele não será exibido novamente."
        }
      }
    },
    "action": {
      "create": {
        "title": "Criar Usuário",
        "description": "Preencha os dados abaixo para adicionar um novo usuário. Clique em adicionar quando terminar."
      },
      "edit": {
        "title": "Editar Usuário",
        "description": "Atualize os dados do usuário abaixo. Clique em salvar quando terminar."
      },
      "form": {
        "full_name": {
          "label": "Nome Completo",
          "placeholder": "Digite o nome completo do usuário"
        },
        "email": {
          "label": "E-mail",
          "placeholder": "Digite o e-mail do usuário"
        },
        "role": {
          "label": "Função",
          "placeholder": "Selecione uma função"
        },
        "password": {
          "label": "Senha",
          "placeholder": "ex.: S3gur@nc@123"
        },
        "password_confirmation": {
          "label": "Confirmar Senha",
          "placeholder": "ex.: S3gur@nc@123"
        },
        "token": {
          "label": "Nome do token",
          "placeholder": "Digite o nome do token"
        }
      },
      "actions": {
        "cancel": "Cancelar",
        "add": "Adicionar",
        "save": "Salvar",
        "close": "Fechar",
        "change_avatar": "Alterar avatar"
      },
      "toast": {
        "title": "Você enviou os seguintes dados:",
        "type_success": "Sucesso",
        "settings_updated": "{setting} atualizado com sucesso"
      }
    },
    "delete": {
      "title": "Excluir Usuário",
      "description": "Você tem certeza de que deseja excluir <strong1>{email}</strong1>? Esta ação removerá permanentemente o usuário com o cargo de <strong2>{role}</strong2> do sistema. Esta operação não pode ser desfeita.",
      "confirm_placeholder": "Digite o e-mail para confirmar a exclusão.",
      "confirm_button": "Excluir",
      "alert": {
        "title": "Atenção!",
        "description": "Tenha cuidado, esta operação não poderá ser desfeita."
      },
      "toast": {
        "title": "O seguinte usuário foi excluído:"
      }
    },
    "delete_token": {
      "title": "Excluir Token",
      "description": "Você tem certeza de que deseja excluir <strong1>{token_name}</strong1>? Esta ação removerá permanentemente o token do sistema. Esta operação não pode ser desfeita.",
      "confirm_placeholder": "Digite o nome do token para confirmar a exclusão.",
      "confirm_button": "Excluir",
      "alert": {
        "title": "Atenção!",
        "description": "Tenha cuidado, esta operação não poderá ser desfeita."
      },
      "toast": {
        "title": "O seguinte token foi excluído:"
      }
    },
    "impersonate": {
      "title": "Assumir Usuário",
      "description": "Tem certeza de que deseja assumir <strong1>{email}</strong1>? Esta ação permitirá que você atue como este usuário (Função: <strong2>{role}</strong2>) no sistema.",
      "confirm_button": "Assumir",
      "alert": {
        "title": "Atenção",
        "description": "Você pode voltar para sua conta original a qualquer momento fazendo logout."
      },
      "toast": {
        "title": "Você agora está assumindo o seguinte usuário:"
      }
    },
    "invite": {
      "title": "Convidar Usuário",
      "description": "Convide um novo usuário para sua equipe enviando um convite por e-mail. Atribua uma função para definir o nível de acesso.",
      "form": {
        "email": {
          "label": "E-mail",
          "placeholder": "Digite o e-mail do usuário"
        },
        "role": {
          "label": "Função",
          "placeholder": "Selecione uma função"
        },
        "description": {
          "label": "Descrição (opcional)",
          "placeholder": "Adicione uma mensagem pessoal ao convite (opcional)"
        }
      },
      "actions": {
        "cancel": "Cancelar",
        "submit": "Enviar Convite"
      },
      "toast": {
        "title": "Você enviou os seguintes valores:"
      }
    },
    "emails": {
      "welcome": {
        "subject": "Bem-vindo!",
        "title": "Bem-vindo {full_name}!",
        "subtitle": "Estamos muito felizes em ter você conosco.",
        "action_btn": "Comece agora",
        "default_message": "Obrigado por se juntar à nossa comunidade. Explore nossos recursos e comece sua jornada conosco. Se tiver alguma dúvida, entre em contato!"
      }
    },
    "roles": {
      "1": {
        "name": "Usuários",
        "description": "Usuários Autenticado"
      },
      "2": {
        "name": "Administrador",
        "description": "Superusuários"
      }
    }
  }
},
  en: {
  "common": {
    "layout": {
      "navMain": {
        "dashboard": "Dashboard",
        "administration": "Administration",
        "users": "Users"
      },
      "navUser": {
        "settings": "Settings",
        "logout": "Log out"
      }
    },
    "nav": {
      "datasets": "Datasets",
      "my_datasets": "My datasets",
      "favorites": "Favorites",
      "groups": "Groups",
      "management": "Management",
      "publish_dataset": "Publish dataset",
      "sign_in": "Sign in",
      "sign_up": "Create account",
      "theme_light": "Light theme",
      "theme_dark": "Dark theme",
      "toggle_theme": "Toggle theme",
      "user_menu": {
        "default_user": "UFRRJ User",
        "my_profile": "My profile",
        "my_datasets": "My datasets",
        "my_groups": "My groups",
        "favorites": "Favorites",
        "account_settings": "Account settings",
        "logout": "Log out"
      }
    },
    "footer": {
      "about_1": "Institutional dataset platform of the Federal Rural University of Rio de Janeiro.",
      "about_2": "Open data for teaching, research and extension.",
      "platform": "Platform",
      "explore_datasets": "Explore datasets",
      "publish_data": "Publish data",
      "resources": "Resources",
      "documentation": "Documentation",
      "institutional": "Institutional",
      "ufrrj": "UFRRJ",
      "copyright": "© 2026 Federal Rural University of Rio de Janeiro · DataRural"
    },
    "table": {
      "filters": {
        "clear_filters": "Clear filters",
        "no_results": "No results found.",
        "nb_selected": "selected"
      },
      "row_actions": {
        "clear": "Clear"
      },
      "no_results": "No results found.",
      "pagination": {
        "rows_per_page": "Rows per page",
        "go_first_page": "Go to first page",
        "go_previous_page": "Go to previous page",
        "go_next_page": "Go to next page",
        "go_last_page": "Go to last page",
        "page_of": "Page {current} of {total}"
      }
    },
    "confirm_dialog": {
      "cancel": "Cancel",
      "continue": "Continue"
    }
  },
  "marketing": {
    "hero": {
      "eyebrow": "Institutional open data repository",
      "title_prefix": "Find, explore and reuse ",
      "title_hl": "Rural's data",
      "lead": "A platform to publish, version and consume academic and administrative datasets from UFRRJ — with rich metadata, explicit licenses and usage statistics.",
      "search_placeholder": "Search datasets — e.g., agricultural production, climate, soils…",
      "search_button": "Search"
    },
    "publish_cta": {
      "title": "Do you produce data at Rural? Publish it here.",
      "subtitle": "Turn scattered spreadsheets into a living repository, documented and reusable by the academic community.",
      "step1": "Upload your CSV file",
      "step2": "Describe metadata and license",
      "step3": "Publish and track usage",
      "btn_publish": "Publish dataset",
      "btn_my_datasets": "My datasets"
    },
    "datasets_section": {
      "title": "Datasets",
      "tab_recent": "Recent",
      "tab_featured": "Featured",
      "view_grid": "Grid",
      "view_list": "List"
    },
    "categories": {
      "title": "Explore by knowledge area",
      "subtitle": "Data organized by the University's institutes and units.",
      "all_areas": "All areas",
      "see_more": "See more areas",
      "see_less": "See less areas"
    },
    "stats": {
      "public_datasets": "Public datasets",
      "knowledge_areas": "Knowledge areas",
      "research_groups": "Research groups",
      "researchers": "Researchers"
    }
  },
  "dataset": {
    "index": {
      "page": {
        "breadcrumbs": {
          "dataset": "Dataset"
        },
        "title": "Upload dataset",
        "description": "Send a CSV file and the server will store it locally as a dataset folder.",
        "actions": {
          "open_viewer": "Open dataset viewer"
        },
        "form": {
          "title": "New dataset",
          "intro": "The server will create the directory tree and generate the README file for the upload.",
          "name": {
            "label": "Dataset name",
            "placeholder": "Dataset X"
          },
          "version": {
            "label": "Version"
          },
          "file": {
            "label": "CSV file"
          },
          "description": {
            "label": "README notes",
            "placeholder": "Short notes that will be written to README.md"
          },
          "actions": {
            "submit": "Save dataset",
            "saving": "Saving..."
          },
          "note": "Dataset names must be unique. To upload a new file for an existing dataset, use the dataset viewer update button. Files are stored under storage/datasets."
        },
        "side": {
          "title": "Storage path",
          "description": "Uploads are saved in a folder structure that matches the database document."
        },
        "list": {
          "title": "Saved datasets",
          "intro": "Simple view of datasets persisted in the database.",
          "empty": "No datasets found yet.",
          "dataset_id": "Dataset #{id}",
          "created_at": "Created at: {date}",
          "root_path": "Dataset root path",
          "versions": "Versions",
          "no_versions": "No versions linked to this dataset."
        }
      }
    },
    "view": {
      "page": {
        "breadcrumb": "Viewer",
        "title": "Dataset viewer",
        "description": "Preview dataset CSV content from local storage.",
        "actions": {
          "back_upload": "Back to upload",
          "open_update": "Update this dataset",
          "cancel_update": "Cancel update"
        },
        "update": {
          "intro": "Upload a new CSV to create another version of the selected dataset.",
          "version": {
            "label": "Version name"
          },
          "file": {
            "label": "CSV file"
          },
          "description": {
            "label": "README notes",
            "placeholder": "Short notes for this new version"
          },
          "actions": {
            "submit": "Save version",
            "saving": "Saving version..."
          }
        },
        "datasets": "Datasets",
        "versions": "Versions",
        "preview_title": "Content preview",
        "readme_title": "README preview",
        "no_readme": "No README content available for this version.",
        "no_content": "No CSV content available for preview.",
        "empty": "No datasets found yet."
      }
    },
    "dashboard": {
      "title": "My datasets",
      "sub": "Manage what you publish, track usage and upload new versions.",
      "breadcrumb_home": "Home",
      "breadcrumb_my": "My datasets",
      "publish_btn": "Publish dataset",
      "stats_published": "Published datasets",
      "stats_likes": "Total likes",
      "stats_trend": "Total",
      "group_all": "All groups / Personal",
      "group_none": "Personal only (No group)",
      "group_prefix": "Group: ",
      "filter_all": "All",
      "filter_published": "Published",
      "filter_draft": "Drafts",
      "filter_private": "Private",
      "search_placeholder": "Search in my datasets…",
      "empty": "No datasets found."
    },
    "explore": {
      "title": "Explore Datasets",
      "sub": "Search and browse all public datasets from UFRRJ.",
      "search_placeholder": "Search by name, keyword, department or metadata…",
      "filter_by_area": "Filter by Knowledge Area",
      "clear_area_filter": "Remove area filter ({area})",
      "showing_count": "Showing {count} datasets",
      "showing_count_one": "Showing {count} dataset",
      "clear_filters": "Clear filters",
      "clear_search": "Clear search",
      "sort_recent": "Most recent",
      "sort_featured": "Highest usability",
      "sort_popular": "Most liked",
      "view_grid": "Grid view",
      "view_list": "List view",
      "no_datasets_found": "No datasets found",
      "no_matching_filters": "We couldn't find any datasets matching the applied filters.",
      "no_datasets_in_catalog": "There are no datasets registered in the catalog yet.",
      "clear_search_and_filters": "Clear search and filters"
    },
    "favorites": {
      "title": "My Favorites",
      "sub": "Datasets you marked as favorites for quick access.",
      "empty": "You do not have any favorite datasets yet.",
      "search_placeholder": "Search in your favorites…",
      "clear_search": "Clear search",
      "saved_count": "You have {count} saved datasets",
      "saved_count_one": "You have {count} saved dataset",
      "no_favorites_found": "No favorites found",
      "no_saved_yet": "No saved datasets yet",
      "no_matching_search": "We couldn't find any datasets in your favorites with this term.",
      "empty_hint": "When you find interesting datasets in the catalog, click the \"Save\" button to keep the dataset in your favorites list.",
      "explore_catalog": "Explore datasets catalog"
    },
    "show": {
      "share": "Share",
      "copy_link": "Copy link",
      "copied": "Copied!",
      "like": "Like",
      "favorite": "Favorite",
      "download": "Download",
      "usability": "usability",
      "rows_suffix": "rows",
      "edit": "Edit",
      "new_version": "New version",
      "delete": "Delete",
      "save": "Save",
      "saved": "Saved",
      "link_copied": "Link copied!",
      "email": "Email",
      "tabs": {
        "overview": "Overview",
        "viewer": "Viewer",
        "files": "Files",
        "versions": "Versions"
      },
      "related_title": "Related datasets",
      "related_sub": "Other datasets from the same area and research field.",
      "see_all": "See all"
    },
    "publish": {
      "title": "Publish Dataset",
      "title_edit": "Edit Dataset",
      "sub": "Complete the steps below to make your dataset available.",
      "breadcrumb_home": "Home",
      "breadcrumb_publish": "Publish dataset",
      "breadcrumb_edit": "Edit dataset",
      "exit_btn": "Exit without saving",
      "step_label": "Step {num}",
      "steps": {
        "file": "File",
        "metadata": "Metadata",
        "schema": "Schema",
        "license": "License",
        "review": "Review"
      },
      "step_heads": [
        {
          "h": "Upload your data file",
          "p": "Upload your dataset. We detect columns, types, and quality automatically."
        },
        {
          "h": "Describe the dataset",
          "p": "Good metadata makes your data discoverable and reusable by the community."
        },
        {
          "h": "Refine the schema",
          "p": "Confirm column types and descriptions — this raises the usability score."
        },
        {
          "h": "Define license and access",
          "p": "Choose how the community can reuse your data."
        },
        {
          "h": "Review and publish",
          "p": "Review everything before submitting for DataRural curation."
        }
      ],
      "actions": {
        "next": "Next",
        "prev": "Previous",
        "submit": "Publish dataset",
        "submit_save": "Save changes",
        "saving": "Publishing...",
        "saving_edit": "Saving..."
      }
    },
    "detail": {
      "about": "About this dataset",
      "no_desc": "No description available for this dataset.",
      "usability_index": "Usability index",
      "how_calculated": "how it's calculated",
      "score_out_of": "out of 10",
      "quality_lead": "High score: the dataset has complete documentation, traceable provenance, and open license.",
      "column_dict": "Column dictionary",
      "cols_count": "{count} columns",
      "files_panel": "Files in version",
      "primary_file": "Primary File",
      "version_history": "Version history",
      "published_on": "Published on {date}",
      "initial_version_note": "Initial version or general data updates.",
      "previous_version_note": "Archived previous version.",
      "restore_confirm": "Do you want to restore version {name} as the latest?",
      "delete_confirm": "Are you sure you want to delete version {name}?",
      "view_version": "View",
      "current_badge": "Current",
      "download": "Download",
      "restore": "Restore",
      "delete": "Delete"
    },
    "viewer": {
      "main_dataset": "Primary Dataset",
      "rows": "rows",
      "columns": "columns",
      "mode_table": "Table",
      "mode_columns": "Columns",
      "previous_page": "Previous",
      "next_page": "Next",
      "page_info": "Page {current} of {total}"
    },
    "rail": {
      "license": "License",
      "click_terms": "Click to read full terms",
      "metadata": "Metadata",
      "format": "Format",
      "size": "Size",
      "rows_cols": "Rows × Columns",
      "provenance": "Provenance",
      "temp_coverage": "Time coverage",
      "geo_coverage": "Geographic coverage",
      "maintainers": "Maintainers",
      "tags": "Tags"
    },
    "license_modal": {
      "title": "License Terms",
      "main_terms": "Key Terms of Use",
      "full_legal_text": "View full legal text",
      "registered_license": "License registered on the platform",
      "understood": "Understood"
    },
    "column_stats": {
      "kind_numeric": "numeric",
      "kind_datetime": "datetime",
      "kind_category": "category",
      "min": "min",
      "mean": "mean",
      "max": "max",
      "range": "range",
      "valid_pct": "{valid}% valid",
      "unique_count": "{count} unique"
    },
    "card": {
      "no_title": "Untitled",
      "no_desc": "No description provided for this dataset.",
      "default_unit": "Exact Sciences Institute",
      "general_tag": "General",
      "recently": "Recently",
      "like_title": "Like dataset",
      "save_title": "Save dataset",
      "unsave_title": "Remove from favorites",
      "usability_title": "Usability index",
      "proprietary_license": "Proprietary"
    },
    "step_metadata": {
      "title_label": "Dataset title",
      "title_placeholder": "E.g., Meteorological Data (2010-2024)",
      "title_hint": "Be specific: include location and period covered.",
      "desc_label": "Description",
      "desc_placeholder": "Describe what the dataset contains, how it was collected, measurement frequency, and recommended uses.",
      "unit_label": "Unit / Institute",
      "area_label": "Field of knowledge",
      "period_label": "Coverage period",
      "period_placeholder": "2010 – 2024",
      "region_label": "Region / Location",
      "region_placeholder": "Nova Iguaçu, RJ",
      "tags_label": "Tags",
      "tags_placeholder": "Type and press Enter…"
    },
    "step_license": {
      "license_subhead": "Terms of license",
      "commercial_use": "Commercial use",
      "derivatives": "Derivatives",
      "visibility_subhead": "Visibility",
      "public_title": "Public",
      "public_desc": "Anyone can search, view, and download.",
      "restricted_title": "Restricted",
      "restricted_desc": "Access upon request approved by the author.",
      "group_subhead": "Group (optional)",
      "no_group": "No group — only you",
      "group_hint": "Members of the selected group will be able to view this dataset."
    },
    "step_review": {
      "file_card_title": "File",
      "filename": "File name",
      "size": "Size",
      "content": "Content",
      "content_val": "{rows} rows · {cols} columns",
      "metadata_card_title": "Metadata",
      "title": "Title",
      "unit": "Unit",
      "area": "Area",
      "period": "Period",
      "tags": "Tags",
      "license_vis_card_title": "License & visibility",
      "license": "License",
      "visibility": "Visibility",
      "public": "Public",
      "restricted": "Restricted",
      "edit": "Edit",
      "confirm_label": "I confirm that I have authorization to publish these data and that they comply with UFRRJ's Open Data Policy and LGPD (no identifiable personal data)."
    },
    "publish_success": {
      "heading": "Dataset submitted for curation!",
      "message": "has been received and is in the DataRural team review queue. You will be notified by email when it goes live — usually within 2 business days.",
      "my_datasets": "Go to My datasets",
      "preview": "Preview page",
      "status": "Status",
      "in_review": "Under review",
      "version": "Version",
      "identifier": "Identifier"
    },
    "submission_error": {
      "title": "Could not submit dataset",
      "one_issue": "1 issue found",
      "other_issues": "{count} issues found",
      "subtitle": "Fix the items indicated below before completing publication:",
      "go_to_step": "Go to {step}",
      "dismiss": "Dismiss alert"
    },
    "step_schema": {
      "select_csv": "Select the CSV file to edit schema:",
      "primary": "Primary",
      "describe_cols": "Describe columns:",
      "schema_tail": "{count} columns · descriptions increase usability",
      "th_col": "Column",
      "th_type": "Type",
      "th_desc": "Description",
      "th_unit": "Unit",
      "type_num": "Number",
      "type_text": "Text",
      "type_date": "Date",
      "type_geo": "Geo",
      "desc_placeholder": "What does this column represent?"
    },
    "step_file": {
      "drag_drop_title": "Drag & drop your CSV files here or click to select",
      "drag_drop_desc": "You can upload multiple CSV files at once for the same dataset.",
      "select_btn": "Select files",
      "selected_files": "Selected files ({count})",
      "add_more": "Add more files",
      "primary_badge": "Primary Dataset",
      "make_primary": "Set as primary",
      "rows_cols": "{size} · {rows} rows · {cols} columns",
      "previewing": "Viewing preview",
      "remove_file": "Remove file",
      "preview_subhead": "Preview:",
      "primary_label": "(Primary)",
      "first_rows": "first 3 rows of {rows}",
      "stats_tail": "{cols} columns · {num} numeric · {text} text · {date} date · {geo} geo — types inferred automatically for {filename}.",
      "qa_subhead": "Quality validation:",
      "usability_title": "Estimated average usability:",
      "usability_exc": "excellent",
      "usability_good": "good",
      "usability_fair": "regular",
      "usability_desc": "Score calculated based on average quality of the {count} uploaded CSV files."
    },
    "new_version": {
      "title": "New version",
      "breadcrumb_home": "Home",
      "breadcrumb_new_version": "New version",
      "page_sub": "Upload a new CSV file to create version {version} of dataset",
      "cancel": "Cancel",
      "back": "Back",
      "continue": "Continue",
      "step1_indicator": "Upload file",
      "step2_indicator": "Details and publish",
      "step1_title": "Upload the new CSV file",
      "step1_desc": "Upload the updated dataset. We detect columns, types, and quality automatically.",
      "step2_title": "Version details",
      "step2_desc": "Set the version name and add notes about changes.",
      "version_name_label": "Version name",
      "version_change": "Current version: {current} → New: {next}",
      "version_notes_label": "Version notes (optional)",
      "version_notes_placeholder": "Describe changes made in this version...",
      "cols_rows": "{size} • {cols} columns • {rows} rows",
      "existing_versions": "Existing versions",
      "publishing": "Publishing...",
      "publish_btn": "Publish version {version}"
    },
    "table": {
      "edit_metadata": "Edit metadata",
      "new_version": "Upload new version",
      "public_page": "View public page",
      "delete": "Delete",
      "delete_confirm": "Are you sure you want to delete dataset \"{title}\"? This action cannot be undone.",
      "rows_suffix": "rows",
      "make_private": "Click to make Private",
      "make_public": "Click to make Public",
      "likes": "likes",
      "th_dataset": "Dataset",
      "th_status": "Status",
      "th_likes": "Likes",
      "th_usability": "Usability",
      "empty_title": "No datasets in this view",
      "empty_sub": "Adjust filters or publish a new dataset.",
      "publish_btn": "Publish dataset"
    },
    "areas_admin": {
      "title": "Registered Knowledge Areas",
      "subtitle": "Manage data categories available for researchers when publishing and filtering datasets.",
      "new_area": "New Area",
      "loading": "Loading areas…",
      "empty": "No registered area. Click \"New Area\" to create the first one.",
      "th_icon": "Icon / Color",
      "th_name": "Area Name",
      "th_code": "Code (Slug)",
      "th_desc": "Description",
      "th_datasets": "Datasets",
      "th_actions": "Actions",
      "edit": "Edit",
      "delete": "Delete",
      "modal_edit": "Edit Knowledge Area",
      "modal_new": "New Knowledge Area",
      "name_label": "Area name *",
      "name_placeholder": "E.g.: Biotechnology, Agricultural Engineering…",
      "code_label": "Identifier code (Slug)",
      "code_placeholder": "E.g.: biotec (leave blank for automatic generation)",
      "icon_label": "Icon",
      "color_label": "Area Color / Theme",
      "custom_hex": "Or custom color (HEX):",
      "desc_label": "Description (Optional)",
      "desc_placeholder": "Brief summary of the content of this knowledge area…",
      "cancel": "Cancel",
      "saving": "Saving…",
      "save_changes": "Save changes",
      "create_area": "Create area",
      "delete_title": "Delete Knowledge Area",
      "delete_confirm": "Are you sure you want to delete area {name} ({code})?",
      "deleting": "Deleting…",
      "yes_delete": "Yes, delete"
    }
  },
  "groups": {
    "index": {
      "title": "My Groups",
      "sub": "Manage groups you participate in and share datasets with your team.",
      "breadcrumb_home": "Home",
      "breadcrumb_my": "My groups",
      "create_btn": "Create group",
      "search_placeholder": "Search group…",
      "empty_search": "No groups found",
      "empty_search_sub": "Try another search term.",
      "empty_no_groups": "You are not participating in any group yet",
      "empty_no_groups_sub": "Create your first group to share datasets with your team."
    },
    "show": {
      "title": "Group",
      "breadcrumb_home": "Home",
      "breadcrumb_my": "My groups",
      "created_by": "Created by",
      "tabs": {
        "members": "Members",
        "datasets": "Datasets"
      },
      "edit": "Edit",
      "save": "Save",
      "cancel": "Cancel",
      "delete": "Delete group",
      "add_member": "Add member",
      "remove_member_confirm": "Remove {name} from the group?",
      "remove_from_group": "Remove from group",
      "empty_datasets": "No datasets in this group",
      "empty_datasets_sub": "Add existing datasets to this group from the publish dashboard.",
      "by": "by",
      "updated": "Updated",
      "status": {
        "published": "Published",
        "review": "In review",
        "draft": "Draft",
        "unpublished": "Private"
      },
      "card": {
        "owner": "Owner",
        "admin": "Admin",
        "editor": "Editor",
        "viewer": "Viewer",
        "created_by": "Created by",
        "member_one": "member",
        "member_other": "members",
        "dataset_one": "dataset",
        "dataset_other": "datasets"
      },
      "roles": {
        "owner": "Owner",
        "admin": "Admin",
        "editor": "Editor",
        "viewer": "Viewer"
      },
      "dialogs": {
        "create_group": {
          "title": "Create group",
          "name_label": "Group name *",
          "name_placeholder": "E.g., Climatology Lab",
          "desc_label": "Description",
          "desc_placeholder": "Short description of the group's purpose (optional)",
          "cancel": "Cancel",
          "submit": "Create group"
        },
        "add_member": {
          "title": "Add member to group",
          "email_label": "Search user by name, @username or email",
          "roles": {
            "viewer": "Can view group datasets",
            "editor": "Can add and edit datasets",
            "admin": "Can manage members and datasets"
          }
        }
      }
    },
    "card": {
      "members_count": "member",
      "datasets_count": "dataset",
      "owner": "Owner",
      "admin": "Administrator",
      "editor": "Editor",
      "viewer": "Viewer"
    },
    "dialogs": {
      "create_group": {
        "title": "Create New Group",
        "sub": "Organize your team and share datasets collaboratively.",
        "name_label": "Group name",
        "name_placeholder": "e.g., Soil and Nutrition Lab",
        "desc_label": "Description (optional)",
        "desc_placeholder": "Describe the purpose of the group…",
        "submit": "Create group",
        "cancel": "Cancel"
      },
      "add_member": {
        "title": "Add Member",
        "sub": "Invite a registered user to join this group.",
        "email_label": "User email",
        "email_placeholder": "researcher@ufrrj.br",
        "role_label": "Role in group",
        "roles": {
          "admin": "Administrator — can manage members and datasets",
          "editor": "Editor — can add and edit datasets",
          "viewer": "Viewer — views group datasets only"
        },
        "submit": "Add",
        "cancel": "Cancel",
        "searching": "Searching…",
        "empty_search": "No users found.",
        "change_user": "Change user"
      }
    }
  },
  "auth": {
    "signin": {
      "title": "Sign in to your account",
      "description": "Enter your email below to access your account",
      "form": {
        "email": {
          "label": "Email",
          "placeholder": "Enter your email"
        },
        "password": {
          "label": "Password",
          "placeholder": "Enter your password"
        }
      },
      "actions": {
        "forgot_password": "Forgot your password?",
        "submit": "Sign In",
        "google": "Sign in with Google"
      },
      "divider": "Or continue with",
      "no_account": {
        "text": "Don't have an account?",
        "sign_up": "Sign up"
      },
      "error": {
        "invalid": "Invalid email or password"
      }
    },
    "forgot_password": {
      "title": "Forgot your password?",
      "description": "Enter your email below to receive the recovery link.",
      "form": {
        "email": {
          "label": "Email",
          "placeholder": "user@ufrrj.br"
        }
      },
      "actions": {
        "submit": "Send"
      },
      "toast": {
        "title": "Email sent",
        "description": "We have sent the link for password recovery."
      },
      "back_to_login": {
        "text": "Remember your password?",
        "login": "Log in"
      }
    },
    "registration": {
      "title": "Create your account",
      "description": "Fill in the fields below to create your account",
      "form": {
        "full_name": {
          "label": "Full Name",
          "placeholder": "Your full name"
        },
        "username": {
          "label": "Username",
          "placeholder": "Choose your username (e.g. johnsmith)"
        },
        "email": {
          "label": "Email",
          "placeholder": "m@ufrrj.br"
        },
        "password": {
          "label": "Password",
          "placeholder": "Enter a strong password"
        },
        "password_confirmation": {
          "label": "Confirm your password",
          "placeholder": "Repeat your password"
        }
      },
      "actions": {
        "submit": "Create Account"
      },
      "already_account": {
        "text": "Already have an account?",
        "login": "Log in"
      }
    },
    "emails": {
      "reset_password": {
        "subject": "Reset your password for app",
        "title": "Oops!",
        "subtitle": "It seems that you’ve forgotten your password.",
        "action_btn": "Reset Password",
        "default_message": "If you did not request this, please ignore this email. Otherwise, click the button above to reset your password."
      }
    },
    "reset_password": {
      "title": "Reset your password",
      "description": "Choose a new password for your account.",
      "form": {
        "password": {
          "label": "New Password"
        },
        "password_confirmation": {
          "label": "Confirm Password",
          "placeholder": "Confirm new password"
        }
      },
      "actions": {
        "submit": "Reset Password"
      }
    }
  },
  "users": {
    "layout": {
      "title": "Settings",
      "description": "Manage your profile and account settings",
      "profile": "Profile",
      "password": "Password",
      "tokens": "Tokens"
    },
    "index": {
      "page": {
        "title": "Users",
        "description": "Manage the users of your application",
        "breadcrumbs": {
          "users": "Users"
        }
      },
      "table": {
        "columns": {
          "full_name": "Full Name",
          "email": "Email",
          "role": "Role"
        },
        "filters": {
          "search_placeholder": "Search...",
          "role": "Role",
          "clear_filters": "Clear filters",
          "no_results": "No results found."
        },
        "row_actions": {
          "impersonate": "Impersonate",
          "edit": "Edit",
          "delete": "Delete",
          "open_menu": "Open menu",
          "clear": "Clear"
        },
        "not_provided": "Not provided"
      },
      "toolbar": {
        "invite": "Invite",
        "add": "Add"
      }
    },
    "admin": {
      "title": "Admin Panel",
      "sub": "Management of users, permissions, knowledge areas, and audit logs.",
      "breadcrumb_home": "Home",
      "breadcrumb_admin": "Administration",
      "tabs": {
        "users": "User Management",
        "areas": "Knowledge Areas",
        "audits": "Audit Logs"
      },
      "audits": {
        "title": "Audit Logs",
        "search_placeholder": "Search by event, user, table or ID…",
        "search_button": "Search",
        "event_label": "Filter by event",
        "event_all": "All events",
        "event_create": "Creation",
        "event_update": "Update",
        "event_delete": "Deletion",
        "details_modal": "Audit Details",
        "old_values": "Old Values",
        "new_values": "New Values",
        "view_details": "View Details"
      }
    },
    "settings_layout": {
      "breadcrumb_home": "Home",
      "breadcrumb_settings": "Settings",
      "title": "My Account",
      "sub": "Manage your personal data, access password, and preferences."
    },
    "password": {
      "breadcrumbs": {
        "settings": "Settings"
      },
      "title": "Change Password",
      "description": "Ensure your account is using a long, random password to stay secure."
    },
    "profile": {
      "breadcrumbs": {
        "settings": "Settings"
      },
      "title": "Profile Information",
      "description": "Update your personal information and profile picture.",
      "avatar_hint": "JPG, GIF or PNG. 1MB max.",
      "username": "Username",
      "username_placeholder": "E.g.: john_doe",
      "username_hint": "Your public profile will be available at datarural.ufrrj.br/u/{username}",
      "bio": "Bio",
      "bio_placeholder": "Write a short bio for your public profile...",
      "institution": "Institution / Unit",
      "institution_placeholder": "E.g.: Institute of Exact Sciences — UFRRJ",
      "location": "Location",
      "location_placeholder": "E.g.: Seropédica, Rio de Janeiro"
    },
    "public_profile": {
      "tab_overview": "Overview",
      "tab_datasets": "Datasets",
      "tab_groups": "Groups",
      "tab_activity": "Activity",
      "default_user": "DataRural User",
      "no_bio_own": "No bio provided. Click Edit Profile to add one.",
      "no_bio_other": "No bio provided.",
      "edit_profile": "Edit profile",
      "no_institution": "No institution specified",
      "no_location": "No location specified",
      "member_since": "Member since {date}",
      "groups_title": "Groups ({count})",
      "no_groups": "Not a member of any group.",
      "role_owner": "Owner",
      "role_admin": "Admin",
      "role_member": "Member",
      "featured_datasets": "Featured Datasets",
      "no_datasets_title": "No datasets published yet",
      "no_datasets_sub": "This user has not published any datasets in the ecosystem yet.",
      "publish_first": "Publish my first dataset",
      "public": "Public",
      "private": "Private",
      "no_dataset_desc": "No description registered for this dataset.",
      "recent_activity": "Recent Activity",
      "no_recent_activity": "No recent activity recorded in the ecosystem.",
      "published_new_version": "Published new version",
      "of_dataset": "of dataset",
      "files_count": "{count} file(s)",
      "search_placeholder": "Search datasets...",
      "new_dataset": "New Dataset",
      "no_search_results": "No datasets found matching your search.",
      "label_area": "Area:",
      "label_format": "Format:",
      "label_size": "Size:",
      "label_likes": "Likes:",
      "label_downloads": "Downloads:",
      "groups_heading": "Research Groups and Laboratories",
      "no_public_groups": "The user does not belong to any public group at the moment.",
      "activity_history": "Activity History",
      "published_dataset": "Published dataset:"
    },
    "tokens": {
      "breadcrumbs": {
        "settings": "Settings"
      },
      "title": "Tokens",
      "description": "Manage your API tokens here.",
      "dialogs": {
        "add": {
          "title": "Add Token",
          "description": "Fill in the details below to add a new token. Click save when you're done."
        },
        "generated": {
          "title": "Token Generated",
          "description": "You can now use the generated token to authenticate API requests. Make sure to store it securely, as it will not be shown again."
        }
      }
    },
    "action": {
      "create": {
        "title": "Create User",
        "description": "Fill in the details below to add a new user. Click add when you're done."
      },
      "edit": {
        "title": "Edit User",
        "description": "Update the user here. Click save when you're done."
      },
      "form": {
        "full_name": {
          "label": "Full Name",
          "placeholder": "Enter user's full name"
        },
        "email": {
          "label": "Email",
          "placeholder": "Enter the user's email"
        },
        "role": {
          "label": "Role",
          "placeholder": "Select a role"
        },
        "password": {
          "label": "Password",
          "placeholder": "e.g., S3cur3P@ssw0rd"
        },
        "password_confirmation": {
          "label": "Confirm Password",
          "placeholder": "e.g., S3cur3P@ssw0rd"
        },
        "token": {
          "label": "Token name",
          "placeholder": "Enter token name"
        }
      },
      "actions": {
        "cancel": "Cancel",
        "add": "Add",
        "save": "Save",
        "close": "Close",
        "change_avatar": "Change avatar"
      },
      "toast": {
        "title": "You submitted the following values:",
        "type_success": "Success",
        "settings_updated": "{setting} updated successfully"
      }
    },
    "delete": {
      "title": "Delete User",
      "description": "Are you sure you want to delete <strong1>{email}</strong1>? This action will permanently remove the user with the role of <strong2>{role}</strong2> from the system. This cannot be undone.",
      "confirm_placeholder": "Enter email to confirm deletion.",
      "confirm_button": "Delete",
      "alert": {
        "title": "Warning!",
        "description": "Please be carefull, this operation can not be rolled back."
      },
      "toast": {
        "title": "The following user has been deleted:"
      }
    },
    "delete_token": {
      "title": "Delete Token",
      "description": "Are you sure you want to delete <strong1>{token_name}</strong1>? This action will permanently remove the token from the system. This cannot be undone.",
      "confirm_placeholder": "Enter the token name to confirm deletion.",
      "confirm_button": "Delete",
      "alert": {
        "title": "Warning!",
        "description": "Please be carefull, this operation can not be rolled back."
      },
      "toast": {
        "title": "The following token has been deleted:"
      }
    },
    "impersonate": {
      "title": "Impersonate User",
      "description": "Are you sure you want to impersonate <strong1>{email}</strong1>? This action will allow you to act as this user (Role: <strong2>{role}</strong2>) in the system.",
      "confirm_button": "Impersonate",
      "alert": {
        "title": "Note",
        "description": "You can revert to your original account at any time by logging out."
      },
      "toast": {
        "title": "You are now impersonating the following user:"
      }
    },
    "invite": {
      "title": "Invite User",
      "description": "Invite new user to join your team by sending them an email invitation. Assign a role to define their access level.",
      "form": {
        "email": {
          "label": "Email",
          "placeholder": "Enter the user's email"
        },
        "role": {
          "label": "Role",
          "placeholder": "Select a role"
        },
        "description": {
          "label": "Description (optional)",
          "placeholder": "Add a personal note to your invitation (optional)"
        }
      },
      "actions": {
        "cancel": "Cancel",
        "submit": "Send Invitation"
      },
      "toast": {
        "title": "You submitted the following values:"
      }
    },
    "emails": {
      "welcome": {
        "subject": "Welcome!",
        "title": "Welcome {full_name}!",
        "subtitle": "We're thrilled to have you on board.",
        "action_btn": "Get Started",
        "default_message": "Thank you for joining our community. Explore our features and start your journey with us. If you have any questions, feel free to reach out!"
      }
    },
    "roles": {
      "1": {
        "name": "User",
        "description": "Authenticated User"
      },
      "2": {
        "name": "Administrator",
        "description": "Super User"
      }
    }
  }
}
};

function getNested(obj, path) {
  const parts = path.split('.');
  let cur = obj;
  for (const p of parts) {
    if (!cur || typeof cur !== 'object') return null;
    cur = cur[p];
  }
  return cur;
}

function t(path, fallback = '') {
  const lang = state.lang || 'pt';
  const val = getNested(TRANSLATIONS[lang], path) || getNested(TRANSLATIONS['pt'], path);
  if (val !== null && val !== undefined) return val;
  return fallback || path;
}



// --- Brand & Icons SVG Helpers ---
function brandMark(size = 38) {
  return `<svg class="brand-mark" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
    <path d="M24 5 C33 12 33 24 24 31 C15 24 15 12 24 5 Z" stroke="var(--brand-green)" stroke-width="2.4" fill="none" stroke-linejoin="round"/>
    <path d="M24 18 L24 33" stroke="var(--brand-green)" stroke-width="2.4" stroke-linecap="round"/>
    <ellipse cx="24" cy="34" rx="13" ry="4.4" stroke="var(--brand-blue)" stroke-width="2.4" fill="none"/>
    <path d="M11 34 V40 C11 42.4 16.8 44 24 44 C31.2 44 37 42.4 37 40 V34" stroke="var(--brand-blue)" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <circle cx="24" cy="34" r="2.6" fill="var(--brand-yellow)"/>
  </svg>`;
}

function leafPath(cx, cy, len, wid, angleDeg) {
  const hl = len / 2;
  const hw = wid / 2;
  return {
    d: `M ${-hl} 0 Q 0 ${-hw} ${hl} 0 Q 0 ${hw} ${-hl} 0 Z`,
    transform: `translate(${cx} ${cy}) rotate(${angleDeg})`
  };
}

function arcosCluster(palette) {
  const cols = palette || [
    'var(--brand-blue)',
    'var(--brand-green)',
    'var(--brand-yellow)',
    'var(--brand-orange)',
    'var(--brand-sky)',
    'var(--brand-lightgreen)',
    'var(--brand-teal)',
    'var(--brand-purple)'
  ];
  const leaves = [
    [150, 60, 150, 64, 18],
    [232, 96, 132, 56, -32],
    [120, 150, 168, 70, 62],
    [210, 176, 150, 60, 6],
    [298, 140, 138, 58, 40],
    [96, 250, 150, 62, -18],
    [188, 262, 162, 66, 78],
    [276, 232, 130, 54, 22],
    [320, 300, 150, 60, -44],
    [150, 330, 140, 58, 50],
    [238, 350, 158, 64, -8],
    [70, 360, 130, 52, 30],
    [330, 200, 120, 50, -70],
    [108, 70, 120, 50, 100]
  ];
  const circles = [
    [300, 70, 46],
    [60, 180, 38],
    [360, 360, 40],
    [40, 300, 28]
  ];
  return `<svg viewBox="0 0 400 420" fill="none" aria-hidden="true">
    <g stroke-width="2.4" fill="none" stroke-linejoin="round" stroke-linecap="round">
      ${circles.map((c, i) => `<circle cx="${c[0]}" cy="${c[1]}" r="${c[2]}" stroke="${cols[(i + 2) % cols.length]}"/>`).join('')}
      ${leaves.map((l, i) => {
        const p = leafPath(l[0], l[1], l[2], l[3], l[4]);
        return `<path d="${p.d}" transform="${p.transform}" stroke="${cols[i % cols.length]}"/>`;
      }).join('')}
    </g>
  </svg>`;
}

function cardArt(tint) {
  const p1 = leafPath(248, 30, 120, 50, 24);
  const p2 = leafPath(286, 66, 100, 42, -30);
  const p3 = leafPath(40, 70, 110, 46, 50);
  return `<svg viewBox="0 0 320 96" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="96" fill="color-mix(in srgb, ${tint} 9%, var(--card))"/>
    <g stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round" stroke="color-mix(in srgb, ${tint} 55%, transparent)">
      <path d="${p1.d}" transform="${p1.transform}"/>
      <path d="${p2.d}" transform="${p2.transform}"/>
      <circle cx="300" cy="20" r="26"/>
    </g>
    <g stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round" stroke="color-mix(in srgb, ${tint} 30%, transparent)">
      <path d="${p3.d}" transform="${p3.transform}"/>
    </g>
  </svg>`;
}

const ICONS = {
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  download: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg>`,
  database: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>`,
  users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a6 6 0 0 1 11 0"/><path d="M16 5.5a3.2 3.2 0 0 1 0 5"/><path d="M17 14.4a6 6 0 0 1 3.5 5.6"/></svg>`,
  building: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>`,
  plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`,
  heart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  bookmark: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  share: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  verified: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  scale: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
  file: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  table: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
  book: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>`,
  info: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
  globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>`,
  user: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg>`,
  hash: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
  chevronDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  grid: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
  list: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  uploadCloud: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.5 1.5A3.5 3.5 0 0 1 17 18"/><path d="M12 13v7"/><path d="m9 16 3-3 3 3"/></svg>`,
  sprout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10M12 20v-8M12 12c-3 0-6-3-6-7 4 0 7 3 7 7ZM12 12c3 0 6-3 6-7-4 0-7 3-7 7Z"/></svg>`,
  paw: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3a5 5 0 0 1 5-5Z"/></svg>`,
  cloud: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  leaf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13a10 10 0 0 1 16-9 7 7 0 0 1-7 16ZM2 21c0-3 1.85-5.36 5.08-6C9.5 14.5 12 12 12 12"/></svg>`,
  tree: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 3-4-2-1 3-4-2-1 3-4H7l3 4-2 1 3 4-2 1 3 4ZM12 19v3"/></svg>`,
  chart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"/></svg>`,
  flask: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31L4.1 19.46A2 2 0 0 0 5.82 22h12.36a2 2 0 0 0 1.72-2.54L14 9.31V2M8.5 2h7M6 16h12"/></svg>`
};



const CATEGORIES = [
  { id: 'agro', name: 'Agronomia', count: 214, icon: 'sprout', color: 'var(--brand-green)' },
  { id: 'vet', name: 'Veterinária', count: 168, icon: 'paw', color: 'var(--brand-orange)' },
  { id: 'clima', name: 'Clima & Meteorologia', count: 96, icon: 'cloud', color: 'var(--brand-sky)' },
  { id: 'bio', name: 'Ciências Biológicas', count: 143, icon: 'leaf', color: 'var(--brand-lightgreen)' },
  { id: 'flor', name: 'Florestas', count: 71, icon: 'tree', color: 'var(--brand-teal)' },
  { id: 'exatas', name: 'Ciências Exatas', count: 88, icon: 'chart', color: 'var(--brand-blue)' },
  { id: 'quim', name: 'Química', count: 64, icon: 'flask', color: 'var(--brand-purple)' },
  { id: 'zoo', name: 'Zootecnia', count: 102, icon: 'database', color: 'var(--brand-orange)' },
  { id: 'soc', name: 'Ciências Sociais', count: 79, icon: 'users', color: 'var(--brand-blue)' },
  { id: 'econ', name: 'Economia & Gestão', count: 58, icon: 'chart', color: 'var(--brand-green)' }
];

const STATS = [
  { val: '1.247', label: 'marketing.stats.public_datasets', color: 'var(--brand-blue)' },
  { val: '38,9 mil', label: 'marketing.stats.downloads_made', color: 'var(--brand-green)' },
  { val: '12', label: 'marketing.stats.institutes_contributing', color: 'var(--brand-yellow)' },
  { val: '540', label: 'marketing.stats.researchers', color: 'var(--brand-orange)' }
];

const LICENSES = [
  { id: 'ccby', name: 'CC BY 4.0', tag: 'Recomendada', rec: true, desc: 'Reuso livre com atribuição ao autor. Padrão para dados abertos acadêmicos.', commercial: true, derivatives: true },
  { id: 'ccbysa', name: 'CC BY-SA 4.0', tag: 'Aberta', rec: false, desc: 'Atribuição + compartilhamento sob a mesma licença.', commercial: true, derivatives: true },
  { id: 'ccbync', name: 'CC BY-NC 4.0', tag: 'Restrita', rec: false, desc: 'Atribuição, somente para uso não comercial.', commercial: false, derivatives: true },
  { id: 'odbl', name: 'ODbL 1.0', tag: 'Base de dados', rec: false, desc: 'Específica para bases de dados, com share-alike.', commercial: true, derivatives: true },
  { id: 'cc0', name: 'CC0 1.0', tag: 'Domínio público', rec: false, desc: 'Renúncia de direitos — uso totalmente livre, sem atribuição.', commercial: true, derivatives: true },
  { id: 'custom', name: 'Restrito ao Grupo', tag: 'Privada', rec: false, desc: 'Acesso restrito exclusivamente aos membros autorizados do grupo.', commercial: false, derivatives: false }
];

const INITIAL_DATASETS = [
  {
    id: 1,
    title: 'Dados Meteorológicos — Estação Seropédica (2010–2024)',
    unit: 'Instituto de Ciências Exatas',
    unitShort: 'ICE',
    desc: 'Séries horárias de temperatura, umidade, precipitação e radiação solar da estação automática do campus principal.',
    description: `<h3>Contexto do Projeto</h3>
<p>Conjunto de dados meteorológicos de alta frequência coletados ininterruptamente pela Estação Agrometeorológica Automática da UFRRJ, instalada no Câmpus Seropédica desde 2010. Os dados subsidiam estudos microclimáticos, zoneamento agroecológico e modelagem hidrológica na Baixada Fluminense.</p>
<h3>Metodologia de Coleta</h3>
<p>Sensores calibrados segundo as normas da Organização Meteorológica Mundial (OMM). Leituras efetuadas a cada minuto e consolidadas em médias horárias, com validação de limites físicos e controle de qualidade estatístico.</p>`,
    tags: ['clima', 'séries temporais', 'meteorologia', 'seropédica'],
    cat: 'clima',
    format: 'CSV',
    tint: 'var(--brand-sky)',
    size: '12,4 MB',
    rows: '84,2 mil linhas',
    cols: 6,
    files: 3,
    downloads: 2310,
    dl: '2,3 mil',
    views: '8,1 mil',
    likesCount: 142,
    updated: 'há 3 dias',
    published: '15/03/2021',
    license: 'CC BY 4.0',
    usability: '9.4',
    doi: '10.5281/zenodo.ufrrj.clima.84210',
    version: 'v4.0',
    status: 'published',
    featured: true,
    recent: true,
    order: 1,
    coverageTime: 'Janeiro de 2010 a Março de 2024',
    coverageGeo: 'Seropédica, RJ (-22.759°, -43.687°)',
    authors: [
      { name: 'Dra. Helena Vasconcelos', role: 'Pesquisadora Principal', inst: 'Instituto de Ciências Exatas', color: 'var(--brand-blue)', initials: 'HV' },
      { name: 'Dr. Carlos Eduardo Lima', role: 'Co-autor', inst: 'Instituto de Agronomia', color: 'var(--brand-green)', initials: 'CL' }
    ],
    columns: [
      { name: 'data_hora', type: 'date', sample: ['2024-01-01 00:00', '2024-01-01 01:00', '2024-01-01 02:00'], desc: 'Carimbo de data e hora no fuso UTC-3', unit: 'ISO 8601', bars: [8, 12, 14, 18, 22, 24, 22, 18, 14, 10, 8, 6], nullPct: 0 },
      { name: 'temp_c', type: 'num', sample: ['22.4', '21.8', '21.1'], desc: 'Temperatura do ar a 2 metros', unit: '°C', bars: [4, 6, 10, 16, 26, 32, 28, 20, 14, 8, 4, 2], nullPct: 0.1 },
      { name: 'umidade_pct', type: 'num', sample: ['78.0', '81.5', '84.0'], desc: 'Umidade relativa do ar', unit: '%', bars: [2, 4, 8, 12, 18, 24, 28, 30, 26, 20, 14, 8], nullPct: 0.2 },
      { name: 'precip_mm', type: 'num', sample: ['0.0', '0.0', '1.2'], desc: 'Precipitação pluviométrica horária', unit: 'mm', bars: [32, 20, 12, 8, 4, 2, 1, 1, 0, 0, 0, 0], nullPct: 0 },
      { name: 'rad_wm2', type: 'num', sample: ['0.0', '0.0', '142.5'], desc: 'Radiação solar global incidente', unit: 'W/m²', bars: [18, 18, 8, 6, 12, 20, 28, 34, 26, 16, 8, 4], nullPct: 0.4 },
      { name: 'estacao', type: 'text', sample: ['Seropédica-A601', 'Seropédica-A601', 'Seropédica-A601'], desc: 'Código identificador da estação', unit: '—', bars: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], nullPct: 0 }
    ],
    sampleRows: [
      ['2024-03-01 00:00', '23.4', '88.0', '0.0', '0.0', 'Seropédica-A601'],
      ['2024-03-01 01:00', '22.8', '90.2', '0.0', '0.0', 'Seropédica-A601'],
      ['2024-03-01 02:00', '22.1', '92.4', '0.0', '0.0', 'Seropédica-A601'],
      ['2024-03-01 03:00', '21.7', '93.5', '0.2', '0.0', 'Seropédica-A601'],
      ['2024-03-01 04:00', '21.5', '94.0', '0.0', '0.0', 'Seropédica-A601'],
      ['2024-03-01 05:00', '21.2', '95.1', '0.0', '0.0', 'Seropédica-A601'],
      ['2024-03-01 06:00', '21.8', '93.0', '0.0', '18.4', 'Seropédica-A601'],
      ['2024-03-01 07:00', '23.5', '85.4', '0.0', '142.0', 'Seropédica-A601'],
      ['2024-03-01 08:00', '25.9', '76.1', '0.0', '380.5', 'Seropédica-A601'],
      ['2024-03-01 09:00', '28.1', '68.0', '0.0', '610.2', 'Seropédica-A601'],
      ['2024-03-01 10:00', '30.2', '62.4', '0.0', '795.0', 'Seropédica-A601'],
      ['2024-03-01 11:00', '31.8', '58.7', '0.0', '920.4', 'Seropédica-A601']
    ],
    versionHistory: [
      { version: 'v4.0', date: '05/03/2024', notes: 'Consolidação das medições até o encerramento do primeiro bimestre de 2024.', size: '12,4 MB' },
      { version: 'v3.2', date: '10/01/2023', notes: 'Correção de calibração do piranômetro e imputação por krigagem.', size: '10,8 MB' },
      { version: 'v2.0', date: '15/06/2022', notes: 'Inclusão de radiação solar global e precipitação horária.', size: '8,1 MB' },
      { version: 'v1.0', date: '15/03/2021', notes: 'Publicação inicial da série histórica de temperatura e umidade.', size: '5,4 MB' }
    ],
    fileList: [
      { name: 'seropedica_meteo_2010_2024.csv', size: '12,4 MB', format: 'CSV', date: '05/03/2024' },
      { name: 'dicionario_metadados_clima.pdf', size: '420 KB', format: 'PDF', date: '05/03/2024' },
      { name: 'schema_validacao.json', size: '18 KB', format: 'JSON', date: '05/03/2024' }
    ]
  },
  {
    id: 2,
    title: 'Produção Agrícola Municipal — Baixada Fluminense',
    unit: 'Instituto de Agronomia',
    unitShort: 'IA',
    desc: 'Área plantada, produzida e rendimento médio por cultura e município, consolidado a partir de levantamentos de campo.',
    description: `<h3>Apresentação</h3>
<p>Série histórica e levantamentos de campo da safra agrícola anual nos municípios da Baixada Fluminense (Seropédica, Nova Iguaçu, Duque de Caxias, Paracambi e arredores). Contempla hortaliças folhosas, fruticultura tropical e culturas de subsistência.</p>`,
    tags: ['agronomia', 'produção', 'geoespacial', 'agricultura'],
    cat: 'agro',
    format: 'CSV',
    tint: 'var(--brand-green)',
    size: '3,1 MB',
    rows: '21,7 mil linhas',
    cols: 5,
    files: 2,
    downloads: 1890,
    dl: '1,9 mil',
    views: '5,4 mil',
    likesCount: 98,
    updated: 'há 1 semana',
    published: '10/04/2022',
    license: 'CC BY-SA 4.0',
    usability: '9.1',
    doi: '10.5281/zenodo.ufrrj.agro.21700',
    version: 'v2.1',
    status: 'published',
    featured: true,
    recent: false,
    order: 2,
    coverageTime: '2015 a 2023',
    coverageGeo: 'Baixada Fluminense, Rio de Janeiro',
    authors: [
      { name: 'Prof. Marcos Vinicius Silva', role: 'Coordenador do Projeto', inst: 'Instituto de Agronomia', color: 'var(--brand-green)', initials: 'MS' }
    ],
    columns: [
      { name: 'ano_safra', type: 'num', sample: ['2023', '2023', '2023'], desc: 'Ano de referência da safra', unit: 'Ano', bars: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55], nullPct: 0 },
      { name: 'municipio', type: 'text', sample: ['Seropédica', 'Nova Iguaçu', 'Paracambi'], desc: 'Nome do município', unit: '—', bars: [20, 25, 20, 15, 10, 10], nullPct: 0 },
      { name: 'cultura', type: 'text', sample: ['Quiabo', 'Aipim', 'Banana'], desc: 'Tipo da cultura vegetal', unit: '—', bars: [30, 28, 22, 18, 14], nullPct: 0 },
      { name: 'area_ha', type: 'num', sample: ['45.0', '120.5', '32.0'], desc: 'Área cultivada declarada', unit: 'Hectares', bars: [5, 10, 20, 35, 25, 15], nullPct: 0.1 },
      { name: 'rendimento_kgha', type: 'num', sample: ['8200', '14500', '11200'], desc: 'Produtividade física média', unit: 'kg/ha', bars: [8, 14, 28, 32, 22, 10], nullPct: 0 }
    ],
    sampleRows: [
      ['2023', 'Seropédica', 'Aipim', '140.0', '14800'],
      ['2023', 'Seropédica', 'Quiabo', '85.0', '9200'],
      ['2023', 'Nova Iguaçu', 'Laranja', '210.0', '18500'],
      ['2023', 'Nova Iguaçu', 'Banana', '165.0', '12300'],
      ['2023', 'Paracambi', 'Hortaliças', '62.0', '16400'],
      ['2023', 'Queimados', 'Mandioca', '48.0', '13900']
    ],
    versionHistory: [
      { version: 'v2.1', date: '28/02/2024', notes: 'Incorporação dos dados auditados do censo 2023.', size: '3,1 MB' }
    ],
    fileList: [
      { name: 'producao_agricola_baixada.csv', size: '3,1 MB', format: 'CSV', date: '28/02/2024' }
    ]
  },
  {
    id: 3,
    title: 'Rebanho Bovino e Indicadores de Sanidade Animal',
    unit: 'Instituto de Veterinária',
    unitShort: 'IV',
    desc: 'Registros de efetivo, vacinação e ocorrências sanitárias do rebanho experimental, com recorte mensal por lote.',
    description: `<h3>Apresentação</h3><p>Painel de acompanhamento zoossanitário do rebanho leiteiro e de corte da Fazenda Experimental da UFRRJ. Inclui sorologia de brucelose, tuberculose, curva de lactação e taxas de morbidade.</p>`,
    tags: ['veterinária', 'pecuária', 'sanidade', 'zootecnia'],
    cat: 'vet',
    format: 'CSV',
    tint: 'var(--brand-orange)',
    size: '5,8 MB',
    rows: '34,1 mil linhas',
    cols: 5,
    files: 2,
    downloads: 1430,
    dl: '1,4 mil',
    views: '4,1 mil',
    likesCount: 76,
    updated: 'há 4 dias',
    published: '12/08/2021',
    license: 'CC BY 4.0',
    usability: '8.8',
    doi: '10.5281/zenodo.ufrrj.vet.34100',
    version: 'v3.0',
    status: 'published',
    featured: true,
    recent: true,
    order: 3,
    coverageTime: '2018 a 2024',
    coverageGeo: 'Campos Experimentais UFRRJ',
    authors: [
      { name: 'Dra. Beatriz Albuquerque', role: 'Docente / Pesquisadora', inst: 'Instituto de Veterinária', color: 'var(--brand-orange)', initials: 'BA' }
    ],
    columns: [
      { name: 'id_animal', type: 'text', sample: ['BOV-0142', 'BOV-0143'], desc: 'Identificador do brinco', unit: '—', bars: [20, 20, 20, 20], nullPct: 0 },
      { name: 'raca', type: 'text', sample: ['Girolando', 'Gir Leiteiro'], desc: 'Genótipo registrado', unit: '—', bars: [40, 30, 20], nullPct: 0 },
      { name: 'peso_kg', type: 'num', sample: ['480.5', '512.0'], desc: 'Massa corporal na pesagem', unit: 'kg', bars: [10, 25, 40, 20], nullPct: 0.1 },
      { name: 'status_vacinal', type: 'text', sample: ['Em dia', 'Pendente'], desc: 'Condição imunológica', unit: '—', bars: [85, 15], nullPct: 0 }
    ],
    sampleRows: [
      ['BOV-0101', 'Girolando', '495.0', 'Em dia'],
      ['BOV-0102', 'Gir Leiteiro', '440.5', 'Em dia'],
      ['BOV-0103', 'Holandês', '580.0', 'Em dia'],
      ['BOV-0104', 'Girolando', '510.0', 'Em dia'],
      ['BOV-0105', 'Guzerá', '530.2', 'Em dia'],
      ['BOV-0106', 'Girolando', '485.0', 'Em dia']
    ],
    versionHistory: [{ version: 'v3.0', date: '01/03/2024', notes: 'Atualização do lote de novilhas 2023.', size: '5,8 MB' }],
    fileList: [{ name: 'sanidade_bovina_ufrrj.csv', size: '5,8 MB', format: 'CSV', date: '01/03/2024' }]
  },
  {
    id: 4,
    title: 'Matrículas e Trajetória de Graduação UFRRJ',
    unit: 'Pró-Reitoria de Graduação',
    unitShort: 'PROGRAD',
    desc: 'Ingressos, matrículas ativas, evasão e conclusão por curso e período, anonimizado conforme a LGPD.',
    description: `<h3>Apresentação</h3><p>Painel de indicadores institucionais acadêmicos anonimizados, cobrindo índices de conclusão, retenção por disciplina, tempo médio até a titulação e perfil socioeconômico agrupado por instituto.</p>`,
    tags: ['educação', 'indicadores', 'gestão', 'lgpd'],
    cat: 'soc',
    format: 'CSV',
    tint: 'var(--brand-rose)',
    size: '8,9 MB',
    rows: '112 mil linhas',
    cols: 5,
    files: 2,
    downloads: 3120,
    dl: '3,1 mil',
    views: '12,4 mil',
    likesCount: 210,
    updated: 'há 2 dias',
    published: '05/01/2023',
    license: 'ODbL 1.0',
    usability: '9.6',
    doi: '10.5281/zenodo.ufrrj.prograd.11200',
    version: 'v2.0',
    status: 'published',
    featured: true,
    recent: true,
    order: 4,
    coverageTime: '2016 a 2023',
    coverageGeo: 'Todos os Câmpus da UFRRJ',
    authors: [
      { name: 'Núcleo de Avaliação Institucional', role: 'Curadoria de Dados', inst: 'PROGRAD / UFRRJ', color: 'var(--brand-rose)', initials: 'NA' }
    ],
    columns: [
      { name: 'semestre_ingresso', type: 'text', sample: ['2020.1', '2020.2'], desc: 'Período letivo de ingresso', unit: 'Semestre', bars: [20, 20, 20, 20], nullPct: 0 },
      { name: 'codigo_curso', type: 'num', sample: ['104', '208'], desc: 'Código e-MEC do curso', unit: '—', bars: [15, 25, 30, 20], nullPct: 0 },
      { name: 'nome_curso', type: 'text', sample: ['Ciência da Computação', 'Agronomia'], desc: 'Curso de graduação', unit: '—', bars: [25, 25, 25, 25], nullPct: 0 },
      { name: 'situacao_atual', type: 'text', sample: ['Formado', 'Cursando'], desc: 'Condição da matrícula', unit: '—', bars: [55, 30, 15], nullPct: 0 }
    ],
    sampleRows: [
      ['2019.1', '104', 'Ciência da Computação', 'Formado'],
      ['2019.1', '102', 'Agronomia', 'Formado'],
      ['2020.1', '104', 'Ciência da Computação', 'Cursando'],
      ['2020.1', '108', 'Medicina Veterinária', 'Cursando'],
      ['2021.2', '115', 'Engenharia Florestal', 'Cursando'],
      ['2022.1', '104', 'Ciência da Computação', 'Cursando']
    ],
    versionHistory: [{ version: 'v2.0', date: '08/03/2024', notes: 'Inclusão dos ingressantes 2023.2.', size: '8,9 MB' }],
    fileList: [{ name: 'matriculas_ufrrj_anonimizado.csv', size: '8,9 MB', format: 'CSV', date: '08/03/2024' }]
  },
  {
    id: 5,
    title: 'Qualidade da Água — Bacia do Rio Guandu',
    unit: 'Ciências Biológicas e da Saúde',
    unitShort: 'ICBS',
    desc: 'Parâmetros físico-químicos e microbiológicos coletados em pontos de monitoramento ao longo da bacia.',
    description: `<h3>Apresentação</h3><p>Monitoramento ambiental de oxigênio dissolvido, turbidez, coliformes termotolerantes e presença de microplásticos na calha principal e afluentes do Rio Guandu, principal manancial da RMRJ.</p>`,
    tags: ['água', 'ambiental', 'monitoramento', 'icbs'],
    cat: 'bio',
    format: 'CSV',
    tint: 'var(--brand-lightgreen)',
    size: '2,2 MB',
    rows: '9,4 mil linhas',
    cols: 5,
    files: 2,
    downloads: 980,
    dl: '980',
    views: '2,8 mil',
    likesCount: 65,
    updated: 'há 5 dias',
    published: '22/09/2022',
    license: 'CC BY 4.0',
    usability: '8.5',
    doi: '10.5281/zenodo.ufrrj.bio.9420',
    version: 'v1.3',
    status: 'published',
    featured: false,
    recent: true,
    order: 5,
    coverageTime: '2020 a 2024',
    coverageGeo: 'Bacia Hidrográfica do Guandu, RJ',
    authors: [
      { name: 'Dr. Leonardo Esteves', role: 'Pesquisador Responsável', inst: 'ICBS / UFRRJ', color: 'var(--brand-lightgreen)', initials: 'LE' }
    ],
    columns: [
      { name: 'ponto_amostragem', type: 'text', sample: ['P01-ETA', 'P02-Foz'], desc: 'Código da estação fluviométrica', unit: '—', bars: [20, 20, 20, 20], nullPct: 0 },
      { name: 'oxigenio_mgL', type: 'num', sample: ['6.4', '5.8'], desc: 'Oxigênio dissolvido', unit: 'mg/L', bars: [10, 20, 35, 25], nullPct: 0.1 },
      { name: 'turbidez_ntu', type: 'num', sample: ['12.5', '18.2'], desc: 'Turbidez nefelométrica', unit: 'NTU', bars: [15, 25, 30, 15], nullPct: 0 }
    ],
    sampleRows: [
      ['P01-Seropédica', '6.8', '14.2'],
      ['P02-Queimados', '4.9', '28.5'],
      ['P03-Nova Iguaçu', '5.2', '24.1'],
      ['P04-Japeri', '6.1', '16.0'],
      ['P05-ETA Guandu', '7.0', '11.8'],
      ['P06-Foz', '6.3', '19.4']
    ],
    versionHistory: [{ version: 'v1.3', date: '01/03/2024', notes: 'Adição de 12 novos pontos de coleta a montante.', size: '2,2 MB' }],
    fileList: [{ name: 'qualidade_agua_guandu.csv', size: '2,2 MB', format: 'CSV', date: '01/03/2024' }]
  },
  {
    id: 6,
    title: 'Inventário Florestal — Floresta Nacional Mário Xavier',
    unit: 'Instituto de Florestas',
    unitShort: 'IF',
    desc: 'Medições dendrométricas de parcelas permanentes: espécie, DAP, altura e biomassa estimada.',
    description: `<h3>Apresentação</h3><p>Estrutura fitossociológica e dinâmica florestal de fragmento de Mata Atlântica e talhões de reflorestamento na FLONA Mário Xavier. Subsídio a planos de manejo e conservação de espécies ameaçadas.</p>`,
    tags: ['florestas', 'biomassa', 'ecologia', 'mata atlântica'],
    cat: 'flor',
    format: 'CSV',
    tint: 'var(--brand-teal)',
    size: '4,5 MB',
    rows: '27,8 mil linhas',
    cols: 5,
    files: 2,
    downloads: 760,
    dl: '760',
    views: '2,1 mil',
    likesCount: 52,
    updated: 'há 2 semanas',
    published: '14/11/2022',
    license: 'CC BY-NC 4.0',
    usability: '8.2',
    doi: '10.5281/zenodo.ufrrj.flor.2780',
    version: 'v1.1',
    status: 'published',
    featured: true,
    recent: false,
    order: 6,
    coverageTime: '2019 a 2023',
    coverageGeo: 'FLONA Mário Xavier, Seropédica',
    authors: [
      { name: 'Dra. Camila Nogueira', role: 'Docente / Pesquisadora', inst: 'Instituto de Florestas', color: 'var(--brand-teal)', initials: 'CN' }
    ],
    columns: [
      { name: 'parcela', type: 'text', sample: ['P-A1', 'P-B2'], desc: 'Código da parcela permanente', unit: '—', bars: [25, 25, 25, 25], nullPct: 0 },
      { name: 'especie_cientifica', type: 'text', sample: ['Cedrela fissilis', 'Schizolobium parahyba'], desc: 'Binômio botânico', unit: '—', bars: [30, 25, 20, 15], nullPct: 0 },
      { name: 'dap_cm', type: 'num', sample: ['24.5', '38.2'], desc: 'Diâmetro à altura do peito', unit: 'cm', bars: [10, 20, 30, 25], nullPct: 0 }
    ],
    sampleRows: [
      ['P-A1', 'Cedrela fissilis', '28.4'],
      ['P-A1', 'Schizolobium parahyba', '42.1'],
      ['P-A2', 'Euterpe edulis', '14.8'],
      ['P-A2', 'Inga edulis', '22.3'],
      ['P-B1', 'Dalbergia nigra', '31.5'],
      ['P-B2', 'Peltophorum dubium', '36.0']
    ],
    versionHistory: [{ version: 'v1.1', date: '20/02/2024', notes: 'Revisão taxonômica de herbário.', size: '4,5 MB' }],
    fileList: [{ name: 'inventario_flona_mario_xavier.csv', size: '4,5 MB', format: 'CSV', date: '20/02/2024' }]
  },
  {
    id: 7,
    title: 'Composição e Fertilidade de Solos — Campus Seropédica',
    unit: 'Instituto de Agronomia',
    unitShort: 'IA',
    desc: 'Análises de pH, matéria orgânica, macro e micronutrientes em malha amostral georreferenciada.',
    description: `<h3>Apresentação</h3><p>Mapeamento pedológico de solos hidromórficos e argissolos da Fazenda Experimental da UFRRJ, incluindo capacidade de troca catiônica (CTC), saturação por bases (V%) e teores de fósforo e potássio.</p>`,
    tags: ['solos', 'agronomia', 'geoquímica', 'fertilidade'],
    cat: 'agro',
    format: 'CSV',
    tint: 'var(--brand-green)',
    size: '1,7 MB',
    rows: '6,1 mil linhas',
    cols: 5,
    files: 2,
    downloads: 1120,
    dl: '1,1 mil',
    views: '3,2 mil',
    likesCount: 88,
    updated: 'há 6 dias',
    published: '30/08/2021',
    license: 'CC BY 4.0',
    usability: '8.9',
    doi: '10.5281/zenodo.ufrrj.agro.6100',
    version: 'v2.0',
    status: 'published',
    featured: false,
    recent: true,
    order: 7,
    coverageTime: '2018 a 2023',
    coverageGeo: 'Câmpus Seropédica UFRRJ',
    authors: [
      { name: 'Dr. Roberto Meireles', role: 'Professor Titular', inst: 'Departamento de Solos / IA', color: 'var(--brand-green)', initials: 'RM' }
    ],
    columns: [
      { name: 'amostra_id', type: 'text', sample: ['S-001', 'S-002'], desc: 'Código da amostra de solo', unit: '—', bars: [20, 20, 20, 20], nullPct: 0 },
      { name: 'ph_h2o', type: 'num', sample: ['5.6', '6.1'], desc: 'Potencial hidrogeniônico em água', unit: 'pH', bars: [5, 15, 45, 25], nullPct: 0 },
      { name: 'materia_organica_gkg', type: 'num', sample: ['22.4', '28.0'], desc: 'Carbono orgânico total', unit: 'g/kg', bars: [10, 25, 35, 20], nullPct: 0.1 }
    ],
    sampleRows: [
      ['S-001', '5.8', '24.2'],
      ['S-002', '6.2', '31.0'],
      ['S-003', '5.4', '18.9'],
      ['S-004', '5.9', '26.5'],
      ['S-005', '6.4', '33.1'],
      ['S-006', '5.7', '21.4']
    ],
    versionHistory: [{ version: 'v2.0', date: '02/03/2024', notes: 'Georreferenciamento de 45 novas parcelas.', size: '1,7 MB' }],
    fileList: [{ name: 'fertilidade_solos_seropedica.csv', size: '1,7 MB', format: 'CSV', date: '02/03/2024' }]
  },
  {
    id: 8,
    title: 'Séries de Preços de Hortifrúti — CEASA-RJ',
    unit: 'Ciências Sociais Aplicadas',
    unitShort: 'ICSA',
    desc: 'Preços diários por produto e classificação, úteis para estudos de mercado agrícola e séries econômicas.',
    description: `<h3>Apresentação</h3><p>Cotações diárias de atacado da central de abastecimento do Grande Rio (Irajá/CEASA), monitorando a volatilidade de preços de tomate, batata, cebola, banana e folhosas produzidas no cinturão verde fluminense.</p>`,
    tags: ['economia', 'preços', 'séries temporais', 'hortifrúti'],
    cat: 'econ',
    format: 'CSV',
    tint: 'var(--brand-indigo)',
    size: '6,3 MB',
    rows: '58,9 mil linhas',
    cols: 5,
    files: 2,
    downloads: 2040,
    dl: '2,0 mil',
    views: '6,9 mil',
    likesCount: 115,
    updated: 'há 1 dia',
    published: '18/05/2022',
    license: 'CC BY 4.0',
    usability: '9.0',
    doi: '10.5281/zenodo.ufrrj.econ.5890',
    version: 'v3.1',
    status: 'published',
    featured: false,
    recent: true,
    order: 8,
    coverageTime: '2019 a 2024',
    coverageGeo: 'Região Metropolitana do Rio de Janeiro',
    authors: [
      { name: 'Dr. Thiago Fonseca', role: 'Economista / Docente', inst: 'ICSA / UFRRJ', color: 'var(--brand-indigo)', initials: 'TF' }
    ],
    columns: [
      { name: 'data_cotacao', type: 'date', sample: ['2024-03-01', '2024-03-02'], desc: 'Data do pregão', unit: 'Data', bars: [20, 20, 20, 20], nullPct: 0 },
      { name: 'produto', type: 'text', sample: ['Tomate Longa Vida', 'Batata Lisa'], desc: 'Designação comercial', unit: '—', bars: [30, 25, 20, 15], nullPct: 0 },
      { name: 'preco_kg', type: 'num', sample: ['4.80', '5.20'], desc: 'Preço médio ponderado', unit: 'R$/kg', bars: [10, 20, 35, 25], nullPct: 0 }
    ],
    sampleRows: [
      ['2024-03-08', 'Tomate Especial', '5.40'],
      ['2024-03-08', 'Batata Lavada', '4.20'],
      ['2024-03-08', 'Cebola Amarela', '3.80'],
      ['2024-03-08', 'Banana Prata', '4.10'],
      ['2024-03-08', 'Alface Crespa', '1.90'],
      ['2024-03-08', 'Cenoura Especial', '3.50']
    ],
    versionHistory: [{ version: 'v3.1', date: '09/03/2024', notes: 'Atualização diária automática.', size: '6,3 MB' }],
    fileList: [{ name: 'ceasa_precos_hortifruti.csv', size: '6,3 MB', format: 'CSV', date: '09/03/2024' }]
  },
  {
    id: 9,
    title: 'Perfis de Expressão Gênica em Cana-de-açúcar',
    unit: 'Instituto de Química — Biotecnologia',
    unitShort: 'IQ',
    desc: 'Matriz de expressão normalizada de ensaios de bancada, com metadados de tratamento e réplica.',
    description: `<h3>Apresentação</h3><p>Ensaios de RNA-Seq de variedades comerciais de cana-de-açúcar sob estresse hídrico e inoculação por bactérias diazotróficas promotoras de crescimento vegetal.</p>`,
    tags: ['química', 'genômica', 'biotecnologia', 'bioenergia'],
    cat: 'quim',
    format: 'CSV',
    tint: 'var(--brand-purple)',
    size: '18,7 MB',
    rows: '146 mil linhas',
    cols: 5,
    files: 2,
    downloads: 640,
    dl: '640',
    views: '1,9 mil',
    likesCount: 44,
    updated: 'há 9 dias',
    published: '19/10/2022',
    license: 'CC BY-NC 4.0',
    usability: '8.4',
    doi: '10.5281/zenodo.ufrrj.quim.1460',
    version: 'v1.0',
    status: 'published',
    featured: false,
    recent: false,
    order: 9,
    coverageTime: '2021 a 2023',
    coverageGeo: 'Laboratório de Biotecnologia Vegetal / IQ',
    authors: [
      { name: 'Dra. Fernanda Prado', role: 'Pesquisadora Líder', inst: 'Instituto de Química / UFRRJ', color: 'var(--brand-purple)', initials: 'FP' }
    ],
    columns: [
      { name: 'gene_id', type: 'text', sample: ['Sh_019284', 'Sh_028471'], desc: 'Identificador do transcrito', unit: '—', bars: [25, 25, 25, 25], nullPct: 0 },
      { name: 'condicao', type: 'text', sample: ['Controle', 'Estresse_Seca'], desc: 'Tratamento experimental', unit: '—', bars: [50, 50], nullPct: 0 },
      { name: 'tpm_expr', type: 'num', sample: ['14.8', '89.4'], desc: 'Transcripts Per Million', unit: 'TPM', bars: [15, 25, 30, 20], nullPct: 0 }
    ],
    sampleRows: [
      ['Sh_001284', 'Controle', '24.5'],
      ['Sh_001284', 'Estresse_Seca', '142.8'],
      ['Sh_002941', 'Controle', '88.1'],
      ['Sh_002941', 'Estresse_Seca', '31.0'],
      ['Sh_003810', 'Controle', '5.4'],
      ['Sh_003810', 'Estresse_Seca', '18.9']
    ],
    versionHistory: [{ version: 'v1.0', date: '01/03/2024', notes: 'Lançamento da matriz normalizada TPM.', size: '18,7 MB' }],
    fileList: [{ name: 'expressao_genica_cana.csv', size: '18,7 MB', format: 'CSV', date: '01/03/2024' }]
  }
];

const INITIAL_GROUPS = [
  {
    id: 1,
    name: 'Laboratório de Agrometeorologia Aplicada (LAA)',
    description: 'Monitoramento climatológico, modelagem de safra e zoneamento de risco climático no Estado do Rio de Janeiro.',
    role: 'owner',
    ownerName: 'Dra. Helena Vasconcelos',
    memberCount: 12,
    datasetCount: 4,
    createdAt: '10/02/2022',
    members: [
      { name: 'Dra. Helena Vasconcelos', role: 'Dono', unit: 'Instituto de Ciências Exatas' },
      { name: 'Dr. Carlos Eduardo Lima', role: 'Admin', unit: 'Instituto de Agronomia' },
      { name: 'Mariana Duarte', role: 'Editor', unit: 'Pós-graduação em Meteorologia' },
      { name: 'Lucas Silveira', role: 'Visualizador', unit: 'Graduação em Computação' }
    ]
  },
  {
    id: 2,
    name: 'Grupo de Pesquisa em Biodiversidade Fluminense (GPBio)',
    description: 'Levantamento da flora e fauna da Mata Atlântica e monitoramento ecológico de ecossistemas costeiros e continentais.',
    role: 'editor',
    ownerName: 'Dr. Leonardo Esteves',
    memberCount: 18,
    datasetCount: 3,
    createdAt: '15/06/2021',
    members: [
      { name: 'Dr. Leonardo Esteves', role: 'Dono', unit: 'ICBS / UFRRJ' },
      { name: 'Dra. Helena Vasconcelos', role: 'Editor', unit: 'Instituto de Ciências Exatas' },
      { name: 'Dra. Camila Nogueira', role: 'Admin', unit: 'Instituto de Florestas' }
    ]
  },
  {
    id: 3,
    name: 'Núcleo de Ciência de Dados e Agroecologia (NCDA)',
    description: 'Aplicações de inteligência artificial, mineração de dados e sensoriamento remoto para a produção agrícola sustentável.',
    role: 'admin',
    ownerName: 'Prof. Marcos Vinicius Silva',
    memberCount: 9,
    datasetCount: 2,
    createdAt: '03/09/2023',
    members: [
      { name: 'Prof. Marcos Vinicius Silva', role: 'Dono', unit: 'Instituto de Agronomia' },
      { name: 'Dra. Helena Vasconcelos', role: 'Admin', unit: 'Instituto de Ciências Exatas' }
    ]
  }
];

// --- Persistent State ---
const state = {
  theme: localStorage.getItem('dr-theme') || 'light',
  lang: localStorage.getItem('dr-lang') || 'pt',
  user: {
    name: 'Dra. Helena Vasconcelos',
    short: 'HV',
    role: 'Pesquisador / Professor Titular',
    unit: 'Instituto de Ciências Exatas',
    email: 'h.vasconcelos@ufrrj.br'
  },
  datasets: JSON.parse(localStorage.getItem('dr-datasets') || 'null') || INITIAL_DATASETS,
  groups: JSON.parse(localStorage.getItem('dr-groups') || 'null') || INITIAL_GROUPS,
  favorites: JSON.parse(localStorage.getItem('dr-favorites') || '[]'),
  likes: JSON.parse(localStorage.getItem('dr-likes') || '{}'),
  currentRoute: window.location.hash || '#/',
  publishStep: 1,
  publishDraft: {
    fileName: 'solos_seropedica_2024.csv',
    fileSize: '1,8 MB',
    rowsCount: '6.420 linhas',
    title: 'Fertilidade e Microbiologia de Solos — Campus Seropédica',
    desc: 'Levantamento de pH, macronutrientes e atividade respiratória do solo em parcelas agroecológicas.',
    unit: 'Instituto de Agronomia',
    area: 'agro',
    period: '2023–2024',
    region: 'Campus Seropédica (Fazenda Experimental)',
    tags: ['solos', 'agroecologia', 'fertilidade'],
    license: 'ccby',
    visibility: 'public',
    columns: [
      { name: 'ponto_id', type: 'text', desc: 'Identificador do ponto georreferenciado', unit: '—' },
      { name: 'profundidade_cm', type: 'num', desc: 'Profundidade da coleta', unit: 'cm' },
      { name: 'ph_agua', type: 'num', desc: 'pH em suspensão aquosa', unit: 'pH' },
      { name: 'materia_organica', type: 'num', desc: 'Teor de matéria orgânica', unit: 'g/kg' },
      { name: 'fosforo_mgkg', type: 'num', desc: 'Fósforo disponível (Mehlich-1)', unit: 'mg/kg' }
    ]
  }
};

function saveState() {
  localStorage.setItem('dr-theme', state.theme);
  localStorage.setItem('dr-lang', state.lang);
  localStorage.setItem('dr-datasets', JSON.stringify(state.datasets));
  localStorage.setItem('dr-groups', JSON.stringify(state.groups));
  localStorage.setItem('dr-favorites', JSON.stringify(state.favorites));
  localStorage.setItem('dr-likes', JSON.stringify(state.likes));
}

function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = 'dr-toast';
  t.innerHTML = `${ICONS.check} <span>${msg}</span>`;
  container.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(10px)';
    t.style.transition = 'all 0.2s';
    setTimeout(() => t.remove(), 200);
  }, 2800);
}



// --- Router & Navigation ---
function navigate(hash) {
  window.location.hash = hash;
}

window.addEventListener('hashchange', () => {
  state.currentRoute = window.location.hash || '#/';
  renderApp();
  window.scrollTo(0, 0);
});

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.classList.toggle('dark', state.theme === 'dark');
  saveState();
  renderApp();
}

function setLang(lang) {
  state.lang = lang;
  saveState();
  renderApp();
}

function toggleFavorite(id, e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  const idx = state.favorites.indexOf(id);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    showToast(state.lang === 'pt' ? 'Removido dos favoritos' : 'Removed from favorites');
  } else {
    state.favorites.push(id);
    showToast(state.lang === 'pt' ? 'Adicionado aos favoritos' : 'Added to favorites');
  }
  saveState();
  renderApp();
}

function toggleLike(id, e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  const isLiked = !!state.likes[id];
  state.likes[id] = !isLiked;
  const ds = state.datasets.find(d => d.id === id);
  if (ds) {
    ds.likesCount = (ds.likesCount || 0) + (state.likes[id] ? 1 : -1);
  }
  saveState();
  renderApp();
}

function downloadDatasetCSV(ds) {
  if (!ds || !ds.columns || !ds.sampleRows) {
    showToast(state.lang === 'pt' ? 'Download iniciado' : 'Download started');
    return;
  }
  const headers = ds.columns.map(c => c.name).join(',');
  const rows = ds.sampleRows.map(r => r.join(',')).join('\n');
  const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(headers + "\n" + rows);
  const link = document.createElement("a");
  link.setAttribute("href", csvContent);
  link.setAttribute("download", `${ds.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast(state.lang === 'pt' ? `Baixando ${ds.format} (${ds.size})` : `Downloading ${ds.format} (${ds.size})`);
}

// --- UI Components ---
function renderNavbar(activePage = '') {
  const isDark = state.theme === 'dark';
  return `
    <header class="dr-nav">
      <div class="dr-container dr-nav-inner">
        <a class="dr-brand" href="#/">
          ${brandMark(38)}
          <span class="dr-brand-text">
            <span class="dr-brand-name">Data<span>Rural</span></span>
            <span class="dr-brand-sub">UFRRJ · Datasets</span>
          </span>
        </a>

        <nav class="dr-nav-links">
          <a class="dr-nav-link ${activePage === 'datasets' ? 'active' : ''}" href="#/datasets">
            ${t('common.nav.datasets', 'Datasets')}
          </a>
          <a class="dr-nav-link ${activePage === 'dashboard' ? 'active' : ''}" href="#/dashboard">
            ${t('common.nav.my_datasets', 'Meus datasets')}
          </a>
          <a class="dr-nav-link ${activePage === 'favorites' ? 'active' : ''}" href="#/favorites">
            ${t('common.nav.favorites', 'Favoritos')}
          </a>
          <a class="dr-nav-link ${activePage === 'groups' ? 'active' : ''}" href="#/groups">
            ${t('common.nav.groups', 'Grupos')}
          </a>
        </nav>

        <div class="dr-nav-right">
          <!-- Language Toggle -->
          <div class="dr-lang-select" style="display:inline-flex;align-items:center;background:var(--secondary);border-radius:20px;padding:3px;font-size:12px;font-weight:700;">
            <button onclick="setLang('pt')" style="padding:4px 10px;border-radius:16px;background:${state.lang === 'pt' ? 'var(--primary)' : 'transparent'};color:${state.lang === 'pt' ? '#fff' : 'var(--muted-foreground)'};cursor:pointer;">PT</button>
            <button onclick="setLang('en')" style="padding:4px 10px;border-radius:16px;background:${state.lang === 'en' ? 'var(--primary)' : 'transparent'};color:${state.lang === 'en' ? '#fff' : 'var(--muted-foreground)'};cursor:pointer;">EN</button>
          </div>

          <!-- Theme Toggle -->
          <button class="dr-btn dr-btn-ghost" onclick="toggleTheme()" title="${isDark ? t('common.nav.theme_light') : t('common.nav.theme_dark')}" style="padding:8px;border-radius:50%;color:var(--foreground);">
            ${isDark ? ICONS.sun : ICONS.moon}
          </button>

          <!-- Publish Button -->
          <a class="dr-btn dr-btn-primary" href="#/dashboard/publish" style="color:white;display:inline-flex;align-items:center;gap:6px;">
            ${ICONS.plus} ${t('common.nav.publish_dataset', 'Publicar dataset')}
          </a>

          <!-- User Menu -->
          <div class="dr-user-menu" style="position:relative;display:inline-block;">
            <button id="user-menu-btn" class="dr-user-btn" onclick="document.getElementById('user-menu-dropdown').classList.toggle('hidden')" style="display:flex;align-items:center;gap:8px;padding:4px 8px;border-radius:24px;background:var(--surface-2);border:1px solid var(--border);cursor:pointer;">
              <span class="dr-avatar" style="width:30px;height:30px;border-radius:50%;background:var(--brand-blue);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;">${state.user.short}</span>
              <span style="font-size:13px;font-weight:700;color:var(--foreground);">${state.user.name.split(' ').slice(0, 2).join(' ')}</span>
              ${ICONS.chevronDown}
            </button>
            <div id="user-menu-dropdown" class="dr-dropdown hidden" style="position:absolute;right:0;top:44px;background:var(--card);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow-lg);padding:8px;min-width:210px;z-index:900;">
              <div style="padding:8px 12px;border-bottom:1px solid var(--border);margin-bottom:6px;">
                <div style="font-size:13px;font-weight:800;color:var(--foreground);">${state.user.name}</div>
                <div style="font-size:11.5px;color:var(--muted-foreground);">${state.user.email}</div>
              </div>
              <a href="#/profile" class="dr-dropdown-item" style="display:flex;align-items:center;gap:8px;padding:8px 12px;font-size:13px;color:var(--foreground);text-decoration:none;border-radius:6px;">
                ${ICONS.user} ${t('common.nav.user_menu.my_profile', 'Meu perfil')}
              </a>
              <a href="#/dashboard" class="dr-dropdown-item" style="display:flex;align-items:center;gap:8px;padding:8px 12px;font-size:13px;color:var(--foreground);text-decoration:none;border-radius:6px;">
                ${ICONS.database} ${t('common.nav.user_menu.my_datasets', 'Meus datasets')}
              </a>
              <a href="#/favorites" class="dr-dropdown-item" style="display:flex;align-items:center;gap:8px;padding:8px 12px;font-size:13px;color:var(--foreground);text-decoration:none;border-radius:6px;">
                ${ICONS.bookmark} ${t('common.nav.user_menu.favorites', 'Favoritos')}
              </a>
              <a href="#/groups" class="dr-dropdown-item" style="display:flex;align-items:center;gap:8px;padding:8px 12px;font-size:13px;color:var(--foreground);text-decoration:none;border-radius:6px;">
                ${ICONS.users} ${t('common.nav.user_menu.my_groups', 'Meus grupos')}
              </a>
              <div style="border-top:1px solid var(--border);margin:6px 0;"></div>
              <a href="#/login" class="dr-dropdown-item" style="display:flex;align-items:center;gap:8px;padding:8px 12px;font-size:13px;color:var(--destructive);text-decoration:none;border-radius:6px;">
                ${t('common.nav.user_menu.logout', 'Sair')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderDatasetCard(d) {
  const isFav = state.favorites.includes(d.id);
  const isLiked = !!state.likes[d.id];
  const likeCnt = (d.likesCount || 0) + (isLiked ? 1 : 0);
  const format = d.format || 'CSV';
  const tint = d.tint || 'var(--brand-blue)';

  return `
    <div class="dr-ds-card" onclick="navigate('#/datasets/${d.id}')" style="cursor:pointer;">
      <div class="dr-ds-top">
        ${cardArt(tint)}
        <span class="dr-ds-format">
          <span class="sq" style="background: ${tint};"></span>
          ${format}
        </span>
      </div>
      <div class="dr-ds-body">
        <span class="dr-ds-unit" style="color: ${tint};">
          ${ICONS.building} ${d.unit}
        </span>
        <h3 class="dr-ds-title">${d.title}</h3>
        <p class="dr-ds-desc">${d.desc}</p>
        <div class="dr-ds-tags">
          ${(d.tags || []).slice(0, 3).map(tg => `<span class="dr-ds-tag">${tg}</span>`).join('')}
        </div>
        <div class="dr-ds-meta">
          <button type="button" class="dr-card-like-btn ${isLiked ? 'on' : ''}" onclick="toggleLike(${d.id}, event)" title="${t('dataset.card.like_title', 'Curtir dataset')}">
            <span style="color:${isLiked ? '#e11d48' : 'inherit'};fill:${isLiked ? '#e11d48' : 'none'};display:inline-flex;">${ICONS.heart}</span> ${likeCnt}
          </button>
          <button type="button" class="dr-card-like-btn ${isFav ? 'on' : ''}" onclick="toggleFavorite(${d.id}, event)" title="${isFav ? t('dataset.card.unsave_title', 'Remover dos favoritos') : t('dataset.card.save_title', 'Salvar nos favoritos')}" style="margin-left:6px;">
            <span style="color:${isFav ? 'var(--brand-green)' : 'inherit'};fill:${isFav ? 'var(--brand-green)' : 'none'};display:inline-flex;">${ICONS.bookmark}</span>
          </button>
          <span class="m">
            ${ICONS.clock} ${d.updated}
          </span>
          <span class="spacer"></span>
          <span class="dr-usability" title="${t('dataset.card.usability_title', 'Nota de usabilidade')}">
            ${ICONS.verified} ${d.usability || '8.5'}
          </span>
        </div>
        <div class="dr-ds-meta" style="border-top:none;padding-top:10px;align-items:center;">
          <span class="m">
            ${ICONS.file} ${d.size || '—'}
          </span>
          <span class="spacer"></span>
          <span class="m" style="font-size:12px;color:var(--muted-foreground);max-width:130px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-flex;align-items:center;gap:4px;" title="${d.authors?.[0]?.name || 'UFRRJ'}">
            ${ICONS.user} ${d.authors?.[0]?.name || 'UFRRJ'}
          </span>
          <span class="spacer"></span>
          <span class="dr-ds-license">
            ${ICONS.scale} ${d.license}
          </span>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="dr-footer">
      <div class="dr-container">
        <div class="dr-footer-grid">
          <div>
            <div class="dr-brand" style="margin-bottom:12px;">
              ${brandMark(32)}
              <span class="dr-brand-name">Data<span>Rural</span></span>
            </div>
            <p style="font-size:13.5px;line-height:1.6;color:var(--muted-foreground);max-width:320px;">
              ${t('common.footer.about_1', 'Plataforma institucional de datasets da Universidade Federal Rural do Rio de Janeiro.')}
            </p>
            <p style="font-size:12.5px;color:var(--muted-foreground);margin-top:12px;">
              ${t('common.footer.about_2', 'Dados abertos para ensino, pesquisa e extensão.')}
            </p>
          </div>
          <div>
            <h4 style="font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--foreground);margin-bottom:14px;">
              ${t('common.footer.platform', 'Plataforma')}
            </h4>
            <div style="display:flex;flex-direction:column;gap:10px;font-size:13.5px;">
              <a href="#/datasets" style="color:var(--muted-foreground);text-decoration:none;">${t('common.footer.explore_datasets', 'Explorar datasets')}</a>
              <a href="#/dashboard/publish" style="color:var(--muted-foreground);text-decoration:none;">${t('common.footer.publish_data', 'Publicar dados')}</a>
              <a href="#/groups" style="color:var(--muted-foreground);text-decoration:none;">${t('common.footer.research_groups', 'Grupos de pesquisa')}</a>
              <a href="#/dashboard" style="color:var(--muted-foreground);text-decoration:none;">${t('common.footer.my_account', 'Minha conta')}</a>
            </div>
          </div>
          <div>
            <h4 style="font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--foreground);margin-bottom:14px;">
              ${t('common.footer.academic_units', 'Institutos UFRRJ')}
            </h4>
            <div style="display:flex;flex-direction:column;gap:10px;font-size:13.5px;color:var(--muted-foreground);">
              <span>Instituto de Ciências Exatas (ICE)</span>
              <span>Instituto de Agronomia (IA)</span>
              <span>Instituto de Veterinária (IV)</span>
              <span>Instituto de Florestas (IF)</span>
              <span>Instituto de Ciências Biológicas e da Saúde (ICBS)</span>
            </div>
          </div>
          <div>
            <h4 style="font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--foreground);margin-bottom:14px;">
              ${t('common.footer.institutional', 'Institucional')}
            </h4>
            <div style="display:flex;flex-direction:column;gap:10px;font-size:13.5px;color:var(--muted-foreground);">
              <span>UFRRJ — Câmpus Seropédica</span>
              <span>Pró-Reitoria de Pesquisa e Pós-Graduação (PROPPG)</span>
              <span>Termos de Uso e Política de Dados Abertos</span>
              <span>Licenças Creative Commons e ODbL</span>
            </div>
          </div>
        </div>
        <div style="border-top:1px solid var(--border);margin-top:40px;padding-top:24px;display:flex;justify-content:space-between;align-items:center;font-size:12.5px;color:var(--muted-foreground);flex-wrap:wrap;gap:12px;">
          <span>© ${new Date().getFullYear()} Universidade Federal Rural do Rio de Janeiro. Todos os direitos reservados.</span>
          <span>DataRural v2.0 · Plataforma de Dados Abertos</span>
        </div>
      </div>
    </footer>
  `;
}



// --- Home Page ---
function renderHome() {
  const query = '';
  const activeTab = state.homeTab || 'recent';
  const viewMode = state.homeView || 'grid';

  let list = state.datasets.slice();
  if (activeTab === 'recent') {
    list.sort((a, b) => b.id - a.id);
  } else if (activeTab === 'featured') {
    list = list.filter(d => d.featured);
  } else if (activeTab === 'popular') {
    list.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
  }

  return `
    <div class="dr-app">
      ${renderNavbar('home')}

      <!-- Hero Section -->
      <section class="dr-hero" id="top">
        <div class="dr-hero-arcos">
          <div class="strand strand-right">${arcosCluster()}</div>
          <div class="strand strand-left">${arcosCluster()}</div>
        </div>
        <div class="dr-container">
          <div class="dr-hero-inner">
            <span class="dr-hero-eyebrow">
              <span class="dot"></span>${t('marketing.hero.eyebrow', 'Repositório Institucional de Pesquisa')}
            </span>
            <h1>
              ${t('marketing.hero.title_prefix', 'Dados abertos para a pesquisa e inovação na ')}<span class="hl">${t('marketing.hero.title_hl', 'Rural')}</span>
            </h1>
            <p class="dr-hero-lead">
              ${t('marketing.hero.lead', 'Descubra, compartilhe e cite conjuntos de dados acadêmicos gerados pela comunidade da Universidade Federal Rural do Rio de Janeiro.')}
            </p>

            <div class="dr-search">
              ${ICONS.search}
              <input type="text" id="hero-search-input" placeholder="${t('marketing.hero.search_placeholder', 'Buscar por título, cultura, palavra-chave, autor ou DOI...')}" onkeydown="if(event.key==='Enter') { navigate('#/datasets?q=' + encodeURIComponent(this.value)); }" />
              <button class="dr-btn dr-btn-primary" onclick="navigate('#/datasets?q=' + encodeURIComponent(document.getElementById('hero-search-input').value))">
                ${t('marketing.hero.search_button', 'Buscar datasets')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Strip -->
      <div class="dr-container">
        <div class="dr-stats">
          ${STATS.map(s => `
            <div class="dr-stat">
              <span class="dr-stat-val">
                <span class="ic" style="background:${s.color};"></span>
                ${s.val}
              </span>
              <span class="dr-stat-label">${t(s.label, s.label)}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Categories Section -->
      <section class="dr-categories">
        <div class="dr-container">
          <div class="dr-sec-head">
            <div>
              <span class="dr-eyebrow">${t('marketing.categories.eyebrow', 'Áreas do Conhecimento')}</span>
              <h2>${t('marketing.categories.title', 'Navegue por grandes áreas de pesquisa')}</h2>
            </div>
          </div>

          <div class="dr-cat-grid">
            ${CATEGORIES.map(c => `
              <div class="dr-cat-card" onclick="navigate('#/datasets?cat=${c.id}')" style="cursor:pointer;">
                <span class="dr-cat-ic" style="background:${c.color};">
                  ${ICONS[c.icon] || ICONS.sprout}
                </span>
                <span>
                  <span class="dr-cat-name">${c.name}</span>
                  <span class="dr-cat-count">${c.count} datasets</span>
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Datasets Section -->
      <section class="dr-datasets-section">
        <div class="dr-container">
          <div class="dr-sec-head" style="align-items:flex-end;">
            <div>
              <span class="dr-eyebrow">${t('marketing.datasets.eyebrow', 'Catálogo')}</span>
              <h2>${t('marketing.datasets.title', 'Conjuntos de dados em destaque')}</h2>
            </div>
            <div style="display:flex;align-items:center;gap:16px;">
              <div class="dr-tabs">
                <button class="dr-tab ${activeTab === 'recent' ? 'active' : ''}" onclick="state.homeTab='recent';renderApp();">
                  ${t('marketing.datasets.tab_recent', 'Recentes')}
                </button>
                <button class="dr-tab ${activeTab === 'featured' ? 'active' : ''}" onclick="state.homeTab='featured';renderApp();">
                  ${t('marketing.datasets.tab_featured', 'Destaques')}
                </button>
                <button class="dr-tab ${activeTab === 'popular' ? 'active' : ''}" onclick="state.homeTab='popular';renderApp();">
                  ${t('marketing.datasets.tab_popular', 'Populares')}
                </button>
              </div>

              <div class="dr-view-toggle">
                <button class="dr-vt-btn ${viewMode === 'grid' ? 'active' : ''}" onclick="state.homeView='grid';renderApp();" title="Grid">
                  ${ICONS.grid}
                </button>
                <button class="dr-vt-btn ${viewMode === 'list' ? 'active' : ''}" onclick="state.homeView='list';renderApp();" title="Lista">
                  ${ICONS.list}
                </button>
              </div>
            </div>
          </div>

          <div class="${viewMode === 'grid' ? 'dr-ds-grid' : 'dr-ds-list'}" style="margin-top:24px;">
            ${list.map(d => renderDatasetCard(d)).join('')}
          </div>

          <div style="text-align:center;margin-top:40px;">
            <a href="#/datasets" class="dr-btn dr-btn-secondary" style="padding:12px 32px;font-size:14.5px;font-weight:700;border-radius:24px;">
              ${t('marketing.datasets.view_all', 'Ver todos os datasets no catálogo')} &rarr;
            </a>
          </div>
        </div>
      </section>

      <!-- Publish CTA -->
      <div class="dr-container" style="margin:60px auto;">
        <div class="dr-cta">
          <div>
            <h2>${t('marketing.cta.title', 'Publique seus dados de pesquisa na UFRRJ')}</h2>
            <p>${t('marketing.cta.lead', 'Atenda às exigências de agências de fomento (CNPq, FAPERJ, CAPES), aumente o impacto e citações de seus artigos e garanta a preservação permanente de suas séries de dados.')}</p>
            <div class="dr-cta-steps">
              <div class="dr-cta-step">
                <span class="num">1</span>
                <div>
                  <h4>1. Envie a planilha</h4>
                  <p>Arquivos CSV, Parquet ou Excel com inferência de tipos.</p>
                </div>
              </div>
              <div class="dr-cta-step">
                <span class="num">2</span>
                <div>
                  <h4>2. Descreva os metadados</h4>
                  <p>Documente variáveis, período e licença aberta.</p>
                </div>
              </div>
              <div class="dr-cta-step">
                <span class="num">3</span>
                <div>
                  <h4>3. Obtenha citação e DOI</h4>
                  <p>Receba identificador persistente e métricas de uso.</p>
                </div>
              </div>
            </div>
          </div>
          <div style="flex-shrink:0;">
            <a href="#/dashboard/publish" class="dr-btn dr-btn-primary" style="background:#fff;color:var(--brand-blue);padding:14px 28px;font-size:15px;font-weight:800;border-radius:12px;box-shadow:var(--shadow-md);">
              ${t('marketing.cta.button', 'Iniciar publicação de dataset')}
            </a>
          </div>
        </div>
      </div>

      ${renderFooter()}
    </div>
  `;
}

// --- Datasets Explore Page ---
function renderExplore() {
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
  const searchParam = urlParams.get('q') || '';
  const catParam = urlParams.get('cat') || null;

  const activeTab = state.exploreTab || 'recent';
  const viewMode = state.exploreView || 'grid';
  const areasOpen = state.areasOpen !== undefined ? state.areasOpen : Boolean(catParam);

  let list = state.datasets.slice();
  if (catParam) {
    list = list.filter(d => d.cat === catParam);
  }
  if (searchParam) {
    const q = searchParam.toLowerCase().trim();
    list = list.filter(d => 
      (d.title || '').toLowerCase().includes(q) ||
      (d.desc || '').toLowerCase().includes(q) ||
      (d.unit || '').toLowerCase().includes(q) ||
      (d.tags || []).some(t => t.toLowerCase().includes(q))
    );
  }

  if (activeTab === 'recent') {
    list.sort((a, b) => b.id - a.id);
  } else if (activeTab === 'featured') {
    list = list.filter(d => d.featured);
  } else if (activeTab === 'popular') {
    list.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
  }

  return `
    <div class="dr-app">
      ${renderNavbar('datasets')}

      <div class="dr-page-head">
        <div class="dr-container">
          <div class="dr-page-head-inner">
            <div>
              <div class="dr-page-breadcrumb">
                <a href="#/">Início</a> <span class="sep">&rsaquo;</span> <span>${t('common.nav.datasets', 'Datasets')}</span>
              </div>
              <h1>${t('dataset.explore.title', 'Explorar Datasets')}</h1>
              <p class="page-sub">
                ${t('dataset.explore.subtitle', 'Pesquise e filtre pelos conjuntos de dados científicos abertos e restritos da UFRRJ')}
              </p>
            </div>
            <div>
              <a href="#/dashboard/publish" class="dr-btn dr-btn-primary" style="color:white;display:inline-flex;align-items:center;gap:6px;">
                ${ICONS.plus} ${t('common.nav.publish_dataset', 'Publicar dataset')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="dr-container" style="padding-top:24px;padding-bottom:60px;">
        <!-- Search and Filter Bar -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px 20px;display:flex;flex-direction:column;gap:16px;box-shadow:var(--shadow-sm);">
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
            <div class="dr-search" style="flex:1;max-width:none;margin:0;">
              ${ICONS.search}
              <input type="text" id="explore-search-input" value="${searchParam}" placeholder="${t('dataset.explore.search_placeholder', 'Filtrar por título, autor, descrição, palavras-chave...')}" oninput="
                const val = this.value;
                const h = '#/datasets' + (val ? '?q=' + encodeURIComponent(val) + (catParam ? '&cat=' + catParam : '') : (catParam ? '?cat=' + catParam : ''));
                window.location.hash = h;
              " />
            </div>
            <button class="dr-btn ${areasOpen ? 'dr-btn-primary' : 'dr-btn-secondary'}" onclick="state.areasOpen = !state.areasOpen; renderApp();" style="display:inline-flex;align-items:center;gap:6px;">
              ${ICONS.sprout} Filtrar por Área ${ICONS.chevronDown}
            </button>
          </div>

          <!-- Areas Drawer -->
          ${areasOpen ? `
            <div style="border-top:1px solid var(--border);padding-top:16px;display:grid;grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));gap:10px;">
              <button onclick="navigate('#/datasets${searchParam ? '?q=' + searchParam : ''}')" class="dr-cat-card ${!catParam ? 'active' : ''}" style="padding:10px 14px;border-radius:10px;text-align:left;cursor:pointer;">
                <span class="dr-cat-name" style="font-size:13px;">Todas as Áreas</span>
              </button>
              ${CATEGORIES.map(c => `
                <button onclick="navigate('#/datasets?cat=${c.id}${searchParam ? '&q=' + searchParam : ''}')" class="dr-cat-card ${catParam === c.id ? 'active' : ''}" style="padding:10px 14px;border-radius:10px;display:flex;align-items:center;gap:10px;cursor:pointer;">
                  <span class="dr-cat-ic" style="width:28px;height:28px;border-radius:6px;background:${c.color};display:inline-flex;align-items:center;justify-content:center;color:#fff;">
                    ${ICONS[c.icon] || ICONS.sprout}
                  </span>
                  <span class="dr-cat-name" style="font-size:13px;">${c.name}</span>
                </button>
              `).join('')}
            </div>
          ` : ''}

          <!-- Sub Toolbar -->
          <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);padding-top:14px;flex-wrap:wrap;gap:12px;">
            <div style="font-size:13.5px;color:var(--muted-foreground);font-weight:600;">
              Encontrados <strong style="color:var(--foreground);">${list.length}</strong> datasets
              ${catParam ? ` na área <span class="dr-badge" style="background:var(--secondary);color:var(--primary);padding:3px 8px;border-radius:12px;margin-left:4px;">${CATEGORIES.find(c => c.id === catParam)?.name || catParam}</span>` : ''}
              ${searchParam ? ` correspondendo a "<strong>${searchParam}</strong>"` : ''}
            </div>

            <div style="display:flex;align-items:center;gap:16px;">
              <div class="dr-tabs">
                <button class="dr-tab ${activeTab === 'recent' ? 'active' : ''}" onclick="state.exploreTab='recent';renderApp();">
                  Recentes
                </button>
                <button class="dr-tab ${activeTab === 'featured' ? 'active' : ''}" onclick="state.exploreTab='featured';renderApp();">
                  Destaques
                </button>
                <button class="dr-tab ${activeTab === 'popular' ? 'active' : ''}" onclick="state.exploreTab='popular';renderApp();">
                  Mais baixados
                </button>
              </div>

              <div class="dr-view-toggle">
                <button class="dr-vt-btn ${viewMode === 'grid' ? 'active' : ''}" onclick="state.exploreView='grid';renderApp();" title="Grid">
                  ${ICONS.grid}
                </button>
                <button class="dr-vt-btn ${viewMode === 'list' ? 'active' : ''}" onclick="state.exploreView='list';renderApp();" title="Lista">
                  ${ICONS.list}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Datasets List / Grid -->
        <div class="${viewMode === 'grid' ? 'dr-ds-grid' : 'dr-ds-list'}" style="margin-top:24px;">
          ${list.length > 0 ? list.map(d => renderDatasetCard(d)).join('') : `
            <div style="grid-column:1/-1;text-align:center;padding:60px 20px;background:var(--card);border:1px solid var(--border);border-radius:14px;">
              <div style="font-size:40px;margin-bottom:12px;">🔍</div>
              <h3 style="font-size:18px;font-weight:800;color:var(--foreground);">Nenhum dataset encontrado</h3>
              <p style="color:var(--muted-foreground);margin-top:6px;font-size:14px;">Tente ajustar os filtros ou pesquisar com termos mais gerais.</p>
              <button onclick="navigate('#/datasets')" class="dr-btn dr-btn-secondary" style="margin-top:18px;">Limpar todos os filtros</button>
            </div>
          `}
        </div>
      </div>

      ${renderFooter()}
    </div>
  `;
}



// --- Dataset Detail Page ---
function renderDetail(id) {
  const ds = state.datasets.find(d => d.id === Number(id)) || state.datasets[0];
  const activeTab = state.detailTab || 'overview';
  const isFav = state.favorites.includes(ds.id);
  const isLiked = !!state.likes[ds.id];
  const likeCnt = (ds.likesCount || 0) + (isLiked ? 1 : 0);
  const tint = ds.tint || 'var(--brand-blue)';

  const related = state.datasets.filter(d => d.id !== ds.id && (d.cat === ds.cat || d.unit === ds.unit)).slice(0, 3);

  // Citations
  const abntCitation = `${(ds.authors?.[0]?.name || 'UFRRJ').toUpperCase()}. ${ds.title}. DataRural — Repositório Institucional de Datasets da UFRRJ, v. ${ds.version || '1.0'}, ${new Date().getFullYear()}. Disponível em: https://datarural.ufrrj.br/datasets/${ds.id}. DOI: ${ds.doi || '10.5281/zenodo.ufrrj'}.`;
  const bibtexCitation = `@dataset{ufrrj_datarural_${ds.id},
  author    = {${ds.authors?.[0]?.name || 'Universidade Federal Rural do Rio de Janeiro'}},
  title     = {${ds.title}},
  year      = {${new Date().getFullYear()}},
  publisher = {DataRural UFRRJ},
  version   = {${ds.version || '1.0'}},
  doi       = {${ds.doi || '10.5281/zenodo.ufrrj'}},
  url       = {https://datarural.ufrrj.br/datasets/${ds.id}}
}`;

  return `
    <div class="dr-app">
      ${renderNavbar('datasets')}

      <!-- Dataset Header -->
      <section class="dr-ds-head" style="background:var(--hero-bg);border-bottom:1px solid var(--border);padding:32px 0 0;">
        <div class="dr-container">
          <div class="dr-page-breadcrumb" style="margin-bottom:18px;">
            <a href="#/">Início</a> <span class="sep">&rsaquo;</span>
            <a href="#/datasets">Datasets</a> <span class="sep">&rsaquo;</span>
            <span style="color:var(--foreground);font-weight:700;">${ds.title}</span>
          </div>

          <div class="dr-ds-head-top">
            <div class="dr-ds-head-main">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;">
                <span class="dr-badge" style="background:${ds.tint};color:#fff;font-weight:800;padding:4px 10px;border-radius:6px;font-size:12px;text-transform:uppercase;">
                  ${ds.cat ? (CATEGORIES.find(c => c.id === ds.cat)?.name || ds.cat) : 'Pesquisa'}
                </span>
                <span class="dr-badge" style="background:var(--secondary);color:var(--muted-foreground);font-weight:700;padding:4px 10px;border-radius:6px;font-size:12px;">
                  ${ds.format} · ${ds.version || 'v1.0'}
                </span>
                <span style="font-size:13px;color:var(--muted-foreground);display:inline-flex;align-items:center;gap:4px;">
                  ${ICONS.building} ${ds.unit}
                </span>
              </div>

              <h1>${ds.title}</h1>

              <div class="dr-ds-head-meta" style="display:flex;align-items:center;gap:18px;margin-top:14px;color:var(--muted-foreground);font-size:13.5px;flex-wrap:wrap;">
                <span style="display:inline-flex;align-items:center;gap:6px;">
                  ${ICONS.user} Mantido por <strong style="color:var(--foreground);">${ds.authors?.[0]?.name || 'UFRRJ'}</strong>
                </span>
                <span>•</span>
                <span style="display:inline-flex;align-items:center;gap:6px;">
                  ${ICONS.clock} Atualizado ${ds.updated}
                </span>
                <span>•</span>
                <span style="display:inline-flex;align-items:center;gap:6px;">
                  ${ICONS.verified} DOI: <code style="font-family:monospace;background:var(--surface-2);padding:2px 6px;border-radius:4px;color:var(--brand-blue);">${ds.doi || '10.5281/zenodo.ufrrj.84210'}</code>
                </span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="dr-ds-head-actions">
              <button onclick="downloadDatasetCSV(state.datasets.find(d => d.id === ${ds.id}))" class="dr-btn dr-btn-primary" style="display:inline-flex;align-items:center;gap:8px;padding:12px 22px;font-size:14.5px;font-weight:800;border-radius:10px;">
                ${ICONS.download} Baixar Dataset (${ds.size || 'CSV'})
              </button>

              <div style="display:flex;align-items:center;gap:8px;">
                <button class="dr-btn dr-btn-secondary ${isLiked ? 'on' : ''}" onclick="toggleLike(${ds.id}, event)" style="display:inline-flex;align-items:center;gap:6px;border-radius:10px;padding:10px 14px;">
                  <span style="color:${isLiked ? '#e11d48' : 'inherit'};fill:${isLiked ? '#e11d48' : 'none'};display:inline-flex;">${ICONS.heart}</span>
                  <span>${likeCnt}</span>
                </button>
                <button class="dr-btn dr-btn-secondary ${isFav ? 'on' : ''}" onclick="toggleFavorite(${ds.id}, event)" title="${isFav ? 'Salvo' : 'Favoritar'}" style="display:inline-flex;align-items:center;gap:6px;border-radius:10px;padding:10px 14px;">
                  <span style="color:${isFav ? 'var(--brand-green)' : 'inherit'};fill:${isFav ? 'var(--brand-green)' : 'none'};display:inline-flex;">${ICONS.bookmark}</span>
                </button>
                <button class="dr-btn dr-btn-secondary" onclick="navigator.clipboard.writeText(window.location.href); showToast('Link copiado para a área de transferência!');" title="Compartilhar" style="border-radius:10px;padding:10px 14px;">
                  ${ICONS.share}
                </button>
              </div>
            </div>
          </div>

          <!-- Tab Bar -->
          <div class="dr-tab-bar" style="margin-top:24px;">
            <button class="dr-tbtn ${activeTab === 'overview' ? 'active' : ''}" onclick="state.detailTab='overview';renderApp();">
              ${ICONS.book} Visão Geral
            </button>
            <button class="dr-tbtn ${activeTab === 'viewer' ? 'active' : ''}" onclick="state.detailTab='viewer';renderApp();">
              ${ICONS.table} Explorador de Dados
            </button>
            <button class="dr-tbtn ${activeTab === 'files' ? 'active' : ''}" onclick="state.detailTab='files';renderApp();">
              ${ICONS.file} Arquivos (${ds.fileList?.length || 1})
            </button>
            <button class="dr-tbtn ${activeTab === 'versions' ? 'active' : ''}" onclick="state.detailTab='versions';renderApp();">
              ${ICONS.clock} Versões (${ds.versionHistory?.length || 1})
            </button>
          </div>
        </div>
      </section>

      <!-- Main Layout with Tab Body + Right Rail -->
      <div class="dr-container" style="padding-top:32px;padding-bottom:60px;">
        <div class="dr-ds-layout">
          <!-- Main Content Area -->
          <div class="dr-ds-content">
            ${activeTab === 'overview' ? renderDetailOverview(ds) : ''}
            ${activeTab === 'viewer' ? renderDetailViewer(ds) : ''}
            ${activeTab === 'files' ? renderDetailFiles(ds) : ''}
            ${activeTab === 'versions' ? renderDetailVersions(ds) : ''}
          </div>

          <!-- Right Rail -->
          <aside class="dr-ds-rail">
            <!-- Licença -->
            <div class="dr-rail-card">
              <div class="dr-rail-card-head">
                <h4>${ICONS.scale} Licença de Uso</h4>
              </div>
              <div class="dr-rail-card-body">
                <button type="button" class="dr-license-pill" onclick="document.getElementById('license-modal').classList.remove('hidden')" style="width:100%;text-align:left;cursor:pointer;">
                  <span class="lic-ic">${ICONS.scale}</span>
                  <span style="min-width:0;">
                    <span class="lt">${ds.license}</span>
                    <span class="ld">Clique para ver os termos e permissões</span>
                  </span>
                  <span class="ext">${ICONS.info}</span>
                </button>
              </div>
            </div>

            <!-- Metadados Técnicos -->
            <div class="dr-rail-card">
              <div class="dr-rail-card-head">
                <h4>${ICONS.info} Metadados Técnicos</h4>
              </div>
              <div class="dr-rail-card-body">
                <div class="dr-meta-list">
                  <div class="dr-meta-row">
                    <span class="k">${ICONS.file} Formato</span>
                    <span class="v"><strong>${ds.format}</strong></span>
                  </div>
                  <div class="dr-meta-row">
                    <span class="k">${ICONS.database} Tamanho</span>
                    <span class="v">${ds.size}</span>
                  </div>
                  <div class="dr-meta-row">
                    <span class="k">${ICONS.table} Dimensões</span>
                    <span class="v">${ds.rows} × ${ds.cols || ds.columns?.length || 5} colunas</span>
                  </div>
                  <div class="dr-meta-row">
                    <span class="k">${ICONS.download} Downloads</span>
                    <span class="v">${ds.downloads || 0}</span>
                  </div>
                  <div class="dr-meta-row">
                    <span class="k">${ICONS.eye} Visualizações</span>
                    <span class="v">${ds.views || '1,2 mil'}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cobertura -->
            <div class="dr-rail-card">
              <div class="dr-rail-card-head">
                <h4>${ICONS.globe} Cobertura & Proveniência</h4>
              </div>
              <div class="dr-rail-card-body">
                <div class="dr-prov-list">
                  <div class="dr-prov-item">
                    <span class="pic">${ICONS.clock}</span>
                    <span>
                      <span class="pk">Período temporal</span>
                      <span class="pv">${ds.coverageTime || '2010 a 2024'}</span>
                    </span>
                  </div>
                  <div class="dr-prov-item">
                    <span class="pic">${ICONS.globe}</span>
                    <span>
                      <span class="pk">Região geográfica</span>
                      <span class="pv">${ds.coverageGeo || 'Câmpus Seropédica UFRRJ'}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Autores / Mantenedores -->
            <div class="dr-rail-card">
              <div class="dr-rail-card-head">
                <h4>${ICONS.users} Autores & Mantenedores</h4>
              </div>
              <div class="dr-rail-card-body">
                ${(ds.authors || []).map(a => `
                  <div class="dr-author-item">
                    <span class="dr-author-av" style="background:${a.color || 'var(--brand-blue)'};">${a.initials || 'UF'}</span>
                    <span style="min-width:0;">
                      <span class="an">${a.name}</span>
                      <span class="ar">${a.role} · ${a.inst}</span>
                    </span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Citação Acadêmica -->
            <div class="dr-rail-card">
              <div class="dr-rail-card-head">
                <h4>${ICONS.book} Citação Acadêmica</h4>
              </div>
              <div class="dr-rail-card-body">
                <p style="font-size:12px;color:var(--muted-foreground);margin-bottom:8px;">Copie a referência no padrão ABNT ou BibTeX:</p>
                <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:10px;font-size:11.5px;line-height:1.45;color:var(--foreground);position:relative;">
                  <button onclick="navigator.clipboard.writeText(\`${abntCitation}\`); showToast('Citação ABNT copiada!');" class="dr-btn dr-btn-secondary" style="position:absolute;top:6px;right:6px;padding:3px 8px;font-size:11px;display:inline-flex;align-items:center;gap:4px;">
                    ${ICONS.copy} ABNT
                  </button>
                  <div style="margin-top:20px;font-family:serif;">${abntCitation}</div>
                </div>
                <div style="margin-top:8px;">
                  <button onclick="navigator.clipboard.writeText(\`${bibtexCitation}\`); showToast('BibTeX copiado!');" class="dr-btn dr-btn-ghost" style="font-size:12px;padding:4px 8px;color:var(--brand-blue);display:inline-flex;align-items:center;gap:4px;">
                    ${ICONS.copy} Copiar BibTeX (.bib)
                  </button>
                </div>
              </div>
            </div>

            <!-- Palavras-chave -->
            <div class="dr-rail-card">
              <div class="dr-rail-card-head">
                <h4>${ICONS.hash} Palavras-chave</h4>
              </div>
              <div class="dr-rail-card-body">
                <div class="dr-rail-tags">
                  ${(ds.tags || []).map(tg => `<span class="dr-rail-tag">${tg}</span>`).join('')}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <!-- Related Section -->
        <section class="dr-related-section" style="margin-top:60px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:20px;font-weight:800;color:var(--foreground);margin-bottom:20px;">
            Datasets Relacionados
          </h3>
          <div class="dr-ds-grid">
            ${related.map(r => renderDatasetCard(r)).join('')}
          </div>
        </section>
      </div>

      <!-- License Modal -->
      <div id="license-modal" class="dr-modal-backdrop hidden" onclick="if(event.target===this) this.classList.add('hidden')">
        <div class="dr-modal" style="max-width:620px;">
          <div class="dr-modal-head" style="display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid var(--border);">
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="width:36px;height:36px;border-radius:10px;background:var(--secondary);color:var(--primary);display:inline-flex;align-items:center;justify-content:center;">
                ${ICONS.scale}
              </span>
              <div>
                <h3 style="font-size:18px;font-weight:900;margin:0;">${ds.license}</h3>
                <span style="font-size:12px;color:var(--muted-foreground);">Termos de Compartilhamento e Reuso</span>
              </div>
            </div>
            <button onclick="document.getElementById('license-modal').classList.add('hidden')" class="dr-btn dr-btn-ghost" style="padding:6px;border-radius:50%;">✕</button>
          </div>
          <div class="dr-modal-body" style="padding:24px;font-size:14px;line-height:1.6;color:var(--foreground);">
            <p>Este conjunto de dados está licenciado sob os termos da licença <strong>${ds.license}</strong>.</p>
            <div style="margin:20px 0;display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div style="padding:14px;border-radius:10px;background:color-mix(in srgb, var(--brand-green) 10%, var(--card));border:1px solid color-mix(in srgb, var(--brand-green) 30%, transparent);">
                <div style="font-weight:800;color:var(--brand-green);display:flex;align-items:center;gap:6px;margin-bottom:6px;">
                  ${ICONS.check} Permissões
                </div>
                <ul style="font-size:12.5px;color:var(--foreground);padding-left:16px;">
                  <li>Uso para ensino e pesquisa</li>
                  <li>Compartilhamento e redistribuição</li>
                  <li>Criação de obras derivadas</li>
                </ul>
              </div>
              <div style="padding:14px;border-radius:10px;background:color-mix(in srgb, var(--brand-blue) 10%, var(--card));border:1px solid color-mix(in srgb, var(--brand-blue) 30%, transparent);">
                <div style="font-weight:800;color:var(--brand-blue);display:flex;align-items:center;gap:6px;margin-bottom:6px;">
                  ${ICONS.info} Condições
                </div>
                <ul style="font-size:12.5px;color:var(--foreground);padding-left:16px;">
                  <li>Atribuição obrigatória de crédito</li>
                  <li>Inclusão de link para a licença original</li>
                  <li>Indicação de eventuais alterações</li>
                </ul>
              </div>
            </div>
            <p style="font-size:13px;color:var(--muted-foreground);">Ao utilizar este dataset em publicações acadêmicas, dissertações ou relatórios técnicos, cite a fonte conforme a referência fornecida na barra lateral.</p>
          </div>
          <div class="dr-modal-foot" style="padding:16px 24px;background:var(--surface-2);border-top:1px solid var(--border);text-align:right;">
            <button onclick="document.getElementById('license-modal').classList.add('hidden')" class="dr-btn dr-btn-primary" style="padding:10px 20px;">Entendido</button>
          </div>
        </div>
      </div>

      ${renderFooter()}
    </div>
  `;
}

function renderDetailOverview(ds) {
  const usabilityVal = parseFloat(ds.usability) || 9.2;
  return `
    <div>
      <!-- README Panel -->
      <div class="dr-panel">
        <div class="dr-panel-head">
          <h3>${ICONS.book} Sobre o Dataset</h3>
        </div>
        <div class="dr-panel-body">
          <div class="dr-prose">
            ${ds.description || `<p>${ds.desc}</p>`}
          </div>
        </div>
      </div>

      <!-- Usability Score Meter -->
      <div class="dr-panel">
        <div class="dr-panel-head">
          <h3>${ICONS.verified} Avaliação de Usabilidade e Qualidade</h3>
        </div>
        <div class="dr-panel-body">
          <div class="dr-quality">
            <div class="dr-quality-top">
              <div class="dr-quality-score">
                <span class="v">${ds.usability || '9.4'}</span>
                <span class="l">Usabilidade</span>
              </div>
              <div class="lead">
                Este dataset obteve uma pontuação de <b>${ds.usability || '9.4'} / 10.0</b> no índice automatizado de qualidade da UFRRJ, atendendo aos padrões de documentação, integridade estrutural e reprodutibilidade científica.
              </div>
            </div>
            <div class="dr-quality-list">
              <div class="dr-quality-item">
                <div class="chk" style="background:var(--brand-green);">${ICONS.check}</div>
                <div>
                  <span class="qt">Completude dos Metadados</span>
                  <span class="qd">Dicionário de dados 100% preenchido, com descrição de variáveis e unidades de medida.</span>
                </div>
                <span class="pct">100%</span>
              </div>
              <div class="dr-quality-item">
                <div class="chk" style="background:var(--brand-green);">${ICONS.check}</div>
                <div>
                  <span class="qt">Credibilidade e Proveniência</span>
                  <span class="qd">Fonte institucional declarada, vínculo a projeto de pesquisa aprovado e metodologia explícita.</span>
                </div>
                <span class="pct">100%</span>
              </div>
              <div class="dr-quality-item">
                <div class="chk" style="background:var(--brand-sky);">${ICONS.check}</div>
                <div>
                  <span class="qt">Compatibilidade e Abertura</span>
                  <span class="qd">Arquivo em formato aberto (.CSV estruturado), codificação UTF-8 e licença permissiva.</span>
                </div>
                <span class="pct">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Column Dictionary -->
      <div class="dr-panel">
        <div class="dr-panel-head">
          <h3>${ICONS.table} Dicionário de Colunas e Variáveis (${ds.columns?.length || 0})</h3>
        </div>
        <div class="dr-panel-body" style="padding:0;">
          <div class="dr-coldict">
            ${(ds.columns || []).map(col => `
              <div class="dr-coldict-row">
                <div class="dr-col-name">
                  <span class="tic">${ICONS.hash}</span>
                  <div>
                    <div class="nm">${col.name}</div>
                    <span class="ty">${col.type} · ${col.unit || 'adimensional'}</span>
                  </div>
                </div>
                <div class="dr-col-desc">
                  ${col.desc}
                  <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px;">
                    Exemplos: <code style="font-family:monospace;background:var(--surface-2);padding:1px 5px;border-radius:3px;">${(col.sample || []).join(', ')}</code>
                  </div>
                </div>
                <div class="dr-col-stats">
                  <div class="dr-col-bars">
                    ${(col.bars || [10, 15, 25, 30, 20, 15, 10, 5]).map(h => `<i style="height:${h}px;"></i>`).join('')}
                  </div>
                  <div class="meta">
                    <span class="ok">${100 - (col.nullPct || 0)}% preenchido</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDetailViewer(ds) {
  const page = state.viewerPage || 0;
  const pageSize = 6;
  const filter = (state.viewerFilter || '').toLowerCase().trim();

  let rows = ds.sampleRows || [];
  if (filter) {
    rows = rows.filter(r => r.some(cell => String(cell).toLowerCase().includes(filter)));
  }

  const totalPages = Math.ceil(rows.length / pageSize) || 1;
  const displayedRows = rows.slice(page * pageSize, (page + 1) * pageSize);

  return `
    <div class="dr-panel">
      <div class="dr-panel-head" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div>
          <h3>${ICONS.table} Explorador de Dados Interativo</h3>
          <p style="font-size:12.5px;color:var(--muted-foreground);margin-top:2px;">
            Amostra representativa extraída de ${ds.rows}
          </p>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <input type="text" placeholder="Filtrar linhas..." value="${state.viewerFilter || ''}" oninput="state.viewerFilter=this.value;state.viewerPage=0;renderApp();" style="padding:6px 12px;border:1px solid var(--border);border-radius:8px;font-size:13px;background:var(--card);color:var(--foreground);" />
          <button onclick="downloadDatasetCSV(state.datasets.find(d => d.id === ${ds.id}))" class="dr-btn dr-btn-secondary" style="font-size:13px;display:inline-flex;align-items:center;gap:6px;padding:6px 12px;">
            ${ICONS.download} Exportar CSV
          </button>
        </div>
      </div>

      <div class="dr-panel-body" style="padding:0;overflow-x:auto;">
        <table class="dr-table" style="width:100%;border-collapse:collapse;font-size:13px;font-family:monospace;">
          <thead>
            <tr style="background:var(--surface-2);border-bottom:1px solid var(--border);">
              <th style="padding:10px 14px;text-align:left;color:var(--muted-foreground);width:40px;">#</th>
              ${(ds.columns || []).map(c => `
                <th style="padding:10px 14px;text-align:left;color:var(--foreground);font-weight:700;">
                  ${c.name}
                  <span style="font-size:10px;color:var(--muted-foreground);display:block;font-weight:400;">${c.type}</span>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${displayedRows.map((r, i) => `
              <tr style="border-bottom:1px solid var(--border);background:${i % 2 === 0 ? 'var(--card)' : 'var(--surface-2)'};">
                <td style="padding:10px 14px;color:var(--muted-foreground);">${page * pageSize + i + 1}</td>
                ${r.map(cell => `<td style="padding:10px 14px;color:var(--foreground);">${cell}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="dr-panel-foot" style="display:flex;justify-content:space-between;align-items:center;padding:12px 20px;border-top:1px solid var(--border);background:var(--surface-2);font-size:13px;">
        <span style="color:var(--muted-foreground);">
          Exibindo ${page * pageSize + 1}–${Math.min((page + 1) * pageSize, rows.length)} de ${rows.length} registros amostrados
        </span>
        <div style="display:flex;align-items:center;gap:6px;">
          <button class="dr-btn dr-btn-secondary" ${page === 0 ? 'disabled' : ''} onclick="state.viewerPage--;renderApp();" style="padding:4px 10px;font-size:12px;">&larr; Anterior</button>
          <span style="padding:0 8px;font-weight:700;">Página ${page + 1} de ${totalPages}</span>
          <button class="dr-btn dr-btn-secondary" ${page >= totalPages - 1 ? 'disabled' : ''} onclick="state.viewerPage++;renderApp();" style="padding:4px 10px;font-size:12px;">Próxima &rarr;</button>
        </div>
      </div>
    </div>
  `;
}

function renderDetailFiles(ds) {
  const files = ds.fileList || [
    { name: `${ds.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.csv`, size: ds.size, format: ds.format, date: ds.updated }
  ];

  return `
    <div class="dr-panel">
      <div class="dr-panel-head">
        <h3>${ICONS.file} Arquivos Disponíveis no Dataset</h3>
      </div>
      <div class="dr-panel-body" style="padding:0;">
        <div style="display:flex;flex-direction:column;">
          ${files.map(f => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--border);gap:14px;">
              <div style="display:flex;align-items:center;gap:12px;min-width:0;">
                <span style="width:36px;height:36px;border-radius:8px;background:var(--secondary);color:var(--primary);display:inline-flex;align-items:center;justify-content:center;">
                  ${ICONS.file}
                </span>
                <div>
                  <div style="font-family:monospace;font-size:14px;font-weight:700;color:var(--foreground);">${f.name}</div>
                  <div style="font-size:12px;color:var(--muted-foreground);margin-top:2px;">
                    ${f.size} · Formato ${f.format} · Adicionado ${f.date}
                  </div>
                </div>
              </div>
              <button onclick="downloadDatasetCSV(state.datasets.find(d => d.id === ${ds.id}))" class="dr-btn dr-btn-secondary" style="font-size:13px;display:inline-flex;align-items:center;gap:6px;padding:8px 14px;">
                ${ICONS.download} Baixar
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderDetailVersions(ds) {
  const versions = ds.versionHistory || [
    { version: ds.version || 'v1.0', date: ds.published || '15/03/2023', notes: 'Publicação inicial do conjunto de dados.', size: ds.size }
  ];

  return `
    <div class="dr-panel">
      <div class="dr-panel-head">
        <h3>${ICONS.clock} Histórico de Versões</h3>
      </div>
      <div class="dr-panel-body">
        <div style="display:flex;flex-direction:column;gap:20px;">
          ${versions.map((v, i) => `
            <div style="display:flex;gap:16px;position:relative;">
              <div style="display:flex;flex-direction:column;align-items:center;">
                <span style="width:28px;height:28px;border-radius:50%;background:${i === 0 ? 'var(--brand-green)' : 'var(--secondary)'};color:${i === 0 ? '#fff' : 'var(--muted-foreground)'};display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;">
                  ${i === 0 ? '✓' : i + 1}
                </span>
                ${i < versions.length - 1 ? `<div style="width:2px;flex:1;background:var(--border);margin:4px 0;"></div>` : ''}
              </div>
              <div style="flex:1;padding-bottom:16px;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <strong style="font-size:15px;color:var(--foreground);">${v.version}</strong>
                  ${i === 0 ? `<span class="dr-badge" style="background:color-mix(in srgb, var(--brand-green) 15%, transparent);color:var(--brand-green);font-size:11px;font-weight:800;padding:2px 8px;border-radius:6px;">Versão Atual</span>` : ''}
                  <span style="font-size:12.5px;color:var(--muted-foreground);">${v.date}</span>
                </div>
                <p style="font-size:13.5px;color:var(--foreground);margin-top:6px;line-height:1.5;">${v.notes}</p>
                <div style="margin-top:8px;">
                  <button onclick="downloadDatasetCSV(state.datasets.find(d => d.id === ${ds.id}))" class="dr-btn dr-btn-ghost" style="font-size:12.5px;padding:4px 8px;color:var(--brand-blue);display:inline-flex;align-items:center;gap:4px;">
                    ${ICONS.download} Baixar arquivos desta versão (${v.size})
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}



// --- Dashboard Page (Meus Datasets) ---
function renderDashboard() {
  const filter = state.dashFilter || 'all';
  const query = (state.dashQuery || '').toLowerCase().trim();

  let myDatasets = state.datasets.filter(d => d.authors?.[0]?.name?.includes('Helena') || d.unit === 'Instituto de Ciências Exatas' || d.id === 1);

  if (filter !== 'all') {
    myDatasets = myDatasets.filter(d => d.status === filter);
  }
  if (query) {
    myDatasets = myDatasets.filter(d => d.title.toLowerCase().includes(query));
  }

  return `
    <div class="dr-app">
      ${renderNavbar('dashboard')}

      <div class="dr-page-head">
        <div class="dr-container">
          <div class="dr-page-head-inner">
            <div>
              <div class="dr-page-breadcrumb">
                <a href="#/">Início</a> <span class="sep">&rsaquo;</span> <span>${t('common.nav.my_datasets', 'Meus datasets')}</span>
              </div>
              <h1>Painel de Controle — Meus Datasets</h1>
              <p class="page-sub">
                Gerencie seus conjuntos de dados publicados, versões ativas, rascunhos e métricas de impacto acadêmico
              </p>
            </div>
            <div>
              <a href="#/dashboard/publish" class="dr-btn dr-btn-primary" style="color:white;display:inline-flex;align-items:center;gap:6px;">
                ${ICONS.plus} ${t('common.nav.publish_dataset', 'Publicar dataset')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="dr-container" style="padding-top:24px;padding-bottom:60px;">
        <!-- Dashboard Stats -->
        <div class="dr-mstats" style="margin-bottom:24px;">
          <div class="dr-mstat">
            <span class="v" style="color:var(--brand-blue);">7</span>
            <span class="l">Datasets Publicados</span>
          </div>
          <div class="dr-mstat">
            <span class="v" style="color:var(--brand-green);">9.842</span>
            <span class="l">Downloads Totais</span>
          </div>
          <div class="dr-mstat">
            <span class="v" style="color:var(--brand-sky);">31,4 mil</span>
            <span class="l">Visualizações</span>
          </div>
          <div class="dr-mstat">
            <span class="v" style="color:var(--brand-orange);">9.3</span>
            <span class="l">Média de Usabilidade</span>
          </div>
        </div>

        <!-- Toolbar -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;box-shadow:var(--shadow-sm);margin-bottom:20px;">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <button class="dr-btn ${filter === 'all' ? 'dr-btn-primary' : 'dr-btn-secondary'}" onclick="state.dashFilter='all';renderApp();" style="padding:6px 14px;border-radius:20px;font-size:13px;">
              Todos (${state.datasets.length})
            </button>
            <button class="dr-btn ${filter === 'published' ? 'dr-btn-primary' : 'dr-btn-secondary'}" onclick="state.dashFilter='published';renderApp();" style="padding:6px 14px;border-radius:20px;font-size:13px;">
              Publicados
            </button>
            <button class="dr-btn ${filter === 'review' ? 'dr-btn-primary' : 'dr-btn-secondary'}" onclick="state.dashFilter='review';renderApp();" style="padding:6px 14px;border-radius:20px;font-size:13px;">
              Em revisão
            </button>
          </div>

          <div style="width:260px;">
            <input type="text" placeholder="Filtrar por título..." value="${state.dashQuery || ''}" oninput="state.dashQuery=this.value;renderApp();" style="width:100%;padding:8px 12px;border:1px solid var(--border);border-radius:8px;font-size:13px;background:var(--card);color:var(--foreground);" />
          </div>
        </div>

        <!-- Datasets Table -->
        <div class="dr-panel" style="padding:0;overflow-x:auto;">
          <div class="dr-mds-head">
            <div>Dataset / Unidade</div>
            <div>Status</div>
            <div>Downloads</div>
            <div>Visualizações</div>
            <div>Usabilidade</div>
            <div style="text-align:right;">Ações</div>
          </div>
          <div class="dr-mds-rows">
            ${myDatasets.map(d => `
              <div class="dr-mds-row">
                <div class="col-title">
                  <a href="#/datasets/${d.id}" class="title-link">${d.title}</a>
                  <div class="meta">
                    <span>${d.unit}</span> · <span>${d.version || 'v1.0'}</span> · <span>${d.updated}</span>
                  </div>
                </div>
                <div class="col-status">
                  <span class="dr-badge" style="background:${d.status === 'published' ? 'color-mix(in srgb, var(--brand-green) 15%, transparent)' : 'color-mix(in srgb, var(--brand-orange) 15%, transparent)'};color:${d.status === 'published' ? 'var(--brand-green)' : 'var(--brand-orange)'};font-weight:800;padding:3px 10px;border-radius:12px;font-size:12px;">
                    ${d.status === 'published' ? 'Publicado' : 'Em revisão'}
                  </span>
                </div>
                <div class="col-dl" style="font-weight:700;color:var(--foreground);">${d.downloads || 0}</div>
                <div class="col-views" style="color:var(--muted-foreground);">${d.views || '1,2 mil'}</div>
                <div class="col-usab">
                  <span class="dr-usability" style="font-size:12px;padding:2px 8px;">
                    ${ICONS.verified} ${d.usability || '9.0'}
                  </span>
                </div>
                <div class="col-actions" style="text-align:right;display:flex;align-items:center;justify-content:flex-end;gap:8px;">
                  <a href="#/datasets/${d.id}" class="dr-btn dr-btn-secondary" style="padding:6px 10px;font-size:12px;">Ver</a>
                  <button onclick="downloadDatasetCSV(state.datasets.find(item => item.id === ${d.id}))" class="dr-btn dr-btn-secondary" style="padding:6px 10px;font-size:12px;">Baixar</button>
                  <button onclick="if(confirm('Tem certeza que deseja excluir este dataset?')) { state.datasets = state.datasets.filter(x => x.id !== ${d.id}); saveState(); renderApp(); showToast('Dataset removido'); }" class="dr-btn dr-btn-ghost" style="padding:6px 8px;color:var(--destructive);" title="Excluir">${ICONS.trash}</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      ${renderFooter()}
    </div>
  `;
}

// --- Publish Wizard Page (5 Steps) ---
function renderPublish() {
  const step = state.publishStep || 1;
  const draft = state.publishDraft;

  if (state.publishSuccess) {
    return `
      <div class="dr-app">
        ${renderNavbar('dashboard')}
        <div class="dr-container" style="max-width:680px;margin:60px auto;text-align:center;padding:48px 32px;background:var(--card);border:1px solid var(--border);border-radius:20px;box-shadow:var(--shadow-lg);">
          <div style="width:72px;height:72px;border-radius:50%;background:color-mix(in srgb, var(--brand-green) 18%, transparent);color:var(--brand-green);display:inline-flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:20px;">
            ✓
          </div>
          <h2 style="font-size:26px;font-weight:900;letter-spacing:-0.02em;color:var(--foreground);">Dataset Publicado com Sucesso!</h2>
          <p style="font-size:15px;color:var(--muted-foreground);margin-top:10px;line-height:1.6;">
            O conjunto de dados <strong>${draft.title}</strong> foi catalogado com sucesso e recebeu o identificador persistente provisório. Ele já está acessível no catálogo institucional da UFRRJ.
          </p>
          <div style="margin-top:32px;display:flex;justify-content:center;gap:14px;flex-wrap:wrap;">
            <a href="#/datasets/${state.newlyCreatedId || 1}" class="dr-btn dr-btn-primary" style="padding:12px 24px;font-size:14.5px;font-weight:800;" onclick="state.publishSuccess=false;">
              Ver Dataset Publicado &rarr;
            </a>
            <a href="#/dashboard" class="dr-btn dr-btn-secondary" style="padding:12px 24px;font-size:14.5px;font-weight:700;" onclick="state.publishSuccess=false;">
              Ir para Meus Datasets
            </a>
          </div>
        </div>
        ${renderFooter()}
      </div>
    `;
  }

  const stepsList = [
    { n: 1, title: 'Arquivo' },
    { n: 2, title: 'Metadados' },
    { n: 3, title: 'Esquema' },
    { n: 4, title: 'Licença' },
    { n: 5, title: 'Revisão' }
  ];

  return `
    <div class="dr-app">
      ${renderNavbar('dashboard')}

      <div class="dr-page-head">
        <div class="dr-container">
          <div class="dr-page-head-inner">
            <div>
              <div class="dr-page-breadcrumb">
                <a href="#/">Início</a> <span class="sep">&rsaquo;</span>
                <a href="#/dashboard">Meus datasets</a> <span class="sep">&rsaquo;</span>
                <span>Publicar dataset</span>
              </div>
              <h1>Assistente de Publicação de Datasets</h1>
              <p class="page-sub">
                Siga as 5 etapas guiadas para validar, documentar e disponibilizar sua pesquisa
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="dr-container" style="max-width:880px;padding-top:28px;padding-bottom:60px;">
        <!-- Stepper Header -->
        <div class="dr-stepper" style="margin-bottom:32px;">
          ${stepsList.map(s => `
            <div class="dr-step ${step === s.n ? 'active' : ''} ${step > s.n ? 'done' : ''}" onclick="if(${step} > ${s.n}) { state.publishStep = ${s.n}; renderApp(); }" style="cursor:${step > s.n ? 'pointer' : 'default'};">
              <span class="num">${step > s.n ? '✓' : s.n}</span>
              <span class="label">${s.title}</span>
            </div>
          `).join('')}
        </div>

        <!-- Wizard Panel -->
        <div class="dr-wpanel">
          <div class="dr-wpanel-head">
            <h2 style="font-size:20px;font-weight:800;margin:0;">
              Etapa ${step}: ${stepsList[step - 1].title}
            </h2>
          </div>

          <div class="dr-wpanel-body">
            ${step === 1 ? renderStep1(draft) : ''}
            ${step === 2 ? renderStep2(draft) : ''}
            ${step === 3 ? renderStep3(draft) : ''}
            ${step === 4 ? renderStep4(draft) : ''}
            ${step === 5 ? renderStep5(draft) : ''}
          </div>

          <div class="dr-wpanel-foot" style="display:flex;justify-content:space-between;align-items:center;">
            ${step > 1 ? `
              <button class="dr-btn dr-btn-secondary" onclick="state.publishStep--;renderApp();">
                &larr; Voltar
              </button>
            ` : '<div></div>'}

            ${step < 5 ? `
              <button class="dr-btn dr-btn-primary" onclick="state.publishStep++;renderApp();" style="padding:10px 24px;">
                Avançar &rarr;
              </button>
            ` : `
              <button class="dr-btn dr-btn-primary" onclick="publishDatasetAction();" style="padding:12px 28px;font-size:15px;font-weight:800;background:var(--brand-green);">
                Confirmar e Publicar Dataset ✓
              </button>
            `}
          </div>
        </div>
      </div>

      ${renderFooter()}
    </div>
  `;
}

function renderStep1(draft) {
  return `
    <div>
      <div style="border:2px dashed var(--border);border-radius:14px;padding:36px 24px;text-align:center;background:var(--surface-2);cursor:pointer;" onclick="showToast('Arquivo carregado com sucesso!');">
        <div style="color:var(--brand-blue);margin-bottom:12px;">${ICONS.uploadCloud}</div>
        <h3 style="font-size:16px;font-weight:800;color:var(--foreground);">Arraste sua planilha CSV ou clique para selecionar</h3>
        <p style="font-size:13px;color:var(--muted-foreground);margin-top:6px;">Formatos aceitos: .csv, .parquet, .tsv, .xlsx (até 100 MB)</p>
      </div>

      <div style="margin-top:20px;padding:16px 20px;background:color-mix(in srgb, var(--brand-green) 8%, var(--card));border:1px solid color-mix(in srgb, var(--brand-green) 25%, transparent);border-radius:10px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="width:36px;height:36px;border-radius:8px;background:var(--brand-green);color:#fff;display:inline-flex;align-items:center;justify-content:center;">
            ${ICONS.file}
          </span>
          <div>
            <strong style="color:var(--foreground);">${draft.fileName}</strong>
            <div style="font-size:12px;color:var(--muted-foreground);">${draft.fileSize} · ${draft.rowsCount} detectadas</div>
          </div>
        </div>
        <span class="dr-badge" style="background:var(--brand-green);color:#fff;font-weight:800;padding:4px 10px;border-radius:6px;font-size:11px;">
          VALIDADO (UTF-8)
        </span>
      </div>

      <!-- QA Automated Checks -->
      <div style="margin-top:24px;">
        <h4 style="font-size:14px;font-weight:800;color:var(--foreground);margin-bottom:12px;">Checagens Automatizadas de Qualidade</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div style="display:flex;align-items:center;gap:10px;padding:12px;border:1px solid var(--border);border-radius:8px;background:var(--card);">
            <span style="color:var(--brand-green);">${ICONS.check}</span>
            <span style="font-size:13px;color:var(--foreground);">Codificação UTF-8 válida</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:12px;border:1px solid var(--border);border-radius:8px;background:var(--card);">
            <span style="color:var(--brand-green);">${ICONS.check}</span>
            <span style="font-size:13px;color:var(--foreground);">Delimitador vírgula reconhecido</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:12px;border:1px solid var(--border);border-radius:8px;background:var(--card);">
            <span style="color:var(--brand-green);">${ICONS.check}</span>
            <span style="font-size:13px;color:var(--foreground);">Cabeçalho com 5 colunas nomeadas</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:12px;border:1px solid var(--border);border-radius:8px;background:var(--card);">
            <span style="color:var(--brand-green);">${ICONS.check}</span>
            <span style="font-size:13px;color:var(--foreground);">Sem linhas em branco</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderStep2(draft) {
  return `
    <div style="display:flex;flex-direction:column;gap:18px;">
      <div class="dr-field">
        <label class="dr-field-label">Título do Dataset <span class="req">*</span></label>
        <input type="text" class="dr-input" value="${draft.title}" oninput="state.publishDraft.title=this.value;" placeholder="Ex: Monitoramento Físico-Químico da Bacia do Rio Guandu" />
      </div>

      <div class="dr-field">
        <label class="dr-field-label">Descrição e Metodologia <span class="req">*</span></label>
        <textarea class="dr-textarea" oninput="state.publishDraft.desc=this.value;" placeholder="Descreva os objetivos, metodologia de amostragem, instrumentos utilizados e contexto da pesquisa...">${draft.desc}</textarea>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div class="dr-field">
          <label class="dr-field-label">Unidade / Instituto UFRRJ <span class="req">*</span></label>
          <select class="dr-select" onchange="state.publishDraft.unit=this.value;">
            <option value="Instituto de Agronomia" ${draft.unit.includes('Agronomia') ? 'selected' : ''}>Instituto de Agronomia (IA)</option>
            <option value="Instituto de Ciências Exatas" ${draft.unit.includes('Exatas') ? 'selected' : ''}>Instituto de Ciências Exatas (ICE)</option>
            <option value="Instituto de Veterinária" ${draft.unit.includes('Veterinária') ? 'selected' : ''}>Instituto de Veterinária (IV)</option>
            <option value="Instituto de Florestas" ${draft.unit.includes('Florestas') ? 'selected' : ''}>Instituto de Florestas (IF)</option>
            <option value="Instituto de Ciências Biológicas e da Saúde" ${draft.unit.includes('Biológicas') ? 'selected' : ''}>Instituto de Ciências Biológicas e da Saúde (ICBS)</option>
          </select>
        </div>

        <div class="dr-field">
          <label class="dr-field-label">Área do Conhecimento <span class="req">*</span></label>
          <select class="dr-select" onchange="state.publishDraft.area=this.value;">
            ${CATEGORIES.map(c => `
              <option value="${c.id}" ${draft.area === c.id ? 'selected' : ''}>${c.name}</option>
            `).join('')}
          </select>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <div class="dr-field">
          <label class="dr-field-label">Período de Cobertura Temporal</label>
          <input type="text" class="dr-input" value="${draft.period}" oninput="state.publishDraft.period=this.value;" placeholder="Ex: 2022–2024" />
        </div>

        <div class="dr-field">
          <label class="dr-field-label">Região Geográfica</label>
          <input type="text" class="dr-input" value="${draft.region}" oninput="state.publishDraft.region=this.value;" placeholder="Ex: Seropédica, RJ" />
        </div>
      </div>
    </div>
  `;
}

function renderStep3(draft) {
  return `
    <div>
      <p style="font-size:13.5px;color:var(--muted-foreground);margin-bottom:16px;">
        As colunas abaixo foram inferidas automaticamente do arquivo CSV enviado. Você pode ajustar os tipos e descrições para elevar a nota de usabilidade do dataset:
      </p>

      <div style="display:flex;flex-direction:column;gap:12px;">
        ${(draft.columns || []).map((c, i) => `
          <div style="display:grid;grid-template-columns:180px 140px 1fr;gap:12px;align-items:center;padding:12px 16px;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;">
            <div>
              <strong style="font-family:monospace;font-size:13.5px;color:var(--foreground);">${c.name}</strong>
            </div>
            <div>
              <select class="dr-select" style="padding:6px 10px;font-size:12.5px;">
                <option value="text" ${c.type === 'text' ? 'selected' : ''}>Texto</option>
                <option value="num" ${c.type === 'num' ? 'selected' : ''}>Numérico</option>
                <option value="date" ${c.type === 'date' ? 'selected' : ''}>Data / Hora</option>
                <option value="geo" ${c.type === 'geo' ? 'selected' : ''}>Coordenada</option>
              </select>
            </div>
            <div>
              <input type="text" class="dr-input" style="padding:6px 10px;font-size:12.5px;" value="${c.desc}" oninput="state.publishDraft.columns[${i}].desc=this.value;" placeholder="Descrição da variável..." />
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderStep4(draft) {
  return `
    <div>
      <p style="font-size:13.5px;color:var(--muted-foreground);margin-bottom:16px;">
        Selecione a licença sob a qual o conjunto de dados será disponibilizado:
      </p>

      <div class="dr-lic-grid">
        ${LICENSES.map(lic => `
          <div class="dr-lic-card ${draft.license === lic.id ? 'sel' : ''}" onclick="state.publishDraft.license='${lic.id}';renderApp();">
            <div class="dr-lic-radio"></div>
            <div class="lc-main">
              <div class="lc-name">
                ${lic.name}
                ${lic.rec ? `<span class="lc-tag rec">Recomendada</span>` : `<span class="lc-tag">${lic.tag}</span>`}
              </div>
              <div class="lc-desc">${lic.desc}</div>
              <div class="lc-perms" style="margin-top:10px;display:flex;gap:8px;font-size:11px;font-weight:700;">
                <span style="color:${lic.commercial ? 'var(--brand-green)' : 'var(--muted-foreground)'};">
                  ${lic.commercial ? '✓ Uso Comercial' : '✕ Não Comercial'}
                </span>
                <span>•</span>
                <span style="color:${lic.derivatives ? 'var(--brand-green)' : 'var(--muted-foreground)'};">
                  ${lic.derivatives ? '✓ Obras Derivadas' : '✕ Sem Derivadas'}
                </span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderStep5(draft) {
  const chosenLic = LICENSES.find(l => l.id === draft.license) || LICENSES[0];
  return `
    <div>
      <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:12px;padding:24px;margin-bottom:24px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;">
          <div>
            <span class="dr-badge" style="background:var(--brand-green);color:#fff;font-weight:800;padding:3px 10px;border-radius:6px;font-size:12px;">
              Pronto para Publicação
            </span>
            <h3 style="font-size:20px;font-weight:900;color:var(--foreground);margin-top:8px;">${draft.title}</h3>
            <p style="font-size:13.5px;color:var(--muted-foreground);margin-top:4px;">${draft.unit} · ${draft.region}</p>
          </div>
          <div style="text-align:right;">
            <div style="font-size:24px;font-weight:900;color:var(--brand-green);">9.6 / 10.0</div>
            <div style="font-size:11.5px;color:var(--muted-foreground);text-transform:uppercase;font-weight:800;">Nota de Usabilidade Estimada</div>
          </div>
        </div>

        <div style="border-top:1px solid var(--border);margin-top:18px;padding-top:18px;display:grid;grid-template-columns:repeat(auto-fit, minmax(160px, 1fr));gap:14px;font-size:13px;">
          <div>
            <span style="color:var(--muted-foreground);display:block;">Arquivo Principal</span>
            <strong>${draft.fileName} (${draft.fileSize})</strong>
          </div>
          <div>
            <span style="color:var(--muted-foreground);display:block;">Colunas Validadas</span>
            <strong>${draft.columns?.length || 5} variáveis</strong>
          </div>
          <div>
            <span style="color:var(--muted-foreground);display:block;">Licença Selecionada</span>
            <strong>${chosenLic.name}</strong>
          </div>
          <div>
            <span style="color:var(--muted-foreground);display:block;">Visibilidade</span>
            <strong>Público Institucional</strong>
          </div>
        </div>
      </div>

      <div style="padding:14px 18px;background:color-mix(in srgb, var(--brand-blue) 8%, var(--card));border:1px solid color-mix(in srgb, var(--brand-blue) 25%, transparent);border-radius:10px;font-size:13px;color:var(--foreground);display:flex;align-items:center;gap:12px;">
        <span style="color:var(--brand-blue);">${ICONS.info}</span>
        <span>Ao clicar em "Confirmar e Publicar Dataset", você atesta que os dados foram coletados em conformidade com as diretrizes éticas da UFRRJ e da LGPD.</span>
      </div>
    </div>
  `;
}

function publishDatasetAction() {
  const draft = state.publishDraft;
  const newId = Date.now();
  const chosenLic = LICENSES.find(l => l.id === draft.license) || LICENSES[0];

  const newDataset = {
    id: newId,
    title: draft.title,
    unit: draft.unit,
    unitShort: 'IA',
    desc: draft.desc,
    description: `<h3>Apresentação</h3><p>${draft.desc}</p>`,
    tags: draft.tags || ['pesquisa', 'ufrrj'],
    cat: draft.area || 'agro',
    format: 'CSV',
    tint: 'var(--brand-green)',
    size: draft.fileSize || '1,8 MB',
    rows: draft.rowsCount || '6.420 linhas',
    cols: draft.columns?.length || 5,
    files: 1,
    downloads: 0,
    dl: '0',
    views: '1',
    likesCount: 0,
    updated: 'agora mesmo',
    published: new Date().toLocaleDateString('pt-BR'),
    license: chosenLic.name,
    usability: '9.6',
    doi: `10.5281/zenodo.ufrrj.${newId.toString().slice(-5)}`,
    version: 'v1.0',
    status: 'published',
    featured: true,
    recent: true,
    order: 0,
    coverageTime: draft.period || '2024',
    coverageGeo: draft.region || 'Seropédica, RJ',
    authors: [
      { name: state.user.name, role: 'Pesquisador Responsável', inst: state.user.unit, color: 'var(--brand-blue)', initials: state.user.short }
    ],
    columns: draft.columns || [],
    sampleRows: [
      ['P-001', '10', '5.8', '24.2', '14.5'],
      ['P-002', '20', '6.1', '28.0', '18.2'],
      ['P-003', '10', '5.5', '19.4', '11.0'],
      ['P-004', '20', '6.4', '32.1', '21.0']
    ],
    versionHistory: [{ version: 'v1.0', date: new Date().toLocaleDateString('pt-BR'), notes: 'Publicação inicial do dataset.', size: draft.fileSize }],
    fileList: [{ name: draft.fileName, size: draft.fileSize, format: 'CSV', date: 'Hoje' }]
  };

  state.datasets.unshift(newDataset);
  state.publishSuccess = true;
  state.newlyCreatedId = newId;
  saveState();
  renderApp();
  showToast('Dataset publicado no catálogo com sucesso!');
}

// --- Favorites Page ---
function renderFavorites() {
  const favDatasets = state.datasets.filter(d => state.favorites.includes(d.id));

  return `
    <div class="dr-app">
      ${renderNavbar('favorites')}

      <div class="dr-page-head">
        <div class="dr-container">
          <div class="dr-page-head-inner">
            <div>
              <div class="dr-page-breadcrumb">
                <a href="#/">Início</a> <span class="sep">&rsaquo;</span> <span>${t('common.nav.favorites', 'Favoritos')}</span>
              </div>
              <h1>Datasets Favoritos (${favDatasets.length})</h1>
              <p class="page-sub">
                Acesse rapidamente os conjuntos de dados marcados com estrela para acompanhamento
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="dr-container" style="padding-top:24px;padding-bottom:60px;">
        ${favDatasets.length > 0 ? `
          <div class="dr-ds-grid">
            ${favDatasets.map(d => renderDatasetCard(d)).join('')}
          </div>
        ` : `
          <div style="text-align:center;padding:60px 20px;background:var(--card);border:1px solid var(--border);border-radius:14px;">
            <div style="font-size:40px;margin-bottom:12px;">⭐</div>
            <h3 style="font-size:18px;font-weight:800;color:var(--foreground);">Nenhum dataset favoritado ainda</h3>
            <p style="color:var(--muted-foreground);margin-top:6px;font-size:14px;">Explore o catálogo e clique no ícone de marcador para salvar seus datasets prioritários.</p>
            <a href="#/datasets" class="dr-btn dr-btn-primary" style="margin-top:18px;display:inline-block;">Explorar catálogo</a>
          </div>
        `}
      </div>

      ${renderFooter()}
    </div>
  `;
}

// --- Groups Page ---
function renderGroups() {
  return `
    <div class="dr-app">
      ${renderNavbar('groups')}

      <div class="dr-page-head">
        <div class="dr-container">
          <div class="dr-page-head-inner">
            <div>
              <div class="dr-page-breadcrumb">
                <a href="#/">Início</a> <span class="sep">&rsaquo;</span> <span>${t('common.nav.groups', 'Grupos')}</span>
              </div>
              <h1>Grupos de Pesquisa e Laboratórios</h1>
              <p class="page-sub">
                Compartilhamento colaborativo de dados restritos com controle hierárquico de acesso
              </p>
            </div>
            <div>
              <button onclick="document.getElementById('create-group-modal').classList.remove('hidden')" class="dr-btn dr-btn-primary" style="display:inline-flex;align-items:center;gap:6px;">
                ${ICONS.plus} Criar Grupo de Pesquisa
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="dr-container" style="padding-top:24px;padding-bottom:60px;">
        <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));gap:20px;">
          ${state.groups.map(g => `
            <div class="dr-group-card" onclick="navigate('#/groups/${g.id}')" style="cursor:pointer;background:var(--card);border:1px solid var(--border);border-radius:14px;padding:22px 24px;box-shadow:var(--shadow-sm);transition:all 0.15s ease;">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
                <span class="dr-badge" style="background:var(--secondary);color:var(--brand-blue);font-weight:800;padding:3px 10px;border-radius:12px;font-size:11.5px;text-transform:uppercase;">
                  ${g.role === 'owner' ? 'Dono' : (g.role === 'admin' ? 'Administrador' : 'Editor')}
                </span>
                <span style="font-size:12px;color:var(--muted-foreground);">${g.createdAt}</span>
              </div>
              <h3 style="font-size:17px;font-weight:900;color:var(--foreground);line-height:1.35;margin-bottom:8px;">${g.name}</h3>
              <p style="font-size:13px;color:var(--muted-foreground);line-height:1.5;margin-bottom:18px;">${g.description}</p>
              <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border);padding-top:12px;font-size:12.5px;color:var(--muted-foreground);">
                <span>${ICONS.users} ${g.memberCount || g.members?.length || 4} membros</span>
                <span>${ICONS.database} ${g.datasetCount || 2} datasets</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Create Group Modal -->
      <div id="create-group-modal" class="dr-modal-backdrop hidden" onclick="if(event.target===this) this.classList.add('hidden')">
        <div class="dr-modal" style="max-width:540px;">
          <div class="dr-modal-head" style="padding:20px 24px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
            <h3 style="font-size:18px;font-weight:900;margin:0;">Criar Novo Grupo de Pesquisa</h3>
            <button onclick="document.getElementById('create-group-modal').classList.add('hidden')" class="dr-btn dr-btn-ghost">✕</button>
          </div>
          <div class="dr-modal-body" style="padding:24px;display:flex;flex-direction:column;gap:16px;">
            <div class="dr-field">
              <label class="dr-field-label">Nome do Grupo / Laboratório <span class="req">*</span></label>
              <input type="text" id="new-group-name" class="dr-input" placeholder="Ex: Laboratório de Solos e Geoprocessamento" />
            </div>
            <div class="dr-field">
              <label class="dr-field-label">Descrição Institucional</label>
              <textarea id="new-group-desc" class="dr-textarea" placeholder="Descreva as linhas de pesquisa e os objetivos do grupo..."></textarea>
            </div>
          </div>
          <div class="dr-modal-foot" style="padding:16px 24px;background:var(--surface-2);border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:10px;">
            <button onclick="document.getElementById('create-group-modal').classList.add('hidden')" class="dr-btn dr-btn-secondary">Cancelar</button>
            <button onclick="
              const name = document.getElementById('new-group-name').value.trim();
              const desc = document.getElementById('new-group-desc').value.trim();
              if (name) {
                state.groups.push({
                  id: Date.now(),
                  name,
                  description: desc || 'Grupo de pesquisa cadastrado na UFRRJ.',
                  role: 'owner',
                  ownerName: state.user.name,
                  memberCount: 1,
                  datasetCount: 0,
                  createdAt: 'Hoje',
                  members: [{ name: state.user.name, role: 'Dono', unit: state.user.unit }]
                });
                saveState();
                document.getElementById('create-group-modal').classList.add('hidden');
                renderApp();
                showToast('Grupo de pesquisa criado com sucesso!');
              }
            " class="dr-btn dr-btn-primary">Criar Grupo</button>
          </div>
        </div>
      </div>

      ${renderFooter()}
    </div>
  `;
}

function renderGroupDetail(id) {
  const group = state.groups.find(g => g.id === Number(id)) || state.groups[0];
  const groupDatasets = state.datasets.slice(0, 2);

  return `
    <div class="dr-app">
      ${renderNavbar('groups')}

      <div class="dr-page-head">
        <div class="dr-container">
          <div class="dr-page-head-inner">
            <div>
              <div class="dr-page-breadcrumb">
                <a href="#/">Início</a> <span class="sep">&rsaquo;</span>
                <a href="#/groups">Grupos</a> <span class="sep">&rsaquo;</span>
                <span>${group.name}</span>
              </div>
              <h1>${group.name}</h1>
              <p class="page-sub">${group.description}</p>
            </div>
            <div>
              <button onclick="showToast('Convite de membro enviado');" class="dr-btn dr-btn-primary" style="display:inline-flex;align-items:center;gap:6px;">
                ${ICONS.plus} Convidar Membro
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="dr-container" style="padding-top:24px;padding-bottom:60px;">
        <div style="display:grid;grid-template-columns:2fr 1fr;gap:32px;">
          <div>
            <h3 style="font-size:18px;font-weight:800;color:var(--foreground);margin-bottom:16px;">
              Datasets Restritos do Grupo (${groupDatasets.length})
            </h3>
            <div class="dr-ds-grid" style="grid-template-columns:1fr;">
              ${groupDatasets.map(d => renderDatasetCard(d)).join('')}
            </div>
          </div>

          <div>
            <h3 style="font-size:18px;font-weight:800;color:var(--foreground);margin-bottom:16px;">
              Membros do Grupo (${group.members?.length || 4})
            </h3>
            <div class="dr-panel" style="padding:0;">
              ${(group.members || []).map(m => `
                <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--border);">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <span style="width:32px;height:32px;border-radius:50%;background:var(--brand-blue);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;">
                      ${m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}
                    </span>
                    <div>
                      <div style="font-size:13.5px;font-weight:700;color:var(--foreground);">${m.name}</div>
                      <div style="font-size:11.5px;color:var(--muted-foreground);">${m.unit}</div>
                    </div>
                  </div>
                  <span class="dr-badge" style="background:var(--secondary);color:var(--primary);font-size:11px;font-weight:800;padding:2px 8px;border-radius:6px;">
                    ${m.role}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      ${renderFooter()}
    </div>
  `;
}

// --- User Profile Page ---
function renderProfile() {
  return `
    <div class="dr-app">
      ${renderNavbar('dashboard')}

      <div class="dr-container" style="max-width:800px;margin:40px auto 80px;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:36px;box-shadow:var(--shadow-sm);">
        <div style="display:flex;align-items:center;gap:20px;border-bottom:1px solid var(--border);padding-bottom:28px;margin-bottom:28px;">
          <span style="width:72px;height:72px;border-radius:50%;background:var(--brand-blue);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;">
            ${state.user.short}
          </span>
          <div>
            <h2 style="font-size:22px;font-weight:900;color:var(--foreground);margin:0;">${state.user.name}</h2>
            <div style="font-size:13.5px;color:var(--muted-foreground);margin-top:4px;">
              ${state.user.role} · ${state.user.unit}
            </div>
            <div style="font-size:12.5px;color:var(--brand-blue);margin-top:2px;">${state.user.email}</div>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:18px;">
          <h3 style="font-size:16px;font-weight:800;color:var(--foreground);">Informações Pessoais e Institucionais</h3>
          <div class="dr-field">
            <label class="dr-field-label">Nome Completo</label>
            <input type="text" class="dr-input" value="${state.user.name}" oninput="state.user.name=this.value;saveState();" />
          </div>
          <div class="dr-field">
            <label class="dr-field-label">E-mail Institucional (@ufrrj.br)</label>
            <input type="email" class="dr-input" value="${state.user.email}" oninput="state.user.email=this.value;saveState();" />
          </div>
          <div class="dr-field">
            <label class="dr-field-label">Lotação / Instituto</label>
            <input type="text" class="dr-input" value="${state.user.unit}" oninput="state.user.unit=this.value;saveState();" />
          </div>
          <div style="text-align:right;margin-top:10px;">
            <button onclick="showToast('Perfil atualizado com sucesso!');" class="dr-btn dr-btn-primary" style="padding:10px 24px;">
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>

      ${renderFooter()}
    </div>
  `;
}

// --- Login & Sign Up Pages ---
function renderLogin() {
  return `
    <div class="dr-app" style="min-height:100vh;display:flex;flex-direction:column;background:var(--hero-bg);">
      ${renderNavbar('')}
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:40px 20px;">
        <div class="dr-auth-card" style="width:100%;max-width:440px;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:36px;box-shadow:var(--shadow-md);">
          <div style="text-align:center;margin-bottom:24px;">
            ${brandMark(44)}
            <h2 style="font-size:22px;font-weight:900;color:var(--foreground);margin-top:12px;">Entrar no DataRural</h2>
            <p style="font-size:13.5px;color:var(--muted-foreground);margin-top:4px;">Use suas credenciais institucionais da UFRRJ</p>
          </div>
          <form onsubmit="event.preventDefault(); showToast('Autenticado com sucesso!'); navigate('#/dashboard');" style="display:flex;flex-direction:column;gap:16px;">
            <div class="dr-field">
              <label class="dr-field-label">E-mail institucional</label>
              <input type="email" class="dr-input" value="${state.user.email}" required />
            </div>
            <div class="dr-field">
              <label class="dr-field-label">Senha</label>
              <input type="password" class="dr-input" value="••••••••" required />
            </div>
            <button type="submit" class="dr-btn dr-btn-primary" style="padding:12px;font-size:14.5px;font-weight:800;margin-top:8px;">
              Entrar
            </button>
          </form>
          <div style="text-align:center;margin-top:20px;font-size:13px;color:var(--muted-foreground);">
            Não tem uma conta? <a href="#/sign-up" style="color:var(--brand-blue);font-weight:700;">Cadastre-se</a>
          </div>
        </div>
      </div>
      ${renderFooter()}
    </div>
  `;
}

function renderSignUp() {
  return `
    <div class="dr-app" style="min-height:100vh;display:flex;flex-direction:column;background:var(--hero-bg);">
      ${renderNavbar('')}
      <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:40px 20px;">
        <div class="dr-auth-card" style="width:100%;max-width:480px;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:36px;box-shadow:var(--shadow-md);">
          <div style="text-align:center;margin-bottom:24px;">
            ${brandMark(44)}
            <h2 style="font-size:22px;font-weight:900;color:var(--foreground);margin-top:12px;">Criar Conta no DataRural</h2>
            <p style="font-size:13.5px;color:var(--muted-foreground);margin-top:4px;">Disponível para docentes, técnicos e discentes da UFRRJ</p>
          </div>
          <form onsubmit="event.preventDefault(); showToast('Conta criada com sucesso!'); navigate('#/dashboard');" style="display:flex;flex-direction:column;gap:16px;">
            <div class="dr-field">
              <label class="dr-field-label">Nome Completo</label>
              <input type="text" class="dr-input" placeholder="Ex: Dra. Mariana Costa" required />
            </div>
            <div class="dr-field">
              <label class="dr-field-label">E-mail Institucional (@ufrrj.br)</label>
              <input type="email" class="dr-input" placeholder="usuario@ufrrj.br" required />
            </div>
            <div class="dr-field">
              <label class="dr-field-label">Instituto / Departamento</label>
              <select class="dr-select">
                <option>Instituto de Ciências Exatas (ICE)</option>
                <option>Instituto de Agronomia (IA)</option>
                <option>Instituto de Veterinária (IV)</option>
                <option>Instituto de Florestas (IF)</option>
                <option>Instituto de Ciências Biológicas e da Saúde (ICBS)</option>
              </select>
            </div>
            <div class="dr-field">
              <label class="dr-field-label">Senha de Acesso</label>
              <input type="password" class="dr-input" placeholder="Mínimo de 8 caracteres" required />
            </div>
            <button type="submit" class="dr-btn dr-btn-primary" style="padding:12px;font-size:14.5px;font-weight:800;margin-top:8px;">
              Criar Conta Institucional
            </button>
          </form>
          <div style="text-align:center;margin-top:20px;font-size:13px;color:var(--muted-foreground);">
            Já possui cadastro? <a href="#/login" style="color:var(--brand-blue);font-weight:700;">Acesse aqui</a>
          </div>
        </div>
      </div>
      ${renderFooter()}
    </div>
  `;
}

// --- Main App Renderer ---
function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  const hash = state.currentRoute || '#/';
  const cleanHash = hash.split('?')[0];

  document.documentElement.classList.toggle('dark', state.theme === 'dark');

  if (cleanHash === '#/' || cleanHash === '') {
    root.innerHTML = renderHome();
  } else if (cleanHash === '#/datasets') {
    root.innerHTML = renderExplore();
  } else if (cleanHash.startsWith('#/datasets/')) {
    const id = cleanHash.replace('#/datasets/', '');
    root.innerHTML = renderDetail(id);
  } else if (cleanHash === '#/dashboard') {
    root.innerHTML = renderDashboard();
  } else if (cleanHash === '#/dashboard/publish') {
    root.innerHTML = renderPublish();
  } else if (cleanHash === '#/favorites') {
    root.innerHTML = renderFavorites();
  } else if (cleanHash === '#/groups') {
    root.innerHTML = renderGroups();
  } else if (cleanHash.startsWith('#/groups/')) {
    const id = cleanHash.replace('#/groups/', '');
    root.innerHTML = renderGroupDetail(id);
  } else if (cleanHash === '#/profile') {
    root.innerHTML = renderProfile();
  } else if (cleanHash === '#/login') {
    root.innerHTML = renderLogin();
  } else if (cleanHash === '#/sign-up') {
    root.innerHTML = renderSignUp();
  } else {
    root.innerHTML = renderHome();
  }
}

// Initial boot
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderApp();
}
