/**
 * @author Ken Klatt k@kva.us
 */

/* GET @kenkla twitter feed JSON */

$(document).ready(function() { 
	
	$(function(){
		$.getJSON('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=kenkla&count=5', function(data) {
			var template = $('#twitterfeed-template').html();
			var info = Mustache.to_html(template, data);
			$('#kens-twitter').html(info);
			$('#limit').css({height:$('#kens-twitter').height()+200});
		});
	});
	
});