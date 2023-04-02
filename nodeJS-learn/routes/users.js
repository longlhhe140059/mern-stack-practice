import express  from "express";
import{body,validationResult} from 'express-validator'
import {userController,itemController,} from '../controllers/index.js'

const router = express.Router()

router.get('/',(req, res)=>{
    res.send('GET user')
})

router.post('/login', 
//check is email using express-validator
body('email').isEmail(),
//check password using express-validator
body('password').isLength({min:5}),
userController.login
)

router.post('/register', userController.register)

export default router