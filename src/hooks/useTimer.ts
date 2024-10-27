import { useEffect, useRef, useState } from 'react';

import { timerWorker } from '../utils/initWorker';

const useTimer = (time: number) => {
  const workerRef = useRef<any>();
  const convertToCentiseconds = (seconds: number) => seconds * 100;
  const [timer, setTimer] = useState(convertToCentiseconds(time));
  const [isRunning, setIsRunning] = useState(false);

  // console.log('timer', timer);

  useEffect(() => {
    workerRef.current = timerWorker;

    workerRef.current.onmessage = (e: any) => {
      setIsRunning(e.data.isTimerRunning);
      setTimer(e.data.timer);
    };
    return (): void => {
      workerRef.current.terminate();
    };
  }, []);

  const startTimer: () => void = (): void => {
    console.log('클릭됨 ₩~~');
    workerRef.current.postMessage({
      type: 'start_timer',
      timer,
    });
  };

  const pauseTimer = () => {
    workerRef.current.postMessage({ type: 'pause_timer', timer });
  };

  const stopTimer = () => {
    workerRef.current.postMessage({ type: 'stop_timer' });
    setTimer(0);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  // Hours calculation (3600 seconds = 1 hour)
  const hours: string = Math.floor(timer / (100 * 60 * 60))
    .toString()
    .padStart(2, '0');

  // Minutes calculation (60 seconds = 1 minute)
  const minutes: string = Math.floor((timer % (100 * 60 * 60)) / (100 * 60))
    .toString()
    .padStart(2, '0');

  // Seconds calculation
  const seconds: string = Math.floor((timer % (100 * 60)) / 100)
    .toString()
    .padStart(2, '0');

  // Milliseconds calculation (centiseconds)
  const milliseconds: string = (timer % 100).toString().padStart(2, '0');

  return {
    hours,
    minutes,
    seconds,
    milliseconds,
    startTimer,
    pauseTimer,
    stopTimer,
    resetTimer,
    setTimer,
    timer,
    isRunning,
  };
};

export default useTimer;
