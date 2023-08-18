const {Router}  =require('express');

const userRouter=Router();


userRouter.get('/users',(request,response) => {
    response.send({
        users:[
            {
                firstName:'romain',
                lastName:'verliefden',
            }
        ]
    })
})
userRouter.get('/citation',(request,response) => {

    response.send({
        citations:
        [{
            "_id": {
              "$oid": "64dcba671df43b43a93f3e03"
            },
            "text": "La beauté réside dans les yeux de celui qui contemple, car chaque regard est une interprétation unique."
          },
          {
            "_id": {
              "$oid": "64dcdac119e848e7157d6cbe"
            },
            "text": "hshshs"
          },
          {
            "_id": {
              "$oid": "64dcdb6a19e848e7157d6cbf"
            },
            "text": "je suis la"
          },
          {
            "_id": {
              "$oid": "64dcdbe1c591da35d77e6ea7"
            },
            "text": "ooooooooo"
          },
          {
            "_id": {
              "$oid": "64dcdca17c1b521d2d6d9aed"
            },
            "text": "houssin"
          },
          {
            "_id": {
              "$oid": "64dcde2c7c1b521d2d6d9aee"
            },
            "text": "rever c est realiser"
          }]
    })

})
userRouter.get('/version',(request,response) => {
    response.send('je suis la version x')
})
module.exports=userRouter;