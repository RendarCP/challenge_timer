import React from 'react';
import Button from '../components/core/Buttons';
import Input from '../components/core/Input';
import { Text } from '../components/core/Text';
import useTimer from '../hooks/useTimer';
import { timerWorker } from '../utils/initWorker';

export default function TestPage() {
  const { startTimer, pauseTimer,  stopTimer, resetTimer, elapsedTime, isTimerRunning } =
    useTimer();
  return (
    <div>
      <Input />
      <Text color="red">테스트</Text>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <button onClick={startTimer} disabled={isTimerRunning}>
        Start
      </button>
      <button onClick={pauseTimer}>
        pause
      </button>
      <button onClick={stopTimer} disabled={!isTimerRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
      {/* <button
        onClick={() => {
          timerWorker.postMessage({ hello: 'world' });
        }}
      >
        워커 테스트
      </button> */}
    </div>
  );
}
