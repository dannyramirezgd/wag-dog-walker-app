# Wag: Connecting Dogs with Their Walkers

https://secure-savannah-19572.herokuapp.com/
https://git.heroku.com/secure-savannah-19572.git

git remote rm heroku
git remote add heroku [the git address above]

## Technology

The following dependencies are used in production:
- bcrypt: for hashing passwords
- dotenv: for loading environment variables, to prevent publication of sensitive information
- express: for building the web applications, specifically through router calls on the server side
- express-session: for creating session middleware using express.js
- handlebars: for building web templates
- express-handlebars: for supporting partials and other features within express
- mysql2: for accessing and querying MySQL
- sequelize: for accessing and querying the database in JavaScript
- connect-session-sequelize: for storing sessions in SQL via sequalize

The following are used in development:
- @faker-js/faker (referred to as faker). Listed in package.json as a production level dependency to avoid issues with ESLint
- Prettier
- Various ESLint packages

## Models

The database has four related tables.

- Owners, who own the dogs
- Walkers, who walk the Dogs
- Dogs
- Calendar, which stores weekly appointments between walkers and dogs

Owners can have many dogs. Appointments in the Calendar store one walker and at most one dog (appointments without dogs attached are ones where the walker is available). Nothing prevents a Walker from walking more than one dog is the same time frame.

## Mock Data

There are two ways to mock data for this repo:

### Faker.js

The faker module simulates data for testing purposes, and can be found in the seeds file.

### JSON files

The above method is not very userful for mocking the login process for existing users, since the api routes return a hashed password. Instead, there are four files used to make post requests to Heroku for testing the external site.