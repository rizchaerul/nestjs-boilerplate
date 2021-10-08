## NestJS boilerplate!

An opinionated [NestJS](https://github.com/nestjs/nest) framework boilerplate. Including:

- Support for PostgreSQL with MikroORM.
- Out of the box Bearer and Basic authentication.
- OpenAPI
- CRUD example.

## Installation

```bash
$ pnpm install
```

## How to use

- Install all the dependency.
- Run the SQL script in the ``scripts/migrations`` folder.
- Copy ``.env.example`` file and rename it to ``.env``. You must fill all the variable in the ``.env`` file except for ``DB_PATH``.
- If you want to change the database, Run ``npm run db:scaffold`` to create new entities.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
