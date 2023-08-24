let timerInterval: any;
let isTimerRunning = false;

self.onmessage = function (e) {
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
  postMessage({ isTimerRunning, timer: 0 });
  clearInterval(timerInterval);
}
