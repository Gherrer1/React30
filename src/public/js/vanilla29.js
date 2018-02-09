(function main() {
  const timeLeftDisplay = document.querySelector('.display__time-left');
  const timeEndDisplay = document.querySelector('.display__end-time');
  console.log(timeEndDisplay);
  let interval;

  const timerButtons = document.querySelectorAll('.timer__button');
  timerButtons.forEach(el => {
    el.addEventListener('click', function(e) {
      if(interval) {
        clearInterval(interval);
        interval = null;
      }
      let secondsLeft = e.target.dataset.time;
      // only once do we need to set the meet-back-at display
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
    });
  });
})();

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
