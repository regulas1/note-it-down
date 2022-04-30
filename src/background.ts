const color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => { 
  chrome.storage.sync.set({ color });
  console.log('Color set to: ', color);
});