import { Commands } from "./type";

export interface request {
	command: string
}

chrome.commands.onCommand.addListener(async (command) => {
   if (command === Commands.takeNoteBackground) {
      const tab = await getCurrentTab();
      chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
         command: Commands.takeNote,
      });
   }
});

export const getCurrentTab = async () => {
   let queryOptions = { active: true, currentWindow: true };
   let [tab] = await chrome.tabs.query(queryOptions);
   return tab;
};
