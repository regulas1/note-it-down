import { resposne } from "../types/message";
import { BlurHelper } from "./blurHelper";
import { Notepad } from "./notepad";

const notepad = new Notepad();

type sendResponseType = (response: resposne) => void;

chrome.runtime.onMessage.addListener((request, _sender, sendResponse: sendResponseType) => {
		if (request.command === "blurBody") {
			notepad.toggleNotepad();
			sendResponse({code: 200});
		}
		return true;
	}
);