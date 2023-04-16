import { print,OutputType } from "../helpers/print.js"
export default class Exception extends Error{
    static WRONG_DB_USENAME_PASSWORD = "wrong database's usename or password"
    static WRONG_DB_CONNECTION_STRING = "wrong server name or connection string"
    static CANNOT_CONNECT_MONGODB = "can't connect to mongo db"
    constructor(message){
        super(message)//call constructor from parent class
        print(message,OutputType.ERROR)
    }
}