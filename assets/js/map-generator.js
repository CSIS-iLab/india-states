$(function() {
	var mapJSON = [];
	$("polygon").each(function() {
		var state = $(this).attr("id");
		var points = $(this).attr("points");
		
		mapJSON.push({
			"name": state,
			"path": "M"+points
		});
	})

	$("#mapContainer").text(JSON.stringify(mapJSON));
	console.log(mapJSON);
});