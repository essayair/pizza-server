const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = new mongoose.Schema({
    _id: {
        type: String,
        require:true,
        alias: "userId",
        minlength: 2
    },
    firstName: {
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: false,
        validate:{
            validator: email => !Joi.string().email().validate(email).error,
            msg: 'Invalid email format'
        }
    },
    orders: [
        {
            type: String,
            ref: 'Order'
        }
    ]
},{
    timestamps: true,
    toJSON: {
        virtuals:true
    },

});


const model = mongoose.model('User', schema);

module.exports = model;