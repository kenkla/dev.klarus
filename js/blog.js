/**
 * @author Ken Klatt k@zva.us
 */

/* Parse JSON for Blog posts */

$(document).ready(function() { 
	
	$(function(){
		$.getJSON('data/blog.json', function(data) {
			var template = $('#blog-template').html();
			var info = Mustache.to_html(template, data);
			$('#kens-blog').html(info);
			$('#limit').css({height:$('#kens-blog').height()+200});
		});
	});
	
});