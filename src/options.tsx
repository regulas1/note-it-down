import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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

  let key = 0;
  const siteList = Object.entries(allNotes).map(([site, notes]) => {
    key++;
    return <Notes key={key} site={site} notes={notes}/>
  });

  return (
    <>
      {siteList}
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
