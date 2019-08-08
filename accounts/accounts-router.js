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

router.get('/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const [account] = await db('accounts').where({id});

    if (account) {
      res.status(200).json(account);
    } else {
      res.status(404).json({message: `account with id ${id} not found`});
    }
  } catch (err) {
    res.status(500).json({message: 'error retrieving the account', error: err});
  }
});

router.post('/', async (req, res) => {
  const newAccount = req.body;
  try {
    const [accountId] = await db('accounts').insert(newAccount);
    res.status(201).json({id: accountId});
  } catch (err) {
    res.status(500).json({message: 'error adding the account', error: err});
  }
});


module.exports = router;
