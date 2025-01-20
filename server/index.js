const express=require("express")
const app=express()
const port = 200
const cors=require("cors")
const pg=require("pg")
const redis=require("redis")
const {connectmongo}=require("./connect")
const mongocontact=require("./models/mongomodel")
const cmntrouter=require("./router/cmntsrouter")

const corsoption={
    origin:'http://localhost:5173',
    methods:'GET,POST,DELETE,PUT',
    credentials:true
}

app.use(express.json())

// connectpg()

const con=new pg.Client({
        host:"localhost",
        user:"postgres",
        password:"Samarth@7",
        port:5432,
        database:"postgres"
    })

con.connect().then(()=>{console.log("Connected to Postgres DB")})


const client=redis.createClient()

const connectredis=async()=>{
    try {
        await client.connect().then(()=>{console.log("Connected to Redis")})    
    } catch (error) {
        console.log(error)
    }
}

connectmongo()
connectredis()

app.use(cors(corsoption))

app.use("/fetch",cmntrouter)
  
app.get("/",(req,res)=>{
    res.status(200).json({msg:"Server Started"})
})

app.post("/savemongo",async(req,res)=>{
    const {name,email,phone,message}=req.body
    if( !name || !email || !message){
        return res.status(422).json({error:"Please fill all the fields"})
    }
    await mongocontact.create({name,email,phone,message})
    res.status(200).json({msg:"Data saved in mongo"})   
})

app.post("/savepg",(req,res)=>{
    const {name,email,phone,message}=req.body 
    const query="insert into contact values($1,$2,$3,$4)"
    con.query(query,[name,email,message,phone],(err,result)=>{
        if(err){
            return res.status(422).json({error:`Error occoured ${err}`})
        }
        res.status(200).json({msg:"Data saved in pg"})
    })  
})

app.post("/saveredis",async(req,res)=>{
    let {name,email,phone,message}=req.body
    const x=new Date().toString()
    await client.hSet(x,{
        'name':name
    })
    await client.hSet(x,{
        'email':email
    })
    await client.hSet(x,{
        'phone':phone
    })
    await client.hSet(x,{
        'message':message
    })
    res.status(200).json({msg:"Data saved in redis"})
}) 
 
app.listen(port,()=>{console.log("server started")})  