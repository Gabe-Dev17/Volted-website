jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

});
$(document).ready(function() {
	$('#play-video').on('click', function(ev) {
		
	  $("#video")[0].src += "&autoplay=1";
	  ev.preventDefault();
	  window.scrollBy(0, 750);
	
	});
  });
