import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import ReactDOM from "react-dom";
import Markdown from "markdown-to-jsx";
import { blurBodyExceptNotepad, unBlurBody } from "./blurHelpers";

interface NotepadSwitchProps {
   setRenderMarkdown: React.Dispatch<React.SetStateAction<boolean>>
}

const NotepadSwitch = ({setRenderMarkdown}:NotepadSwitchProps) => {
   const test = () => {
      setRenderMarkdown((prevValue) => !prevValue)
   }

   return (
      <div>
         <button onClick={test}>Hello</button>
      </div>
   )
}

const Notepad = () => {
   const [notes, setNotes] = useState("");
   const [renderMarkdown, setRenderMarkdown] = useState(false);

   const containerStyle: React.CSSProperties = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "#282828",
      height: "50%",
      width: "50%",
      borderRadius: "30px",
      color: "#ebdbb2",
      fontSize: "16px",
      padding: "18px",
      border: "none",
      outline: "none",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "5px"
   };

   const textareaStyle: React.CSSProperties = {
      height: "100%",
      width: "100%",
      background: "inherit",
      color: "inherit",
      border: "none",
      outline: "none"
   }

   const processNotes: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      const notes = event.target.value;
      setNotes(notes);
   };

   if (renderMarkdown) {
      return <div style={containerStyle}> <NotepadSwitch setRenderMarkdown={setRenderMarkdown}/> <Markdown>{notes}</Markdown> </div>
   }

   return <div style={containerStyle}> <NotepadSwitch setRenderMarkdown={setRenderMarkdown}/> <textarea value={notes} style={textareaStyle} onChange={processNotes}/> </div>
};

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
