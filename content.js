
$(document).ready(function() {	
	var noAddonList = [
		'1.74',
		'2.04',
		'2.12',
		'2.49',
		'2.92',
		'3.04',
		'3.11',
		'3.19',
		'3.50',
		'3.59',
		'3.74',
		'3.76',
		'6.62',
		'6.34'
	];

	let lpsStrFix = lpsStr + "";
	let lps = lpsStrFix.split(",");

	var total = 0;
	
	jQuery("table tr td:nth-child(3)").each(function() {
		var lp = $(this).text().trim();

		if(!lps.includes(lp)) {		
			$(this).closest('tr').remove();
			
		} else {
			let fee = $(this).closest('tr').find('td').eq(5).html();
			let feeStr = fee.replace('$', '').trim();
			
			let feeFloat = 0.0;
			
			if(!noAddonList.includes(feeStr)) {	
				feeFloat = parseFloat(feeStr) + 1;
			} else {
				feeFloat = parseFloat(feeStr) ;
			}
			
			total += feeFloat;

			let feeFormat = '$' + feeFloat.toFixed(2);
			
			$(this).closest('tr').find('td').eq(5).html(feeFormat);
		}		
	}); 
	
	total = total.toFixed(2);
	
	let totalRow = "<tr><td colspan='6' style='font-size: 18px; font-weight: bold; text-align: right; padding-right: 20px;'>$" + total + "</td></tr>";

	$("table tbody").append(totalRow);
});
