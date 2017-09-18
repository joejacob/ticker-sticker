// track page views
var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-105747972-2']); _gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var currIcon = 0;
updateState(null);

// updates icon image
function updateIcon() {
	currIcon = (currIcon + 1) % 2;
	chrome.browserAction.setIcon({path: "./../icons/ticker_sticker_" + currIcon + ".png"});
}

// turning extension on and off
chrome.browserAction.onClicked.addListener(function(tab) {
	updateState(tab);
});

function updateState(tab) {
	updateIcon();
	chrome.storage.sync.set({'state': currIcon}, function() {
		//message('Toggled on/off');e
	});
}
