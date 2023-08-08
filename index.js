const express = require('express');
const cors = require('cors');

const create = require('./API/create');
const read = require('./API/read');
const update = require('./API/update');
const dlt = require('./API/delete')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//create table
app.use('/students',create);

//read table
app.use('/students',read);

//update table
app.use('/students',update);

//delete data
app.use('/students',dlt);


app.listen(3000);