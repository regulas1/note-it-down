import { nanoid } from "nanoid";
import { Commands, sendResponseType } from "../types";
import { toggleNotepad } from "../helpers";

const notepadId = nanoid();

const executeToggleNotepad = async () => {
   await toggleNotepad(notepadId);
};

chrome.runtime.onMessage.addListener(
   async (request, _sender, sendResponse: sendResponseType) => {
      switch (request.command) {
         case Commands.toggelNotepad: {
            executeToggleNotepad();
            sendResponse({ code: 200 });
            break;
         }
         default: {
         }
      }
      return true;
   }
);
