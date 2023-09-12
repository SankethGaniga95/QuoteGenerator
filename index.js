const express=require("express")
const app=express()
const cors=require("cors")
const fetch=require("node-fetch")

app.use(express.json())
app.use(cors())
require("dotenv").config()

const API_KEY=process.env.API_KEY

app.post("/quotes",async(req,res)=>{
    const options={
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${API_KEY}`
        },
        body:JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{role:"user",content:req.body.message}],
            max_tokens:100,
        })
    }
    try{
        const response = await fetch("https://api.openai.com/v1/chat/completions",options)
        const data = await response.json()
        console.log(data)
        res.send(data.choices[0].message.content)
    
    

    }catch(err){
        console.log(err)
    }
})

app.listen(8080,()=>{
    console.log("listening to port 8080")
})