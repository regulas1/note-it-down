import { nanoid } from "nanoid";
import { toggleNotepad } from "../modules/notepadService";
import { ChromeRepository } from "../repository/chromeStorageRepository";
import { sendResponseType } from "./types";

const notepadId = nanoid();

const repository = new ChromeRepository();

const executeBlurBody = async () => {
   await toggleNotepad(notepadId);
};

const executeClearAllData = async () => {
   await repository.setAllNotes({});
}

chrome.runtime.onMessage.addListener(
   async (request, _sender, sendResponse: sendResponseType) => {
      switch (request.command) {
         case "blurBody": {
            executeBlurBody();
            sendResponse({ code: 200 });
            break;
         }
         case "clearAllData": {
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
