/*=========================================
=            State Landing Page           =
=========================================*/
/**
 * When the user hovers over the map, highlight the name of the state in the list. Likewise, when the user hovers over the state name in the list, highlight the state on the map.
 */



$(function() {
	if($(".statesLanding-mainContent").length) {
		// Hover on list
		$( ".stateLink" ).hover(
		  function() {
		  	var stateID = $(this).data("state");
		    highlightState(stateID, "highlight");
		  }, function() {
		    var stateID = $(this).data("state");
		    highlightState(stateID, "unhighlight");
		  }
		);

		// Hover on map
		$("#map path, #map g").hover(
			function() {
			  	var stateID = $(this).attr("id");
			    highlightList(stateID, "highlight");
			    highlightState(stateID, "highlight");
			}, function() {
			    var stateID = $(this).attr("id");
			    highlightList(stateID, "unhighlight");
			    highlightState(stateID, "unhighlight");
			}
		);

		// Click on map and go to state page
		$("#map path, #map g").click(function(){
			var stateID = $(this).attr("id");
			location.href = "/states/"+stateID;
		});
	}
});

function highlightState(stateID, action) {
	var state = $("path#"+stateID+", #"+stateID+" path");
	if(action == "highlight") {
		state.addClass("active");
	}
	else {
		state.removeClass("active");
	}
}

function highlightList(stateID, action) {
	var stateLink = $("a[data-state='"+stateID+"']");
	if(action == "highlight") {
		stateLink.addClass("active");
	}
	else {
		stateLink.removeClass("active");
	}
}