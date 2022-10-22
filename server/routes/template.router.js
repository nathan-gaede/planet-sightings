const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = 'SELECT * FROM "planet";';
  pool.query(queryText)
  .then((result) => {
    console.log('SELECT success!', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error in GET planet', error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
