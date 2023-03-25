import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import axios from "axios"

function CreateArea(props) {
    const [isExpanded, setExpanded]=useState(false);    
    const [Note,setNote]=useState({
        title : "",
        content : ""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setNote((prevobj)=>{
            return {
                ...prevobj,
                [name] : value
            }
        });
        
    }
    const add = (e)=>{
      e.preventDefault();
      if (Note.title){
        axios.post("http://localhost:8080/api/notes",Note)
        .then( res => {
          const {title , content} = res;
          const obj = {
            title : title,
            content : content
          }
          props.setNoteList((prev)=>{
              return [...prev, obj]
          });


          setNote({
            title: "",
            content :""
          })
      })
        
      }
    }
  return (

    <div>
        
      <form className="create-note">
        {
            isExpanded ? <input name="title" placeholder="Title" onChange={handleChange} value={Note.title} /> : null
        }
        
        <textarea name="content" onChange={handleChange} value={Note.content} placeholder="Take a note..." rows={isExpanded ? "3" : "1"} onClick={()=>{setExpanded(true)}} />
        <Zoom in={isExpanded}>
        <Fab onClick={add}
        ><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
