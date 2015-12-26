var defaultSize = 10;

$(document).ready(function() {
	makeGrid(defaultSize);
	etch();
});

$('#change').click(function() {
	$('#container').empty();
	var newLength = prompt("How many rows/columns do you want, from 1 to 64?");
	if (isNaN(newLength) === true) {
		alert("Try again");
	}
	else if (newLength >= 1 && newLength <= 64) {
		makeGrid(newLength);
	}
	else {alert("Try again")}
	etch();
});

$('#reset').click(function() {
	$('#container').empty();
	makeGrid(defaultSize);
	etch();
});

$('#clean').click(function() {
	clean();
});

function makeGrid(num) {
	var containerSize = $('#container').width();
	var pixelSize = (containerSize - num) / num;
	for (var i = 1; i <= num; i++) {
		for (var j = 1; j <= num; j++) {
			$('#container').append('<div class="pixel"></div>');
		}
	}
	$('.pixel').css({'width': pixelSize, 'height': pixelSize})
};

function etch() {
	var opacity = 0;
	$('.pixel').on('mouseenter', function() {
		$(this).addClass('hover');
	});
};

function clean() {
	$('.pixel').removeClass('hover');
};