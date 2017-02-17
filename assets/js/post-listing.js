$(function() {
	/*==============================================
	=            Post Listing Filtering            =
	==============================================*/
	$(".subsector-link").click(function() {
		var activeSector = $(this).data("sector"); // Get active sector
		var activeSubsector = $(this).data("show-subsector"); // Get active subsector
		$(".post-listing[data-sector='"+activeSector+"'] .active").removeClass("active").addClass("hidden");
		$(".post-listing[data-sector='"+activeSector+"'] [data-subsector='"+activeSubsector+"']").removeClass("hidden").addClass("active");
	});
	
	
	/*=====  End of Post Listing Filtering  ======*/
	
});