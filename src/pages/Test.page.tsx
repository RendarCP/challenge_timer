import React from 'react';
import Button from '../components/core/Buttons';
import Input from '../components/core/Input';
import { Text } from '../components/core/Text';
import useTimer from '../hooks/useTimer';
import { timerWorker } from '../utils/initWorker';

export default function TestPage() {
  const {
    startTimer,
    pauseTimer,
    stopTimer,
    resetTimer,
    elapsedTime,
    isTimerRunning,
  } = useTimer();
  return (
    <div>
      <Input />
      <Text color="red">테스트</Text>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <Button onClick={startTimer} disabled={isTimerRunning}>
        Start
      </Button>
      <Button onClick={pauseTimer}>pause</Button>
      <Button onClick={stopTimer} disabled={!isTimerRunning}>
        Stop
      </Button>
      <Button onClick={resetTimer}>Reset</Button>
    </div>
  );
}
