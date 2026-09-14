const ProgressCircle = (props) => {
  const {radius, progress, size, stroke, progressColor} = props;

  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <div
      className="relative flex justify-center items-center"
      style={{width: size, height: size}}>
      <svg width={size} height={size} className="-rotate-90 origin-center">
        {/* Background Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="white"
          strokeWidth={stroke}
        />
        {/* Progress Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={progressColor}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
        />
      </svg>
      {/* Percentage Text */}
      <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[14px] font-text text-white font-semibold text-foreground">
        {Math.round(progress)}%
      </span>
    </div>
  );
};

//   <svg width="200" height="200" viewBox="0 0 200 200">
//     {/* Rectangle */}
//     <rect x="10" y="10" width="50" height="50" fill="blue" />

//     {/* Circle */}
//     <circle cx="100" cy="35" r="25" fill="red" />

//     {/* Line */}
//     <line x1="0" y1="100" x2="200" y2="100" stroke="black" strokeWidth="2" />

//     {/* Text */}
//     <text x="10" y="150" fontSize="20" fill="green">
//       Hello
//     </text>
//   </svg>;

export default ProgressCircle;
