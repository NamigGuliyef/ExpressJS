import { model, Schema } from "mongoose";
const userSchema = new Schema({
    username: String,
    name: String,
    surname: String,
    job: String,
    email: String,
    password: String,
    photo: String
},{ versionKey: false })

 const userModel = model('user', userSchema)
 export default userModel