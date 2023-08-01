# LOGIC EXERCISES

## CodeAndBox
The exercises are available on the Codebox platform, accessible at: [exercises on CodeSandbox](https://codesandbox.io/s/teste-estagio-template-forked1-4youu?fontsize=14&hidenavigation=1&theme=dark&file=/src/exercise01.js)

## Running directly from the cloned directory
If you want to run the exercises directly here, navigate to the `exercicios-logicos` directory and use the following commands:
1. npm install
2. npm run start

- Each exercise is implemented in a separate button, and the response is displayed in the console.
- Only exercise 1 has an input field to be filled.

# BACK-END CHALLENGE

The system consists of a database of "navers," containing information such as names, birthdates, positions, years of employment, and projects they have participated in. It should be possible to know which projects a "naver" is associated with and vice versa.


## Prerequisites Installation
1. Install [Node.JS](https://nodejs.org/en/) LTS version.
2. Install [PostgreSQL](https://www.postgresql.org/download/).
3. Clone this repository and navigate to the cloned folder.
4. Install dependencies using `yarn` or `npm install`.

## Before running the project:
1. To create a new database, use the following commands in the psql terminal:
- CREATE USER `user` WITH PASSWORD `password`
- CREATE DATABASE `database`
- GRANT ALL PRIVILEGES ON DATABASE `database` to `user`

2. Modify the DATABASE_URL in the .env file to postgress://`user`:`password`@`localhost`/`database`.
3. Execute the table creation script: `yarn db:migrate` or `npm run db:migrate`.
4. Execute the data population script: `yarn db:seed` or `npm run db:seed`.
5. Run the server: [`yarn dev`, `npm run dev`].

## Directory Structure

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
[API documentation](https://documenter.getpostman.com/view/10351182/Tz5wXaD6)

## References
The Boilerplate built by nave.rs was used as a base.
[A boilerplate for building RESTful APIs using Node.js, PostgreSQL, koa, knex, objection.](https://github.com/naveteam/back-boilerplate)

## (BONUS) Database Exercise - Using Native SQL

In the `exercicios-extra-sql/` folder, you can find files with exercises implemented in SQL.

## (Bonus) Database Exercise - Inside the Challenge

Exercises 1 and 2 are available directly in the back dodesafio folder. To run:

To run exercise 1: A script that deletes and creates all tables.

`npm run db:exercicio1`

To run exercise 2: A script that clears and creates data in the tables.

`npm run db:exercicio2`
