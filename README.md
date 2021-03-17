# EXERCICIOS DE LÓGICA

## CodeAndBox
Os exercicios estão uploadados na plataforma Codebox e está disponivel em: [exercícios no codesandbox](https://codesandbox.io/s/teste-estagio-template-forked1-4youu?fontsize=14&hidenavigation=1&theme=dark&file=/src/exercise01.js)

## Rodando diretamente pelo diretório clonado 
Caso você queira rodar diretamente aqui, entre no diretório `exercicios-logicos` e utilize os comandos: 
1. npm install 
2. npm run start

- Os exercicios estão implementados um em cada botão, a resposta é mostrada no console.
- Apenas o exercicio 1 tem uma input para ser digitada

# DESAFIO BACK-END

O sistema consiste em um banco de dados dos navers, possuindo informações como: nomes, datas de nascimento, cargo, tempo de empresa e projeto que participou. Deve ser possível saber em quais projetos um naver está e vice-versa.

## Instalação de pré requisitos
1. Instale o [Node.JS](https://nodejs.org/en/) versão LTS
2. Instale o [PostgreSQL](https://www.postgresql.org/download/) 
3. Clone esse repositório e entre na pasta onde foi clonado.
4. Instale as dependências utilizando `yarn` ou `npm install`

## Antes de rodar o projeto:
1. Para criar um novo banco de dados, utilize os  seguintes comandos dentro do terminal psql: 
- CREATE USER `user` WITH PASSWORD `password`
- CREATE DATABASE `database`
- GRANT ALL PRIVILEGES ON DATABASE `database` to `user`

2. Altere a DATABASE_URL dentro do arquivo .env para postgress://`user`:`password`@`localhost`/`database`
3. Execute o script de criação das tabelas `yarn db:migrate` ou `npm run db:migrate`
4. Execute o script de população de dados: `yarn db:seed` ou `npm run db:seed`
5. Execute o script: [`yarn dev`, `npm run dev`] para iniciar o servidor.

## Estrutura de diretórios

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
[![Execute no postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/f4925a3f10d66a729063)

## Referencias
Foi utilizado como base a Boilerplate construida pela nave.rs 
[A boilerplate for building RESTful APIs using Node.js, PostgreSQL, koa, knex, objection.](https://github.com/naveteam/back-boilerplate)


## (BONUS) Exercício de Banco de Dados - com sql nativo

Na pasta `exercicios-extra-sql/` estão os arquivos com os exercicios feitos em sql.

## (Bonus) Exercício de Banco de Dados -  Direto no desafio

Os exercicios 1 e 2 estão disponiveis direto no back dodesafio, para rodar entre na pasta do `desafio`, após:

Para rodar o exercicio 1: Script que deleta e crie todas as tabelas.

`npm run db:exercicio1`

Para rodar o exercicio 2: script que limpa e cria dados nas tabelas.

`npm run db:exercicio2`
