import React, { FormEventHandler } from "react";
import ReactDOM from "react-dom";
import { blurBodyExceptNotepad, unBlurBody } from "./blurHelpers";
import { Notepad } from "../components/Notepad";

const getNotepadRoot = (notepadId: string) => {
   const notepadRoot = document.createElement("div");
   notepadRoot.style.position = "fixed";
   notepadRoot.style.top = "0";
   notepadRoot.style.left = "0";
   notepadRoot.style.height = "100%";
   notepadRoot.style.width = "100%";
   notepadRoot.setAttribute("id", notepadId);
   return notepadRoot;
};

const renderNotepad = (notepadId: string) => {
   document.body.appendChild(getNotepadRoot(notepadId));
   ReactDOM.render(
      <React.StrictMode>
         <Notepad />
      </React.StrictMode>,
      document.getElementById(notepadId)
   );
};

export const toggleNotepad = (notepadId: string) => {
   const notepadElement = document.getElementById(notepadId);
   if (notepadElement) {
      notepadElement.remove();
      unBlurBody();
   } else {
      renderNotepad(notepadId);
      blurBodyExceptNotepad(10, notepadId);
   }
};
