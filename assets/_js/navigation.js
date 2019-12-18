import $ from 'jquery'

/*=========================================
=            Mobile Navigation            =
==========================================*/

const Navigation = () => {
  // Click on .ss-nav when viewing the mobile version of the site
  let mobileDisplay = $('#nav-toggle').css('display')
  if (mobileDisplay != 'none') {
    // Add active class to hamburger icon
    $('#nav-toggle').click(function() {
      $(this).toggleClass('active')
    })

    // Disable the dropdown menu on mobile
    $('.ss-nav > a').click(function(e) {
      e.preventDefault()
      $(this)
        .siblings('ul')
        .toggle()
    })

    // Click on overlay to hide menu
    $('.header-navigationSiteOverlay').click(function() {
      $('#toggleMenu').prop('checked', false)
      $('#nav-toggle').toggleClass('active')
    })
  }
  // Update mobileDisplay on window resize
  $(window).resize(function() {
    mobileDisplay = $('#nav-toggle').css('display')
  })
}

export default Navigation
