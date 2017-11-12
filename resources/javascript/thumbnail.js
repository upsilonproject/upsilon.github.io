$(document).ready(function() {
	$('img.thumbnail').on('click', function() {
		var src = $(this).attr('src');
		var fullImg = '<img src = "' + src + '" />'

		$('div#pictureViewer').modal();
		$('div#pictureViewer').html(fullImg);
	});
});
