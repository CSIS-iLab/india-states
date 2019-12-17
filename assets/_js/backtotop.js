import $ from 'jquery'

const BackToTop = () => {
  let offset = $(window).height() / 2
  let speed = 250
  let duration = 500
  $(window).scroll(function() {
    if ($(this).scrollTop() < offset) {
      $('.backToTop-container').fadeOut(duration)
    } else {
      $('.backToTop-container').fadeIn(duration)
    }
  })
  $('.backToTop-container').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, speed)
    return false
  })
}

export default BackToTop
