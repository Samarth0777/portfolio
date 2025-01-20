const express=require("express")
const user=require("../models/mongomodel")

const router=express.Router()

router.get("/cmnts",async(req,res)=>{
    const x=await user.find()
    if(x===null)
        return res.status(400).json({err:"DB is empty"})
    res.status(200).send(x)
})


module.exports=router