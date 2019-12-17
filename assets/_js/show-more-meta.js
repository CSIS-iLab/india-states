$(function() {
	// Show More Meta
	$("body").on("click", ".post-articleShowMoreMeta img", function() {
		var postID = $(this).parent(".post-articleShowMoreMeta").data("post");

		// Hide More Icon & Show Less Icon
		$(this).hide();
		$(this).siblings().show();
		$(".post-articleExtraMetaIndicator[data-post='"+postID+"']").toggle();
		$(".post-articleExtraMeta[data-post='"+postID+"']").toggle();

		var metaDisplayProp = $(".post-articleExtraMeta[data-post='"+postID+"']").css("display");

		if(metaDisplayProp == "block") {
			$(".post-articleExtraMeta[data-post='"+postID+"']").css("display","inline");
		}
	});
});