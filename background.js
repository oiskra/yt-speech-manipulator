chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url && tab.url.includes("youtube.com/watch")) {
        console.log('tab.url.includes("youtube.com/watch")');
        chrome.scripting.executeScript({
            target: { tabId },
            files: ['content-script.js']
        }).then(() => console.log('script injected'));
    }
})



chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
    console.log(obj)
})




