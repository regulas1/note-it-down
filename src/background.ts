const color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => { 
  chrome.storage.sync.set({ color });
  console.log('Color set to: ', color);
});

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command "${command}" called`);
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id ? tab.id : -1},
    func: contentScriptFunc,
    args: ['action'],
  });
});

function contentScriptFunc(name: string) {
  console.log('asdfasdfasdsdf');
  alert(`"${name}" executed`);
}