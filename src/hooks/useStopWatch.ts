import { MutableRefObject, useEffect, useRef, useState } from 'react';

import { stopWatchWorker } from '../utils/initWorker';

const useStopWatch = (storage: any) => {
  const workerRef: MutableRefObject<any> = useRef<any>(null);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // const storage = localStorage.getItem('challenge_timer_stopWatch');
  // initial localstorage data
  useEffect((): void => {
    if (storage !== null) {
      const data: any = JSON.parse(storage);
      setTimer(data.stopwatch);
    }
  }, []);

  // initial webworker
  useEffect((): (() => void) => {
    // Initialize the web worker
    workerRef.current = stopWatchWorker;

    // Handle messages from the worker
    workerRef.current.onmessage = (e: any): void => {
      setIsTimerRunning(e.data.isStopWatchRunning);
      setTimer(e.data.timer);
    };

    // Clean up the worker on unmount
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const startTimer: () => void = (): void => {
    if (storage !== null) {
      const data: any = JSON.parse(storage);
      workerRef.current.postMessage({
        type: 'start',
        stopwatch: data.stopwatch,
      });
    } else {
      workerRef.current.postMessage({ type: 'start', stopwatch: 0 });
    }
  };

  const pauseTimer: () => void = (): void => {
    workerRef.current.postMessage({ type: 'pause', stopwatch: timer });
  };

  const stopTimer: () => void = (): void => {
    workerRef.current.postMessage({ type: 'stop' });
    setTimer(0);
  };

  const resetTimer: () => void = (): void => {
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

export default useStopWatch;
