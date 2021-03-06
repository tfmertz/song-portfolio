//create an overlay for when the about link is clicked

//make the overlay div and close button
var $overlay = $('<div id="overlay"></div>');
var $close = $('<a href="#" id="close-overlay">Close</a>');

//create a content div to hold the html we load in using ajax
var $overlayContent = $('<div id="overlay-content" class="group"></div');

//append button and content to overlay
$overlay.append($close);
$overlay.append($overlayContent);

//append it to the body, css hides it
$("body").append($overlay);

//when the about or contact link is clicked
$(".overlay").click(function(event){
	//prevent the page from going to the about.html or contact.html
	event.preventDefault();

	//clear out any existing html
	$("#overlay-content").html("");

	//figure out which link we pushed
	if($(this).attr("href") === "about.html")
	{
		//load the about html
		$("#overlay-content").load("about-overlay.html");
	} else {
		$("#overlay-content").load("contact-overlay.html");
	}
	//show the overlay
	$overlay.show();
});

//if the close button is pushed
$("#close-overlay").click(function(){
	//hide the overlay
	$overlay.hide();

});