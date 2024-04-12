/* eslint-disable react/prop-types */
function IconUser({
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
        viewBox="0 0 20 21"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="9.86538"
          cy="5.85318"
          r="2.43618"
          stroke={strokeCollor}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLineJoin}
          strokeLinejoin={strokeLineJoin}
        />
        <path
          d="M9.86538 11.5376C8.24126 11.5376 4.18096 12.3497 3.3689 14.7858C4.18096 17.222 7.4292 18.0341 9.86538 18.0341C12.3016 18.0341 15.5498 17.222 16.3619 14.7858C15.5498 12.3497 11.4895 11.5376 9.86538 11.5376Z"
          stroke={strokeCollor}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLineJoin}
          strokeLinejoin={strokeLineJoin}
        />
      </svg>
    </div>
  );
}

export default IconUser;
