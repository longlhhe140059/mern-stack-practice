import express  from "express";
import {itemController} from "../controllers/index.js"

const router = express.Router()

router.get('/',(req, res)=>{
    res.send('GET item default')
})

router.get('/items', 
itemController.getAllItem
)

router.get('/:id', itemController.getItemById)

router.post('/insert', itemController.insertItemById)

router.patch('/',itemController.updateItemById)
export default router