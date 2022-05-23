interface request {
	command: string
}

chrome.commands.onCommand.addListener(async (command) => {
   if (command === "take-note") {
      console.log(`Command "${command}" triggered`);
      const tab = await getCurrentTab();
      chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
         command: "blurBody",
      });
   }
});

chrome.action.onClicked.addListener((tab) => {
   chrome.tabs.sendMessage<request>(tab.id ? tab.id : -1, {
      command: "blurBody",
   });
});

async function getCurrentTab() {
   let queryOptions = { active: true, currentWindow: true };
   let [tab] = await chrome.tabs.query(queryOptions);
   return tab;
}
