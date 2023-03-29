import express  from "express";

const router = express.Router()

router.get('/',(req, res)=>{
    res.send('GET user')
})

router.post('/login', (req,res)=>{
    res.send('post login user')
})

router.post('/register', (req,res)=>{
    res.send('post register user')
})

export default router