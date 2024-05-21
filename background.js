chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url && tab.url.includes("youtube.com/watch")) {
        console.log('tab.url.includes("youtube.com/watch")');
        chrome.scripting.executeScript({
            target: { tabId },
            files: ['content-script.js']
        }).then(() => console.log('script injected'));

        chrome.offscreen.createDocument({
            url: 'offscreen/offscreen.html',
            reasons: ['USER_MEDIA'],
            justification: 'reason for needing the document',
        });
    }
})



chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
    console.log(obj)
})




