(function () {
	var head = document.getElementsByTagName("head")[0]
	if (!head) return

	var script = document.createElement("script")
	script.type = "text/javascript"
	script.src = chrome.extension.getURL("detector.js")

	var meta = document.createElement("meta")
	meta.name = "riot-detecor"
	meta.id = "riot-detecor"
	head.appendChild(meta)
	head.appendChild(script)

	meta.addEventListener("ready", function () {
		var result = meta.content
		if (result) {
			chrome.extension.sendMessage({msg: "riot-detecor", version: result});
		}
	})
})();

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.msg === "open-document") {
			window.open("https://muut.com/riotjs/")
		}
	}
)