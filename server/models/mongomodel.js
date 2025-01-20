const mongoose=require("mongoose")

const mongocontact=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    message:String
})

module.exports=mongoose.model("mongocontact",mongocontact)