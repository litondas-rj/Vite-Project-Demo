const express=require('express')
const app=express()


app.get('/',(req,res,next)=>{
    return res.send('hello')
})

const PORT=process.env.PORT||8000

app.listen(PORT,()=>{
    console.log('iam listen')
})