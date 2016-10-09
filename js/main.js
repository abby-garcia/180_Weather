var api_key = '15f00925d5ace1d8',
    url = 'http://api.wunderground.com/api/'+ api_key +'/geolookup/q/'+ searchTerm +'.json';

$( "button" ).on( "click", function() {
 // getWeather();
});





$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});



function getRequest(url,callback, params){
  $.getJSON(url, params, function(data){
      callback(data);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}

function getStateAndCity(data) {
  var state = data.state, 
      city = data.city;

      return 
}

function takeInput(zipCode){
  url = 'http://api.wunderground.com/api/15f00925d5ace1d8/geolookup/q/'+ zipCode + '.json';
  getRequest(url, getStateAndCity;
}

getRequest(url,showResults)