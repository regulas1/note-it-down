import { nanoid } from "nanoid";
import { BlurHelper } from "./blurHelper";

export class Notepad {
   private notepadElement;
   private notepadId = nanoid();
   private blurHelper = new BlurHelper(8, this.notepadId);

   constructor() {
      this.notepadElement = document.createElement("div");
      this.notepadElement.setAttribute("id", this.notepadId);
      this.notepadElement.style.position = "fixed";
      this.notepadElement.style.top = "50%";
      this.notepadElement.style.left = "50%";
      this.notepadElement.style.transform = "translate(-50%, -50%)";
      this.notepadElement.style.background = "#000";
      this.notepadElement.style.height = "50%";
      this.notepadElement.style.width = "50%";
   }

   private renderNotepad() {
      document.body.appendChild(this.notepadElement);
   }

	public toggleNotepad() {
		const notepadElement = document.getElementById(this.notepadId);
		if (notepadElement) {
         this.blurHelper.unBlurBody();
			notepadElement.remove();
		} else {
         this.blurHelper.blurBody();
			this.renderNotepad();
		}
	}
}
