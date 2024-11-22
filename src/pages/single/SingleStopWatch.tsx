import { Disc2, Pause, Play, TimerOff } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import SmoothCircleTimer from '@/components/SmoothCircleTimer';
import Spacer from '@/components/core/Spacer';
import { Text } from '@/components/core/Text';

import useStopWatch from '@/hooks/useStopWatch';

import { ContentFlexContainer } from '@/styles/MainContainer';

export default function SingleStopWatch() {
  const [lapTime, setLapTime] = useState([]);
  console.log('lapTime', lapTime);
  const [stopWatch, setStopWatch] = useState(0);
  const {
    timer,
    milliseconds: stMilli,
    seconds: stSeconds,
    minutes: stMinutes,
    hours: stHours,
    startTimer: onActive,
    pauseTimer: onPause,
    resetTimer: onReset,
    isPause,
    isTimerRunning: isActive,
  } = useStopWatch(stopWatch);

  useEffect(() => {
    setStopWatch(timer);
  }, [timer]);

  const handlePushLapTime = () => {
    console.log('클릭됨');
    setLapTime(prevLapTime => [
      ...prevLapTime,
      {
        id: prevLapTime.length + 1,
        name: `랩 ${prevLapTime.length + 1}`,
        content: `${stHours}:${stMinutes}:${stSeconds}.${stMilli}`,
      },
    ]);
  };

  const handleRestLapTime = () => {
    setLapTime([]);
    onReset();
  };

  const TText = `${stHours}시간 ${stMinutes}분 ${stSeconds}초 ${stMilli}`;
  return (
    <ContentFlexContainer>
      <div>
        <Text typography="h4">스탑워치</Text>
      </div>
      <div>
        <div style={{ height: '10vh' }}>
          <SmoothCircleTimer
            percentage={Math.floor((Number(stSeconds) / 60) * 100)}
            duration={1000}
            fullSize
            backgroundColor="#e0e0e0"
            progressColor="#4caf50"
            textColor="#e0e0e0"
            text={TText}
          />
        </div>
        <div className="flex justify-center">
          {isActive ? (
            <button
              onClick={() => onPause()}
              className={`btn btn-error text-white w-1/2 ${
                isActive ? '' : 'btn-disabled'
              }`}
            >
              <Pause />
              정지
            </button>
          ) : (
            <button
              onClick={() => onActive()}
              className={`btn btn-primary text-white w-1/2 ${
                isActive ? 'btn-disabled' : ''
              }`}
            >
              <Play />
              시작
            </button>
          )}

          <Spacer left={10} />
          {isActive ? (
            <button
              onClick={() => handlePushLapTime()}
              className={`btn btn-neutral text-white w-1/2 ${
                isActive ? '' : 'btn-disabled'
              }`}
            >
              <Disc2 />
              기록
            </button>
          ) : (
            <button
              onClick={() => handleRestLapTime()}
              className={`btn btn-neutral text-white w-1/2 ${
                lapTime.length > 0 ? '' : 'btn-disabled'
              }`}
            >
              <Disc2 />
              {lapTime.length > 0 ? '재설정' : '기록'}
            </button>
          )}
        </div>
        <Spacer top={20} />
        <Text typography="h4">랩타임</Text>
        <Spacer top={20} />
        <div style={{ overflow: 'scroll', height: 200 }}>
          {lapTime.map(lap => {
            return (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{lap.name}</div>
                <div>{lap.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </ContentFlexContainer>
  );
}
