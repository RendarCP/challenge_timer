import React, { useEffect, useState } from 'react';
import useInterval from './useInterval';
import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);
const useStopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const storage = localStorage.getItem('challenge_timer_stopWatch');
    if (storage !== null) {
      const data = JSON.parse(storage);
      setTimer(data.stopwatch);
      setIsPause(true);
    }
  }, [isActive]);

  useInterval(() => {
    if (isActive) {
      setTimer(timer => timer + 1);
    }
  }, 10);

  const onActive = () => {
    setIsActive(!isActive);
  };

  const onPause = () => {
    setIsPause(!isPause);
    setIsActive(!isActive);
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
    timer,
    milliseconds,
    seconds,
    minutes,
    hours,
    onActive,
    onPause,
    isPause,
    isActive,
  };
};

export default useStopWatch;
