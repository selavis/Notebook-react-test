import React, { useMemo, useState } from "react";
const Sidebar = ({ notes, active, addNote, setActive, deleteNote }) => {
  const [searchString, setSearchString] = useState("");

  const formatBody = (string) =>
    string.length <= 100 ? string : `${string.substr(0, 100)}...`;

  const filteredNotes = useMemo(
    () =>
      notes.filter(
        (note) => note.title.toLowerCase().search(searchString) !== -1
      ),
    [notes, searchString]
  );

  return (
    <div className="app-sidebar">
      <div className="notes-search">
        <span role="img" aria-label="Loupe">
          🔍
        </span>
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
      <div className="app-sidebar-header">
        <h1>All Notes</h1>
        <button onClick={addNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {filteredNotes.map((note, index) => (
          <div
            className={`app-sidebar-note ${note.id === active && "active"}`}
            onClick={() => setActive(note)}
            key={index}
          >
            <div className="sidebar-note-title">
              <strong>{note.title ?? "Note title"}</strong>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>

            <p>{formatBody(note.body)}</p>
            <small>Category: {note.category}</small>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
