//create an overlay for when the about link is clicked

//make the overlay div
var $overlay = $('<div id="overlay"></div>');
var $close = $('<a href="#" id="close-overlay">Close</a>');

var $about = $('<div id="about"></div');

//append button to overlay
$overlay.append($close);
$overlay.append($about);

//append it to the body, css hides it
$("body").append($overlay);

//when the about or contact link is clicked
$(".overlay").click(function(event){
	//prevent the page from going to the about.html
	event.preventDefault();
	//show the overlay
	$overlay.show();

});

//if the close button is pushed
$("#close-overlay").click(function(){
	//hide the overlay
	$overlay.hide();

});