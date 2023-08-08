const express = require('express');
const Router = express.Router();
const db = require('../db'); 

Router.get('/', (req, res) => {
    const sql = `SELECT * FROM students`;
    db.all(sql, [], (err, rows) => {
        if (err) return console.error(err.message);
        res.status(200).json(rows);
    });
});

module.exports = Router