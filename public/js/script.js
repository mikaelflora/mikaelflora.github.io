$(window).scroll(function() {
	if ($(document).scrollTop() > 64) {
		$('nav').removeClass('bg-transparent');
		$('nav').addClass('bg-primary');
	} else {
		$('nav').removeClass('bg-primary');
		$('nav').addClass('bg-transparent');
	}
});

$(window).scroll(function () {
	const topSkill = $('#skill').offset().top;
	const bottomSkill = $('#skill').offset().top + $('#skill').outerHeight();
	const topScreen = $(window).scrollTop();
	const bottomScreen = $(window).scrollTop() + $(window).innerHeight();
	if ((bottomScreen > topSkill) && (topScreen < bottomSkill)) {
		$('.left').addClass('fade-in-left');
		$('.down').addClass('fade-in-down');
		$('.right').addClass('fade-in-right');
	}
})