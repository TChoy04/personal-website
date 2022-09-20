const mongoose = require("mongoose");
const userSchema =  mongoose.Schema({
    username:{
        type:String,
        required : [true,"Please enter an username"],
    },
    email:{
        type:String,
        required : [true, "Please enter your password"],
        unique : true,
    },
    password:{
        type:String,
        required : [true, "Please enter your password"],
    },

},{
    timestamp:true,
});
module.exports = mongoose.model("User", userSchema);