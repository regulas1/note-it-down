import React, { ChangeEventHandler, useState } from "react";
import ReactDOM from "react-dom";
import Markdown from "markdown-to-jsx";
import { NotepadSwitch } from "./NotepadSwitch";
import { setSessionNote } from "../modules/notepadService";
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
         {/* <NotepadSwitch isMarkdownView={renderMarkdown} setRenderMarkdown={setRenderMarkdown} /> */}
         { view } 
      </div>
   );
};