$('li').click(function() {
	$(this).toggleClass('completed');
});

$('span').click(function(event) {
	$(this).parent().fadeOut('slow', function() {
		$(this).remove();
	});
	
	// this will stop event bubbling; after clicking a span it will not fire the click event on the li
	event.stopPropagation();
});