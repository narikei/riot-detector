console.log("riot-detector background script started!")

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.msg === "riot-detecor") {
			chrome.pageAction.show(sender.tab.id);
			console.log("RiotJS found at:", sender.tab.url)
		}
	}
)

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, {msg: "open-document"})
})