// import ReactMarkdown from "react-markdown";
import React from "react";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    // Ben nje kopje te shenimit aktiv dhe behet update
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  // Nqs nuk ka shenim aktiv
  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <h1>My Note</h1>
        <div className="details">
          <p>Category: {activeNote.category}&nbsp; &nbsp; | &nbsp; &nbsp;</p>
          {/* Shfaqet koha e modifikuar */}
          <p className="note-meta">
            Last Modified{" "}
            {new Date().toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>{" "}
        </div>
        <input
          className="title"
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <input
          className="category"
          type="text"
          id="category"
          placeholder="Category"
          value={activeNote.category}
          onChange={(e) => onEditField("category", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      {/* <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div> */}
    </div>
  );
};

export default Main;
