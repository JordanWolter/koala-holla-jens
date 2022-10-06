const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');


// GET


// POST
koalaRouter.post('/', (req,res)=>{
    console.log('reqBody', req.body);
    const sqlText = `
        INSERT INTO "koala"
            ("name", "gender", "age", "readyForTransfer", "notes")
        VALUES
            ($1, $2, $3, $4, $5);
    `;

    const sqlParams = [
        req.body.name,
        req.body.gender,
        req.body.age,
        req.body.readyForTransfer,
        req.body.notes
    ]
    console.log("sqlParams", sqlParams);
    pool.query(sqlText, sqlParams)
        .then(dbRes=>{
            res.sendStatus(201);
        })
        .catch(err=>{
            console.log('there was an error in addKoalaPOST', err);
            res.sendStatus(500);
        });
});

// PUT


// DELETE

module.exports = koalaRouter;