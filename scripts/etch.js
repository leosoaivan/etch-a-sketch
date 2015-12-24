$(document).ready(function() {
	for (var i = 1; i <= 5; i++) {
		for (var j = 1; j <= 5; j++) {
			$('#grid').append('<div class="pixel"></div>')
		};
	}
});