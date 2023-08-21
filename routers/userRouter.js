const express = require('express');

const router = express.Router();


router.get('/add', (req, res) => {
    res.send('response from user Router');
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