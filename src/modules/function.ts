const convertToSeconds = ({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}) => {
  // 입력값 유효성 검사
  // if (hours < 1 || hours > 23) {
  //   throw new Error('시간은 1~23 사이의 값이어야 합니다.');
  // }

  // if (minutes < 0 || minutes > 55 || minutes % 5 !== 0) {
  //   throw new Error('분은 0~55 사이의 5분 단위 값이어야 합니다.');
  // }

  // 시간을 초로 변환
  const hoursInSeconds = hours * 60 * 60;
  // 분을 초로 변환
  const minutesInSeconds = minutes * 60;

  // 총 초 반환
  return hoursInSeconds + minutesInSeconds;
};

export { convertToSeconds };
