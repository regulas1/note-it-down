import { nanoid } from "nanoid";
import { toggleNotepad } from "../modules/notepadService";
import { getAllNotes, setAllNotes } from "../repository/chromeStorageRepository";

const notepadId = nanoid();

interface resposne {
   code: number;
}

type sendResponseType = (response: resposne) => void;

const executeBlurBody = async () => {
   await toggleNotepad(notepadId);
};

const executeClearAllData = async () => {
	await setAllNotes({});	
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
