import {print,OutputType} from "../helpers/print.js"
const login = async ({email,password})=>{
    print("user login using: "+email+" | "+password,OutputType.INFORMATION)
}

const register = async ({name,email,password,phone})=>{
    //validation before this
    
    print("register with"+name+"|"+email+"|"+password+"|"+phone,OutputType.INFORMATION)
}

export default {
    login,
    register
}