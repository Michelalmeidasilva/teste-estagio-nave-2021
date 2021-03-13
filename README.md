# Exercicios De Lógica

Disponivel em: [exercícios no codesandbox](https://codesandbox.io/s/teste-estagio-template-forked1-4youu?fontsize=14&hidenavigation=1&theme=dark&file=/src/exercise01.js)

ou diretamente pelo repositório clonado.

## Utilização 
1. npm install -g parcel-bundler@1.12.3
2. parcel index.html

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
Foi utilizado a Boilerplate construida pela nave.rs 
[A boilerplate for building RESTful APIs using Node.js, PostgreSQL, koa, knex, objection.](https://github.com/naveteam/back-boilerplate)


## (BONUS) Exercício de Banco de Dados - com sql nativo

Na pasta `exercicios-extra-sql/` estão os arquivos com os exercicios feitos em sql.

## (Bonus) Exercício de Banco de Dados -  Direto no desafio

Os exercicios 1 e 2 foram implementados e ficaram  para rodar diretamente no back do desafio, para rodar entre na pasta do `desafio`, após:

Para rodar o exercicio 1: Script que deleta e crie todas as tabelas.

`npm run db:exercicio1`

Para rodar o exercicio 2: script que limpa e cria dados nas tabelas.

`npm run db:exercicio2`