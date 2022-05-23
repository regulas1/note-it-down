import React, { ChangeEventHandler, useState } from "react";
import Markdown from "markdown-to-jsx";
import { NotepadSwitch } from "./NotepadSwitch";
import { appendNoteOnActiveUrl, setSessionNote } from "../repository/localStorageRepository";

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
