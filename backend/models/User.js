const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    name :{
        type : String,
        required: true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    description : {
        type:String,
    },
    date : {
        type : Date,
        default : Date.now
    }
})
const User = mongoose.model('us',UserSchema);
module.exports = User;