import { nanoid } from "nanoid";
import { ChromeRepository } from "../../modules/chromeStorageRepository";
import { Commands, sendResponseType } from "../types";
import { toggleNotepad } from "../helpers";

const notepadId = nanoid();

const repository = new ChromeRepository();

const executeTakeNote = async () => {
   await toggleNotepad(notepadId);
};

const executeClearAllData = async () => {
   await repository.setAllNotes({});
}

chrome.runtime.onMessage.addListener(
   async (request, _sender, sendResponse: sendResponseType) => {
      switch (request.command) {
         case Commands.takeNote: {
            executeTakeNote();
            sendResponse({ code: 200 });
            break;
         }
         case Commands.clearAllData: {
            executeClearAllData();
            sendResponse({ code: 200 });
            break;
         }
         default: {
         }
      }
      return true;
   }
);
