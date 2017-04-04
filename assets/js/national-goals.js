$(function() {
    // on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
        $('.progress-wrap').each(function() {
            var getPercent = ($(this).data('progress-percent') / 100);
            var getProgressWrapWidth = $(this).width();
            var progressTotal = getPercent * getProgressWrapWidth;
            var animationLength = 2500;

            // on page load, animate percentage bar to data percentage length
            // .stop() used to prevent animation queueing
            $(this).children('.progress-bar').stop().animate({
                left: progressTotal
            }, animationLength);
        });
    }

    var tooltips = document.querySelectorAll('.tip-content');

    window.onmousemove = function (e) {
        var x = (e.clientX + 20) + 'px',
            y = (e.clientY + 20) + 'px';
        for (var i = 0; i < tooltips.length; i++) {
            tooltips[i].style.top = y;
            tooltips[i].style.left = x;
        }
    };

});