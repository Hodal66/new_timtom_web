import { style } from "../../style";
import backgroundImage from "/images/bgImage/asideImage.png";
function AsideGetAnyQuestion() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center h-[300px] font-semibold text-base flex flex-col gap-4 items-center py-8 px-4"
    >
      <div className="w-16 h-16">
        <img
          src="/images/SocialMedia/WhatSap.png"
          alt=""
          className={`${style.hoverTransitionScale} w-full h-full`}
        />
      </div>
      <p>Got any Questions? </p>
      <p>Call us Today!</p>
      <p className="font-bold text-lg krona-one-regular">+250 7824 39775</p>
      <p>info@timtomaviation.com</p>
    </div>
  );
}

export default AsideGetAnyQuestion;
