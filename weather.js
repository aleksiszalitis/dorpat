$(document).ready(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = "lat="+position.coords.latitude;
        var lon = "lon="+position.coords.longitude;
         getWeather(lat,lon);
      });
    }
    else {
      console.log("geolocation not enabled");
    }
});

function getWeather(lat, lon) {
  api = "https://fcc-weather-api.glitch.me/api/current?";
  var url = api + lat + "&" + lon;
  console.log(url);
  $.ajax({
    url: url, success: function (result) {
      $("#city").text(result.name);
      $("#country").text(result.sys.country);
      $("#temp").text(result.main.temp);
      $("#icon").html("<img src="+result.weather[0].icon+" />");
    }
  });
}