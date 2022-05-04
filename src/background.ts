chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(
     tab.id ? tab.id : -1,
     { command: "blurBody" }
  );
});