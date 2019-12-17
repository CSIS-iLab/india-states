import $ from 'jquery'

const StickyMenu = () => {
  if ($('.isSticky').length) {
    let headerHeight = $('.site-header').outerHeight() + 32

    $.fn.followTo = function() {
      let $this = this

      let stickyWidth = $this.width()

      let thisBox = $this[0].getBoundingClientRect()
      let tocBox = $this.parent('.tableOfContents')[0].getBoundingClientRect()

      let tocTop = tocBox.top + window.scrollY - headerHeight
      let tocBottom = tocBox.bottom + window.scrollY - headerHeight

      if (window.scrollY > tocTop && window.scrollY < tocBottom) {
        $this.css({
          position: 'fixed',
          top: headerHeight,
          width: stickyWidth
        })

        tocTop = tocBox.top + window.scrollY - headerHeight
        tocBottom = tocBox.bottom + window.scrollY - headerHeight
      }

      let bottom = thisBox.bottom + window.scrollY
      let top = tocBox.bottom + window.scrollY - headerHeight - $this.height()

      $(window).scroll(function() {
        if (window.scrollY > tocTop && window.scrollY < bottom) {
          $this.css({
            position: 'fixed',
            top: headerHeight,
            width: stickyWidth
          })
        } else if (window.scrollY < tocTop || window.scrollY > top) {
          $this.css({
            position: 'initial',
            top: 0
          })
        }
      })
    }

    $('.isSticky').each(function() {
      $(this).followTo()
    })
  }

  // Drop down menu for mobile
  if ($('.tableOfContents-dropdown').length) {
    $('.tableOfContents-dropdown').on('change', function() {
      let url = $(this).val() // get selected value
      window.location = url // redirect

      if (url != '#') {
        $('.tableOfContents-instructions').css('display', 'inline-block')
      } else {
        $('.tableOfContents-instructions').hide()
      }
    })
  }
}

export default StickyMenu
