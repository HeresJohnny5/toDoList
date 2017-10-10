$('ul').on('click', 'li', function() {
	// click() only adds listeners for existing elements
	// on() will add listeners for all potential future elements
	// when a 'li' is clicked inside a 'ul' run this code
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event) {
	// when a 'span' is clicked inside a 'ul' run this code
	$(this).parent().fadeOut('slow', function() {
		$(this).remove();
	});
	
	// this will stop event bubbling; after clicking a span it will not fire the click event on the li
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
	if(event.keyCode === 13) {
		var toDoText = $(this).val();
		
		$(this).val("");
		$('ul').append('<li><span>X</span> ' + toDoText + '</li>');
	}
});