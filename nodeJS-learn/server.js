// import { sum } from "./calculate.js";
// console.log("test")
// console.log("sum="+sum(1,2))

//set up environment variable
import * as dotenv from "dotenv"
dotenv.config({ path: "./config.env" })

//set up express
import express from "express";
const app = express();

const port = process.env.PORT ?? 3000

app.listen(port , async() =>{
    console.log(`listening on port : ${port}`)
})
