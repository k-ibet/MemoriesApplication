import mongoose from 'mongoose';

//an instance of a model is called a document.
//what we're creating now is called a schema
const  postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//this is a model made from a schema
const PostMessage = mongoose.model('PostMessage', postSchema);

//exporting model
export default PostMessage;

//on that model we can perform find,create,delete,update etc.