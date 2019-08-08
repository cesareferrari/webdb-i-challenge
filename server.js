const express = require('express');

const accountsRouter = require('./accounts/accounts-router.js');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
  res.send('<h1>Welcome to the Accounts API</h1>');
});

module.exports = server;
