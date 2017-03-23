/*===================================
=            Share Icons            =
====================================*/

$(function() {
	// Print Individual Article
	$(".share-print.printIndividual").click(function() {
		// Remove printable class from everything else
		$(".printable").removeClass("printable");

		// Get the specific printable content
		var printableContent = $(this).parents(".post-articleContainer");
		$(printableContent).addClass("printable");
		
		window.print();
	});

	// Print Whole Page
	$(".share-print.printEntire").click(function() {
		// Remove printable class from everything else
		$(".printable").removeClass("printable");

		// Get the specific printable content
		$("body").addClass("printable");
		
		window.print();
	});

	// Share on Social Media
	// $(".share-social").hover(function() {
	// 	$(this).children(".share-socialContainer").show();
	// });
});