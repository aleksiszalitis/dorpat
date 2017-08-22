function addZero(i) {
  if (i<10) i = "0" + i;
  return i;
}

function updateClock() {
  var time = new Date();
  hours = addZero(time.getHours());
  minutes = addZero(time.getMinutes());
  seconds = addZero(time.getSeconds());
  $("#time").text(hours+":"+minutes);
  setTimeout(updateClock,1000);
}
updateClock();