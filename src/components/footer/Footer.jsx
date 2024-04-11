import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/Arrow";
import Message from "../../assets/icons/Message";
import HeadingThree from "../Headings/HeadingThree";
import Pragraph from "../Pragraph";
import HeadingTwo from "../Headings/HeadingTwo";
import { style } from "../../style";

function Footer() {
  const phoneNumber = "+250782439775";
  const facebookUsername = "timtom.aviation";
  const instagramUsername = "timtomaviation7";
  const linkedInUsername =
    "timtom-aviation-ltd-901301271/?originalSubdomain=rw";
  const twitterUsername = "TimtomAviation";
  return (
    <div className=" px-4 md:px-8 lg:px-12 py-16 bg-blue text-textWhite flex flex-col gap-4">
      <main className="mainContainer grid lg:grid-cols-4 gap-4">
        <section className="cursor-pointer">
         <Link to={"/"}>
         <HeadingTwo
            className={"bg-orange"}
            headingTitle={"TIMTOM AVIATION LTD"}
            classNameProps={
              "text-textWhite font-black hover:transition hover:scale-150 "
            }
          />
         </Link>
         <Link to={"/"}>
         <Pragraph
            pragraphContent={
              "To become an African hub in providing knowledge and consultancy service in the field of aviation, hospitality, tourism, and ICT."
            }
            classNameText={"font-normal"}
          />
         </Link>
         
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
              <HeadingTwo
                headingTitle={"The Industry  Package"}
                classNameProps={"text-orange"}
              />
            </li>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
                <span className="hover:text-primary">
                  <Arrow />
                </span>
                <span>Airline and airport management</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
                <span>
                  <Arrow />
                </span>
                <span>Air cargo management</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
                <span>
                  <Arrow />
                </span>
                <span>Faundation in travel and tourism</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
                <span>
                  <Arrow />
                </span>
                <span>Civil aviation management</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
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
              <HeadingTwo
                headingTitle={"The Industry  Package"}
                classNameProps={"text-orange"}
              />
            </li>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
                <span>
                  <Arrow />
                </span>
                <span>About Us</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
                <span>
                  <Arrow />
                </span>
                <span>FAQs</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
                <span>
                  <Arrow />
                </span>
                <span>Our Team </span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
                <span>
                  <Arrow />
                </span>
                <span>Testmonials</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
                <span>
                  <Arrow />
                </span>
                <span>News List View</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150">
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
            <div className={`${style.hoverTransitionScale} relative group`}>
             <Link to={"/services"}>
             <img
                src="/images/HomeImage44.png"
                alt="altImage"
                 className="h-full"
  
              />
              <div className="hidden absolute top-0 left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                <p>Ticketing </p>
              </div>
             </Link>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
             <Link to={"/services"}>
             <img
                src="/images/HomeImage1.png"
                alt="altImage"
                className="h-full"
              />
              <div className="hidden absolute top-0 left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                <p>ICT </p>
              </div>
             </Link>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
             <Link to={"/services"}>
             <img
                src="/images/HomeImage44.png"
                alt="altImage"
                 className="h-full"
                
              />
              <div className="hidden absolute top-0 left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                <p>Visa </p>
              </div>
             </Link>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
             <Link to={"/services"}>
             <img
                src="/images/HomeImage44.png"
                alt="altImage"
                 className="h-full"
                
              />
              <div className="hidden absolute top-0 left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                <p>Consultancy </p>
              </div>
             </Link>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
             <Link to={"/services"}>
             <img
                src="/images/HomeImage44.png"
                alt="altImage"
                 className="h-full"
                
              />
              <div className="hidden absolute top-0 left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                <p>Airport </p>
              </div>
             </Link>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
             <Link to={"/services"}>
             <img
                src="/images/HomeImage44.png"
                alt="altImage"
                 className="h-full"
                
              />
              <div className="hidden absolute top-0 left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                <p>Aviation </p>
              </div>
             </Link>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
             <Link to={"/services"}>
             <img
                src="/images/HomeImage1.png"
                alt="altImage"
                 className="h-full"
                
              />
              <div className="hidden absolute top-0 left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                <p>Ticketing </p>
              </div>
             </Link>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
             <Link to={"/services"}>
             <img
                src="/images/HomeImage2.png"
                alt="altImage"
                 className="h-full"
                
              />
              <div className="hidden absolute top-0 left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                <p>Ticketing </p>
              </div>
             </Link>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
             <Link to={"/services"}>
             <img
                src="/images/HomeImage4.png"
                alt="altImage"
                 className="h-full"
        
              />
              <div className="hidden absolute top-0 left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                <p>Ticketing </p>
              </div>
             </Link>
            </div>
         
           
          </div>
        </section>
      </main>
      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p>© 2024 | Timtom Aviation | All Rights Reserved</p>
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
      </section>
    </div>
  );
}
export default Footer;
