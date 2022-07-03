import React, { ChangeEventHandler, useState } from "react";
import Markdown from "markdown-to-jsx";
import { NotepadSwitch } from "./NotepadSwitch";
import { setSessionNote } from "../modules/notepadService";
import ReactDOM from "react-dom";

interface NotepadProps {
   scrollLocation: number
}

export const Notepad = ({scrollLocation}: NotepadProps) => {
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
      gap: "5px",
   };

   const textareaStyle: React.CSSProperties = {
      height: "100%",
      background: "inherit",
      color: "inherit",
      border: "none",
      outline: "none",
      resize: "none"
   };

   const processNotes: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      const note = event.target.value;
      setSessionNote(note, scrollLocation);
      setNotes(note);
   };
   
   const markdownView = <Markdown>{notes}</Markdown>;

   const editorView = <textarea value={notes} style={textareaStyle} onChange={processNotes} />

   const view = renderMarkdown ? markdownView : editorView;

   return (
      <div style={containerStyle}>
         <NotepadSwitch isMarkdownView={renderMarkdown} setRenderMarkdown={setRenderMarkdown} />
         { view } 
      </div>
   );
};

// This is here for dev environment. Webpack compiles this and puts into devServe folder.
// This JS is then executed to from notepad.html file.
// Could in future put a conditional around this to check if this is the dev environment and only then have this.
// It wouldn't matter though as this file is never executed but only the exported notepad component is used, so should be fine.
ReactDOM.render(<Notepad scrollLocation={0} />, document.getElementById('notepad'));