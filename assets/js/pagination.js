$(function() {
	/**
	 * On page load check for hash based url settings
	 * @return {string} Returns pagination container contents and pagination bar
	 */
	 function paginationCheckHash() {
	 	var hash = window.location.hash.replace("#", "");
	 	var current_page = 1;
	 	var subsector, sort_field, sort_order;

	 	if(hash) {
			// Get Hash values
			subsector = hash.substr(hash.indexOf('subsector=')).split('&')[0].split('=')[1];
			sort_field = hash.substr(hash.indexOf('sort=')).split('&')[0].split('=')[1];
			sort_order = hash.substr(hash.indexOf('order=')).split('&')[0].split('=')[1];
			current_page = hash.substr(hash.indexOf('page=')).split('&')[0].split('=')[1];

            // Set Active Sort Filter and replace subsector with hash subsector value
            if(subsector) {
            	$("a.sort-attribute").each(function() {
					var href = $(this).attr("href");
					var sortType = $(this).data("sort");
					var newHash = "#subsector="+subsector+"&amp;"+sortType;
					$(this).attr("href", href.replace(href, newHash));
				});
            }
            $(".sort-attribute").removeClass("active");
            $("a.sort-attribute[href^='#"+hash+"']").addClass("active");
        }

		// Set Active Page in Pagination Bar based on hash, or default to 1
		$(".pagination-container a").removeClass("active");
		$('.pagination-container a[data-page="'+current_page+'"]').addClass('active');

        // Calculate the pagination settings based on hash values
        paginationCalculation(subsector, sort_field, sort_order, current_page);
    }

    /**
     * Run paginationCheckHash() on window's on hash change event and initial run of function
     */
    window.onhashchange = paginationCheckHash;
	paginationCheckHash();

	/**
	 * Calculates the total items, start item, end item, and sorts the chosen post array
	 * @param  {String} sort_field   The field to sort the post array by
	 * @param  {String} sort_order   The direction to sort the post array by: asc or desc
	 * @param  {Number} current_page The current page the user is on
	 * @return {string}              Renders the posts to be shown on this page and the pagination bar
	 */
	function paginationCalculation(subsector, sort_field = "date", sort_order = "desc", current_page = 1) {

		// Calculate the start/end items based on the total items and the posts per page
		var total_items = 0;

		// Set Default Subsector Field if applicable
		if(subsectorFiltering == true && !subsector) {
			subsector = "all";
		}

		// Get the start and end indicies of posts to display
		if(current_page > 1) {
			var start_item = posts_per_page * (current_page - 1);
			var end_item = (posts_per_page * current_page) - 1;
		}
		else {
			var start_item = 0;
			var end_item = posts_per_page - 1;
		}

		// Empty's pagination container of previous posts
		$(".pagination-posts-container").empty();

		// Choose which post object we want to use based on sort_field
		if(sort_field == "date") {
			if(subsector) {
				posts = postsPaginateMainObject[subsector];
			}
			else {
				posts = postsPaginateMain;
			}
			showSubheaders = false;
		}
		else {
			if(subsector) {
				posts = postsPaginateSecondaryObject[subsector];
			}
			else {
				posts = postsPaginateSecondary;
			}
			showSubheaders = true;
		}

		// Reverse the sort_field to pass to our dynamic sorter function
		if(sort_order == "desc") {
			posts.sort(dynamicSort("-"+sort_field));
		}
		else {
			posts.sort(dynamicSort(sort_field));
		}

		// Total Count
		total_items = posts.length;

		// Render the Posts for this page
		var postsArray = posts.slice(start_item, (end_item + 1));
		paginationPostRender(postsArray, showSubheaders, subsector);

		// Render Pagination
		paginationRender(total_items, end_item, subsector, sort_field, sort_order, current_page);
	}

	/**
	 * Renders each post from the post array
	 * @param  {Array} posts          The post array to loop through
	 * @param  {Boolean} showSubheaders Whether or not to display a subheader above the post (State Names or Sector Names)
	 * @return {String}                The post template
	 */
	function paginationPostRender(posts, showSubheaders, subsector) {
		$.each(posts, function(index, post) {
			console.log(post);
			// Check if we want to display subheaders. If we do, we only want to show it once per page
			if(post.state) {
				var stateID = post.state.replace(" ", "");
				if(showSubheaders && $("#"+stateID).length == 0) {
					if(subsectorFiltering) {
						total = postsPaginateSecondaryTotal[post.state][subsector]
					}
					else {
						total = postsPaginateSecondaryTotal[post.state]
					}
					$(".pagination-posts-container").append("<h2 id='"+stateID+"'>"+post.state+"</h2>");
				}
			}
			else if(post.sector) {
				var sectorID = post.sector.replace(" ", "");
				if(showSubheaders && $("#"+sectorID).length == 0) {
					$(".pagination-posts-container").append("<h2 id='"+sectorID+"'>"+post.sector+"</h2>");
				}
			}

			
		    // Render post
		    $('.pagination-posts-container').append($.parseHTML(unescape(post.postHtml)));

		});
	}

	/**
	 * Renders the pagination block, including page numbers & next & previous links
	 * @param  {Number} total_items  Total number of items in the posts array
	 * @param  {Number} end_item     The index of the last item to render
	 * @param  {String} sort_field   The field to sort the post array by
	 * @param  {String} sort_order   The direction to sort the post array by: asc or desc
	 * @param  {Number} current_page The current page the user is on
	 * @return {string}              The pagination block template
	 */
	function paginationRender(total_items, end_item, subsector, sort_field, sort_order, current_page) {
		var total_pages = Math.ceil(total_items / posts_per_page );
		$(".pagination-container").empty();

		// Only show the pagination bar if we have more than 1 page
		if(total_pages > 1) {
			// Create the hash link based on the sorted field and date
			if(subsector) {
				var hash = "#subsector="+subsector+"&amp;sort="+sort_field+"&amp;order="+sort_order+"&amp;page=";
			}
			else {
				var hash = "#sort="+sort_field+"&amp;order="+sort_order+"&amp;page=";
			}

			// Convert current page to integer
			current_page = parseInt(current_page);

			// Previous Button
			if(current_page > 1) {
				var previousPage = current_page - 1;
				$(".pagination-container").append("<a href='"+hash+previousPage+"' data-page='"+previousPage+"' class='noScroll'>Previous</a>");
			}

			// Render each page button
			for (var i = 1; i <= total_pages; i++) {
				if(i == current_page) {
					var activeClass = "active";
				}
				else {
					var activeClass = "";
				}
				$(".pagination-container").append("<a href='"+hash+i+"' class='"+activeClass+" noScroll' data-page='"+i+"'>"+i+"</a>");
			}

			// Next Button
			if(current_page < total_pages) {
				var nextPage = current_page + 1;
				$(".pagination-container").append("<a href='"+hash+nextPage+"' class='noScroll' data-page='"+nextPage+"'>Next</a>");
			}
		}
	}

	/**
	 * Dynamically Sort an array based on any given property
	 * @param  {String} property The array property to sort by. Can be Field or -Field depending on sort direction
	 * @return {Array}          The sorted array
	 */
	function dynamicSort(property) {
		var sortOrder = 1;
		if(property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function (a,b) {
			var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			return result * sortOrder;
		}
	}

});