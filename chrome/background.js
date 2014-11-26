chrome.webNavigation.onDOMContentLoaded.addListener(function(obj) {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});

