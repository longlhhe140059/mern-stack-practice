import mongoose,{ Schema, ObjectId } from "mongoose";
import isEmail from 'validator/lib/isEmail.js'

export default mongoose.model(
  "User",
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String, //TYPE OF ATTRIBUTE
      require: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 3,
        message: "User name must be greater than 3 character",
      },
    },
    email: {
      type: String, //TYPE OF ATTRIBUTE
      require: true, //NOT NULL
      validate: {
        validator: (value) => value.length > 3,
        message: "User name must be greater than 3 character",
      },
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    }
  })
);
