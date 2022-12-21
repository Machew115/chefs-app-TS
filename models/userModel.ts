import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, require: true},
    picture: { type: String, require: true},
    
})
const User = mongoose.model("User", userSchema);
module.exports = User;