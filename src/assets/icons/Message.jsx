/* eslint-disable react/prop-types */
function Message({
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
          d="M14 20.5L22 25.5L30 20.5M15 31.5H29C30.1046 31.5 31 30.6046 31 29.5V21.5C31 20.3954 30.1046 19.5 29 19.5H15C13.8954 19.5 13 20.3954 13 21.5V29.5C13 30.6046 13.8954 31.5 15 31.5Z"
          stroke={strokeCollor}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLineJoin}
          strokeLinejoin={strokeLineJoin}
        />
      </svg>
    </div>
  );
}

export default Message;
