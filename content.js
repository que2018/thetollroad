

if (jQuery) {  
		jQuery(document).ready(function(){
			
			console.log("jquery is loaded ... ");

			jQuery("div").each(function() {
				alert("dd");
			});
		});
	} else {
		console.log("jquery is not loaded ... ");
	}