import{body,validationResult} from 'express-validator'

const login = async(req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  const { email, password } = req.body;

  res.send("post login user" + email + "|" + password);
};

const register = async(req,res) => {

}

const getDetailUser = async(req,res) => {
    
}

export default {
    login,
    register,
    getDetailUser
}