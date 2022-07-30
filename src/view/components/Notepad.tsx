import React, { ChangeEventHandler, useState } from "react";
import Markdown from "markdown-to-jsx";
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
   
   const markdownView = <Markdown>{notes}</Markdown>;

   const editorView = <textarea autoFocus value={notes} id="notepad-text" onChange={processNotes} />

   const view = renderMarkdown ? markdownView : editorView;

   return (
      <div className="notepad">
         { view } 
      </div>
   );
};