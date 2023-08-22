import { useEffect, useRef, useState } from 'react';
import { timerWorker } from '../utils/initWorker';

const useTimer = () => {
  const workerRef = useRef<any>();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  console.log('isTimerRunning', isTimerRunning);

  useEffect(() => {
    // Initialize the web worker
    workerRef.current = timerWorker;

    // Handle messages from the worker
    workerRef.current.onmessage = (e: any) => {
      console.log('-=========-=', e.data);
      setIsTimerRunning(e.data.isTimerRunning);
      setElapsedTime(e.data.timer);
    };

    // Clean up the worker on unmount
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  console.log('elapsedTime', elapsedTime);

  const storage = localStorage.getItem('challenge_timer_stopWatch');
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
    workerRef.current.postMessage({ type: 'pause', stopwatch: elapsedTime });
    localStorage.setItem(
      'challenge_timer_stopWatch',
      JSON.stringify({
        stopwatch: elapsedTime,
      })
    );
  };

  const stopTimer = () => {
    workerRef.current.postMessage({ type: 'stop' });
    setElapsedTime(0);
    localStorage.setItem(
      'challenge_timer_stopWatch',
      JSON.stringify({
        stopwatch: 0,
      })
    );
  };

  const resetTimer = () => {
    setElapsedTime(0);
  };

  return {
    startTimer,
    pauseTimer,
    stopTimer,
    resetTimer,
    elapsedTime,
    isTimerRunning,
  };
};

export default useTimer;
