import {userRouter,itemRouter} from "./routes/index.js"

//set up environment variable
import * as dotenv from "dotenv"
dotenv.config({ path: "./config.env" })

//set up express
import express from "express";
const app = express();

//set up port
const port = process.env.PORT ?? 3000

//
app.listen(port , async() =>{
    console.log(`listening on port : ${port}`)
})

//create default router
app.get('/',(req,res) =>{
    res.send('respone from root router testing 1')
})

//create user router
app.use('/users', userRouter)

app.use('/item', itemRouter)

