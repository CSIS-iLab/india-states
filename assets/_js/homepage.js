import $ from 'jquery'
/*===========================================
=            Home Page Dropdowns            =
===========================================*/

const Homepage = () => {
  if ($('.home-body').length) {
    $('.home-dropdownContainer button').click(function() {
      let dropdownID = $(this).attr('id')

      // Set button to open
      $('#' + dropdownID)
        .closest('.home-dropdownContainer')
        .toggleClass('open')

      // Toggle the dropdown menu
      $(".home-dropdownMenu[data-dropdown='" + dropdownID + "']").slideToggle()
    })

    // If we click anywhere else outside the menu, close it
    $(document).click(function(event) {
      if (!$(event.target).closest('.home-dropdownContainer').length) {
        if ($('.home-dropdownContainer').hasClass('open')) {
          // toggle the nav list
          $('.home-dropdownContainer .home-dropdownMenu').slideUp()
          $('.home-dropdownContainer').removeClass('open')
        }
      }
    })
  }
}

export default Homepage
