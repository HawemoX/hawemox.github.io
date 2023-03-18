function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 10);
