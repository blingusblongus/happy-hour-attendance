const axios = require('axios');
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

    axios.get(`https://api.github.com/users/${req.body.userName}`)
        .then(response => {
            let person = {
                name: response.data.name,
                photo: response.data.avatar_url,
                going: req.body.going,
                id: id
            }
            data.push(person);
            res.sendStatus(201)
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })  
})

router.delete('/:id', (req, res) => {
        let id = req.params.id;
        data = data.filter(person => {
            return person.id != id;
        });
        res.send(204);
    });

module.exports = router;