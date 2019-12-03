chrome.browserAction.onClicked.addListener(function(tab) {
    var result = document.getElementsByClassName("panel-btns");

	alert(result.innerHTML);

});