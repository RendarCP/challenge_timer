import { useEffect, useRef, useState } from 'react';

import { timerWorker } from '../utils/initWorker';

const useTimer = (time: number) => {
  const workerRef = useRef<any>();
  const [timer, setTimer] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

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

  // Hours calculation
  const hours: string = Math.floor(timer / 360000)
    .toString()
    .padStart(2, '0');

  // Minutes calculation
  const minutes: string = Math.floor((timer % 360000) / 6000)
    .toString()
    .padStart(2, '0');

  // Seconds calculation
  const seconds: string = Math.floor((timer % 6000) / 100)
    .toString()
    .padStart(2, '0');

  // Milliseconds calculation
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
    timer,
    isRunning,
  };
};

export default useTimer;
