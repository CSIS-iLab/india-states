/*===================================
=            Breadcrumbs            =
===================================*/
/**
 * If breadcrumbs has class "useExtended", remove it and add class "notExtended" when the header has scrolled past a certain height.
 */

$(function() {
	if($(".breadcrumbs-extended").length) {
		var breadcrumbs = $(".header-breadcrumbsContainer");
		var extendedBreadcrumbs = $(".breadcrumbs-extended");
		var headerHeight = $(".site-header").height();
		var extendedBreadcrumbsHeight = extendedBreadcrumbs.outerHeight();
		var bottomPos = extendedBreadcrumbsHeight;

		$(document).scroll(function(){
	        if($(this).scrollTop() >= bottomPos && breadcrumbs.hasClass("useExtended")) {
	            breadcrumbs.removeClass("useExtended").addClass("notExtended");
	        }
	        else if($(this).scrollTop() <= bottomPos && breadcrumbs.hasClass("notExtended")) {
	        	breadcrumbs.removeClass("notExtended").addClass("useExtended");
	        }
	    });
	}
});