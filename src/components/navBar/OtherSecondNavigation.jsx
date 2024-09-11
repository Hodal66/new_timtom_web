import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLinks } from "../../database/links/NavLinks";

function OtherSecondMainNavigationBar() {
  const location = useLocation();
  const [heading, setHeading] = useState("");

  // Function to check if the current path matches the link path
  const isActive = (path) => location.pathname === path;

  // Function to check if any sublink is active under a given main link
  const isSubLinkActive = (sublinks) =>
    sublinks.some((sublink) => isActive(sublink.linkname));

  return (
    <div>
      <div className="hidden lg:flex w-full justify-center items-center font-semibold">
        <div className="bg-gray-light font-medium hover:cursor-pointer pt-2 pb-2">
          <div className="flex justify-between px-8 bg-white items-center">
            <ul className="flex gap-32 mx-2 justify-center items-center">
              <Link to={"/"}>
                <li
                  className={`${
                    isActive("/")
                      ? "bg-primary"
                      : "text-black font-semibold hover:text-primary hover:transition hover:duration-150"
                  }`}
                >
                  Home
                </li>
              </Link>

              {NavLinks.map((link) => (
                <div key={link.id}>
                  <div className="px-3 text-left md:cursor-pointer group">
                    <h1
                      className={`py-7 flex justify-between items-center md:pr-0 pr-5 group ${
                        isSubLinkActive(link.sublinks)
                          ? "text-primary"
                          : "text-black font-semibold hover:text-primary"
                      }`}
                      onClick={() => {
                        heading !== link.name
                          ? setHeading(link.name)
                          : setHeading("");
                      }}
                    >
                      {link.name}
                    </h1>
                    <div>
                      <div
                        className={`absolute top-40 hidden group-hover:md:block hover:md:block`}
                      >
                        <div className="py-3">
                          <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                        </div>
                        <ul className="bg-white p-5 font-semibold">
                          {link.sublinks.map((mysublinks) => (
                            <li
                              key={mysublinks.id}
                              className={`text-black font-semibold py-2 ${
                                isActive(mysublinks.linkname)
                                  ? "text-primary font-semibold"
                                  : "hover:text-primary font-semibold hover:transition hover:duration-150"
                              }`}
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
                <li
                  className={`${
                    isActive("/about")
                      ? "text-primary"
                      : "text-black font-semibold hover:text-primary hover:transition hover:duration-150"
                  }`}
                >
                  About
                </li>
              </Link>

              <Link to={"/contact"}>
                <li
                  className={`${
                    isActive("/contact")
                      ? "text-primary"
                      : "text-black font-semibold hover:text-primary hover:transition hover:duration-150"
                  }`}
                >
                  ContactUs
                </li>
              </Link>

              <Link to={"/gallery"}>
                <li
                  className={`${
                    isActive("/gallery")
                      ? "text-primary"
                      : "text-black font-semibold hover:text-primary hover:transition hover:duration-150"
                  }`}
                >
                  Gallery
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherSecondMainNavigationBar;
