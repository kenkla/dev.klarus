/**
 * @author Ken Klatt k@zva.us
 */

	/*-------------------------------------------------------------------------------------
	 Currency Converter 
	 --------------------------------------------------------------------------------------*/
	
	/* Populate Currency dropdown lists */
	
	function populateCurrency() {
		$.ajax({
			url: 'https://currencyconverter.p.mashape.com/availablecurrencies',
			type: 'GET',
			datatype: 'jsonp',
			success: function(data){
    			JSON.stringify(data);
    			var html = '';
    			var len = data.length;
    			for (var i = 0; i< len; i++) {
        			html += '<option value="' + data[i].id + '">' + data[i].currency + '</option>';
    			}
    			$('.select.currency').append(html);
			},
			error: function(err) {	alert(err); },
			beforeSend: function(xhr) { xhr.setRequestHeader("X-Mashape-Authorization", "yDC5pbvEMamshnWnN7w7ijDjBPSEp1ftWnFjsnmkheXcPY8VAw"); }
		});
	}
	
	$('#convert-from').change(populateCurrency());
	$('#convert-to').change(populateCurrency());
	