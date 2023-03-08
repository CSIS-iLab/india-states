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

    // let max = allData.reduce(function(a, b) {
    //   return Math.max(parseInt(a), parseInt(b))
    // })

    Array.from(document.getElementsByClassName('progress-wrap')).forEach(
      function(bar) {
        // let percent = bar.getAttribute('data-progress-percent') / parseInt(max)
        let percent = bar.getAttribute('data-progress-percent')

        // let getProgressWrapWidth = bar.clientWidth

        // let progressTotal = percent * getProgressWrapWidth
        // let totalWidth

        if (percent >= 95) {
          bar.children[0].style.width = '100%'
          bar.classList.add('over-100')
        } else {
          bar.children[0].style.width = `${percent}%`
        }
        // if (progressTotal > 500) {
        //   totalWidth =
        //     window.innerWidth > 1000
        //       ? progressTotal - 150
        //       : progressTotal - 50
        // } else {
        //   totalWidth = progressTotal
        // }
        // if (progressTotal > 500) {
        //   totalWidth =
        //     window.innerWidth > 1000 ? progressTotal - 150 : progressTotal - 50
        // } else {
        //   totalWidth = progressTotal
        // }
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
