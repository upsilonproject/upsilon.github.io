$(document).ready(function() {
	$('img.thumbnail').on('click', function() {
		var src = $(this).attr('src');
		var fullImg = '<img src = "' + src + '" />'

		$('div#pictureViewer').addClass("shown");
		$('div#pictureViewer').html(fullImg);
		$('div#pictureViewer').on('click', function() {
			$('div#pictureViewer').removeClass("shown");
		});
	});
});
