import React from 'react';

const CircleProgressBar = ({
  percentage,
  text,
  color = '#ff5722',
  size,
}: any) => {
  const radius = size / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  // Calculate the progress based on the percentage and start from the top
  const progress = (percentage / 100) * circumference;

  return (
    <svg className="circle-progress-bar" width={size} height={size}>
      <circle
        className="circle-progress-bar-background"
        cx={radius}
        cy={radius}
        r={radius - 5} // Adjust the thickness of the background circle
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth="10"
      />
      <circle
        className="circle-progress-bar-progress"
        cx={radius}
        cy={radius}
        r={radius - 5} // Adjust the thickness of the progress circle
        fill="transparent"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress} // Invert the progress
        transform={`rotate(-90 ${radius} ${radius})`} // Rotate the circle 90 degrees counter-clockwise
      />
      <text
        className="circle-progress-bar-text"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={size / 10} // Adjust the font size based on the size of the SVG container
        fill="#333333"
      >
        {text}
      </text>
    </svg>
  );
};

export default CircleProgressBar;
