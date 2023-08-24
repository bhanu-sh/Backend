const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();


router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('response from add user Router');
})

router.get('/getall', (req, res) => {
    res.send('response from getall user Router');
})

router.get('/getbyemail', (req, res) => {
    res.send('response from getbyemail user Router');
})

router.get('/getbyid', (req, res) => {
    res.send('response from getbyid user Router');
})

router.get('/update', (req, res) => {
    res.send('response from update user Router');
})

//getall
//getbyemail
//getbyid
//update

module.exports = router;