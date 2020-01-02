
jQuery(document).ready(function() {
	//add row
	$("#btn-add").click(function(){
		html  = '<tr>';
		html +=   '<td class="text-left">';
		html +=     '<div class="input-group">';
		html += 	  '<input type="text" class="form-control lp">';
		html += 	  '<div class="input-group-append">';
		html += 	    '<button class="btn btn-danger btn-remove" type="button">remove</button>';
		html += 	  '</div>';
		html += 	'</div>';
		html +=   '</td>';
		html += '</tr>';

		jQuery('#discount tbody').append(html);
		
		$("#btn-filter").attr("disabled", true);

		refreshDeleteBundles();
	});
	
	//add remove
	function refreshDeleteBundles() {
		$('.btn-remove').each(function(i, obj) {
			$(this).click(function(){
				$(this).parents('tr').remove();
			});
			
			$(this).parents('tr').find('input').on('input', function() {
				var enableFilter = true;
				
				$('input').each(function() {
					var lp = $(this).val();
					
					if(!lp) {
						enableFilter = false;
						return false;
					}
				});

				if(enableFilter) {
					$("#btn-filter").attr("disabled", false);
				} else {
					$("#btn-filter").attr("disabled", true);
				}
			});
		});
	}
	
	//filter
	$("#btn-filter").click(function(){
		var lps = [];

		$('input').each(function() {
			var lp = $(this).val();
			lp = lp.trim();
			lps.push(lp);    
		});
		
		let lpsStr = JSON.stringify(lps);
		
		console.log(lpsStr);
						
		var port = chrome.extension.connect({
		  name: "Sample Communication"
		});
		 
		port.postMessage(lpsStr);
		 
		port.onMessage.addListener(function(msg) {
			console.log("message recieved from backend: " + msg);
		});
	});
});







