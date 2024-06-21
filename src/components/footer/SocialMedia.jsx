/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { style } from "../../style";

function SocialMedia({
  phoneNumber,
  facebookUsername,
  instagramUsername,
  linkedInUsername,
  twitterUsername,
}) {

  return (
    <div>
      <div className="flex gap-4 ">
        <Link
          to={`https://www.facebook.com/${facebookUsername}`}
          target="_blank"
        >
          <img
            src="/images/SocialMedia/Facebook.png"
            alt=""
            className={`${style.hoverTransitionScale}`}
          />
        </Link>
        <Link to={`https://wa.me/${phoneNumber}`} target="_blank">
          <img
            src="/public/images/SocialMedia/WhatSap.png"
            alt=""
            className={`${style.hoverTransitionScale}`}
          />
        </Link>
        <Link
          to={`https://www.linkedin.com/in/${linkedInUsername}`}
          target="_blank"
        >
          <img
            src="/images/SocialMedia/LinkedIn.png"
            alt=""
            className={`${style.hoverTransitionScale}`}
          />
        </Link>
        <Link to={`https://twitter.com/${twitterUsername}`} target="_blank">
          <img
            src="/images/SocialMedia/Twitter.png"
            alt=""
            className={`${style.hoverTransitionScale}`}
          />
        </Link>
        <Link
          to={`https://www.instagram.com/${instagramUsername}`}
          target="_blank"
        >
          <img
            src="/images/SocialMedia/Instagram.png"
            alt=""
            className={`${style.hoverTransitionScale}`}
          />
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
