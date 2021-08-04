import  mongoose from "mongoose";

const postSchema=mongoose.postSchema({
    title: String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
});

const Postmessage=mongoose.model('PostMessage',postSchema);

export default PostMessage;