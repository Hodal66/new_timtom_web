import SocialMedia from "../footer/SocialMedia";

/* eslint-disable react/no-unknown-property */
function TopNavigationBar() {
  const phoneNumber = "+250782439775";
  const facebookUsername = "timtom.aviation";
  const instagramUsername = "timtomaviation7";
  const linkedInUsername =
    "timtom-aviation-ltd-901301271/?originalSubdomain=rw";
  const twitterUsername = "TimtomAviation";
  return (
    <div className="hidden lg:flex bg-gradient-to-r from-primary to-secondary justify-between absolute px-8 z-20 w-full">
      <ul className="flex gap-2  text-white text-md font-semibold cursor-no-drop textWhite">
        <li className="flex justify-center items-center">
          <svg
            width="44"
            height="45"
            viewBox="0 0 44 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.1627 24.8603L24.8581 26.165C23.2887 25.4326 21.9404 24.5421 20.9443 23.5557C19.4563 22.0822 18.6607 20.4886 18.335 19.642L19.6397 18.3373C20 17.977 20 17.3929 19.6397 17.0327L16.3782 13.7712C16.0179 13.4109 15.43 13.4058 15.0827 13.7786C13.0944 15.9122 10.6511 19.7855 17.6828 26.8172C24.7145 33.8489 28.5878 31.4055 30.7214 29.4174C31.0942 29.07 31.0891 28.4821 30.7288 28.1218L27.4673 24.8603C27.1071 24.5001 26.523 24.5001 26.1627 24.8603Z"
              stroke="#EB7411"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>(+250)788519634</span>
        </li>
        <li className="flex justify-center items-center">
          <svg
            width="44"
            height="45"
            viewBox="0 0 44 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 20.5L22 25.5L30 20.5M15 31.5H29C30.1046 31.5 31 30.6046 31 29.5V21.5C31 20.3954 30.1046 19.5 29 19.5H15C13.8954 19.5 13 20.3954 13 21.5V29.5C13 30.6046 13.8954 31.5 15 31.5Z"
              stroke="#EB7411"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>info@timtomaviation.com</span>
        </li>
        <li className="flex justify-center items-center">
          <svg
            width="44"
            height="45"
            viewBox="0 0 44 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 20.0455C28 26.5909 22 31.5 22 31.5C22 31.5 16 26.5909 16 20.0455C16 16.7727 17.875 13.5 22 13.5C26.125 13.5 28 16.7727 28 20.0455Z"
              stroke="#EB7411"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="22" cy="19.5" r="2" stroke="#EB7411" strokeWidth="2" />
          </svg>
          <span>kabeza road, KK 18 AV</span>
        </li>
      </ul>
      <div className="flex justify-end py-2">
        <SocialMedia
          phoneNumber={phoneNumber}
          facebookUsername={facebookUsername}
          instagramUsername={instagramUsername}
          linkedInUsername={linkedInUsername}
          twitterUsername={twitterUsername}
        />
      </div>
    </div>
  );
}

export default TopNavigationBar;
