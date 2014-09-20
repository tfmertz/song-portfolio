//create an overlay for when the about link is clicked

//make the overlay div
var $overlay = $('<div id="overlay"></div>');

//append it to the body, css hides it
$("body").append($overlay);

//when the about or contact link is clicked
$(".about").click(function(){
	//prevent the page from going to the about.html
	event.preventDefault();
	//show the overlay
	$overlay.show();

});