/*=========================================
=            Mobile Navigation            =
==========================================*/

$(function() {
	// Click on .ss-nav when viewing the mobile version of the site
	var mobileDisplay = $(".menu-icon").css("display");
	if(mobileDisplay != "none") {
		$(".ss-nav > a").click(function(e) {
			e.preventDefault();
			$(this).siblings("ul").toggle();
		})
	}
	// Update mobileDisplay on window resize
	$(window).resize(function(){
        mobileDisplay = $(".menu-icon").css("display");
    })
});