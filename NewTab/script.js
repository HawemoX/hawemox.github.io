/*
function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 10);
*/

function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  
  // Pad single-digit minutes with leading zero
  min = min < 10 ? "0" + min : min;

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
}

setInterval(displayTime, 10);