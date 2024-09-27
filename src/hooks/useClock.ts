import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';

import useInterval from './useInterval';

const useClock: () => {
  time: Dayjs | null;
  hours: string;
  minutes: string;
  seconds: string;
} = (): {
  time: Dayjs | null;
  hours: string;
  minutes: string;
  seconds: string;
} => {
  const [time, setTime] = useState<Dayjs | null>(dayjs());

  useInterval((): void => {
    setTime(dayjs());
  }, 10);

  const hours: string = dayjs(time).format('HH');
  const minutes: string = dayjs(time).format('mm');
  const seconds: string = dayjs(time).format('ss');

  return { time, hours, minutes, seconds };
};

export default useClock;
