const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_user_name',
    password: 'your_pass',
    host: 'localhost',
    port: 5432,
    database: 'your_database',
});

module.exports = pool;
