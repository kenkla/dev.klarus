/**
 * @author Ken Klatt k@zva.us
 */

$(document).ready(function($) { 
		
	/*--------------------------------------------------------------------------------
	Weather Conditions by ZipCode
	----------------------------------------------------------------------------------*/
	
	$('#zipcode-form').on('submit', function(event, zipcode) {
		event.preventDefault();
		var form = $(this);
		$.ajax({ 
			url : "http://api.wunderground.com/api/7e689921a84c4077/geolookup/conditions/q/"+form.zipcode+".json", 
			type: "POST",
			data: $('#zipcode-form').serialize(),
			dataType : "jsonp", 
			success : function(parsed_json) { 
				var location = parsed_json['display_location']['city']; 
				var temperature = parsed_json['current_temperature']['temperature_string'];
				var conditions = parsed_json['current_conditions']['weather'];
				var windSpeed = parsed_json['wind_speed']['wind_mph'];
				var windDirection = parsed_json['wind_direction']['wind_dir'];
				var humidity = parsed_json['humidity']['relative_humidity'];
				var weatherIcon = parsed_json['weather_icon']['icon'];
				var result = $("<div class='weather-report'></div>");
				form.remove();
				result.append("<h3>Current Conditions for "+city+"</h3>");
				result.append("img class='weather-icon' src='"+weatherIcon+"' alt='icon'><p class='weather-conditions'>"+conditions+"</p>");
				result.append("<ul class='weather-details'><li>Temperature: "+temperature+"</li>");
				result.append("<li>Wind: "+windSpeed+" "+windDirection+"</li>");
				result.append("<li>Humidity: "+humidity+"</li></ul>");
				$('.weather').hide().html(result).fadeIn();
			} 
		}); 
	});
	

});