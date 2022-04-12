import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    window.localStorage.getItem("notes")
      ? JSON.parse(window.localStorage.getItem("notes"))
      : []
  );

  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleActiveChange = (activeNote) =>
    setActiveNote(notes.find((note) => note.id === activeNote.id));

  const handleNoteAdd = () => {
    const newNote = {
      id: uuid(),
      title: "Note title",
      category: "",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
  };

  const handleNoteEdit = (editedNote) => {
    setNotes(
      notes.map((note) => (note.id === editedNote.id ? editedNote : note))
    );
  };

  const handleNoteDelete = (toDeleteId) => {
    if (activeNote?.id === toDeleteId) {
      setTimeout(() => {
        setActiveNote(null);
      });
    }
    setNotes(notes.filter(({ id }) => id !== toDeleteId));
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        active={activeNote?.id}
        addNote={handleNoteAdd}
        setActive={handleActiveChange}
        deleteNote={handleNoteDelete}
      />
      <Main active={activeNote} editNote={handleNoteEdit} />
    </div>
  );
}

export default App;
