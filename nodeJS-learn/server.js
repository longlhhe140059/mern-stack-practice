import {userRouter,itemRouter} from "./routes/index.js"

//set up environment variable
import * as dotenv from "dotenv"
dotenv.config({ path: "./config.env" })

import connect from "./database/database.js";

//set up express
import express from "express";
const app = express();

//set up port
const port = process.env.PORT ?? 3000

//set up listen port first run here
app.listen(port , async() =>{
    //connect db
    await connect()
    console.log(`listening on port : ${port}`)
})
//use express json to read body request
app.use(express.json())

//create default router
app.get('/',(req,res) =>{
    res.send('respone from root router testing 1')
})

//create user router
app.use('/users', userRouter)

app.use('/item', itemRouter)

