import { Link } from "react-router-dom";
import { style } from "../../style";
import Pragraph from "../Pragraph";

/* eslint-disable react/no-unknown-property */
function OtherFirstTopNavigationBar() {
  const phoneNumber = "+250782439775";
  const facebookUsername = "timtom.aviation";
  const instagramUsername = "timtomaviation7";
  const linkedInUsername =
    "timtom-aviation-ltd-901301271/?originalSubdomain=rw";
  const twitterUsername = "TimtomAviation";
  return (
    <div className="hidden lg:grid grid-cols-2 absolute z-20 w-full">
      <Pragraph
        pragraphContent={"we can give you best services at the time!!!"}
        classNameText={"py-2 bg-gray-light px-12"}
      />
      <div className="flex justify-end pr-8 bg-gray-light py-2">
        <div className="flex gap-4 ">
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
            to={`https://www.facebook.com/${facebookUsername}`}
            target="_blank"
          >
            <img
              src="/images/SocialMedia/Facebook.png"
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
    </div>
  );
}

export default OtherFirstTopNavigationBar;
