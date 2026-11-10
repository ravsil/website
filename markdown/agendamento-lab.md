# Agendamento de Computadores no Laboratório 310

> **Categoria:** Graduação — Projeto de Extensão SmartIM (UFRRJ)  
> **Repositório:** [github.com/ravsil/agendamento-lab](https://github.com/ravsil/agendamento-lab)  
> **Executar:** [▶ Abrir Sistema de Agendamento no Navegador](#run:agendamento-lab.md)

O objetivo deste projeto é desenvolver um sistema de agendamento para os computadores localizados na sala 310 do bloco de informática da UFRRJ - Campus Nova Iguaçu (IM/UFRRJ).

Frequentemente, o laboratório é utilizado para aulas ou fica lotado durante os horários de pico, e essa informação não estava disponível de forma acessível para os estudantes. O propósito deste projeto foi solucionar essa questão centralizando horários, reservas de máquinas e alocações de aulas.

---

## Stack Tecnológico

- **Linguagens:** JavaScript (Node.js), Python, SQL, HTML5, CSS3
- **Backend:** Node.js com **Fastify** (`@fastify/static`, `@fastify/view`, `@fastify/formbody`)
- **Template Engine:** Handlebars (HBS)
- **Banco de Dados:** SQLite3 (com script de modelagem e inicialização em Python via `db_creator.py`)
- **Autenticação:** Google OAuth 2.0 (Login institucional/Google)

---

## Funcionalidades

- [x] Página com visualização de todos os computadores do laboratório
- [x] Página inicial com autenticação integrada (Login com Google)
- [x] Página de agendamento de máquinas por horário (com limite de 1 computador ativo por aluno)
- [x] Painel de administração exclusivo para professores e administradores:
  - [x] Adicionar e remover professores
  - [x] Cadastrar aulas e reservar o laboratório inteiro por horário
  - [x] Desativação automática e manual de aulas/reservas
- [x] Página de histórico de agendamentos
- [x] Monitoramento do estado atual dos computadores em tempo real:
  - [x] Modo disponível
  - [x] Modo reservado
  - [x] Modo em aula
- [x] Banco de dados relacional integrando alunos, professores, máquinas e reservas
