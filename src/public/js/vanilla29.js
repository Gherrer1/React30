(function main() {
  let interval;
  const timeLeftDisplay = document.querySelector('.display__time-left');
  const timeEndDisplay = document.querySelector('.display__end-time');

  // custom form
  const customForm = document.querySelector('#custom');
  customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let minutesInput = e.target.children[0];
    let minutes = Number(minutesInput.value);
    if(typeof minutes === 'number' && isFinite(minutes)) {
      let secondsLeft = Math.floor(minutes * 60);
      startCountdown(secondsLeft);
    }
    minutesInput.value = '';
  });

  // ...or timer buttons
  const timerButtons = document.querySelectorAll('.timer__button');
  timerButtons.forEach(el => {
    el.addEventListener('click', (e) => startCountdown(e.target.dataset.time));
  });

  // meat of the app
  function startCountdown(secondsLeft) {
    if(interval) {
      clearInterval(interval);
      interval = null;
    }
    let meetBackAtDate = getDateXSecondsFromNow(secondsLeft);
    let meetBackAtStr = 'Meet at ' + convertDateToHoursMinsSecondsStr(meetBackAtDate);
    timeEndDisplay.innerHTML = meetBackAtStr;
    timeLeftDisplay.innerHTML = secondsToMinsSecondsStr(secondsLeft);
    interval = setInterval(() => {
      secondsLeft--;
      timeLeftDisplay.innerHTML = secondsToMinsSecondsStr(secondsLeft);
      if(secondsLeft === 0) {
        clearInterval(interval);
        interval = null;
      }
    }, 1000);
  }
})();

// thank you, helper functions
function convertDateToHoursMinsSecondsStr(date) {
  let hours = date.getHours().toString().padStart(2, '0');
  let mins = date.getMinutes().toString().padStart(2, '0');
  let secs = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${mins}:${secs}`;
}

function getDateXSecondsFromNow(x) {
  return new Date(new Date().getTime() + x * 1000);
}

function secondsToMinsSecondsStr(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = `${sec % 60}`.padStart(2, '0');
  return `${minutes}:${seconds}`
}
