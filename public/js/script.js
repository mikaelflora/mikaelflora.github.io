$(window).scroll(function() {
	if ($(document).scrollTop() > 64) {
		$('nav').removeClass('bg-transparent');
		$('nav').addClass('bg-dark');
	} else {
		$('nav').removeClass('bg-dark');
		$('nav').addClass('bg-transparent');
	}
});