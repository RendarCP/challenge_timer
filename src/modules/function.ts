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

// 초 단위로 계산하는 함수
function calculateSecondsPercentage(seconds: number) {
  const SECONDS_IN_DAY = 24 * 60 * 60; // 86400초
  const percentage = (seconds / SECONDS_IN_DAY) * 100;
  return percentage.toFixed(4);
}

// 분 단위로 계산하는 함수
function calculateMinutesPercentage(minutes: number) {
  const seconds = minutes * 60;
  return calculateSecondsPercentage(seconds);
}

function addSecondsToNow(seconds: number) {
  const now = new Date();
  return new Date(now.getTime() + seconds * 1000);
}

export {
  convertToSeconds,
  calculatePercentage,
  calculateSecondsPercentage,
  addSecondsToNow,
};
