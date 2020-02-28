const mongoose = require('mongoose');



const schema = new mongoose.schema({
    pizzaName: {
        type: String,
        require:true
    },
    size: {
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    ingredients:{
        type: String,
        require: true
    }
});


const model = mongoose.model('Pizza', schema);

module.exports = model;