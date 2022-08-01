import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Dashboard } from "../components/Dashboard";
import { ChromeRepository } from "../../modules/chromeStorageRepository";
import { allNotes } from "../../modules/types";

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
