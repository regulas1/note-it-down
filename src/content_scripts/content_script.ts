import { nanoid } from "nanoid";
import { toggleNotepad } from "../modules/notepadService";
import { ChromeRepository } from "../repository/chromeStorageRepository";
import { Commands } from "../type";
import { sendResponseType } from "./types";

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
