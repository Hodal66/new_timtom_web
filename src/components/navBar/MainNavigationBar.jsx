import { Link } from "react-router-dom";
import IconMenu from "../../assets/icons/IconMenu";
import { useState } from "react";
import IconClose from "../../assets/icons/IconClose";
import IconRightArrow from "../../assets/icons/IconRightArrow";
import IconDownArrow from "../../assets/icons/IconDownArrow";
import { NavLinks } from "../../database/links/NavLinks";
// import { AiOutlineDown } from "react-icons/ai";
// import Button1 from "../button/Button1";

function MainNavigationBar() {
  const [navMenu, setNavMenu] = useState(true); //in Mobile
  const [showService, setShowService] = useState(false); //in Mobile
  const [showCourse, setShowCourses] = useState(false); //in Mobile
  const [heading, setHeading] = useState("");
  return (
    //Mobile View
    <div className="text-black text-lg absolute top-0 lg:top-12 w-full left-0 z-10 ">
      <nav className="lg:hidden bg-white  flex  justify-between items-center p-4 text-xl font-normal cursor-pointer ">
        <Link to={"/"}>
          <img src="/images/Logo1.png" alt="" className="w-36 h-16" />
        </Link>
        <div
          className="p-4 bg-orange rounded-md"
          onClick={() => setNavMenu(!navMenu)}
        >
          <IconMenu />
        </div>
        {navMenu && (
          <div className={`bg-gray-dark h-full fixed top-0  left-0 w-full `}>
            <nav className="flex justify-between items-center p-4">
              <Link
                to={"/"}
                className="bg-white rounded-md"
                onClick={() => setNavMenu(!navMenu)}
              >
                <img src="/images/Logo1.png" alt="" className="w-36 h-16" />
              </Link>
              <div
                className="p-4 bg-white rounded-md"
                onClick={() => setNavMenu(false)}
              >
                <IconClose />
              </div>
            </nav>

            <ul className="text-white flex flex-col gap-2 p-8">
              <Link to={"/"} onClick={() => setNavMenu(!navMenu)}>
                <li className="py-2 border-b border-b-gray hover:text-orange">
                  Home
                </li>
              </Link>
              <Link to={"/about"} onClick={() => setNavMenu(!navMenu)}>
                <li className="py-2 border-b border-b-gray hover:text-orange">
                  AboutUs
                </li>
              </Link>
              <li className="py-2">
                <div className="flex justify-between border-b pb-2 border-b-gray">
                  <span>Services</span>
                  <span
                    className="bg-gray rounded-md transition-all duration-300"
                    onClick={() => {
                      setShowService(!showService);
                      setShowCourses(false);
                    }}
                  >
                    {showService ? <IconDownArrow /> : <IconRightArrow />}
                  </span>
                </div>
                {showService && (
                  <ul className="flex flex-col gap-2 px-4">
                    <Link to={"/contact"} onClick={() => setNavMenu(!navMenu)}>
                      <li className="py-2 border-b border-b-gray hover:text-orange">
                        List x1
                      </li>
                    </Link>
                    <Link to={"/"} onClick={() => setNavMenu(!navMenu)}>
                      <li className="py-2 border-b border-b-gray hover:text-orange">
                        List x2
                      </li>
                    </Link>
                    <Link to={"/"} onClick={() => setNavMenu(!navMenu)}>
                      <li className="py-2 border-b border-b-gray hover:text-orange">
                        List x3
                      </li>
                    </Link>
                    <Link to={"/"} onClick={() => setNavMenu(!navMenu)}>
                      <li className="py-2 border-b border-b-gray hover:text-orange">
                        List x4
                      </li>
                    </Link>
                  </ul>
                )}
              </li>
              <li className="py-2">
                <div className="flex justify-between border-b pb-2 border-b-gray hover:text-orange">
                  <span>Courses</span>
                  <span
                    className="bg-gray rounded-md transition-all duration-300"
                    onClick={() => {
                      setShowCourses(!showCourse);
                      setShowService(false);
                    }}
                  >
                    {showCourse ? <IconDownArrow /> : <IconRightArrow />}
                  </span>
                </div>
                {showCourse && (
                  <ul className="flex flex-col gap-2 px-4">
                    <Link to={"/courses"} onClick={() => setNavMenu(!navMenu)}>
                      <li className="py-2 border-b border-b-gray hover:text-orange">
                        List x1
                      </li>
                    </Link>
                    <Link to={"/"} onClick={() => setNavMenu(!navMenu)}>
                      <li className="py-2 border-b border-b-gray hover:text-orange">
                        List x2
                      </li>
                    </Link>
                    <Link to={"/"} onClick={() => setNavMenu(!navMenu)}>
                      <li className="py-2 border-b border-b-gray hover:text-orange">
                        List x3
                      </li>
                    </Link>
                    <Link to={"/"} onClick={() => setNavMenu(!navMenu)}>
                      <li className="py-2 border-b border-b-gray hover:text-orange">
                        List x4
                      </li>
                    </Link>
                  </ul>
                )}
              </li>
              <Link to={"/contact"} onClick={() => setNavMenu(!navMenu)}>
                <li className="border-b border-b-gray hover:text-orange">
                  ContactUs
                </li>
              </Link>
              <Link to={"/gallery"} onClick={() => setNavMenu(!navMenu)}>
                <li className="py-2 border-b border-b-gray hover:text-orange">
                  Gallery
                </li>
              </Link>
            </ul>
          </div>
        )}
        {/* In Desktop View */}
      </nav>
      <div className="hidden lg:flex w-full">
        <div className=" bg-gray-light font-medium hover:cursor-pointer pt-2 pb-2 sticky w-full">
          <div className="flex justify-between px-8 bg-white items-center ">
            <Link to={"/"}>
              <img src="/images/Logo1.png" alt="" className="w-40 h-20" />
            </Link>
            <ul className="flex gap-8 justify-center items-center">
              <Link to={"/"}>
                <li className="text-black font-semibold hover:text-primary hover:transition hover:duration-150">Home</li>
              </Link>
              {NavLinks.map((link) => (
                <div key={link.id}>
                  <div className="px-3 text-left md:cursor-pointer group">
                    <h1
                      className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                      onClick={() => {
                        heading !== link.name
                          ? setHeading(link.name)
                          : setHeading("");
                      }}
                    >
                      {link.name}
                    </h1>
                    <div>
                      <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                        <div className="py-3">
                          <div
                            className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                          ></div>
                        </div>
                        <ul className="bg-white p-5">
                          {link.sublinks.map((mysublinks) => (
                            <li
                              key={mysublinks.id}
                              className="text-black font-semibold hover:text-primary hover:transition hover:duration-150 py-2"
                            >
                              <Link to={mysublinks.linkname}>
                                {mysublinks.subLinkTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Link to={"/about"}>
                <li className="text-black font-semibold hover:text-primary hover:transition hover:duration-150">About</li>
              </Link>
              <Link to={"/contact"}>
                <li className="text-black font-semibold hover:text-primary hover:transition hover:duration-150">ContactUs</li>
              </Link>
              <Link to={"/gallery"}>
                {" "}
                <li className="text-black font-semibold hover:text-primary hover:transition hover:duration-150">Gallery</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavigationBar;
