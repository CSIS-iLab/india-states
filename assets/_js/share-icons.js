import $ from 'jquery'

/*===================================
=            Share Icons            =
====================================*/

const ShareIcons = () => {
  // Print Individual Article
  $('body').on('click', '.share-print.printIndividual', function() {
    // Remove printable class from everything else
    //$(".printable").removeClass("printable");

    // Get the specific printable content
    let printableContent = $(this).parents('.post-articleContainer')

    //$(printableContent).addClass("printable");

    let originalContents = $('.page-content').html()
    let printContents = printableContent.html()
    $('.page-content').html(printContents)
    window.print()
    $('.page-content').html(originalContents)
  })

  // Print Whole Page
  $('body').on('click', '.share-print.printEntire', function() {
    // Remove printable class from everything else
    $('.printable').removeClass('printable')

    // Get the specific printable content
    $('body').addClass('printable')

    window.print()
  })

  // Share on Social Media
  $('body').on('click', '.share-social', function(e) {
    e.preventDefault()
  })

  $('.share-social').hover(
    function() {
      $(this)
        .children('.share-socialContainer')
        .show()
    },
    function() {
      $(this)
        .children('.share-socialContainer')
        .hide()
    }
  )
}

export default ShareIcons
