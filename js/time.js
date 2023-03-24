const timeEl = document.querySelector(".time");
const greetingEl = document.querySelector(".greeting");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  timeEl.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(
    seconds
  )}`;
  return hours;
}

function addZero(param) {
  return (param = param < 10 ? "0" + param : param);
}

function greetings() {
  const morning = getTime() == 0 || getTime() < 12;
  const afternoon = getTime() > 11 && getTime() < 16;
  const evening = getTime() > 15 && getTime() !== 0;

  if (morning) {
    greetingEl.innerHTML = "Good morning,";
  } else if (afternoon) {
    greetingEl.innerHTML = "Good afternoon,";
  } else if (evening) {
    greetingEl.innerHTML = "Good evening,";
  }
}

greetings();
setInterval(getTime, 1000);
