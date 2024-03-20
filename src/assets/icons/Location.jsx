/* eslint-disable react/prop-types */
function Location({
  width,
  height,
  fill,
  strokeCollor,
  strokeWidth,
  strokeLineJoin,
}) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 44 45"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 20.0455C28 26.5909 22 31.5 22 31.5C22 31.5 16 26.5909 16 20.0455C16 16.7727 17.875 13.5 22 13.5C26.125 13.5 28 16.7727 28 20.0455Z"
          stroke={strokeCollor}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLineJoin}
          strokeLinejoin={strokeLineJoin}
        />
        <circle
          cx="22"
          cy="19.5"
          r="2"
          stroke={strokeCollor}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
}

export default Location;
