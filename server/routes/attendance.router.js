const express = require('express');
const router = express.Router();
let data = require('../modules/data.js');
let id = 0;

router.get('/', (req,res) =>{
    console.log('GET');
    res.send(data);
})

router.post('/', (req, res) => {
    id++;
    let person = req.body;
    person.id = id;
    data.push(person);
    res.sendStatus(201)
})

module.exports = router;