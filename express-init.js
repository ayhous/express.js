const express=require('express');
const userRouter=require('./Routers/user.router.js')

const app=express();

app.get('/hello', (req, res)=>{
    res.send('hello world');
})

app.use(userRouter);

//demarer notre serveur

app.listen(8001,()=>{
    console.log("pret a l ecout notre serveur")
})