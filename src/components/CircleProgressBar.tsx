import React from 'react';

const CircleProgressBar = ({
  size,
  percentage,
  text,
  showcircle,
  color = '#ff5722',
}: any) => {
  const radius = 40; // Adjust the radius as needed
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  const progress = (percentage / 100) * circumference;

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {showcircle && (
        <>
          <circle
            cx="50%"
            cy="50%"
            r="40%" // Adjust the thickness of the background circle
            fill="transparent"
            stroke="#e6e6e6"
            strokeWidth="5"
          />
          <circle
            cx="50%"
            cy="50%"
            r="40%" // Adjust the thickness of the progress circle
            fill="transparent"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress} // Start from the top
            transform={`rotate(-90 50 50)`} // Rotate the circle 90 degrees counter-clockwise
          />
        </>
      )}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="8" // Adjust the font size as needed
        fill="#fff"
      >
        {text}
      </text>
    </svg>
  );
};

export default CircleProgressBar;
