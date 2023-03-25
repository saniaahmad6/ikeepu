import Notes from "../models/notesSchema.js"

export async function getNotes(req,res){
    try{
        const q = await Notes.find();
        res.json(q);

    }catch (err){
        res.json({err});
    }
}


export async function deleteNotes(req,res){
    try{
        const q = await Notes.deleteMany();
        res.json(q);

    }catch (err){
        res.json({err});
    }
}




export async function addNote(req,res){
    try{
        const {title,content} = req.body;
        if (!title) throw new Error ('Data not provided');
        Notes.create({title,content})
        .then( result =>{
            res.json(result)
        }
            
        )
    }
    catch (error){
        res.json({error});
    }
}

export async function deleteNote(req,res){
    try{


        const {id} = req.body
        console.log(req)

        Notes.deleteOne({ _id: id})
         .then( result =>{
            res.json(result)
        })
        // const q = await Notes.find();
        // res.json(q);
    }

    catch (err){
        res.json({err});
    }
}