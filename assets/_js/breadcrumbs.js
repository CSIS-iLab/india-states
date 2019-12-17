import $ from 'jquery'

/*===================================
=            Breadcrumbs            =
===================================*/
/**
 * If breadcrumbs has class "useExtended", remove it and add class "notExtended" when the header has scrolled past a certain height.
 */

const Breadcrumbs = () => {
  if ($('.breadcrumbs-extended').length) {
    let breadcrumbs = $('.header-breadcrumbsContainer')
    let extendedBreadcrumbs = $('.breadcrumbs-extended')
    let headerHeight = $('.site-header').height()
    let extendedBreadcrumbsHeight = extendedBreadcrumbs.outerHeight()
    let bottomPos = extendedBreadcrumbsHeight

    if ($('.tableOfContents-dropdown').css('display') != 'none') {
      $('.tableOfContents.fixedMobile').css({ position: 'static' })
    }

    $(document).scroll(function() {
      if (
        $(this).scrollTop() >= bottomPos &&
        breadcrumbs.hasClass('useExtended')
      ) {
        breadcrumbs.removeClass('useExtended').addClass('notExtended')

        if ($('.tableOfContents-dropdown').css('display') != 'none') {
          $('.tableOfContents.fixedMobile').css({
            position: 'fixed',
            top: headerHeight + 'px',
            'z-index': 51
          })
        }
      } else if (
        $(this).scrollTop() <= bottomPos &&
        breadcrumbs.hasClass('notExtended')
      ) {
        breadcrumbs.removeClass('notExtended').addClass('useExtended')
        if ($('.tableOfContents-dropdown').css('display') != 'none') {
          $('.tableOfContents.fixedMobile').css({
            position: 'static',
            top: 'initial',
            'z-index': 'initial'
          })
        }
      }
    })
  }

  // Make Breadcrumbs fluid height if necessary
  if (
    $('.header-breadcrumbs').height() >
    $('.header-breadcrumbsContainer').height()
  ) {
    $('.header-breadcrumbsContainer').css({
      height: 'initial',
      'padding-top': '0.2rem',
      'padding-bottom': '0.2rem'
    })
    let newHeight = $('.site-header').outerHeight()
    $('body').css('padding-top', newHeight)
  }
}

export default Breadcrumbs
