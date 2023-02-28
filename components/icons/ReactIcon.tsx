export const ReactIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width={width} height={height}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
};
