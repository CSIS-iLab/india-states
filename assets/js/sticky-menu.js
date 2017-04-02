$(function() {
	if($(".isSticky").length) {
		console.log("do stuff");
		
		var windw = this;
		var headerHeight = $(".site-header").height();
		var followToPos = $(".isSticky").offset().top - headerHeight;
		var tocPadding = $(".isSticky").parent(".tableOfContents").offset().top - $(".isSticky").offset().top;
		var stopFollowPos = $(".isSticky").parent(".tableOfContents").height();
		var stickyWidth = $(".isSticky").width();

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

		// Increase body padding if we have a fixedMenu
		// if($('.tableOfContents.fixedMobile').length) {
		// 	var tocHeight = $('.tableOfContents.fixedMobile').outerHeight();
		// 	var newPadding = tocHeight + headerHeight;
		// 	$("body").css("padding-top",newPadding+"px");
		// 	$(".tableOfContents.fixedMobile").css("top",headerHeight+"px");
		// }
	}

	// Drop down menu for mobile
	if($(".tableOfContents-dropdown").length) {
		$('.tableOfContents-dropdown').on('change', function () {
	        var url = $(this).val(); // get selected value
			window.location = url; // redirect

			if(url != "#") {
				$(".tableOfContents-instructions").css("display","inline-block");
			}
			else {
				$(".tableOfContents-instructions").hide();
			}
	    });
	}
});