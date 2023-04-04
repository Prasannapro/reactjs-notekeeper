import React, { useState } from "react";
import Heading from "./Heading"
import Footer from "./Footer"
import Note from "./Note"
// import notes from "../notes"
import CreateArea from "./CreateArea"

// function createNotes(noteItem){
// return <Note
// key={noteItem.key}
//  title ={noteItem.title}
//  content={noteItem.content}
//  />
// }

function App(){
    const  [notes,setNote] =useState([]);
    
    function addNote(newNote){
        // console.log(note);
        setNote(prevNotes=>{
          return [...prevNotes , newNote];
        });
    }

  function deleteNote(id){
      setNote(prevNotes=>{
        return prevNotes.filter((noteItem,index)=>{
          return index!==id;
        });
      });
  }

    return  <div>
        <Heading /> 
        <CreateArea onAdd={addNote}/>
        
        
        {notes.map((noteItem,index) => {
        return <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
            />
        })}


        {/* <Note key={1} title="Note title" content="Note content"/> */}
        <Footer />
    </div>
    
}

export default App; 