let seconds;
let minutes;
let hours;
let days;

const updateValues = (initialSeconds) => {
  seconds = initialSeconds;
  minutes = seconds / 60;
  hours = minutes / 60;
  days = hours / 24;
};

const displayValues = () => {
  document.getElementById("days").innerHTML = parseInt(days);
  document.getElementById("hours").innerHTML = parseInt(hours % 24);
  document.getElementById("minutes").innerHTML = parseInt(minutes % 60);
  document.getElementById("seconds").innerHTML = seconds % 60;
};

const updateTimer = (time) => {
  updateValues(time);
  displayValues();
};

//change the value of this variable to test
const initialSeconds = 300000;

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    updateTimer(initialSeconds);
    const countDownTimer = new CountdownTimer(initialSeconds);
    countDownTimer.addListener(updateTimer);
    countDownTimer.start();
  }
};
