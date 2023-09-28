const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

//schema
const userSchema = new mongoose.Schema({
    userID:Number,
    name: {
        type:String,
        require:[true, "name is require",]
    },
    email: {
        type:String,
        require:[true, "email is require",],
        unique: true,
    },
    password:{
        type:String,
        require:[true, "password is require",]
    },
},
    
    { timestamps:true },

)


//exports
const userModel= mongoose.model('users',userSchema) 
module.exports = userModel