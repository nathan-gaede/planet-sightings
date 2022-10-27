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

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  const queryText = `SELECT * FROM "planet" WHERE "id" = $1`;
  pool.query(queryText,[req.params.id])
  .then((result) => {
    console.log('SELECT success!', result);
    res.send(result.rows[0]);
  }).catch((error) => {
    console.log('Error in GET Details', error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('POST route');
  console.log(req.body);
  console.log('is authenticated?', req.isAuthenticated());
  if(req.isAuthenticated()) {
    const queryText = `INSERT INTO "sighting" ("planet_id", "user_id", "notes")
                        VALUES ($1, $2, $3) RETURNING "id";`;
      pool.query(queryText, [req.body.planet_id, req.user.id, req.body.notes]).then((result) => {
        res.sendStatus(201);
      }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
      });
  }else {
    res.sendStatus(403);
  }
});

router.delete('/:id', (req, res) => {
  if(req.isAuthenticated()) {
    const queryText = 'DELETE FROM "sighting" WHERE "id" = $1 AND "user_id" = $2';
    pool.query(queryText, [req.params.id, req.user.id])
    .then((result) => {
      res.sendStatus(201);
    }).catch((e) => {
      console.log(e);
      res.sendStatus(500);
    });
  }else {
    res.sendStatus(403);
  }
});

module.exports = router;
