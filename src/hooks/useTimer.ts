import { useEffect, useRef, useState } from 'react';
import { timerWorker } from '../utils/initWorker';

const useTimer = () => {
  const workerRef = useRef<any>();
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const storage = localStorage.getItem('challenge_timer_stopWatch');
  // initial localstorage data
  useEffect(() => {
    if (storage !== null) {
      const data = JSON.parse(storage);
      setTimer(data.stopwatch);
    }
  }, []);

  // initial webworker
  useEffect(() => {
    // Initialize the web worker
    workerRef.current = timerWorker;

    // Handle messages from the worker
    workerRef.current.onmessage = (e: any) => {
      setIsTimerRunning(e.data.isTimerRunning);
      setTimer(e.data.timer);
    };

    // Clean up the worker on unmount
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const startTimer = () => {
    if (storage !== null) {
      const data = JSON.parse(storage);
      workerRef.current.postMessage({
        type: 'start',
        stopwatch: data.stopwatch,
      });
    } else {
      workerRef.current.postMessage({ type: 'start', stopwatch: 0 });
    }
  };

  const pauseTimer = () => {
    workerRef.current.postMessage({ type: 'pause', stopwatch: timer });
    // localStorage.setItem(
    //   'challenge_timer_stopWatch',
    //   JSON.stringify({
    //     stopwatch: timer,
    //   })
    // );
  };

  const stopTimer = () => {
    workerRef.current.postMessage({ type: 'stop' });
    setTimer(0);
    // localStorage.setItem(
    //   'challenge_timer_stopWatch',
    //   JSON.stringify({
    //     stopwatch: 0,
    //   })
    // );
  };

  const resetTimer = () => {
    setTimer(0);
  };

  // Hours calculation
  const hours = Math.floor(timer / 360000)
    .toString()
    .padStart(2, '0');

  // Minutes calculation
  const minutes = Math.floor((timer % 360000) / 6000)
    .toString()
    .padStart(2, '0');

  // Seconds calculation
  const seconds = Math.floor((timer % 6000) / 100)
    .toString()
    .padStart(2, '0');

  // Milliseconds calculation
  const milliseconds = (timer % 100).toString().padStart(2, '0');

  return {
    hours,
    minutes,
    seconds,
    milliseconds,
    startTimer,
    pauseTimer,
    stopTimer,
    resetTimer,
    timer,
    isTimerRunning,
  };
};

export default useTimer;
