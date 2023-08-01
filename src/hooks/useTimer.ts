import { useEffect, useRef, useState } from 'react';
import { timerWorker } from '../utils/initWorker';

const useTimer = () => {
  const workerRef = useRef<any>();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    // Initialize the web worker
    workerRef.current = timerWorker;

    // Handle messages from the worker
    workerRef.current.onmessage = (e: any) => {
      setIsTimerRunning(e.data);
    };

    // Clean up the worker on unmount
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  useEffect(() => {
    if (isTimerRunning) {
      const timerInterval = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [isTimerRunning]);

  const startTimer = () => {
    workerRef.current.postMessage('start');
  };

  const stopTimer = () => {
    workerRef.current.postMessage('stop');
  };

  const resetTimer = () => {
    setElapsedTime(0);
  };

  return { startTimer, stopTimer, resetTimer, elapsedTime, isTimerRunning };
};

export default useTimer;
