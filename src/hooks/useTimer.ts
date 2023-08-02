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

  // useEffect(() => {
  //   if (isTimerRunning) {
  //     const timerInterval = setInterval(() => {
  //       setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
  //     }, 10);

  //     return () => {
  //       clearInterval(timerInterval);
  //     };
  //   }
  // }, [isTimerRunning]);

  const startTimer = () => {
    workerRef.current.postMessage('start');
  };

  const pauseTimer = () => {
    workerRef.current.postMessage('pause');
  }

  const stopTimer = () => {
    workerRef.current.postMessage('stop');
  };

  const resetTimer = () => {
    setElapsedTime(0);
  };

  return { startTimer, pauseTimer, stopTimer, resetTimer, elapsedTime, isTimerRunning };
};

export default useTimer;
