import mongoose from "mongoose";
const { Schema } = mongoose;


const noteModel = new Schema({
    title: String,
    content: String,
});

export default mongoose.model('Note', noteModel);