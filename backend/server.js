const express=require('express');
const app=express();

const PORT=5000;
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get("/getName",(req,res)=>{
    res.send('Hello World from getName');
});

app.get("/getName/age",(req,res)=>{
    res.send('Hello World from getAge');
});

app.listen(PORT,()=>{ // change prompt to PORT
    console.log(`Server is running on ${PORT}`);
});