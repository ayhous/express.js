const express=require('express');
const userRouter=require('./Routers/user.router.js')


const expressVersion = express.version;
console.log('Version d\'Express.js :', expressVersion);

const apiVersion = 'v1';

const app=express();

app.get('/hello', (req, res)=>{
    res.send('hello world');
})

app.use(userRouter);

//demarer notre serveur

app.listen(8001,()=>{
    console.log("pret a l ecout notre serveur")
})

/* Créez la base de ce qui servira pour votre Bot
- Créez un server express
- Créez une route /citations qui renverra la liste des citations
- une route /version qui renverra la version de votre API */