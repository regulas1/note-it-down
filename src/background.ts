import { toggleBlur } from "./toggleBlur";

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id ? tab.id : -1},
    func: toggleBlur
  });
});