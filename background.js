
chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
		port.postMessage(msg);
		
		let code = 'var lpsStr = ' + msg + ';';
		
		chrome.tabs.executeScript(null, {
			code: code
		}, function() {
			chrome.tabs.executeScript(null, {file: 'content.js'});
		});	
	});
 })