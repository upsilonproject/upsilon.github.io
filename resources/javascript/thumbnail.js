$(document).ready(function() {
	$('img.thumbnail').on('click', function() {
		var src = $(this).attr('src');
		var alt = $(this).attr('alt');
		var fullImg = '<img src = "' + src.replace("200", "741") + '" /><p>' + alt + '</p>'

		$('div#pictureViewer').addClass("shown");
		$('div#pictureViewer').html(fullImg);
		$('div#pictureViewer').on('click', function() {
			$('div#pictureViewer').removeClass("shown");
		});
	});
});
