const mongoose = require('mongoose')
const Schema =  mongoose.Schema;

const UserSchema =  new Schema({
    firstName:{
        type:String
    },
    lastName:{type:String},
    phone:{
        type:String
    },
    email:{
        type:String  
    },
    address:{
        type:String
    },
    password:{
        type:String
    }       
});

const User = mongoose.model('user',UserSchema);

module.exports = User;