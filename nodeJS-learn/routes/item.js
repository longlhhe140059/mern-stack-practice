import express  from "express";

const router = express.Router()

router.get('/',(req, res)=>{
    res.send('GET user')
})

router.get('/:id', (req,res)=>{
    res.send('id of item: '+req.params.id)
    
})

router.post('/insert', (req,res)=>{
    res.send('post insert item')
})

router.patch('/',(req,res)=>{
    res.send('PATCH (insert new item if not exist)')
})
export default router