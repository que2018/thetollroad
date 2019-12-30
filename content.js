
jQuery(document).ready(function() {
	var total = 0;
	
	var LPS = [
		"AF53X61", 
		"AF55D41",
		"AF54V47", 
		"AF56B77", 
		"AF71Y88", 
		"AF72A22", 
		"AF72M94", 
		
		"58433T2", 
		"58558T2", 
		"58544T2", 
		"58502T2", 
		"66168T2", 
		"66587T2", 
		"58572T2"	
	];

	jQuery("table tr td:nth-child(3)").each(function() {
		var LP = jQuery(this).text().trim();

		if(!LPS.includes(LP)) {
			//jQuery(this).css("background-color", "yellow");
		
			jQuery(this).closest('tr').remove();
			
		} else {
			let fee = jQuery(this).closest('tr').find('td').eq(5).html();
			
			let feeRaw = fee.replace('$', '');
			let feePlus = parseFloat(feeRaw) + 1;
			let feeFormat = '$' + feePlus.toFixed(2);
			
			total+= feePlus;
			
			jQuery(this).closest('tr').find('td').eq(5).html(feeFormat);
		}		
	}); 
	
	total = total.toFixed(2);
	
	let totalRow = "<tr><td colspan='6' style='font-size: 18px; font-weight: bold; text-align: right; padding-right: 20px;'>$" + total + "</td></tr>"

	jQuery("table tbody").append(totalRow);
});
