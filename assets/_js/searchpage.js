/*============================================
=            Search Functionality            =
============================================*/
/**
 * Code related to search bar and the search page.
 */

/*----------  Search Overlay  ----------*/
$(function() {
  // Open Overlay
  $(".site-header .search-icon").click(function() {
    if(navigator.userAgent.indexOf('MSIE')!==-1
    || navigator.appVersion.indexOf('Trident/') > 0){
      location.href = "/search/";
    }
    else {
      $(".search-overlay").show();
    }
  });

  // Close Overlay
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
      $(".search-overlay").hide();
    }
  };

  $(".search-overlay .search-closeIcon").click(function() {
    $(".search-overlay").hide();
  });  

});


/* global instantsearch */

if($(".search-container").length) {

  app({
    appId: '7UNKAH6RMH',
    apiKey: 'b9011cf7f49e60630161fcacf0e37d02',
    indexName: 'india_states'
  });

  function app(opts) {
    var search = instantsearch({
      appId: opts.appId,
      apiKey: opts.apiKey,
      indexName: opts.indexName,
      urlSync: true
    });

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-input',
        placeholder: 'Search'
      })
    );

    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        hitsPerPage: 10,
        templates: {
          item: getTemplate('hit'),
          empty: getTemplate('no-results')
        },
        transformData: {
          item: function (data) {
            if(data.content_type == 'Articles' || data.content_type == 'Analysis') {
              data.formattedDate = '<span class="articleMeta hit-date">Posted on <span class="articleDate">'+data.date+'</span></span>';
            }
            else {
              data.formattedDate = null;
            }
            return data;
          }
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.stats({
        container: '#stats',
        templates: {
          body: "{{{nbHits}}} total results | Page {{{currentPage}}} of {{{nbPages}}}"
        },
        transformData: function (refinement) {
          return { currentPage: refinement.page + 1, nbHits: refinement.nbHits, nbPages: refinement.nbPages };
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.sortBySelector({
        container: '#sort-by',
        autoHideContainer: true,
        indices: [
        {name: opts.indexName, label: 'Date DESC'},
        {name: 'india_states_date_asc', label: 'Date ASC'}
        ]
      })
    );

    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#pagination',
        scrollTo: '#search-input',
        labels: {
          previous: "&#8249; Previous",
          next: "Next &#8250;"
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#content_type',
        attributeName: 'content_type',
        sortBy: ['isRefined', 'count:desc', 'name:asc'],
        limit: 10,
        operator: 'or',
        templates: {
          header: getHeader('Type')
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#states',
        attributeName: 'states',
        sortBy: ['isRefined', 'count:desc', 'name:asc'],
        limit: 10,
        operator: 'or',
        templates: {
          header: getHeader('States')
        },
        searchForFacetValues: {
          placeholder: 'Search for states',
          templates: {
            noResults: '<div class="sffv_no-results">No matching states.</div>'
          }
        },
      })
    );

    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#sectors',
        attributeName: 'sectors',
        sortBy: ['isRefined', 'count:desc', 'name:asc'],
        limit: 10,
        operator: 'or',
        templates: {
          header: getHeader('Sectors')
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#tags',
        attributeName: 'tags',
        sortBy: ['isRefined', 'count:desc', 'name:asc'],
        limit: 10,
        operator: 'or',
        searchForFacetValues: {
          placeholder: 'Search for tags',
          templates: {
            noResults: '<div class="sffv_no-results">No matching tags.</div>'
          }
        },
        templates: {
          header: getHeader('Tags')
        }
      })
    );

    search.start();
  }

  function getTemplate(templateName) {
    return document.querySelector('#' + templateName + '-template').innerHTML;
  }

  function getHeader(title) {
    return '<h4 class="sectionSubtitle">' + title + '</h4>';
  }
}