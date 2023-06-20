import React from 'react';

const CircleProgressBar = ({ percentage }: any) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  // Calculate the progress based on the percentage
  // const progress = circumference - (percentage / 100) * circumference;
  const progress = (percentage / 100) * circumference;
  console.log('circumference', circumference);

  console.log('progress', progress);
  return (
    <svg className="circle-progress-bar" width="200" height="200">
      <circle
        className="circle-progress-bar-background"
        cx="100"
        cy="100"
        r={radius}
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth="10"
      />
      <circle
        className="circle-progress-bar-progress"
        cx="100"
        cy="100"
        r={radius}
        fill="transparent"
        stroke="#ff5722"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        // strokeDashoffset={progress}
        strokeDashoffset={circumference - progress} // Invert the progress
        transform={`rotate(-90 100 100)`} // Rotate the circle 90 degrees counter-clockwise
      />
      <text
        className="circle-progress-bar-text"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fill="#333333"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircleProgressBar;
