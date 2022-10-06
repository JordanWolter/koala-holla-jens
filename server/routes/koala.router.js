const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET


// POST


// PUT
koalaRouter.put('/:id', (req, res) => {
    console.log('in PUT', req.params.id);
    let koalaId = req.params.id;

    const sqlText = `
    UPDATE "koala"
    SET "readyForTransfer" = 
    `;

    pool.query(sqlText, [koalaId])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error updating in PUT', err);
        res.sendStatus(500);
      });
});

// DELETE

module.exports = koalaRouter;