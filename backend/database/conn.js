import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://saniaahmad:abcdef123@notes.rrhkffo.mongodb.net/?retryWrites=true&w=majority")
    console.log("dbconnected")
}