const time = document.getElementById("time");
const startBtn = document.getElementById("start");




let timer;
let seconds = 0;
let hours = 0;
let minutes = 0;
let MINUTES_IN_HOUR = 60;
let SECONDS_IN_MINUTE = 60;




function updateTimer() {
  seconds++;
  if (seconds >= SECONDS_IN_MINUTE) {
    seconds = 0;
    minutes++;
    if (minutes >= MINUTES_IN_HOUR) {
      minutes = 0;
      hours++;
    }
  }
  time.innerHTML =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);
  // start timer again
  start();
}



function start() {
  timer = setTimeout(updateTimer, 1000);
  startBtn.disabled = true;
}



function stop() {
  clearTimeout(timer);
  startBtn.disabled = false;
}



function reset() {
  time.textContent = "00:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
  startBtn.disabled = false;
}



window.start = start;
window.reset = reset;
window.stop = stop;
