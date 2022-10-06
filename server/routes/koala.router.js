const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET


// POST


// PUT


// DELETE
koalaRouter.delete('/:id', (req, res) => {
    console.log('in delete with id', req.params.id)

    const koalaId = req.params.id;

    let sqlText = `DELETE FROM
                    "koala"
                    WHERE "id" = $1;`;
    const sqlParams = [koalaId];
    
})

module.exports = koalaRouter;