import mongoose from "mongoose"
import { print,OutputType } from "../helpers/print.js"
import Exception from "../exceptions/Exception.js"
mongoose.set('strictQuery',true)
async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        print("Connect successfully to mongo db", OutputType.SUCCESS)
        return connection
    }catch(error){
        print("Error connect mongo",OutputType.ERROR)
        const {code} = error
        debugger
        if(error.code == 8000){
            throw new Exception(Exception.WRONG_DB_USENAME_PASSWORD)
        }else if(code = 'ENOTFOUND'){
            throw new Exception(Exception.WRONG_DB_CONNECTION_STRING)
        }
        throw new Exception(Exception.CANNOT_CONNECT_MONGODB)
    }
}

export default connect
