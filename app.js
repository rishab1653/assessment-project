$(function() {
$('#convert').on('click', function() {
	var fromVal = $('#fromVal').val();
	$('#content').find('h3').remove();
	
	$('#content').append('<p>Loading currency exchange rates...</p>');

	if (isNaN(fromVal) || fromVal < 0) {
		$('#toVal').val("Invalid data input");
	} else {
		$.ajax( {
			url: 'http://data.fixer.io/api/latest?access_key=1996a2713ffc5b554959d8b5d1c78002',
	
			type: 'get',
			cache: false,
			success: function(data) {
				
				$(data.rates).each(function(index, value) {
					var rate1;
					var convertFrom = $('#convertFrom').val();
					switch(convertFrom) {
						case 'AUD' : rate1 = value.AUD; break;
						case 'BGN' : rate1 = value.BGN; break;
						case 'CAD' : rate1 = value.CAD; break;
						case 'CNY' : rate1 = value.CNY; break;
						case 'EUR' : rate1 = 1; break;
						case 'GBP' : rate1 = value.GBP; break;
						case 'JPY' : rate1 = value.JPY; break;
						case 'RUB' : rate1 = value.RUB; break;
						case 'USD' : rate1 = value.USD; break;
						
					}

					var rate2;
					var convertTo = $('#convertTo').val();
					switch(convertTo) {
						case 'AUD' : rate2 = value.AUD; break;
						case 'BGN' : rate2 = value.BGN; break;
						case 'CAD' : rate2 = value.CAD; break;
						case 'CNY' : rate2 = value.CNY; break;
						case 'EUR' : rate2 = 1; break;
						case 'GBP' : rate2 = value.GBP; break;
						case 'JPY' : rate2 = value.JPY; break;
						case 'RUB' : rate2 = value.RUB; break;
						case 'USD' : rate2 = value.USD; break;
						
						
					}

					var result = fromVal * (rate2/rate1);
					result = Number(result).toFixed(2);
					fromVal = Number(fromVal).toFixed(2);

					$('#toVal').val(result);
					var msg = fromVal + ' ' + convertFrom + ' = ' + result + ' ' + convertTo; 
					
					
					$('#content').append('<h3>' + msg + '</h3>');
					
				});
			}
		});
	}
	
	$('#content').find('p').remove();


	
});




$('#clear').on('click', function() {
		$('#fromVal').val("");
		$('#toVal').val("");
		$('#content').find('h3').remove();
 });
	

});







