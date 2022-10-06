const pg = require('pg');


const config = {
    database: 'awesome_reads',
    host: 'localhost',
    port: 5432,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('connected to postfres');

});

pool.on('error', (err) => {
    console.log('error connecting to postgress', err);
});

module.exports = pool;