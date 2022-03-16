import React from "react";
const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
  onNoteSearch,
}) => {
  // Rilistimi i notes kur editojme nje liste
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  const handleChangeSearchText = (e) => {
    const value = e.target.value.toLowerCase();
    onNoteSearch(value);
  };

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
          onChange={handleChangeSearchText}
        />
      </div>
      <div className="app-sidebar-header">
        <h1>All Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified, category }) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{"Note title" && title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Delete</button>
            </div>

            <p>{body && body.substr(0, 100) + "..."}</p>
            <small>Category: {category}</small>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
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
