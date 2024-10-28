import React, { useState } from 'react';

import SmoothCircleTimer from '@/components/SmoothCircleTimer';

const TestPage = () => {
  const [duration, setDuration] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const [timerSize, setTimerSize] = useState(500);
  const [mode, setMode] = useState('timer');

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    if (mode === 'timer') {
      setDuration(60);
    }
  };
  const handleComplete = () => {
    setIsRunning(false);
    alert(
      mode === 'timer' ? '타이머가 완료되었습니다!' : '스톱워치를 정지했습니다!'
    );
  };
  return (
    <div>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <button className="btn btn-warning">warning</button>
      <button className="btn btn-error">error</button>

      {/* <SmoothCircleTimer
        duration={duration}
        fullSize={isFullSize}
        size={timerSize}
        mode={mode}
      /> */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={handleStart}
          className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          disabled={isRunning}
        >
          시작
        </button>
        <button
          onClick={handlePause}
          className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
          disabled={!isRunning}
        >
          일시정지
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        >
          리셋
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <label htmlFor="mode" className="mr-2 text-lg">
            모드:
          </label>
          <select
            id="mode"
            value={mode}
            onChange={e => setMode(e.target.value)}
            className="border rounded px-3 py-2 text-lg"
          >
            <option value="timer">타이머</option>
            <option value="stopwatch">스톱워치</option>
          </select>
        </div>
        {mode === 'timer' && (
          <div>
            <label htmlFor="duration" className="mr-2 text-lg">
              타이머 설정 (초):
            </label>
            <input
              id="duration"
              type="number"
              value={duration}
              onChange={e => setDuration(Math.max(1, parseInt(e.target.value)))}
              className="border rounded px-3 py-2 text-lg w-24"
              min="1"
            />
          </div>
        )}
        <div>
          <label htmlFor="size" className="mr-2 text-lg">
            크기:
          </label>
          <input
            id="size"
            type="number"
            value={timerSize}
            onChange={e =>
              setTimerSize(Math.max(100, parseInt(e.target.value)))
            }
            className="border rounded px-3 py-2 text-lg w-24"
            min="100"
            disabled={isFullSize}
          />
        </div>
        <div className="flex items-center">
          <input
            id="fullSize"
            type="checkbox"
            checked={isFullSize}
            onChange={e => setIsFullSize(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="fullSize" className="text-lg">
            전체 크기로 표시
          </label>
        </div>
        {/* <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
        <div
          className={`bg-white rounded-lg shadow-lg p-6 ${
            isFullSize ? 'w-full h-full' : 'w-full max-w-2xl'
          }`}
        >
          <div
            className={`${
              isFullSize
                ? 'w-full h-[calc(100vh-200px)]'
                : 'w-full aspect-square'
            } mb-6`}
          >
            <SmoothCircleTimer
              duration={duration}
              isRunning={isRunning}
              onComplete={handleComplete}
              fullSize={isFullSize}
              size={timerSize}
              mode={mode}
            />
          </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TestPage;
