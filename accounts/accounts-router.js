const express = require('express');

const db = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const accounts = await db('accounts');

    if (accounts) {
      res.status(200).json(accounts);
    } else {
      res.status(404).json({message: 'accounts not found'});
    }
  } catch (err) {
    res.status(500).json({message: 'error retrieving the accounts', error: err});
  }
});

module.exports = router;
