
var term = $('#search_term');
var numberRecord = $('#num_rec');
var startYear = $('#start_year');
var endYear = $('#end_year');

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&" +
  term + numberREcord + startYear + endYear + "&api_key=f0f27ef90a834d6989d3ed94b6714223";

$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {
  console.log(response);
  });
