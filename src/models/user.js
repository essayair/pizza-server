const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    _id: {
        type: String,
        require:true,
        alias: "userId",
        minlength: 2
    },
    email:{
        type: String,
        require: false,
        validate:{
            validator: email => !Joi.string().email().validate(email).error,
            msg: 'Invalid email format'
        }
    },
    password: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    orders: [
        {
            type: String,
            ref: 'Order'
        }
    ]
},{
    timestamps: true,
    // toJSON: {
    //     virtuals:true
    // },

});

//** function to hash password, used in controller by this.*/ 
// const salt = bcrypt.genSaltSync(saltRounds);
schema.methods.hashPassword = async function() {
    this.password = await bcrypt.hash(this.password, 10);
  };
  
  schema.methods.validatePassword = async function(password) {
    const validPassword = await bcrypt.compare(password, this.password);
    return validPassword;
  };

const model = mongoose.model('User', schema);

module.exports = model;