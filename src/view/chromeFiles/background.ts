import { INote, ISite } from "../../database/types";
import { Note } from "../../modules/Note";
import { Site } from "../../modules/Site";
import { Commands, sendResponseType } from "../types";

export interface request {
	command: string
}

chrome.commands.onCommand.addListener(async (command) => {
   if (command === Commands.takeNoteBackground) {
      const tab = await getCurrentTab();
      chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
         command: Commands.takeNote,
      });
   }
});

chrome.runtime.onMessage.addListener(
   (request, _sender, sendResponse: sendResponseType) => {
      switch (request.command) {
         case Commands.saveNote: {
            const site: ISite = request.site;
            const note: INote = request.note;
            const siteObj = new Site(site.url, site.title);
            const noteObj = new Note(note.note, note.scroll);
            noteObj.addToSite(siteObj).then(() => {
               sendResponse({code : 200});
            });
            break;
         }
      }
      return true;
   }
);

export const getCurrentTab = async () => {
   let queryOptions = { active: true, currentWindow: true };
   let [tab] = await chrome.tabs.query(queryOptions);
   return tab;
};
