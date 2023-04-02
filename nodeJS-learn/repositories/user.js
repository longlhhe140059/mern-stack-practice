const login = async ({email,pass})=>{
    console.log("login with"+email+"|"+pass)
}

const register = async ({name,email,pass,phone})=>{
    //validation before this
    console.log("register with"+name+"|"+email+"|"+pass+"|"+phone)
}

export default {
    login,
    register
}