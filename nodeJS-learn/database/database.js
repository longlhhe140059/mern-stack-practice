import mongoose from "mongoose"
import { print,OutputType } from "../helpers/print.js"

mongoose.set('strictQuery',true)
async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        print("Connect success to mongo db", OutputType.SUCCESS)
        return connection
    }catch(error){
        print("Error connect mongo",OutputType.ERROR)
        debugger
        if(error.code == 8000){
            throw new Error('wrong connection usename or password')
        }else if(error.code){
            throw new Error("wrong server name or connection string")
        }
        throw new Error("connect db fail")
    }
}

export default connect
