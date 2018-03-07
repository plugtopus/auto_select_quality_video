var avaliableQualitites = ["highres", "hd2160", "hd1440", "hd1080", "hd720", "large", "medium", "small", "tiny", "auto"];

chrome["storage"].sync.get(function (details) {
	for (var i = 0; i < avaliableQualitites.length; i++) {
		if (avaliableQualitites[i] === details.quality) {
			chrome.browserAction.setIcon({
				path: "img/i" + (avaliableQualitites.length - 1 - i) + ".png"
			}, function () {});
		}
	}
});