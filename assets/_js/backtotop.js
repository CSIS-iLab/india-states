$(function() {
    var offset = $(window).height() / 2;
    var speed = 250;
    var duration = 500;
	   $(window).scroll(function(){
            if ($(this).scrollTop() < offset) {
			     $('.backToTop-container') .fadeOut(duration);
            } else {
			     $('.backToTop-container') .fadeIn(duration);
            }
        });
	$('.backToTop-container').on('click', function(){
		$('html, body').animate({scrollTop:0}, speed);
		return false;
		});
});