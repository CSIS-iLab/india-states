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

      var max = 0;
      findMax();

      function findMax() {
        var currentNumber;
        
        // Iterate through allData
        for (var i = 0; i < allData.length; i++) {
          currentNumber = allData[i];

          if (currentNumber > max) {
            max = currentNumber;
          };
        };
      };

      var percent = $(this).data("progress-percent") / max;
      var getProgressWrapWidth = $(this).width();
      var progressTotal = percent * getProgressWrapWidth;
      calculateWidth(progressTotal);
      var animationLength = 2500;
      var totalWidth;

      function calculateWidth(progressTotal) {
        if (progressTotal > 500) {
          totalWidth =
            window.innerWidth > 1000 ? progressTotal - 150 : progressTotal - 50;
        } else {
          totalWidth = progressTotal;
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
