$(function() {
	/*==============================================
	=            Post Listing Filtering            =
	==============================================*/
	// Get and Set Active Filter if we have one in the URL
	var hash = window.location.hash.replace("#", "");
	var activeSubsector = hash.substr(hash.indexOf('subsector=')).split('&')[0].split('=')[1];
	var activeSector = $(".post-listing").data("sector");
	if(activeSubsector) {
		switchActiveSubsector(activeSector, activeSubsector); // Switch active subsector to show those posts
	}

	$(".subsector-link").click(function() {
		var activeSector = $(this).data("sector"); // Get active sector
		var activeSubsector = $(this).data("show-subsector"); // Get active subsector
		switchActiveSubsector(activeSector, activeSubsector); // Switch active subsector to show those posts
	});

	function switchActiveSubsector(activeSector, activeSubsector) {
		$(".post-listing[data-sector='"+activeSector+"'] .active").removeClass("active").addClass("hidden");
		$(".post-listing[data-sector='"+activeSector+"'] [data-subsector='"+activeSubsector+"']").removeClass("hidden").addClass("active");
	}
	
	
	/*=====  End of Post Listing Filtering  ======*/
	
});