const { createPool } = require("mysql");

// console.log(process.env.DB_PORT);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASS);
// console.log(process.env.MYSQL_DB);


const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB
});

//pool always reused connection
module.exports = pool; 