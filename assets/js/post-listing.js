$(function() {
	/*==============================================
	=            Post Listing Filtering            =
	==============================================*/
	// Get and Set Active Filter if we have one in the URL
	var activeSubsector = window.location.hash.replace("#", "");
	var path = window.location.pathname.split('/');
	var activeSector = path[path.length - 1];
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