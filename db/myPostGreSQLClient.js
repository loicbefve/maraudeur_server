const { Client } = require('pg');

const myPostGreSQLClient = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});


module.exports = myPostGreSQLClient;
