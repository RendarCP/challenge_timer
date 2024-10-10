import React, { useEffect, useRef, useState } from 'react';

const CircleProgressBar = ({
  percentage,
  text,
  size = 100,
  fullSize = false,
  backgroundColor = '#e0e0de',
  progressColor = '#3498db',
}) => {
  const [progress, setProgress] = useState(percentage);
  const lastPercentageRef = useRef(percentage);
  const animationRef = useRef();

  useEffect(() => {
    setProgress(percentage);
    if (percentage !== lastPercentageRef.current) {
      lastPercentageRef.current = percentage;
      animationRef.current = requestAnimationFrame(updateProgress);
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [percentage]);

  const updateProgress = () => {
    setProgress(prevProgress => {
      const diff = percentage - prevProgress;
      const step = diff * 0.1;
      const newProgress = prevProgress + step;

      if (Math.abs(diff) < 0.1) {
        cancelAnimationFrame(animationRef.current);
        return percentage;
      }

      animationRef.current = requestAnimationFrame(updateProgress);
      return newProgress;
    });
  };

  const sqSize = fullSize ? '100%' : size;
  const radius = fullSize ? 45 : size / 2 - 5;
  const viewBox = fullSize ? '0 0 100 100' : `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="circle-background"
        cx="50%"
        cy="50%"
        r={radius}
        fill="none"
        stroke={backgroundColor}
        strokeWidth="5"
      />
      <circle
        className="circle-progress"
        cx="50%"
        cy="50%"
        r={radius}
        fill="none"
        stroke={progressColor}
        strokeWidth="5"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
        style={{ transition: 'stroke-dashoffset 0.1s linear' }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize={fullSize ? '6' : size / 6}
      >
        {text || `${progress.toFixed(2)}%`}
      </text>
    </svg>
  );
};

export default CircleProgressBar;
