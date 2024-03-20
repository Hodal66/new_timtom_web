/* eslint-disable react/prop-types */
function IconExist({width, height, fill, strokeCollor,strokeWidth, strokeLineJoin}) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 25"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.5 12.5H16.5" stroke={strokeCollor} strokeWidth={strokeWidth} />
        <path
          d="M12.5 8.5L16.5 12.5L12.5 16.5"
          stroke={strokeCollor}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLineJoin}
          strokeLinejoin="round"
        />
        <path
          d="M3.5 9.5V6.5C3.5 4.84315 4.84315 3.5 6.5 3.5H18.5C20.1569 3.5 21.5 4.84315 21.5 6.5V18.5C21.5 20.1569 20.1569 21.5 18.5 21.5H6.5C4.84315 21.5 3.5 20.1569 3.5 18.5V15.5"
          stroke="black"
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
}

export default IconExist;
