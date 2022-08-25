import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        min: 5, 
        max: 50,
        unique:true
    },
    email:{
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        min: 8
    },
    profilePicture:{
        type: String,
        default: ""
    },
    coverPicture:{
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default:[]
    },
    followings:{
        type: Array,
        default:[]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    description:{
        type :String,
        max: 50
    },
    fromGoogle:{
        type: Boolean,
        default:false
    }

},{timestamps:true})

export default mongoose.model("users", userShema)