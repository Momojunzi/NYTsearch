$(document).ready(function(){

  $('#search').on("click", function() {

    var term = $('#search_term').val();
    var numberRecord = $('#num_rec').val();
    var startYear = $('#start_year').val();
    var endYear = $('#end_year').val();
    var APIKey = "f0f27ef90a834d6989d3ed94b6714223";

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
      "?&api_key=" + APIKey + "&?q=" + term + "&?fl=" + numberRecord + "&?begin_date=" + startYear + "&?end_date=" + endYear;

      console.log('URL>>>', queryURL);

  	$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);

      var results = response.response.docs;
      console.log(results);

    });
  });

  $('#submitbtn').on("click", function() {
  	console.log('clear button');
    $('#search_term').empty();
    $('#num_rec').empty();
    $('#start_year').empty();
    $('#end_year').empty();
  });


});
