---
title: Map
permalink: "/map/"
published: false
layout: page
---

Testing integrating Jekyll & D3.js to create an interactive map of India.

<div id="mapContainer"></div>

<!-- {% include india-base-map.html %} -->
<script src="//code.jquery.com/jquery-3.1.0.min.js"></script>
{% include map-highcharts.html %}
<script src="{{ "/assets/js/map-generator.js" | relative_url }}"></script>