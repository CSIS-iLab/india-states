import $ from 'jquery'
/*=========================================
=            State Landing Page           =
=========================================*/
/**
 * When the user hovers over the map, highlight the name of the state in the list. Likewise, when the user hovers over the state name in the list, highlight the state on the map.
 */

const StatesLanding = () => {
  if ($('.statesLanding-mainContent').length) {
    // Hover on list
    $('.stateLink').hover(
      function() {
        let stateID = $(this).data('state')
        highlightState(stateID, 'highlight')
      },
      function() {
        let stateID = $(this).data('state')
        highlightState(stateID, 'unhighlight')
      }
    )

    // Hover on map
    $('#map path, #map g')
      .not($('.nolink'))
      .hover(
        function() {
          let stateID = $(this).attr('id')
          highlightList(stateID, 'highlight')
          highlightState(stateID, 'highlight')
        },
        function() {
          let stateID = $(this).attr('id')
          highlightList(stateID, 'unhighlight')
          highlightState(stateID, 'unhighlight')
        }
      )

    // Inactive States
    $('#map path.nolink, #map g.nolink, #map polygon').hover(
      function(e) {
        let x = e.clientX + 20 + 'px',
          y = e.clientY + 20 + 'px'
        let stateID = $(this).attr('id')
        let state = stateID.replace(/-/g, ' ')
        state = state.toUpperCase()
        $('.statesLanding-map').append(
          "<div class='tooltip' style='top: " +
            y +
            '; left: ' +
            x +
            "'><span>" +
            state +
            '</span><br /> No data available.</div>'
        )
      },
      function() {
        $('.statesLanding-map .tooltip').remove()
      }
    )

    // Click on map and go to state page
    $('#map path, #map g')
      .not($('.nolink'))
      .click(function() {
        let stateID = $(this).attr('id')
        location.href = '/states/' + stateID
      })
  }
}

function highlightState(stateID, action) {
  let state = $('path#' + stateID + ', #' + stateID + ' path')
  if (action == 'highlight') {
    state.addClass('active')
  } else {
    state.removeClass('active')
  }
}

function highlightList(stateID, action) {
  let stateLink = $("a[data-state='" + stateID + "']")
  if (action == 'highlight') {
    stateLink.addClass('active')
  } else {
    stateLink.removeClass('active')
  }
}

export default StatesLanding
