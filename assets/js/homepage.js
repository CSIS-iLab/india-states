/*===========================================
=            Home Page Dropdowns            =
===========================================*/

$(function() {
	if($(".home-body").length) {
		$(".home-dropdownContainer button").click(function() {
			
			var dropdownID = $(this).attr('id');

			// Set button to open
			$("#"+dropdownID).closest(".home-dropdownContainer").toggleClass("open");
			
			// Toggle the dropdown menu
			$(".home-dropdownMenu[data-dropdown='"+dropdownID+"']").slideToggle('slow');

		});

		// If we click anywhere else outside the menu, close it
		$(document).click(function(event) { 
		    if(!$(event.target).closest('.home-dropdownContainer').length) {
		    	if($('.home-dropdownContainer').hasClass('open')) {
			        // toggle the nav list
			        $('.home-dropdownContainer .home-dropdownMenu').slideUp('slow');
			        $('.home-dropdownContainer').removeClass('open');
		    	}
		    }        
		});
	}
});
