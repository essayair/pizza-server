const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: {
        type: String,
        require:true,
        uppercase:true,
        alias: "code"
    },
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
        require: false
    },
    description: {
        type:String,
        default: "this is a description"
    },
    __v:{
        type:Number,
        select: false,

    }
},{
    timestamps: true,
    toJSON: {
        virtuals:true
    },

});

// schema.virtual('code').get(function (){
//     console.log("vitual");
//     return this.id;
// });

const model = mongoose.model('Pizza', schema);

module.exports = model;