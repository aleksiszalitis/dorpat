function addZero(i) {
  if (i<10) i = "0" + i;
  return i;
}

function updateClock() {
  var time = new Date();
  hours = addZero(time.getHours());
  minutes = addZero(time.getMinutes());
  seconds = addZero(time.getSeconds());
  month = (time.getMonth());
  $(".time").text(hours+":"+minutes);
  $(".day").text(["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"][time.getDay()]+"day");
  setTimeout(updateClock,1000);
  //console.log(month);
}
updateClock();