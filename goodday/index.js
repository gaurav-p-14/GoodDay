console.log("Ready to Start a Good Day?")

window.onload

chrome.runTime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
console.log(message.txt);
}