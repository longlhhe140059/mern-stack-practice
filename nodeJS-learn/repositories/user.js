const login = async ({email,password})=>{
    console.log("login with"+email+" | "+password)
}

const register = async ({name,email,password,phone})=>{
    //validation before this
    console.log("register with"+name+"|"+email+"|"+password+"|"+phone)
}

export default {
    login,
    register
}