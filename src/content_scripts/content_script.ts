import { resposne } from "../types/message";
import { BlurHelper } from "./blurHelper";
import { Notepad } from "./notepad";

const blurHelper = new BlurHelper("blur(4px)");
const notepad = new Notepad();

type sendResponseType = (response: resposne) => void;

chrome.runtime.onMessage.addListener((request, _sender, sendResponse: sendResponseType) => {
		if (request.command === "blurBody") {
			blurHelper.toggleBlur();
			notepad.toggleNotepad();
			sendResponse({code: 200});
		}
		return true;
	}
);