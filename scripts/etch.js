$(document).ready(function() {
	var $gridLength = $('#container').css('width')
	function makeGrid(num) {
		for (var i = 1; i <= num; i++) {
			for (var j = 1; j <= num; j++) {
				$('#container').append('<div class="pixel"></div>')
			};
		};
	};
	makeGrid(10);
	$('.pixel').on('mouseenter', function() {
		$(this).addClass('hover');
	})
});