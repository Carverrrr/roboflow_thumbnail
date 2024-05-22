
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  if (request === 'ping') {
    sendResponse('pong');
  }
});
