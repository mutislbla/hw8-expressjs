const pool = require("./config.js")
const express = require("express")
const router = express.Router()
router.get("/film", (req, res)=>{
    const query = `
    SELECT * FROM film
    `
    pool.query(query, (err, response)=>{
        if (err) throw err
        res.status(200).json(response.rows)
    })
    pool.end()
})

router.get("/film/:id", (req, res)=>{
    const query = `
    SELECT * FROM film WHERE id= ${req.params.id}
    `
    pool.query(query, (err, response)=>{
        if (err) throw err
        res.status(200).json(response.rows)
    })
    pool.end()
})

router.get("/kategori", (req, res)=>{
    const query = `
    SELECT * FROM category
    `
    pool.query(query, (err, response)=>{
        if (err) throw err
        res.status(200).json(response.rows)
    })
    pool.end()
})

router.get("/kategori/:nama", (req, res)=>{
    const query = `
    SELECT film.title, category.name
    FROM film
    JOIN film_category ON film.film_id = film_category.film_id
    JOIN category ON film_category.category_id = category.category_id
    WHERE category.name = '${req.params.nama}'
    `
    pool.query(query, (err, response)=>{
        if (err) throw err
        res.status(200).json(response.rows)
    })
    pool.end()
})
module.exports = router