$(document).ready(function() {
	$('img.thumbnail').on('click', function() {
		var src = $(this).attr('src');
		var fullImg = '<img src = "' + src.replace("200", "741") + '" /><p>Click to close.</p>'

		$('div#pictureViewer').addClass("shown");
		$('div#pictureViewer').html(fullImg);
		$('div#pictureViewer').on('click', function() {
			$('div#pictureViewer').removeClass("shown");
		});
	});
});
