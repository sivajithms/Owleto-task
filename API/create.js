const express = require('express');
const Router = express.Router();
const db = require('../db'); 

Router.post('/', (req, res) => {
    const { rno, name, mark } = req.body;

    const sqlCheck = `SELECT * FROM students WHERE rno = ?`;
    const sqlInsert = `INSERT INTO students(rno, name, mark) VALUES (?, ?, ?)`;

    db.get(sqlCheck, [rno], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            db.run(sqlInsert, [rno, name, mark], (insertErr) => {
                if (insertErr) {
                    return res.status(500).json({ error: insertErr.message });
                }
                res.status(201).json({ message: 'Student created successfully' });
            });
        } else {
            res.status(400).json({ message: 'Student with the same rno already exists' });
        }
    });
});

module.exports = Router;
