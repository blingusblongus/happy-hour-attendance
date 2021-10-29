const express = require('express');
const router = express.Router();
let data = require('../modules/data.js');

router.get('/', (req,res) =>{
    console.log('GET');
    res.send(data);
})

router.post('/', (req, res) => {
    console.log('POST');
    res.sendStatus(201)
})

module.exports = router;