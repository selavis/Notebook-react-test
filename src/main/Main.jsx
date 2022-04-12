import React, { useEffect, useState } from "react";

const Main = ({ active, editNote }) => {
  const [onEdit, setOnEdit] = useState(null);

  useEffect(() => {
    if (onEdit) {
      editNote(onEdit);
    }
    setOnEdit(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleUpdate = (key, value) => setOnEdit({ ...onEdit, [key]: value });

  const eventButton = () => {
    setOnEdit(null);
  };

  return active ? (
    <div className="app-main">
      <div className="app-main-note-edit">
        <h1>My Note</h1>
        <div className="details">
          <p>Category: {onEdit?.category}&nbsp; &nbsp; | &nbsp; &nbsp;</p>
          <p className="note-meta">
            Last Modified{" "}
            {new Date().toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <input
          className="title"
          type="text"
          id="title"
          placeholder="Note Title"
          value={onEdit?.title}
          onChange={(e) => handleUpdate("title", e.target.value)}
          autoFocus
        />
        <input
          className="category"
          type="text"
          id="category"
          placeholder="Category"
          value={onEdit?.category}
          onChange={(e) => handleUpdate("category", e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={onEdit?.body}
          onChange={(e) => handleUpdate("body", e.target.value)}
        />
      </div>
    </div>
  ) : (
    <div className="no-active-note">No Active Note</div>
  );
};

export default Main;
