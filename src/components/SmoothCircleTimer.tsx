import React, { useEffect, useRef, useState } from 'react';

import useDeviceType from '@/hooks/useDeviceType';

interface ISmoothCircleTimer {
  percentage: number;
  duration: number;
  size?: number;
  fullSize?: boolean;
  backgroundColor?: string;
  progressColor?: string;
  textColor?: string;
  text?: string;
}

const SmoothCircleTimer = ({
  percentage,
  duration = 1000,
  size = 200,
  fullSize = false,
  backgroundColor = '#e6e6e6',
  progressColor = '#3b82f6',
  textColor = '#000000',
  text,
}: ISmoothCircleTimer) => {
  const isMobile = useDeviceType();
  const [currentPercentage, setCurrentPercentage] = useState(percentage);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const startPercentageRef = useRef(percentage);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSize, setCurrentSize] = useState<number>(size);

  // 현재 크기 사이즈 조절
  useEffect(() => {
    const updateSize = () => {
      if (fullSize && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        setCurrentSize(Math.min(containerWidth, containerHeight));
      } else {
        setCurrentSize(typeof size === 'number' ? size : parseInt(size));
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

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsedTime = timestamp - startTimeRef.current;
    const progress = Math.min(elapsedTime / duration, 1);
    const newPercentage =
      startPercentageRef.current +
      (percentage - startPercentageRef.current) * progress;

    setCurrentPercentage(newPercentage);

    if (progress < 1) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    startPercentageRef.current = currentPercentage;
    startTimeRef.current = undefined;
    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current!);
  }, [percentage, duration]);

  const strokeDashoffset = circumference * (1 - currentPercentage / 100);

  const containerStyle: React.CSSProperties = fullSize
    ? { width: '100%', height: '100%' }
    : { width: size, height: size };

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
        <span
          className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold`}
          style={{ color: textColor }}
        >
          {text || `${currentPercentage.toFixed(2)}%`}
        </span>
      </div>
    </div>
  );
};

export default SmoothCircleTimer;
