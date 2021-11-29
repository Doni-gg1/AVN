const Pool =require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "shaibekova02",
    host: "localhost",
    port: "5432",
    database: "AVN"
})

module.exports = pool   