
jQuery(document).ready(function() {
	var total = 0;
	
	var LPS = ["8GGC577", "58558T2"];

	jQuery("table tr td:nth-child(3)").each(function() {
		var LP = jQuery(this).text().trim();

		if(!LPS.includes(LP)) {
			//jQuery(this).css("background-color", "yellow");
		
			jQuery(this).closest('tr').remove();
			
		} else {
			let fee = jQuery(this).closest('tr').find('td').eq(5).html();
			
			let feeRaw = fee.replace('$', '');
			let feePlus = parseFloat(feeRaw) + 1;
			let feeFormat = '$' + feePlus;
			
			total+= feePlus;
			
			jQuery(this).closest('tr').find('td').eq(5).html(feeFormat);
		}		
	}); 
	
	total = total.toFixed(2);
	
	let totalRow = "<tr><td colspan='6' style='font-size: 18px; font-weight: bold; text-align: right; padding-right: 20px;'>$" + total + "</td></tr>"

	jQuery("table tbody").append(totalRow);
});
