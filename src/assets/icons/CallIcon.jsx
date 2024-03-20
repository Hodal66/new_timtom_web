/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
function CallIcon({height,width,fill, strokeColor,strokeWidth,strokeLinejoin}) {
  return (
    <div>
      <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.1627 24.8603L24.8581 26.165C23.2887 25.4326 21.9404 24.5421 20.9443 23.5557C19.4563 22.0822 18.6607 20.4886 18.335 19.642L19.6397 18.3373C20 17.977 20 17.3929 19.6397 17.0327L16.3782 13.7712C16.0179 13.4109 15.43 13.4058 15.0827 13.7786C13.0944 15.9122 10.6511 19.7855 17.6828 26.8172C24.7145 33.8489 28.5878 31.4055 30.7214 29.4174C31.0942 29.07 31.0891 28.4821 30.7288 28.1218L27.4673 24.8603C27.1071 24.5001 26.523 24.5001 26.1627 24.8603Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinejoin}
          strokeLinejoin={strokeLinejoin}
        />
      </svg>
    </div>
  );
}

export default CallIcon;
