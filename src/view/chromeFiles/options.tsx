import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Dashboard } from "../components/Dashboard";
import { ChromeRepository } from "../../modules/chromeStorageRepository";
import { allNotes } from "../../modules/types";

const Options = () => {
  const [allNotes, setNotes] = useState<allNotes>({});
  const repository = new ChromeRepository();

  const getNotes = async () => {
    const notes = await repository.getAllNotes();
    setNotes(notes);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Dashboard allNotes={allNotes} />  
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
