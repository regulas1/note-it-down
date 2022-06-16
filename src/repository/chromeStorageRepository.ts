import { allNotes, note } from "./types";

export class ChromeRepository {
   readonly keyForData = "write-that-down";

   public async getAllNotes(): Promise<allNotes> {
      const notes = await chrome.storage.local.get([this.keyForData]);
      return notes[this.keyForData] || {};
   }

   public async setAllNotes(notes: allNotes): Promise<void> {
      await chrome.storage.local.set({ [this.keyForData]: notes });
   }

   public async getNotesOnUrl(url: string): Promise<note[]> {
      const allNotes = await this.getAllNotes();
      return allNotes[url] || {};
   }
   
   public async addNoteToUrl(url: string, note: note): Promise<void> {
      const notesOnUrl = await this.getNotesOnUrl(url);
      notesOnUrl.push(note);
      await this.setNotesOnUrl(url, notesOnUrl);
   }

   protected async setNotesOnUrl(url: string, notes: note[]): Promise<void> {
      const allNotes = await this.getAllNotes();
      allNotes[url] = notes;
      await this.setAllNotes(allNotes);
   }
}
