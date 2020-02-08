function injectTheScript() {
    alert();
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "content_scripts.js" });
    });
}
injectTheScript();