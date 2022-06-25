const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create quotes
const QuotesSchema = new Schema({
    quote: {
        type: String,
    },
    author: {
        type: String,
       
    }
    
});


const Quotes = mongoose.model('quotes',QuotesSchema);

module.exports = Quotes;