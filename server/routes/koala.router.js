const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET


// POST


// PUT
koalaRouter.put('/:id', (req, res) => {
    let koalaId = req.params.id;
    console.log('in PUT', koalaId);

    const sqlText = `
    UPDATE "koala"
    SET "readyForTransfer" = NOT "readyForTransfer"
    WHERE "id" = $1;
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