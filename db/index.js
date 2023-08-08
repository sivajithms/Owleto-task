const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    console.log('db connected');
});

const sql = `CREATE TABLE IF NOT EXISTS students (rno INTEGER PRIMARY KEY, name TEXT, mark REAL)`;
db.run(sql);

module.exports = db;
 