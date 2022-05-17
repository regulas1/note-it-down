import { nanoid } from "nanoid";
import { resposne } from "../types/message";
import { toggleNotepad } from "./notepad";

const notepadId = nanoid();

type sendResponseType = (response: resposne) => void;

chrome.runtime.onMessage.addListener((request, _sender, sendResponse: sendResponseType) => {
		if (request.command === "blurBody") {
			toggleNotepad(notepadId);
			sendResponse({code: 200});
		}
		return true;
	}
);