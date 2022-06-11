import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getAllNotes } from "./repository/chromeStorageRepository";

const Options = () => {
  const [notes, setNotes] = useState({});

  useEffect(() => {
    const getNotes = async () => {
      setNotes(await getAllNotes());
    }

    getNotes();
  });

  return (
    <>
      Hello:
      {notes ? JSON.stringify(notes) : "no notes yet"}
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
