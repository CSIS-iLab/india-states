// $(document).scroll(function() {
//     var y = $(document).scrollTop(), //get page y value 
//         sticky = $(".tableOfContents .isSticky"); // Sticky element
//         stickyThreshold = sticky.offset().top; // Point to start sticking
//     if(y >= stickyThreshold)  {
//     	var topPos = $(".site-header").height();

//         sticky.css({position: "fixed", "top" : topPos});
//     } else {
//         sticky.css({position: "relative", "top" : "initial"});
//     }
// });

$(function() {
	var windw = this;
	var headerHeight = $(".site-header").height();
	var followToPos = $(".isSticky").offset().top - headerHeight;
	var tocPadding = $(".isSticky").parent(".tableOfContents").offset().top - $(".isSticky").offset().top;
	var stopFollowPos = $(".isSticky").parent(".tableOfContents").height();
	var stickyWidth = $(".isSticky").width();

	console.log("stopFollowPos: "+stopFollowPos);

	$.fn.followTo = function ( pos ) {
	    var $this = this,
	        $window = $(windw);
	    
	    $window.scroll(function(e){
	    	currentPos = $(document).height() - ($(window).height() + $('body').scrollTop());
	        if ($window.scrollTop() > pos && currentPos < stopFollowPos) {
	            $this.css({
	                position: 'fixed',
	                top: (headerHeight - tocPadding),
	                width: stickyWidth
	            });
	        } 
	        else if ($window.scrollTop() < pos) {
	            $this.css({
	                position: 'initial',
	                top: 0
	            });
	        }
	        // else if (currentPos > 1640) {
	        // 	$this.css({
	        //         position: 'absolute',
	        //         bottom: 0
	        //     });
	        // }
	    });
	};

	$('.isSticky').followTo(followToPos);
});