const express=require("express");
const app=express();

app.get("/",(req,res)=>[
    res.send('<h1>Hello World</h1>')
])
//listen the website from the backend
app.listen(8000,()=>console.log("Server is running on PORT"))