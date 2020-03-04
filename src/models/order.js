const mongoose = require('mongoose');



const schema = new mongoose.Schema({
    _id: {
        type: String,
        require:true,
        alias: "orderNo"
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
        require: false
    },
    users: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        }
],

},{
    timestamps: true,
    toJSON: {
        virtuals:true
    },

});


const model = mongoose.model('Order', schema);

module.exports = model;