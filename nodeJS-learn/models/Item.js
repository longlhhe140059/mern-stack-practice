import mongoose,{ Schema, ObjectId } from "mongoose";
export default mongoose.model(
item,
new Schema({
    name:{
        type:String,
        required:true,
        validate:{
            validator:(name) =>name.lenght > 3,
            message: "Name must be at least 3 characters"
        }
    },
    description:{
        type:String,
        required:true,
        //add more validate if need
    }
})
)