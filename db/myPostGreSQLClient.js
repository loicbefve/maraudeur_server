const { Pool } = require('pg');

const pool = new Pool(
    {
        user: 'maraudeur',
        host: 'localhost',
        database: 'maraudeurdb',
        password: 'depinfonancy',
        port: 5432,
    }
);

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
};
