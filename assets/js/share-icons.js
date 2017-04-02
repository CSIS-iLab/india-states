/*===================================
=            Share Icons            =
====================================*/

$(function() {
    // Print Individual Article
    $("body").on("click", ".share-print.printIndividual", function() {
        // Remove printable class from everything else
        //$(".printable").removeClass("printable");

        // Get the specific printable content
        var printableContent = $(this).parents(".post-articleContainer");

        //$(printableContent).addClass("printable");

        var originalContents = $('.page-content').html();
        var printContents = printableContent.html();
        $('.page-content').html(printContents);
        window.print();
        $('.page-content').html(originalContents);

    });

    // Print Whole Page
     $("body").on("click", ".share-print.printEntire", function() {
        // Remove printable class from everything else
        $(".printable").removeClass("printable");

        // Get the specific printable content
        $("body").addClass("printable");

        window.print();
    });

    // Share on Social Media
    $(".share-social").hover(
        function() {
            $(this).children(".share-socialContainer").show();
        }, function() {
            $(this).children(".share-socialContainer").hide();
        }
    );


});
