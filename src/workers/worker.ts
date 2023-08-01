// let timerInterval: any;
// let currentTime = 0;
// let isRunning = false;

// function startTimer() {
//   if (!isRunning) {
//     timerInterval = setInterval(() => {
//       currentTime += 1;
//       postMessage(currentTime);
//     }, 1000);
//     isRunning = true;
//   }
// }

// function stopTimer() {
//   clearInterval(timerInterval);
//   isRunning = false;
// }

// function resetTimer() {
//   stopTimer();
//   currentTime = 0;
//   postMessage(currentTime);
// }

// onmessage = e => {
//   const { action } = e.data;
//   switch (action) {
//     case 'start':
//       startTimer();
//       break;
//     case 'stop':
//       stopTimer();
//       break;
//     case 'reset':
//       resetTimer();
//       break;
//     default:
//       break;
//   }
// };

// self.onmessage = function (event) {
//   const { delay } = event.data;

//   // Start the timer
//   let time = 0;
//   const interval = setInterval(() => {
//     time++;
//     postMessage(time);
//     console.log('time', time);

//     clearInterval(interval);
//   }, delay);
// };

let timerInterval: any;
let isTimerRunning = false;

self.onmessage = function (e) {
  if (e.data === 'start') {
    isTimerRunning = true;
    timerInterval = setInterval(() => {
      postMessage(isTimerRunning);
    }, 1000);
  } else if (e.data === 'stop') {
    console.log('stop here');
    isTimerRunning = false;
    clearInterval(timerInterval);
  }
};

// function startTimer() {
//   isTimerRunning = true;
//   timerInterval = setInterval(() => {
//     postMessage(isTimerRunning);
//   }, 1000);
// }

// function stopTimer() {
//   isTimerRunning = false;
//   clearInterval(timerInterval);
// }

// self.onmessage = ({ data }) => {
//   console.log(data, 'data from onmessage');
// };
