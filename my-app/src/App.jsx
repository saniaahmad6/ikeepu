import React, { useState ,useEffect} from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Note from "./components/Note/Note";
import CreateArea from "./components/CreateArea/CreateArea";
import axios from "axios";



function App() {
  const [NoteList,setNoteList]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/api/notes")
    .then(res => {
      
      console.log(res.data);
      setNoteList(res.data);
    })
  },[NoteList])
  
    


  return (
    <div>
      <Header />
      <CreateArea setNoteList={setNoteList} NoteList={NoteList}/>
      {console.log(NoteList)}
      {
        NoteList.map((val) => {
          return <Note title={val.title} content={val.content} id={val._id} key={val._id} setNoteList={setNoteList} NoteList={NoteList}/>
        })
      }
      
      <Footer />
    </div>
  )
}

export default App;
