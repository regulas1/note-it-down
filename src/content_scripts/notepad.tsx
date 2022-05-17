import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import ReactDOM from "react-dom";
import Markdown from "markdown-to-jsx";
import { blurBodyExceptNotepad, unBlurBody } from "./blurHelpers";

interface notepadProps {
   renderMarkdown: boolean
}

const Notepad = ({renderMarkdown}: notepadProps) => {
   const [notes, setNotes] = useState("");

   const style: React.CSSProperties = {
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
   };

   const processNotes: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      const markdownNotes = event.target.value;
      setNotes(markdownNotes);
   };

   if (renderMarkdown) {
      return <div style={style}> <Markdown>{notes}</Markdown> </div>
   }

   return <textarea style={style} onChange={processNotes}/>
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
         <Notepad renderMarkdown={false}/>
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
