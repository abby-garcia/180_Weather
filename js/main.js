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
    backgroundBasedOnWeather();
}

function getStateAndCity(data) {
    var location = data.location,
        state = location.state, 
        city = location.city,
        url = 'http://api.wunderground.com/api/15f00925d5ace1d8/conditions/q/' + state + '/' + city.replace(" ", "_")  + '.json';
      getRequest(url, showWeather); 
}




function backgroundBasedOnWeather(){
  var currentWeather = parseInt($('#search_results').text().replace(' F',''));
  console.log(currentWeather);
  if(currentWeather <= 40){

      document.body.style.backgroundColor = "lightblue";
    }
  else if (currentWeather > 40 && currentWeather <= 60){
      document.body.style.backgroundColor = "royalblue";

  }

  else if(currentWeather >60 && currentWeather <= 80){
      // i can also do this:  document.body.style.backgroundColor = "darksalmon";
      $('body').css('background-color', 'darksalmon')
  }

  else{
      document.body.style.backgroundColor = "crimson";
  }
}
