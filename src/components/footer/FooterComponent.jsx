import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Arrow from "../../assets/icons/Arrow";
import Message from "../../assets/icons/Message";
import HeadingThree from "../Headings/HeadingThree";
import Pragraph from "../Pragraph";
import HeadingTwo from "../Headings/HeadingTwo";
import { style } from "../../style";
import SocialMedia from "./SocialMedia";

function FooterComponent() {
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Scroll to top with smooth transition
  const scrollToTop = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };

  // Handle link clicks to show loading spinner
  const handleLinkClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Stop loading after navigation
      navigate(path);
      scrollToTop(); // Scroll to top after navigating
    }, 500); // Simulate a delay for smooth transition (adjust timing as needed)
  };

  return (
    <div className=" px-4 md:px-8 lg:px-12 py-16 bg-blue text-textWhite flex flex-col gap-4">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ClipLoader color={"#ffffff"} loading={loading} size={50} />
        </div>
      )}
      <main className="mainContainer grid lg:grid-cols-4 gap-4">
        <section className="cursor-pointer">
          <div onClick={() => handleLinkClick("/")}>
            <HeadingTwo
              className={"bg-orange"}
              headingTitle={"TIMTOM AVIATION LTD"}
              classNameProps={"text-textWhite font-black hover:transition"}
            />
          </div>
          <div onClick={() => handleLinkClick("/")}>
            <Pragraph
              pragraphContent={
                "To become an African hub in providing knowledge and consultancy service in the field of aviation, hospitality, tourism, and ICT."
              }
              classNameText={"font-normal"}
            />
          </div>
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
                headingTitle={"Our Top Services"}
                classNameProps={"text-orange"}
              />
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() => handleLinkClick("/services/air-ticket")}
            >
              <Arrow />
              <span>Air Ticketing.....</span>
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() =>
                handleLinkClick("/services/training-in-aviation-courses")
              }
            >
              <Arrow />
              <span>Training In Aviation</span>
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() => handleLinkClick("/services/hotel-booking")}
            >
              <Arrow />
              <span>Hotel Booking</span>
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() =>
                handleLinkClick("/services/admission-and-visa-assistance")
              }
            >
              <Arrow />
              <span>Admission And Visa Assistance</span>
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() => handleLinkClick("/services/consultancy")}
            >
              <Arrow />
              <span>Consultancy</span>
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() => handleLinkClick("/services/ict-skills")}
            >
              <Arrow />
              <span>ICT Skills</span>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li>
              <HeadingTwo
                headingTitle={"All Courses Packages"}
                classNameProps={"text-orange"}
              />
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() => handleLinkClick("/courses")}
            >
              <Arrow />
              <span>All Courses</span>
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() =>
                handleLinkClick("/courses/local-certificates-courses")
              }
            >
              <Arrow />
              <span>Local Certificate Courses</span>
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() =>
                handleLinkClick("/courses/local-advanced-certificates-courses")
              }
            >
              <Arrow />
              <span>Local Advanced Certificates Courses</span>
            </li>
            <li
              className="flex items-center gap-2 hover:text-primary hover:font-semibold hover:translate-x-2 transition duration-150 cursor-pointer"
              onClick={() =>
                handleLinkClick("/courses/international-certificates-courses")
              }
            >
              <Arrow />
              <span>International Certificates Courses</span>
            </li>
          </ul>
        </section>

        <section>
          <div className="grid grid-cols-3">
            <div className={`${style.hoverTransitionScale} relative group`}>
              <div onClick={() => handleLinkClick("services/air-ticket")}>
                <img
                  src="/images/FooterImage/FooterImageTicketing.png"
                  alt="altImage"
                  className="h-full"
                />
                <div className="hidden absolute top-0 hover:cursor-pointer left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                  <p>Ticketing </p>
                </div>
              </div>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
              <div onClick={() => handleLinkClick("services/training-in-aviation-courses")}>
                <img
                   src="/images/FooterImage/FooterImageLearn.png"
                  alt="altImage"
                  className="h-full"
                />
                <div className="hidden absolute top-0 hover:cursor-pointer left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                  <p>Aviation </p>
                </div>
              </div>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
              <div onClick={() => handleLinkClick("services/hotel-booking")}>
                <img
                  src="/images/FooterImage/FooterImageHotelBooking.png"
                  alt="altImage"
                  className="h-full"
                />
                <div className="hidden absolute top-0 hover:cursor-pointer left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                  <p>Hotel Boking</p>
                </div>
              </div>
            </div>
            <div className={`${style.hoverTransitionScale} relative group`}>
              <div onClick={() => handleLinkClick("services/admission-and-visa-assistance")}>
                <img
                  src="/images/FooterImage/FooterImageVisaApplication.png"
                  alt="altImage"
                  className="h-full"
                />
                <div className="hidden absolute top-0 hover:cursor-pointer left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                  <p>Admission & Visa</p>
                </div>
              </div>
            </div>{" "}
            <div className={`${style.hoverTransitionScale} relative group`}>
              <div onClick={() => handleLinkClick("services/consultancy")}>
                <img
                   src="/images/FooterImage/FooterImagelConsultancy.png"
                  alt="altImage"
                  className="h-full"
                />
                <div className="hidden absolute top-0 hover:cursor-pointer left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                  <p>Consultancy </p>
                </div>
              </div>
            </div>{" "}
            <div className={`${style.hoverTransitionScale} relative group`}>
              <div onClick={() => handleLinkClick("services/ict-skills")}>
                <img
                  src="/images/FooterImage/FooterImageICT.png"
                  alt="altImage"
                  className="h-full"
                />
                <div className="hidden absolute top-0 hover:cursor-pointer left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                  <p>ICT </p>
                </div>
              </div>
            </div>{" "}
            <div className={`${style.hoverTransitionScale} relative group`}>
              <div onClick={() => handleLinkClick("/courses/local-certificates-courses")}>
                <img
                  src="/images/FooterImage/FooterImageLocation.png"
                  alt="altImage"
                  className="h-full"
                />
                <div className="hidden absolute top-0 hover:cursor-pointer left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                  <p>Local Courses </p>
                </div>
              </div>
            </div>{" "}
            <div className={`${style.hoverTransitionScale} relative group`}>
              <div onClick={() => handleLinkClick("/courses/local-advanced-certificates-courses")}>
                <img
                   src="/images/FooterImage/FooterImageTicketing.png"
                  alt="altImage"
                  className="h-full"
                />
                <div className="hidden absolute top-0 hover:cursor-pointer left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                  <p>Advanced Courses </p>
                </div>
              </div>
            </div>{" "}
            <div className={`${style.hoverTransitionScale} relative group`}>
              <div onClick={() => handleLinkClick("/courses/international-certificates-courses")}>
                <img
                   src="/images/FooterImage/FooterImageCourse.png"
                  alt="altImage"
                  className="h-full"
                />
                <div className="hidden absolute top-0 hover:cursor-pointer left-0 group-hover:flex group-hover:items-center group-hover:justify-center bg-primary bg-opacity-75 h-full w-full font-semibold">
                  <p>Internation Courses </p>
                </div>
              </div>
            </div>
            {/* Additional sections */}
          </div>
        </section>
      </main>
      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p>© 2024 | Timtom Aviation | All Rights Reserved</p>
          <SocialMedia />
        </div>
      </section>
    </div>
  );
}

export default FooterComponent;
