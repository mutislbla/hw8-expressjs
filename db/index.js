const fs = require("fs")
const pool = require("../config.js")

const seedQuery = fs.readFileSync("./db/seeding.sql", "utf-8")
// console.log(seedQuery);

pool.query(seedQuery, (err, result)=>{
    if(err) throw err
    console.log("seeding successfully");
})