// import $ from 'jquery'

const NationalGoals = () => {
  // on page load...
  moveProgressBar()

  // on browser resize...
  // $(window).resize(function () {
  //   moveProgressBar()
  // })

  // SIGNATURE PROGRESS
  function moveProgressBar() {
    let allData = Array.from(
      document.getElementsByClassName('progress-wrap')
    ).map(function(bar) {
      return bar.getAttribute('data-progress-percent')
    })

    allData.push(100)

    let max = allData.reduce(function(a, b) {
      return Math.max(parseInt((a, b)))
    })

    Array.from(document.getElementsByClassName('progress-wrap')).forEach(
      function(bar) {
        let percent = bar.getAttribute('data-progress-percent') / max

        let getProgressWrapWidth = bar.clientWidth

        let progressTotal = percent * getProgressWrapWidth

        let totalWidth

        if (progressTotal > 500) {
          totalWidth =
            window.innerWidth > 1000 ? progressTotal - 150 : progressTotal - 50
        } else {
          totalWidth = progressTotal
        }

        bar.children[0].style.width = `${totalWidth}px`

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        // $(this)
        //   .children('.progress-bar')
        //   .stop()
        //   .animate(
        //     {
        //       width: totalWidth
        //     },
        //     animationLength
        //   )
      }
    )
  }

  let tooltips = document.querySelectorAll('.tip-content')

  window.onmousemove = function(e) {
    let x = e.clientX + 20 + 'px',
      y = e.clientY + 20 + 'px'
    for (let i = 0; i < tooltips.length; i++) {
      tooltips[i].style.top = y
      tooltips[i].style.left = x
    }
  }
}

export default NationalGoals
