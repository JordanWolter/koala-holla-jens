
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET
koalaRouter.get('/',(req,res)=>{
    let sqlText = 'SELECT * FROM "koala" ORDER BY "id";';
    pool.query(sqlText)
        .then((dbRes)=>{
            res.send(dbRes.rows);
        })
        .catch((err)=>{
            console.log('error getting koalas',err);
            res.sendStatus(500);
        });
});

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

    pool.query(sqlText, sqlParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST failed', err);
            res.sendStatus(500);
        })

})

module.exports = koalaRouter;