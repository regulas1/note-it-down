import { request } from "./types/message";

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage<request>(
     tab.id ? tab.id : -1,
     { command: "blurBody" }
  );
});