# Exercicios De Lógica

Disponivel em: [exercícios no codesandbox](https://codesandbox.io/s/teste-estagio-template-forked1-4youu?fontsize=14&hidenavigation=1&theme=dark&file=/src/exercise01.js)

# Desafio back-end 

O sistema consiste em um banco de dados dos navers, possuindo informações como: nomes, datas de nascimento, cargo, tempo de empresa e projeto que participou. Deve ser possível saber em quais projetos um naver está e vice-versa.

## Instalação de pré requisitos
1. Instale [Node.JS](https://nodejs.org/en/) versão LTS
2. Instale [PostgreSQL](https://www.postgresql.org/download/) 
3. Clone esse repositório e entre na pasta onde foi clonado.
4. Instale as dependencias utilizando `yarn` ou `npm install`

## Antes de rodar o projeto:
1. Para criar um novo banco de dados, utilize os  seguintes comandos dentro do terminal psql: 
- CREATE USER `user` WITH PASSWORD `password`
- CREATE DATABASE `database`
- GRANT ALL PRIVILEGES ON DATABASE `database` to `user`

2. Altere a DATABASE_URL dentro do arquivo .env para postgress://`user`:`password`@`localhost`/`database`
3. Execute o script de criação das tabelas `yarn db:migrate` ou `npm run db:migrate`
4. Execute o script: `yarn db:seed` ou `npm run db:seed`
5. Execute o script: [`yarn start`, `npm run start`] ou [`yarn dev`, `npm run dev`] para iniciar o servidor.

## Testes

1. Execute o script de teste: `yarn test` ou `npm run test`

## Estrutura de diretórios Structure

```
├── /src
|   ├── /controllers
|   ├── /database
|   |    ├── /migrations
|   |    ├── /seeds
|   ├── /helpers
|   ├── /middleware
|   ├── /models
|   ├── /routes
|   ├── /validators
├── /test
```


## Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/adcd8589e2507a6971f0)

## Referencias
Foi utilizado a Boilerplate construida pela nave 
[A boilerplate for building RESTful APIs using Node.js, PostgreSQL, koa, knex, objection.](https://github.com/naveteam/back-boilerplate)


## (BONUS) Exercício de Banco de Dados

 os exercicios estão localizados na pasta `exercicios-extras` e estão enumerados.
