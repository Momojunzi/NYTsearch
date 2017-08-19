$(document).ready(function(){
var term = $('#search_term').html();
var numberRecord = $('#num_rec').html();
var startYear = $('#start_year');
var endYear = $('#end_year');

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" +
  "api_key=f0f27ef90a834d6989d3ed94b6714223" + "&q=" + term + "&fl=" + numberRecord; 

$('#search').on("click", function() {
	console.log(term)
	console.log(queryURL)
	$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {
  console.log(response);
  console.log('yes')
  });

$('#submitbtn').on("click", function() {
	console.log('no')
})

})

})

