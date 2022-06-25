const express = require('express');
const router = express.Router();
const Quotes = require('../models/quotes');

// get a list of quotes from the database
router.get('/quotes',function(req,res,next){
    Quotes.find({}).then(function(quotes){
        res.send(quotes);
    }).catch(next);
});

// add a new quotes to database
router.post('/quotes',function(req,res,next){
    Quotes.create(req.body).then(function(quotes){
        res.send(quotes);
    }).catch(next);
});


module.exports = router;