const convertToSeconds = ({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}) => {
  // 시간을 초로 변환
  const hoursInSeconds = hours * 60 * 60;
  // 분을 초로 변환
  const minutesInSeconds = minutes * 60;

  // 총 초 반환
  return hoursInSeconds + minutesInSeconds;
};

const calculatePercentage = (timer, timerValue) => {
  // timer는 초기값, timerValue는 현재 남은 값
  const percentage = ((timer - timerValue) / timer) * 100;
  return Number(percentage.toFixed(2)); // 소수점 2자리까지 표시
};

export { convertToSeconds, calculatePercentage };
