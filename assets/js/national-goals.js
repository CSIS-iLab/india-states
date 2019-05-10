$(function() {
  // on page load...
  moveProgressBar();
  // on browser resize...
  $(window).resize(function() {
    moveProgressBar();
  });

  // SIGNATURE PROGRESS

  function moveProgressBar() {
    $(".progress-wrap").each(function() {

      var allData = $(".progress-wrap").map(function() {
        return $(this).data("progress-percent");
      });
    
      var max = Math.max( ...allData, 100 )
      // console.log($(this).data("progress-percent"))
      var percent = $(this).data("progress-percent")  / max
      var getProgressWrapWidth = $(this).width();
      var progressTotal = percent * getProgressWrapWidth;
      calculateWidth(progressTotal)
      var animationLength = 2500;
      var totalWidth

      function calculateWidth (progressTotal) {
        if (progressTotal > 500) {
          totalWidth = progressTotal - 150
        } else {
          totalWidth = progressTotal
        }
      }

      // on page load, animate percentage bar to data percentage length
      // .stop() used to prevent animation queueing
      $(this)
        .children(".progress-bar")
        .stop()
        .animate(
          {
            width: totalWidth
          },
          animationLength
        );
    });
  }

  var tooltips = document.querySelectorAll(".tip-content");

  window.onmousemove = function(e) {
    var x = e.clientX + 20 + "px",
      y = e.clientY + 20 + "px";
    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].style.top = y;
      tooltips[i].style.left = x;
    }
  };
});
