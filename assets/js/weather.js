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
  var api = "https://fcc-weather-api.glitch.me/api/current?";
  var url = api + lat + "&" + lon;
  $.ajax({
    url: url, success: function (result) {
      $(".city").text(result.name);
      $(".country").text(result.sys.country);
      $(".temp").text(result.main.temp+"\u2103");
      // symbol: U+00B0: °
      // celsius: U+2103 ℃
      // fahrenheit: U+2109 ℉
      // kelvin: U+212A K
      $(".icon").html("<i class=\"owf owf-"+result.weather[0].id+" owf-2x\" />");
      console.log(result, url)
    }
  });
}