import React, { useState } from 'react';
import useInterval from './useInterval';
import dayjs, { Dayjs } from 'dayjs';

const useClock = () => {
  const [time, setTime] = useState<Dayjs | null>(dayjs());

  useInterval(() => {
    setTime(dayjs());
  }, 1000)

  const hours = dayjs(time).format('HH');
  const minutes = dayjs(time).format('mm');
  const seconds = dayjs(time).format('ss');

  return {time, hours, minutes, seconds};
}

export default useClock;