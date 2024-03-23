import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/Arrow";
import Message from "../../assets/icons/Message";
import HeadingOne from "../Headings/HeadingOne";
import HeadingThree from "../Headings/HeadingThree";
import Pragraph from "../Pragraph";

function Footer() {
  const phoneNumber = "+250782439775";
  const facebookUsername = "timtom.aviation";
  const instagramUsername = "timtomaviation7";
  const linkedInUsername = "timtom-aviation-ltd-901301271/?originalSubdomain=rw";
  const twitterUsername = "TimtomAviation";
  return (
    <div className="bg-blue py-4 flex flex-col gap-4">
      <main className="mainContainer grid grid-cols-4 px-12 gap-4">
        <section>
          <HeadingOne
            className={"bg-orange"}
            headingTitle={"TIMTOM AVIATION LTD"}
          />
          <Pragraph
            pragraphContent={
              "To become an African hub in providing knowledge and consultancy service in the field of aviation, hospitality and tourism, and also ensure to provide the best, updated and relevant knowledge tour students so that they are competitive on the world job market."
            }
          />
          <div className="flex">
            <Message
              width={45}
              height={45}
              fill={"none"}
              strokeCollor={"red"}
              strokeWidth={1}
            />
            <div>
              <HeadingThree headingTitle={"Need a Consultation?"} />
              <Pragraph pragraphContent={"+250788519634"} />
            </div>
          </div>
        </section>
        <section>
          <ul>
            <li>
              <HeadingOne headingTitle={"The Industry  Package"} />
            </li>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>Airline and airport management</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>Air cargo management</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>Faundation in travel and tourism</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>Civil aviation management</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>Icao courses management</span>
              </li>
            </Link>
          </ul>
        </section>
        <section>
          <ul>
            <li>
              <HeadingOne headingTitle={"The Industry  Package"} />
            </li>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>About Us</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>FAQs</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>Our Team </span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>Testmonials</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>News List View</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2">
                <span>
                  <Arrow />
                </span>
                <span>Contact</span>
              </li>
            </Link>
          </ul>
        </section>
        <section>
          <div className="grid grid-cols-3">
            <img src="/images/HomeImage44.png" alt="altImage" />
            <img src="/images/HomeImage44.png" alt="altImage" />
            <img src="/images/HomeImage44.png" alt="altImage" />
            <img src="/images/HomeImage44.png" alt="altImage" />
            <img src="/images/HomeImage44.png" alt="altImage" />
            <img src="/images/HomeImage44.png" alt="altImage" />
            <img src="/images/HomeImage44.png" alt="altImage" />
            <img src="/images/HomeImage44.png" alt="altImage" />
            <img src="/images/HomeImage44.png" alt="altImage" />
          </div>
        </section>
      </main>
      <section className="px-12">
        <div className="grid grid-cols-2">
          <p>© 2023 | Timtom Aviation | All Rights Reserved</p>
          <div className="flex gap-4">
            <Link
              to={`https://www.facebook.com/${facebookUsername}`}
              target="_blank"
            >
              <img src="/images/SocialMedia/Facebook.png" alt="" />
            </Link>
            <Link to={`https://wa.me/${phoneNumber}`} target="_blank">
              <img src="/public/images/SocialMedia/WhatSap.png" alt="" />
            </Link>
            <Link
              to={`https://www.linkedin.com/in/${linkedInUsername}`}
              target="_blank"
            >
              <img src="/images/SocialMedia/LinkedIn.png" alt="" />
            </Link>
            <Link to={`https://twitter.com/${twitterUsername}`} target="_blank">
              <img src="/images/SocialMedia/Twitter.png" alt="" />
            </Link>
            <Link
              to={`https://www.instagram.com/${instagramUsername}`}
              target="_blank"
            >
              <img src="/images/SocialMedia/Instagram.png" alt="" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
