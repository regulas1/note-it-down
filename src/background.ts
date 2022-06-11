export interface request {
	command: string
}

chrome.commands.onCommand.addListener(async (command) => {
   if (command === "take-note") {
      const tab = await getCurrentTab();
      chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
         command: "blurBody",
      });
   }
});

export const getCurrentTab = async () => {
   let queryOptions = { active: true, currentWindow: true };
   let [tab] = await chrome.tabs.query(queryOptions);
   return tab;
};
