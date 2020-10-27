$(window).scroll(function() {
	if ($(document).scrollTop() > 64) {
		$('nav').removeClass('bg-transparent');
		$('nav').addClass('bg-primary');
	} else {
		$('nav').removeClass('bg-primary');
		$('nav').addClass('bg-transparent');
	}
});