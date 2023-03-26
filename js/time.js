const timeEl = document.querySelector(".time");
const greetingEl = document.querySelector(".greeting");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
   const morning = hours == 0 || hours < 12;
  const afternoon = hours > 11 && hours  < 16;
  const evening = hours > 15 && hours !== 0;

  if (morning) {
    greetingEl.innerHTML = "Good morning,";
  } else if (afternoon) {
    greetingEl.innerHTML = "Good afternoon,";
  } else if (evening) {
    greetingEl.innerHTML = "Good evening,";
  }

  timeEl.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(
    seconds
  )}`;
  return hours;
}

function addZero(param) {
  return (param = param < 10 ? "0" + param : param);
}

setInterval(getTime, 1000);
