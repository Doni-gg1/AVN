const Pool =require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "8766999",
    host: "localhost",
    port: "5432",
    database: "doni"
})

module.exports = pool   