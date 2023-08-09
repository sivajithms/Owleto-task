const express = require('express');
const Router = express.Router();
const db = require('../db'); 

Router.put('/', (req, res) => {
    const { rno, name, mark } = req.body;
    
    if (!rno || !name || !mark) {
        return res.status(400).json({ message: 'Provide rno, name, and mark' });
    }

    const sqlCheck = `SELECT * FROM students WHERE rno = ?`;
    const sqlInsert = `UPDATE students SET name=?,mark=? WHERE rno=?`

    db.get(sqlCheck, [rno], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (row) {
            db.run(sqlInsert, [name, mark, rno], (insertErr) => {
                if (insertErr) {
                    return res.status(500).json({ error: insertErr.message });
                }
                res.status(201).json({ message: 'Student updated successfully' });
            });
        } else {
            res.status(400).json({ message: 'Student with the  rno does not exists' });
        }
    });
});

module.exports = Router