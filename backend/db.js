const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "2116",
  host: "localhost",
  port: 5432,
  database: "lms",
});

module.exports = pool;
