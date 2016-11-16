$(document).ready(function(){
	$(".autoScroller").click(function(){
		var scrollTo = $(this).data('scroll-to');
		var scrollToPosition = $('#' + scrollTo).offset().top;

		// I'm not sure why, but this is the only way it works.
		// Why throuwing the function out of the stack fixes it - is beyond me.
		// Gonna fix it when I'll have a clearer mind.
		setTimeout(function() {
			$("html, body").animate({scrollTop: scrollToPosition}, 900);
		    console.log(scrollToPosition);
		}, 0);
	});
});