$(function(){
    var api_key = '15f00925d5ace1d8';

    $('button').on( 'click', function(e) {
        e.preventDefault();
        var zipCode = $('input').val();
        takeInput(zipCode);
    });
});

function getRequest(url,callback, params){
  $.getJSON(url, params, function(data){
      callback(data);
  });
}

function takeInput(zipCode){
  url = 'http://api.wunderground.com/api/15f00925d5ace1d8/geolookup/q/'+ zipCode + '.json';
  getRequest(url, getStateAndCity);
}

function showWeather(data){
     var currentWeather = data.current_observation.temp_f;

     var html = '<p class="weatherDisplay">' + currentWeather + ' F</p>'

    $('#search_results').html(html);
}

function getStateAndCity(data) {
    var location = data.location,
        state = location.state, 
        city = location.city,
        url = 'http://api.wunderground.com/api/15f00925d5ace1d8/conditions/q/' + state + '/' + city.replace(" ", "_")  + '.json';
      getRequest(url, showWeather); 
}

