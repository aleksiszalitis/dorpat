function updateClock() {
  var time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  $("#time").text(hours+":"+minutes);
  setTimeout(updateClock,1000);
}
updateClock();