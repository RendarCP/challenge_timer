let stopWatchInterval: any;
let timerInterval: any;
// 스탑워치 전용 상태
let isStopWatchRunning = false;
// 타이머 전용 상태
let isTimerRunning = false;

self.onmessage = function (e) {
  console.log('e', e);
  switch (e.data.type) {
    case 'start':
      return startStopWatch(e.data.stopwatch);
    case 'pause':
      return pauseStopWatch(e.data.stopwatch);
    case 'start_timer':
      return startTimer(e.data.timer);
    case 'pause_timer':
      return pauseTimer(e.data.timer);
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
      console.log('timer', timer);
      timer -= 1;
      postMessage({ isTimerRunning, timer });
    }, 10);
  }
}

function pauseTimer(timer: number) {
  isStopWatchRunning = false;
  clearInterval(stopWatchInterval);
  postMessage({ isStopWatchRunning, timer });
}
