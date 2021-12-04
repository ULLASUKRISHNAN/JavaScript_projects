const body = document.body;
const endTime = new Date('January 1 2022 00:00:00');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const Container = document.querySelector('.countdown-container');
const title = document.getElementById('title');
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

/* Updating the Year Start */
let currentYear = new Date().getFullYear();
const endYear = endTime.getFullYear();
function setYear() {
  if (currentYear > endYear) {
    endTime.setFullYear(currentYear + 1);
  }
}
/* Updating the Year End */

const updateCountdown = () => {
  const startTime = new Date();
  const diff = endTime - startTime;
  const days = Math.floor(diff / day);
  const hours = Math.floor((diff % day) / hour);
  const minutes = Math.floor((diff % hour) / minute);
  const seconds = Math.floor((diff % minute) / second);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
  minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
  secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
  title.style.color = getRandomColor();

  if (diff <= 0) {
    Container.style.display = 'none';
    title.innerHTML = `Happy New Year ${endTime.getFullYear()}`;
    title.style.color = '#dae61a';
    setTimeout(() => {
      setYear();
    }, 5000);
  } else {
    Container.style.display = '';
    title.innerHTML = `New Year CountDown ${endTime.getFullYear()}`;
  }
};
/* Updating the Timestamp End */

/* Creating for the Stars and snowflake Start*/
const createSnowFlake = () => {
  const snow_flake = document.createElement('i');
  const stars = document.createElement('i');
  stars.classList.add('fa-star');
  snow_flake.classList.add('fa-snowflake');
  setAnimation(snow_flake);
  setAnimation(stars);

  setTimeout(() => {
    snow_flake.remove();
    setTimeout(() => {
      stars.remove();
    }, 500);
  }, 2000);
};
/* Creating for the Stars and snowflake End*/

/* Setting Animation for the Stars Start*/
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const setAnimation = (element) => {
  element.classList.add('fas');
  body.appendChild(element);
  element.style.color = element.classList.contains('fa-snowflake')
    ? getRandomColor()
    : '';
  element.style.left = Math.random() * window.innerWidth + 'px';
  element.style.animationDuration = Math.random() * 3 + 2 + 's';
  element.style.opacity = Math.random();
  element.style.fontSize = Math.random() * 10 + 10 + 'px';
};
/* Setting Animation for the Stars End*/

setInterval(updateCountdown, 1000);
setInterval(createSnowFlake, 50);
