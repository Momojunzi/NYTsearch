$(document).ready(function(){

  $('#search').on("click", function() {

    var articleCounter = 1;
    var term = $('#search_term').val();
    var numberRecord = $('#num_rec').val();
    var startYear = $('#start_year').val();
    var endYear = $('#end_year').val();
    var APIKey = "f0f27ef90a834d6989d3ed94b6714223";

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
      "?&api_key=" + APIKey + "&?q=" + term + "&?fl=" + numberRecord + "&?begin_date=" + startYear + "&?end_date=" + endYear;

  	$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      var results = response.response.docs;
      console.log(results);

      for(var i=0; i<results.length; i++){
        var resultTag = $('<div>');
        resultTag.addClass('wellSection');
        resultTag.append('<h4><span class="label label-primary"><strong>'+ (articleCounter++) +'. ' + results[i].snippet +'</span></h3>');
        resultTag.append('<h5>Section:' + results[i].section_name+'</h5>');
        resultTag.append('<h5>' + results[i].pub_date+'</h5>');
        resultTag.append('<a href="' + results[i].web_url+'">' + results[i].web_url +'</a><br><br>');
        $('#results_container').append(resultTag);
      }
    });
  });

  $('#submitbtn').on("click", function() {
    $('#search_term').empty();
    $('#num_rec').empty();
    $('#start_year').empty();
    $('#end_year').empty();
  });


});
