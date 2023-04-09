import{body,validationResult} from 'express-validator'
import {userRepository} from '../repositories/index.js';


const login = async(req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  const { email, password } = req.body;
  // do something to check login
  // call data check login
  await userRepository.login({email,password})

  //send respond
  res.status(200).json({
    message:"user login successfully"
  });
};

const register = async(req,res) => {
  const {email, password, name, phone} = req.body;

  await userRepository.register({email,password,name,phone})

  res.status(201).json({
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