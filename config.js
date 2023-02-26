const {Pool} = require("pg")
const pool = new Pool({
    user: "postgres",
    localhost: "localhost",
    database: "dvdrental",
    password: "babibubebo",
    port : 5432
})

module.exports = pool