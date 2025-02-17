const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    userName:{
        type: String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    DateOfBirth:{
        type:Date
    }

})

module.exports = userSchema;