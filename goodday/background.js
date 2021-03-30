console.log("background running?");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "Hi, Welcome to GoodDay, a productive online browser extentino that will ensure you get your work done!"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}

