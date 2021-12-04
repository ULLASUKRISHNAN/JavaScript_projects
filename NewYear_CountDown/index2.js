// (function () {
//   const second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//     day = hour * 24;

//   // const body = document.body;
//   // const endTime = new Date('December 31 2021 23:59:59');
//   const daysEl = document.getElementById('days');
//   const hoursEl = document.getElementById('hours');
//   const minutesEl = document.getElementById('minutes');
//   const secondsEl = document.getElementById('seconds');

//   let currentDay = new Date(),
//     dd = String(currentDay.getDate()).padStart(2, '0');
//   (mm = String(currentDay.getMonth() + 1).padStart(2, '0')),
//     (year = currentDay.getFullYear()),
//     (nextYear = year + 1),
//     (dayMonth = '01/01/'),
//     (newYear = dayMonth + year);

//   currentDay = mm + '/' + dd + '/' + year;
//   if (currentDay > newYear) {
//     newYear = dayMonth + nextYear;
//   }
//   //end

//   const countDown = new Date(newYear).getTime(),
//     x = setInterval(function () {
//       const now = new Date().getTime(),
//         distance = countDown - now;

//       const days = Math.floor(distance / day);
//       const hours = Math.floor((distance % day) / hour);
//       const minutes = Math.floor((distance % hour) / minute);
//       const seconds = Math.floor((distance % minute) / second);

//       daysEl.innerHTML = days;
//       hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
//       minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
//       secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
//       //do something later when date is reached
//
//       //seconds
//     }, 0);
// })();
