import React, { FormEventHandler } from "react";
import ReactDOM from "react-dom";
import { Notepad } from "../components/Notepad";
import { ChromeRepository } from "../repository/chromeStorageRepository";
import { note } from "../repository/types";

const repository = new ChromeRepository();

const getActiveUrl = () => {
   return window.location.href;
}

const getNotepadRoot = (notepadId: string) => {
   const notepadRoot = document.createElement("div");
   notepadRoot.style.position = "fixed";
   notepadRoot.style.top = "0";
   notepadRoot.style.left = "0";
   notepadRoot.style.height = "100%";
   notepadRoot.style.width = "100%";
   notepadRoot.style.zIndex = "10000";
   notepadRoot.setAttribute("id", notepadId);
   return notepadRoot;
};

const getScrollLocation = () => {
   return document.documentElement.scrollTop;
}

const setScrollLocation = (scrollLocation: number) => {
   document.documentElement.scrollTop = scrollLocation;
}

const renderNotepad = (notepadId: string) => {
   document.body.appendChild(getNotepadRoot(notepadId));
   ReactDOM.render(
      <React.StrictMode>
         <Notepad scrollLocation={getScrollLocation()}/>
      </React.StrictMode>,
      document.getElementById(notepadId)
   );
};

const getKeyForSessionNote = () => {
   return "write-that-down-session-note";
};

const getSessionNote = (): note | null => {
   const noteString = sessionStorage.getItem(getKeyForSessionNote());
   if (noteString) {
      return JSON.parse(noteString);
   }
   return null;
};

export const setSessionNote = (note: note) => {
   sessionStorage.setItem(getKeyForSessionNote(), JSON.stringify(note));
};

export const resetSessionNote = () => {
   setSessionNote({
      pageTitle: "",
      content: "",
      scrollLocation: 0,
   });
};

const switchOffNotepadAndSaveNote = async (notepadElement: HTMLElement) => {
   const sessionNote = getSessionNote();
   if (sessionNote?.content) {
      await repository.addNoteToUrl(getActiveUrl(), sessionNote);
   }
   notepadElement.remove();
   resetSessionNote();
}

const switchOnNotepad = (notepadId: string) => {
   renderNotepad(notepadId);
}

export const toggleNotepad = async (notepadId: string) => {
   const notepadElement = document.getElementById(notepadId);
   if (notepadElement) {
      await switchOffNotepadAndSaveNote(notepadElement);
   } else {
      switchOnNotepad(notepadId);
   }
};
