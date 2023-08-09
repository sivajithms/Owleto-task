const express = require('express');
const Router = express.Router();
const db = require('../db');

Router.delete('/', (req, res) => {
    const { rno } = req.body;

    if (!rno) {
        return res.status(400).json({ message: ' rno not found' });
    }

    const sql = `DELETE FROM students WHERE rno=?`;
    db.run(sql, [rno], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Student deleted successfully' });
    });
});

module.exports = Router;
