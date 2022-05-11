import { nanoid } from "nanoid";
import { blurBodyExceptNotepad, unBlurBody } from "./blurHelpers";

export class Notepad {
   private notepadElement;
   private notepadId = nanoid();
   private blurValue = 8;

   constructor() {
      this.notepadElement = document.createElement("textarea");
      this.notepadElement.setAttribute("id", this.notepadId);
      this.notepadElement.style.position = "fixed";
      this.notepadElement.style.top = "50%";
      this.notepadElement.style.left = "50%";
      this.notepadElement.style.transform = "translate(-50%, -50%)";
      this.notepadElement.style.background = "#282828";
      this.notepadElement.style.height = "50%";
      this.notepadElement.style.width = "50%";
      this.notepadElement.style.borderRadius = "30px";
      this.notepadElement.style.color = "#ebdbb2";
      this.notepadElement.style.fontSize = "16px";
      this.notepadElement.style.padding = "18px";
      this.notepadElement.style.border = "none";
      this.notepadElement.style.outline = "none";
   }

   private renderNotepad() {
      document.body.appendChild(this.notepadElement);
   }

	public toggleNotepad() {
		const notepadElement = document.getElementById(this.notepadId);
		if (notepadElement) {
         unBlurBody();
			notepadElement.remove();
      } else {
         blurBodyExceptNotepad(this.blurValue, this.notepadId);
			this.renderNotepad();
		}
	}
}
