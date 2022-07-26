import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Dashboard } from "./components/Dashboard";
import { Notes } from "./components/Notes";
import { ChromeRepository } from "./repository/chromeStorageRepository";
import { allNotes } from "./repository/types";

const Options = () => {
  const [allNotes, setNotes] = useState<allNotes>({});
  const repository = new ChromeRepository();

  useEffect(() => {
    const getNotes = async () => {
      setNotes(await repository.getAllNotes());
    }

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
