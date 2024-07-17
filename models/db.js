const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    connectionString: process.env.CONNECTION_STRING
})

client.connect()
  .then(() => console.log('Connected to Neon PostgreSQL database'))
  .catch(err => console.error('Connection error:', err));

module.exports = client;