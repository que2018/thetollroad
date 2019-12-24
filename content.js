
jQuery(document).ready(function() {
	jQuery("table tr td:nth-child(3)").each(function() {
		var LP = jQuery(this).text().trim();
		console.log(LP);

		if(LP != "58572T2") {
			//jQuery(this).css("background-color", "yellow");
		
			jQuery(this).closest('tr').remove();
		} 		
	}); 
});
