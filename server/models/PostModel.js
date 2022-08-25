import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        description:{
            type: String,
            max: 1000
        },
        images:{
            type: Array,
            default:[]
        },
        likes:{
            type: Array,
            default: []
        }
    
    },
    {timestamps:true}
)

export default mongoose.model("posts", postSchema)