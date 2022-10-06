
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

module.exports = koalaRouter;