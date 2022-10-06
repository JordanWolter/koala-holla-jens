
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