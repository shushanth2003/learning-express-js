const express=require("express");
const static =express();
const path=require("path");

// static web page
// static.use(express.static(path.join(__dirname)))
static.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

static.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"))
})

static.listen(8000,()=>console.log("Server port running successfully at 8080"));