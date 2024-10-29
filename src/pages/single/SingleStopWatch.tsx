import { Pause, Play, TimerOff } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import SmoothCircleTimer from '@/components/SmoothCircleTimer';
import Spacer from '@/components/core/Spacer';
import { Text } from '@/components/core/Text';

import useStopWatch from '@/hooks/useStopWatch';

import { ContentFlexContainer } from '@/styles/MainContainer';

export default function SingleStopWatch() {
  const [stopWatch, setStopWatch] = useState(0);
  const {
    timer,
    milliseconds: stMilli,
    seconds: stSeconds,
    minutes: stMinutes,
    hours: stHours,
    startTimer: onActive,
    pauseTimer: onPause,
    isPause,
    isTimerRunning: isActive,
  } = useStopWatch(stopWatch);

  useEffect(() => {
    setStopWatch(timer);
  }, [timer]);

  const TText = `${stHours}시간 ${stMinutes}분 ${stSeconds}초 ${stMilli}`;
  return (
    <ContentFlexContainer>
      <div>
        <Text typography="h4">스탑워치</Text>
      </div>
      <div>
        <div style={{ height: '30vh' }}>
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
          <button
            onClick={() => onActive()}
            className={`btn btn-primary text-white w-1/3 ${
              isActive ? 'btn-disabled' : ''
            }`}
          >
            <Play />
            시작
          </button>
          <Spacer left={10} />
          <button
            onClick={() => onPause()}
            className={`btn btn-neutral text-white w-1/3 ${
              isActive ? '' : 'btn-disabled'
            }`}
          >
            <Pause />
            정지
          </button>
          <Spacer left={10} />
          <button
            onClick={() => stop}
            className={`btn btn-error text-white w-1/3`}
          >
            <TimerOff />
            종료
          </button>
        </div>
        <div style={{ overflow: 'scroll', height: 200 }}>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
          <div>테스트</div>
        </div>
      </div>
    </ContentFlexContainer>
  );
}
