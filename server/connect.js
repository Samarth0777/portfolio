const pg=require("pg")
const redis=require("redis")
const mongoose=require("mongoose")

let con;

const connectpg=async()=>{
    con=new pg.Client({
        host:"localhost",
        user:"postgres",
        password:"Samarth@7",
        port:5432,
        database:"postgres"
    })

    con.connect().then(()=>{console.log("Connected to Postgres DB")})
}

const connectmongo=async()=>{
    await mongoose.connect("mongodb+srv://samarth:Samarth%407@cluster0.zdl8y.mongodb.net/")
    console.log("Connected to MongoDB")
}
let client;
const connectredis=async()=>{
    client=redis.createClient()
    try {
        await client.connect().then(()=>{console.log("Connected to Redis")})    
    } catch (error) {
        console.log(error)
    }
}

module.exports={connectpg,connectmongo,connectredis,client} 