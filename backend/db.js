const Pool = require("pg").Pool;

const pool = new Pool({
    user: "switchboard",
    password: "M2gzYcKeeS8w21w7",
    host: "localhost",
    port: 5432,
    database: "perntodo"
  
});

module.exports = pool;
