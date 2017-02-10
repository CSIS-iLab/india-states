/* global instantsearch */

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

  console.log(search);

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Search for products'
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 10,
      templates: {
        item: getTemplate('hit'),
        empty: getTemplate('no-results')
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#stats'
    })
  );

  search.addWidget(
    instantsearch.widgets.sortBySelector({
      container: '#sort-by',
      autoHideContainer: true,
      indices: [{
        name: opts.indexName, label: 'Most Recent'
      }]
    })
  );

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination',
      scrollTo: '#search-input'
    })
  );

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#category',
      attributeName: 'content_type',
      sortBy: ['isRefined', 'count:desc', 'name:asc'],
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Category')
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
        header: getHeader('Brand')
      }
    })
  );


  // search.addWidget({
  //   getConfiguration: function () {
  //   },
  //   init: function (params) {
  //     var datepicker = $('#posted_at').datepicker({
  //       autoclose: true,
  //       format: 'dd/mm/yyyy',
  //       todayHighlight: true,
  //       weekStart: 1,
  //       language: 'fr',
  //       disableKeyboard: true
  //     });
  //     var date = new Date();
  //     datepicker.datepicker('setDate', date);
  //     datepicker.on('change', function () {
  //       var date = $(this).datepicker('getDate');
  //       params.helper.removeNumericRefinement('posted_at');
  //       params.helper.addNumericRefinement('posted_at', '>=', moment(date).unix());
  //       params.helper.search();
  //     });

  //     params.helper.removeNumericRefinement('posted_at');
  //     params.helper.addNumericRefinement('posted_at', '>=', moment(date).unix());
  //   },
  //   render: function (params) {}
  // });

  search.start();
}

function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
  return '<h5>' + title + '</h5>';
}