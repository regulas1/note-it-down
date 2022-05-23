import React, { FormEventHandler } from "react";
import ReactDOM from "react-dom";
import { blurBodyExceptNotepad, unBlurBody } from "../modules/blurService";
import { Notepad } from "../components/Notepad";
import { appendNoteOnActiveUrl, getSessionNote } from "../repository/localStorageRepository";

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
         <Notepad scrollLocation={document.documentElement.scrollTop}/>
      </React.StrictMode>,
      document.getElementById(notepadId)
   );
};

const switchOffNotepad = (notepadElement: HTMLElement) => {
   const sessionNote = getSessionNote();
   if (sessionNote) {
      appendNoteOnActiveUrl(sessionNote.content, sessionNote.scrollLocation);
   }
   notepadElement.remove();
   unBlurBody();
}

const switchOnNotepad = (notepadId: string) => {
   renderNotepad(notepadId);
   blurBodyExceptNotepad(10, notepadId);
}

export const toggleNotepad = (notepadId: string) => {
   const notepadElement = document.getElementById(notepadId);
   if (notepadElement) {
      switchOffNotepad(notepadElement);
   } else {
      switchOnNotepad(notepadId);
   }
};
