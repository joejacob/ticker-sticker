var currIcon = 0;

// updates icon image
function updateIcon() {
	chrome.browserAction.setIcon({path: "./../icons/ticker_sticker_" + currIcon + ".png"});
	currIcon = (currIcon + 1) % 2;

}

// turning extension on and off
chrome.browserAction.onClicked.addListener(function(tab) {
	updateIcon();
});

updateIcon();