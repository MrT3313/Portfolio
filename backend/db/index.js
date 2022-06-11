// imports
const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'db',             // this is the name of the service in the docker-compose
    user: 'docker',
    password: 'password',
    database: 'portfolio_db'      // database name created based on the name of the user in the docker-compose
  }
})