$(function() {
  if ($(".isSticky").length) {
    var windw = this;

    var headerHeight = $(".site-header").outerHeight() + 32;

    $.fn.followTo = function() {
      var $this = this;

      var stickyWidth = $this.width();

      var thisBox = $this[0].getBoundingClientRect();
      var tocBox = $this.parent(".tableOfContents")[0].getBoundingClientRect();

      var tocTop = tocBox.top + window.scrollY - headerHeight;
      var tocBottom = tocBox.bottom + window.scrollY - headerHeight;

      if (window.scrollY > tocTop && window.scrollY < tocBottom) {
        $this.css({
          position: "fixed",
          top: headerHeight,
          width: stickyWidth
        });

        tocTop = tocBox.top + window.scrollY - headerHeight;
        tocBottom = tocBox.bottom + window.scrollY - headerHeight;
      }

      var bottom = thisBox.bottom + window.scrollY;
      var top = tocBox.bottom + window.scrollY - headerHeight - $this.height();

      $(window).scroll(function(e) {
        if (window.scrollY > tocTop && window.scrollY < bottom) {
          $this.css({
            position: "fixed",
            top: headerHeight,
            width: stickyWidth
          });
        } else if (window.scrollY < tocTop || window.scrollY > top) {
          $this.css({
            position: "initial",
            top: 0
          });
        }
      });
    };

    $(".isSticky").each(function() {
      $(this).followTo();
    });

    // Increase body padding if we have a fixedMenu
    // if($('.tableOfContents.fixedMobile').length) {
    // 	var tocHeight = $('.tableOfContents.fixedMobile').outerHeight();
    // 	var newPadding = tocHeight + headerHeight;
    // 	$("body").css("padding-top",newPadding+"px");
    // 	$(".tableOfContents.fixedMobile").css("top",headerHeight+"px");
    // }
  }

  // Drop down menu for mobile
  if ($(".tableOfContents-dropdown").length) {
    $(".tableOfContents-dropdown").on("change", function() {
      var url = $(this).val(); // get selected value
      window.location = url; // redirect

      if (url != "#") {
        $(".tableOfContents-instructions").css("display", "inline-block");
      } else {
        $(".tableOfContents-instructions").hide();
      }
    });
  }
});
