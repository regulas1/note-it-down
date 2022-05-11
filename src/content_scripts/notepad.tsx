import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";
import { blurBodyExceptNotepad, unBlurBody } from "./blurHelpers";

export class Notepad {
   private notepadElement;
   private notepadId = nanoid();
   private blurValue = 8;

   private NotepadComponent = () => {
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
      };

      return <textarea style={style} />;
   };

   constructor() {
      this.notepadElement = document.createElement("div");
      this.notepadElement.style.position = "fixed";
      this.notepadElement.style.top = "0";
      this.notepadElement.style.left = "0";
      this.notepadElement.style.height = "100%";
      this.notepadElement.style.width = "100%";
      this.notepadElement.setAttribute("id", this.notepadId);
   }

   private renderNotepad() {
      document.body.appendChild(this.notepadElement);
      ReactDOM.render(
         <React.StrictMode>
            <this.NotepadComponent />
         </React.StrictMode>,
         document.getElementById(this.notepadId)
      );
   }

   public toggleNotepad() {
      const notepadElement = document.getElementById(this.notepadId);
      if (notepadElement) {
         notepadElement.remove();
         unBlurBody();
      } else {
         this.renderNotepad();
         blurBodyExceptNotepad(this.blurValue, this.notepadId);
      }
   }
}
