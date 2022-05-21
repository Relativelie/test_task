const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgress',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: '',
});

module.exports = pool;
