const startingMinutes = 10;
let time = (startingMinutes * 60);

const timerDisplayElement = document.getElementById('timer-display');

var timer;

function updateTimer() {
  time--;
  
  if(time <= 0)
  clearInterval(timer);
  
	const minutes = Math.floor(time/60);
  let seconds = time % 60;
  
  let min = minutes.toString().padStart(2, '0');
  let sec = seconds.toString().padStart(2, '0');
  
  timerDisplayElement.innerHTML = min + ':' + sec;
}

document.getElementById('start-btn').onclick = function() {
	timer = setInterval(updateTimer, 1000);
  event.target.disabled = true;
  document.getElementById('pause-btn').disabled = false;
  document.getElementById('reset-btn').disabled = false; 
}

document.getElementById('pause-btn').onclick = function() {
	clearInterval(timer);
  event.target.disabled = true;
  document.getElementById('start-btn').disabled = false;
}

document.getElementById('reset-btn').onclick = function() {
  clearInterval(timer);
  event.target.disabled = true;
  document.getElementById('start-btn').disabled = false;
  document.getElementById('reset-btn').disabled = true; 
  
  time = (startingMinutes * 60);
  
  timerDisplayElement.innerHTML = startingMinutes.toString().padStart(2, '0') + ":00";
}