import React, { ChangeEventHandler, useState } from "react";
import { setSessionNote } from "../helpers";
import "./style/notepad.css"

interface NotepadProps {
   scrollLocation: number
}

export const Notepad = ({scrollLocation}: NotepadProps) => {
   const [notes, setNotes] = useState("");
   const [renderMarkdown, setRenderMarkdown] = useState(false);

   const processNotes: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      const note = event.target.value;
      setSessionNote({
         pageTitle: document.title,
         content: note,
         scrollLocation: scrollLocation
      });
      setNotes(note);
   };
   
   const notepadTextArea = <textarea autoFocus value={notes} id="notepad-text" onChange={processNotes} />

   return (
      <div className="notepad">
         { notepadTextArea } 
      </div>
   );
};