import{body,validationResult} from 'express-validator'
import {userRepository} from '../repositories/index.js';
import {EventEmitter} from "node:events"
import HttpStatusCode from '../exceptions/HttpStatusCode.js';

const myEvent = new EventEmitter()
//listen
myEvent.on('event.register.user',(params)=>{
  console.log(`listen event of register about: ${JSON.stringify(params)}`)

})

const login = async(req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({ errors: err.array() });
  }
  const { email, password } = req.body;
  // do something to check login
  // call data check login
  await userRepository.login({email,password})

  //event emit


  //send respond
  res.status(HttpStatusCode.OK).json({
    message:"user login successfully"
  });
};

const register = async(req,res) => {
  const {email, password, name, phone} = req.body;
  
  //register
  await userRepository.register({email,password,name,phone})
  
  //event emit
  myEvent.emit('event.register.user',{email,password})


  res.status(HttpStatusCode.INSERT_OK).json({
    message:"user login successfully",
    data: "detail user that been create"
  });
}

const getDetailUser = async(req,res) => {
    
}

export default {
    login,
    register,
    getDetailUser
}