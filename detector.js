(function () {
	if (!window.riot) return

	var meta = document.getElementById("riot-detecor")
	meta.content = true

	var done = document.createEvent("Event")
	done.initEvent("ready", true, true)
	meta.dispatchEvent(done)
})();