const mongoose = require('mongoose');
const {Schema} = mongoose;
const NotesSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'us'
    },
    title : {
        type : String,
        required : true
    },
    notes : {
        type : String,
    },
    tag :{
        type : String,
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('notes',NotesSchema);