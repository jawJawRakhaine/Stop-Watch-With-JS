var seconds = 00;
var tens = 00;
var Interval;
var minutes = 0;

var outputMinutes = document.getElementById("minute");
var outputSeconds = document.getElementById("second");
var outputTens = document.getElementById("tens");

var buttonStart = document.getElementById("btn-start");
var buttonStop = document.getElementById("btn-stop");
var buttonReset = document.getElementById("btn-reset");

buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener("click", () => {
  clearInterval(Interval);
});

buttonReset.addEventListener("click", () => {
  clearInterval(Interval);
  seconds = "00";
  tens = "00";
  outputSeconds.innerHTML = seconds;
  outputTens.innerHTML = tens;
});

function startTime() {
  tens++;
  if (tens <= 9) {
    outputTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    outputTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    if (seconds < 10) {
      outputSeconds.innerHTML = "0" + seconds;
    } else {
      outputSeconds.innerHTML = seconds;
    }
    tens = 0;
    outputTens.innerHTML = "0" + tens;
  }
  if (seconds > 9) {
    seconds.innerHTML = seconds;
  }
  if (outputSeconds.innerText > 59) {
    seconds = 0;
    outputSeconds.innerHTML = seconds;
    minutes++;
    if (minutes < 10) {
      outputMinutes.innerHTML = "0" + minutes;
    } else {
      outputMinutes.innerHTML = minutes;
    }
  }
}
