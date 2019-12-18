import $ from 'jquery'

const PostListing = () => {
  /*==============================================
	=            Post Listing Filtering            =
	==============================================*/
  // Get and Set Active Filter if we have one in the URL
  let hash = window.location.hash.replace('#', '')
  let activeSubsector = hash
    .substr(hash.indexOf('subsector='))
    .split('&')[0]
    .split('=')[1]
  let activeSector = $('.post-listing').data('sector')
  if (activeSubsector) {
    switchActiveSubsector(activeSector, activeSubsector) // Switch active subsector to show those posts
  }

  $('.subsector-link').click(function() {
    let activeSector = $(this).data('sector') // Get active sector
    let activeSubsector = $(this).data('show-subsector') // Get active subsector
    switchActiveSubsector(activeSector, activeSubsector) // Switch active subsector to show those posts
  })

  function switchActiveSubsector(activeSector, activeSubsector) {
    $(".post-listing[data-sector='" + activeSector + "'] .active")
      .removeClass('active')
      .addClass('hidden')
    $(
      ".post-listing[data-sector='" +
        activeSector +
        "'] [data-subsector='" +
        activeSubsector +
        "']"
    )
      .removeClass('hidden')
      .addClass('active')
  }

  /*=====  End of Post Listing Filtering  ======*/
}

export default PostListing
