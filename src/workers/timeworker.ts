let stopWatchInterval: any;
let timerInterval: any;
// 스탑워치 전용 상태
let isStopWatchRunning = false;
// 타이머 전용 상태
let isTimerRunning = false;

self.onmessage = function (e) {
  switch (e.data.type) {
    case 'start':
      return startStopWatch(e.data.stopwatch);
    case 'pause':
      return pauseStopWatch(e.data.stopwatch);
    case 'start_timer':
      return startTimer(e.data.timer);
    case 'pause_timer':
      return pauseTimer(e.data.timer);
    case 'stop_timer':
      return stopTimer();
    default:
      return stopStopWatch();
  }
  // if (e.data.type === 'start') {
  //   startStopWatch(e.data.stopwatch);
  // } else if (e.data.type === 'pause') {
  //   pauseStopWatch(e.data.stopwatch);
  // } else {
  //   stopStopWatch();
  // }
};

// ------------------------------
// -- stopwatch

function startStopWatch(timer: number) {
  isStopWatchRunning = true;
  if (isStopWatchRunning) {
    stopWatchInterval = setInterval(() => {
      timer += 1;
      postMessage({ isStopWatchRunning, timer });
    }, 10);
  }
}

function pauseStopWatch(timer: number) {
  isStopWatchRunning = false;
  clearInterval(stopWatchInterval);
  postMessage({ isStopWatchRunning, timer });
}

function stopStopWatch() {
  isStopWatchRunning = false;
  postMessage({ isStopWatchRunning, timer: 0 });
  clearInterval(stopWatchInterval);
}

/// ---------------------------------

function startTimer(timer: number) {
  isTimerRunning = true;
  if (isTimerRunning) {
    timerInterval = setInterval(() => {
      if (timer > 0) {
        timer -= 1;
        postMessage({ isTimerRunning, timer });
      } else {
        clearInterval(timerInterval);
        postMessage({ isTimerRunning: false, timer: 0 });
      }
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
  clearInterval(timerInterval);
  postMessage({ isTimerRunning, timer: 0 });
}
