
jQuery(document).ready(function(){
	jQuery("table tr").each(function() {
		jQuery(this).find('td').each (function() {
			console.log(jQuery(this).text());
		});
	});
});
