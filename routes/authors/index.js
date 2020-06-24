const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("authors/index");
});

router.get("/new", (req, res) => {
    res.render("authors/new");
})

module.exports = router