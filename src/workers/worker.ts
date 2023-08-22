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

// let timerInterval: any;
// let isTimerRunning = false;

// self.onmessage = function (e) {
//   if (e.data === 'start') {
//     isTimerRunning = true;
//     timerInterval = setInterval(() => {
//       postMessage(isTimerRunning);
//     }, 1000);
//   } else if (e.data === 'stop') {
//     console.log('stop here');
//     isTimerRunning = false;
//     clearInterval(timerInterval);
//   }
// };

let timerInterval: any;
let isTimerRunning = false;
// let timer = 0;

self.onmessage = function (e) {
  console.log('e', e);
  if (e.data.type === 'start') {
    startTimer(e.data.stopwatch);
  } else if (e.data.type === 'pause') {
    pauseTimer(e.data.stopwatch);
  } else {
    stopTimer();
  }
};

function startTimer(timer: number) {
  isTimerRunning = true;
  if (isTimerRunning) {
    console.log('==================', isTimerRunning);
    timerInterval = setInterval(() => {
      timer += 1;
      postMessage({ isTimerRunning, timer });
    }, 10);
  }
}

function pauseTimer(timer: number) {
  isTimerRunning = false;
  clearInterval(timerInterval);
  postMessage({ isTimerRunning, timer });
}

function stopTimer() {
  isTimerRunning = false;
  // timer = 0;
  postMessage({ isTimerRunning, timer: 0 });
  clearInterval(timerInterval);
}
