/*===========================================
=            Home Page Dropdowns            =
===========================================*/

$(function() {
	if($(".home-body").length) {
		$(".home-dropdownContainer button").click(function() {
			
			// Set button to open
			$(this).parent(".home-dropdownContainer").toggleClass("open");
			
			// Toggle the dropdown menu
			var dropdownID = $(this).attr('id');
			$(".home-dropdownMenu[data-dropdown='"+dropdownID+"']").slideToggle('slow');

		});
	}
});
