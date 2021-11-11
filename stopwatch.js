var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens')
var appendSeconds = document.getElementById('seconds')
var Interval ;
function startTimer() {
  tens++;
  if (tens < 10) {
    appendTens.innerHTML= "0" + tens;}
  if (tens >= 10) {
    appendTens.innerHTML= tens;}
  if (tens > 99) {
  console.log("seconds");
  seconds++;
  tens = 0;
  appendTens.innerHTML = "0" + 0;}
  if (seconds >= 10) {
    appendSeconds.innerHTML = seconds;}
    if (seconds < 10) {
    appendSeconds.innerHTML = "0" + seconds
    }
  }
function buttonStart() {
  var x = document.getElementById('button-start')
  x.style.background = "#E26A2C";
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
}
function buttonStop() {
  var x = document.getElementById('button-stop')
  x.style.background = "#E26A2C";
  clearInterval(Interval);
}
function resetColor(){
  var x = document.getElementById('button-reset')
  x.style.background = "#E26A2C";
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
}
