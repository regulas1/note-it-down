import { nanoid } from "nanoid";

export class Notepad {
   private notepadElement;
   // private notepadId = nanoid();
   private notepadId = "notepad";

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
			notepadElement.remove();
		} else {
			this.renderNotepad();
		}
	}
}
