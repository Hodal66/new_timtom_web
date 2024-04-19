import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../database/links/NavLinks";
function OtherSecondMainNavigationBar() {
const [heading, setHeading] = useState("");
const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const timeout = setTimeout(() => {
    setIsVisible(false);
  }, 8000); // 60000 milliseconds = 1 minute

  return () => clearTimeout(timeout);
}, []); // Runs only once when the component mounts

  return (
    <div>
       <div className="hidden lg:flex w-full justify-center items-center">
        <div className=" bg-gray-light font-medium hover:cursor-pointer pt-2 pb-2 ">
          <div className="flex justify-between px-8 bg-white items-center ">
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
                      <div className={`absolute ${isVisible ? "top-56" : "top-40"} top-40  hidden group-hover:md:block hover:md:block`}>
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
  )
}

export default OtherSecondMainNavigationBar
