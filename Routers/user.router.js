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

module.exports=userRouter;