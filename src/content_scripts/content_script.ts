import { nanoid } from "nanoid";
import { toggleNotepad } from "../modules/notepadService";

const notepadId = nanoid();

interface resposne {
	code: number
}

type sendResponseType = (response: resposne) => void;

chrome.runtime.onMessage.addListener((request, _sender, sendResponse: sendResponseType) => {
		if (request.command === "blurBody") {
			toggleNotepad(notepadId);
			sendResponse({code: 200});
		}
		return true;
	}
);