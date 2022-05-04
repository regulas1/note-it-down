import { BlurHelper } from "./blurHelper";

const blurHelper = new BlurHelper("blur(4px)");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		if (request.command === "blurBody") {
			blurHelper.toggleBlur();
			sendResponse(200);
		}
		return true;
	}
);