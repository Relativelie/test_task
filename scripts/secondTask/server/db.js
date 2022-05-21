const { Pool } = require('pg');

const pool = new Pool({
    user: 'home',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'node_postgres',
});

module.exports = pool;
