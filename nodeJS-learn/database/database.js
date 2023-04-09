import mongoose from "mongoose"
mongoose.set('strictQuery',true)
async function connect(){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("finishing connect mongo")
        return connection
    }catch(error){
        // const {code} = error.code
        console.log("we in debug")
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
