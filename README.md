# API de Cadastro de Usuários

Uma API RESTful para gerenciamento de usuários, permitindo operações CRUD (Create, Read, Update, Delete) com dados como nome, email e idade.

## Funcionalidades

- Cadastro de usuários (nome, idade e email).
- Validação de dados (email é um campo obrigatório).
- Listagem de todos os usuários.
- Exclusão de registro (ID como identificador único).

## Tecnologias Utilizadas

- Back-end: Node.js, Express.js
- API: Prisma
- Banco de Dados: MongoDB

##  Endpoints 
- GET      /usuarios      Lista todos os usuários.
- GET      /usuarios/:id  Lista os registros de um usuário específico.
- POST     /usuarios      Cria um novo usuário.
- PUT      /usuarios/:id  Altera os registro de um usuário específico.
- DELETE   /usuarios/:id  Remove um usuário específico.

Exemplo de Request (POST):

  ```json
{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "age": 30
}
  ```

## Como executar

Pré-requisitos

- Node.js instalado.
- Banco de dados configurado.

Passos:

1. Clone o repositório:

```bash
git clone https://github.com/felipemagalhaes18/user-registration-api.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo .env :

```env
DATABASE_URL="sua_string_de_conexao"
```

4. Inicie a API:

```bash
npm run dev
```
