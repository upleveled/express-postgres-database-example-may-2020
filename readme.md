# Express PostgreSQL API

- [Express](https://nextjs.org/) web framework
- [Postgres.js](https://github.com/porsager/postgres) database client
- [Ley](https://github.com/lukeed/ley) for database migrations
- [Jest](https://jestjs.io/en/) for unit tests
- [Cypress](https://www.cypress.io/) for end to end test

## Setup

Copy the `.env.example` file to `.env` and add the database connection information.

You'll also need PostgreSQL for this.

### PostgreSQL Installation instructions

Follow the instructions from the PostgreSQL step in [UpLeveled's System Setup Instructions](https://github.com/upleveled/system-setup/blob/master/readme.md).

Run the following queries inside of `psql` to set up the database and the user:

```sql
CREATE DATABASE express;
CREATE USER express WITH ENCRYPTED PASSWORD 'express';
GRANT ALL PRIVILEGES ON DATABASE express TO express;
```

Then, to connect to the data base using this new user:

```sh
psql -U express_may_2020 express_may_2020
```

<!--
SET ROLE express;
\connect express;
-->
