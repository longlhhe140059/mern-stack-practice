import{body,validationResult} from 'express-validator'

const login = async(req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  const { email, password } = req.body;

  res.status(200).json({
    message:"user login successfully"
  });
};

const register = async(req,res) => {
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