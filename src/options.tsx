import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Notes } from "./components/Notes";
import { allNotes, getAllNotes } from "./repository/chromeStorageRepository";

const Options = () => {
  const [allNotes, setNotes] = useState<allNotes>({});

  useEffect(() => {
    const getNotes = async () => {
      setNotes(await getAllNotes());
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
