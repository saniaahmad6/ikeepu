// const express=require('express');

// const mongoose=require('mongoose');
// const cors=require ('cors');


// const app=express()
// app.use(express.urlencoded())
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/notesapp",{useNewUrlParser: true,useUnifiedTopology: true})
// const db=mongoose.connection;

// db.on("error",console.error.bind(console,"connection error: "));
// db.once("open" , ()=>{console.log("connedted to db") });


// const KeeperSchema = new mongoose.Schema({
//     title: String,
//     content: String
// })
// const Note = mongoose.model("Note",KeeperSchema);

// const noteRouter=express.Router();
// app.use("/note",noteRouter);

// noteRouter
//     .route("/")
//     .get(getNotes)
//     .post(postNote)
//     .delete(delNotes);





// async function getNotes(req,res){
//     let collection = await db.collection("notes");
//     let results=await collection.find({}).toArray();
//     res.send(results).status(200);
    
// }

// async function postNote(req,res){
//     console.log(req.body);
//     const { title, content} = req.body;
//     const note = new Note ({
//         title : title,
//         content : content
//     })
//     console.log(note);
//     note.save();
    
//     let collection = await db.collection("notes");
//     let results=await collection.find({}).toArray();
//     res.send(results).status(200);

// }

// function delNotes(req,res){
//     const { id } = req.body
//     Note.deleteOne({ _id: id}, () => {
//         Note.find({}, (err, NoteList) => {
//             if(err){
//                 console.log(err)
//             } else {
//                 res.status(200).send(NoteList)
//             }
//         })
//     })

// }

// const PORT=5000;
// app.listen(PORT,()=>{
//     console.log("listening at port", PORT);
// })