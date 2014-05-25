$(document).ready(function(){
  'use strict';
  
(function($) {
 
  $.fn.slideShow = function(options) {
	  console.log('started');
	options = $.extend({}, $.fn.slideShow.defaults, options);
	var number = $("#slideshow  img").size(),
		x = options.startimage,
		z = 1;
		
		return setInterval(function () {
		if(x === number) {
			x = 0;
		}
		$("#slideshow  img").eq(x).css('z-index', z);
		z++;
		x++;
	}
	, options.duration);

	};
	   
	  $.fn.slideShow.defaults = {
    'duration': 2000,
	'startimage': 0
  }
  
  }) (jQuery); 
  
  $('#slideshow').slideShow({'duration': 2000});

});