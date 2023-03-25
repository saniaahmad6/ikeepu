import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios"

function Note(props) {
  const deleteKeeper = (id)  => {
    console.log(id);
    axios.post("http://localhost:8080/api/note", { id })
    .then(res => console.log(res))
    
    // props.setNoteList( ()=>{
    //   props.NoteList.filter((eachnote) => {
    //     return eachnote._id !==id;
    //   })
    // })
  
}
  return (
    <div className="note">
      {console.log(props)}
      <h1>{props.title} </h1> <p>{props.content}</p>
      <button onClick={(e) => {e.preventDefault();
      deleteKeeper(props.id)}}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
