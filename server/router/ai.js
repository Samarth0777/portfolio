const { GoogleGenerativeAI } = require("@google/generative-ai")
const express=require("express")
const router=express.Router()


const genaai=new GoogleGenerativeAI("AIzaSyBbjlFBSjBVxKlmX7TkBL-Fwv2UPbrFj-E")
const model=genaai.getGenerativeModel({model:"gemini-2.0-flash"})

const test=async(text)=>{
    const prompt=`complete this sentence in reference of a user want to write a good comment for my portfolio website include my name Samarth in 20 words: ${text}`

    const result=await model.generateContent(prompt)
    console.log(result.response.text())
    return result.response.text()
}

router.get("/",(req,res)=>{
    res.status(200).json({msg:"AI router"})
})

router.post("/complete",async(req,res)=>{
    const {text}=req.body
    const data=await test(text)
    res.status(200).json({data})
})

module.exports=router