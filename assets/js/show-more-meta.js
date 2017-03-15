$(function() {
	// Show More Meta
	$(".post-articleShowMoreMeta img").click(function() {
		var postID = $(this).parent(".post-articleShowMoreMeta").data("post");

		// Hide More Icon & Show Less Icon
		$(this).hide("fast");
		$(this).siblings().show("fast");
		$(".post-articleExtraMetaIndicator[data-post='"+postID+"']").toggle("fast");
		$(".post-articleExtraMeta[data-post='"+postID+"']").toggle("fast");

		var metaDisplayProp = $(".post-articleExtraMeta[data-post='"+postID+"']").css("display");

		if(metaDisplayProp == "block") {
			$(".post-articleExtraMeta[data-post='"+postID+"']").css("display","inline");
		}
	});
	// $(".showExtraMeta").click(function() {
	// 	var postID = $(this).data("post");

	// 	// Hide More Icon & Show Less Icon
	// 	$(this).hide("slow");
	// 	$(".post-articleExtraMetaIndicator[data-post='"+postID+"']").hide("slow");
	// 	$(".post-articleShowMoreMeta.hideExtraMeta[data-post='"+postID+"']").show("slow");
	// 	$(".post-articleExtraMeta[data-post='"+postID+"']").animate( {"display":"inline"}, "slow");
	// });

	// // Show Less Meta
	// $(".hideExtraMeta").click(function() {
	// 	var postID = $(this).data("post");

	// 	// Hide More Icon & Show Less Icon
	// 	$(this).hide("slow");
	// 	$(".post-articleExtraMetaIndicator[data-post='"+postID+"']").show("slow");
	// 	$(".post-articleShowMoreMeta.showExtraMeta[data-post='"+postID+"']").show("slow");
	// 	$(".post-articleExtraMeta[data-post='"+postID+"']").hide("slow");
	// });
});