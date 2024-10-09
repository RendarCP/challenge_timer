import React, { useEffect, useRef, useState } from 'react';

interface ISmoothCircleTimer {
  duration: number;
  size?: number | string;
  backgroundColor?: string;
  progressColor?: string;
  textColor?: string;
  isRunning?: boolean;
  onComplete?: () => void;
  fullSize?: boolean;
  mode: string;
}

const SmoothCircleTimer = ({
  duration,
  size = 200,
  fullSize = false,
  backgroundColor = '#e6e6e6',
  progressColor = '#3b82f6',
  textColor = '#000000',
  isRunning,
  onComplete,
  mode = 'timer', // 'timer' or 'stopwatch'
}: ISmoothCircleTimer) => {
  const [time, setTime] = useState(mode === 'timer' ? duration : 0);
  const requestRef = useRef();
  const startTimeRef = useRef();
  const containerRef = useRef(null);
  const [currentSize, setCurrentSize] = useState(size);

  useEffect(() => {
    const updateSize = () => {
      if (fullSize && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        setCurrentSize(Math.min(containerWidth, containerHeight));
      } else {
        setCurrentSize(size);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [fullSize, size]);

  const strokeWidth = currentSize / 20;
  const center = currentSize / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const animate = timestamp => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp - (mode === 'timer' ? 0 : time * 1000);
    }
    const elapsedTime = (timestamp - startTimeRef.current) / 1000;
    const newTime =
      mode === 'timer' ? Math.max(duration - elapsedTime, 0) : elapsedTime;

    setTime(newTime);

    if ((mode === 'timer' && newTime > 0) || mode === 'stopwatch') {
      requestRef.current = requestAnimationFrame(animate);
    } else if (mode === 'timer' && newTime === 0) {
      onComplete();
    }
  };

  useEffect(() => {
    if (isRunning) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning, mode]);

  useEffect(() => {
    setTime(mode === 'timer' ? duration : 0);
    startTimeRef.current = null;
  }, [duration, mode]);

  // 변경된 부분: progress 계산 로직
  const progress =
    mode === 'timer'
      ? 1 - time / duration // 타이머 모드에서는 1에서 시작해서 0으로 감소
      : time / (duration || Math.max(time, 1)); // 스톱워치 모드

  // 변경된 부분: strokeDashoffset 계산 로직
  // const strokeDashoffset = progress * circumference;

  const strokeDashoffset =
    mode === 'timer'
      ? progress * circumference
      : (1 - progress) * circumference;

  const containerStyle = fullSize
    ? { width: '100%', height: '100%' }
    : { width: size, height: size };

  const formatTime = time => {
    const absTime = Math.abs(time);
    const minutes = Math.floor(absTime / 60);
    const seconds = Math.floor(absTime % 60);
    const milliseconds = Math.floor((absTime % 1) * 100);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div ref={containerRef} style={containerStyle} className="relative">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${currentSize} ${currentSize}`}
        className="transform -rotate-90"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold" style={{ color: textColor }}>
          {formatTime(time)}
        </span>
      </div>
    </div>
  );
};

export default SmoothCircleTimer;
