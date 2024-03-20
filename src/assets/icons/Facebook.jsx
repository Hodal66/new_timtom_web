/* eslint-disable react/prop-types */
function Facebook({width, height, fill, strokeCollor, strokeLineJoin,}) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 44 45"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width={width} height={height} rx="22" fill="white" />
        <path
          d="M32 22.4999C32 16.977 27.5229 12.4999 22 12.4999C16.4771 12.4999 12 16.977 12 22.4999C12 27.4912 15.6569 31.6282 20.4375 32.3784V25.3905H17.8984V22.4999H20.4375V20.2968C20.4375 17.7905 21.9304 16.4062 24.2146 16.4062C25.3087 16.4062 26.4531 16.6015 26.4531 16.6015V19.0624H25.1921C23.9499 19.0624 23.5625 19.8332 23.5625 20.6241V22.4999H26.3359L25.8926 25.3905H23.5625V32.3784C28.3431 31.6282 32 27.4912 32 22.4999Z"
          stroke={strokeCollor}
          strokeLinejoin={strokeLineJoin}
        />
      </svg>
    </div>
  );
}

export default Facebook;
