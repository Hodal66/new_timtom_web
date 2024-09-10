// import { Link } from "react-router-dom";
// import IconMenu from "../../assets/icons/IconMenu";
// import { useState } from "react";
// import IconClose from "../../assets/icons/IconClose";
// import IconRightArrow from "../../assets/icons/IconRightArrow";
// import IconDownArrow from "../../assets/icons/IconDownArrow";
// import { NavLinks } from "../../database/links/NavLinks";
// import { CourseData } from "../../database/static/CoursesData";
// import { ServicesDb } from "../../database/static/Services";
// // import { AiOutlineDown } from "react-icons/ai";
// // import Button1 from "../button/Button1";

// function MainNavigationBar() {
//   const [navMenu, setNavMenu] = useState(false); //in Mobile
//   const [showService, setShowService] = useState(false); //in Mobile
//   const [showCourse, setShowCourses] = useState(false); //in Mobile
//   const [heading, setHeading] = useState("");
//   const [homeMenu, setHomeMenu] = useState(false);
//   const [aboutUsMenu, setAboutUsMenu] = useState(false);
//   const [servicesMenu, setServicesMenu] = useState(false);
//   const [coursesMenu, setCoursesMenu] = useState(false);
//   const [contactUsMenu, setContactUsMenu] = useState(false);
//   const [galleryMenu, setGalleryMenu] = useState(false);
  

//   return (
//     //Mobile View
//     <div className="text-black text-lg absolute top-0 lg:top-12 w-full left-0 z-10 ">
//       <nav className="lg:hidden bg-white  flex  justify-between items-center p-4 text-xl font-normal cursor-pointer ">
//         <Link to={"/"}>
//           <img src="/images/Logo1.png" alt="" className="w-36 h-16" />
//         </Link>
//         <div
//           className="p-4 bg-orange rounded-md"
//           onClick={() => {
//             setNavMenu(!navMenu);
//             setHomeMenu(!homeMenu);
//             setAboutUsMenu(false);
//             setServicesMenu(false);
//             setCoursesMenu(false);
//             setContactUsMenu(false);
//             setGalleryMenu(false);
//           }}
//         >
//           <IconMenu />
//         </div>
//         {navMenu && (
//           <div className={`bg-gray-dark h-full fixed top-0  left-0 w-full `}>
//             <nav className="flex justify-between items-center p-4">
//               <Link
//                 to={"/"}
//                 className="bg-white rounded-md"
//                 onClick={() => {
//                   setNavMenu(!navMenu);
                  
//                 }}
//               >
//                 <img src="/images/Logo1.png" alt="" className="w-36 h-16" />
//               </Link>
//               <div
//                 className="p-4 bg-white rounded-md"
//                 onClick={() => setNavMenu(false)}
//               >
//                 <IconClose />
//               </div>
//             </nav>

//             <ul className="text-white flex flex-col gap-2 p-8">
//               <Link
//                 to={"/"}
//                 onClick={() => {
//                   setNavMenu(!navMenu);
//                   setHomeMenu(!homeMenu);
//                   setAboutUsMenu(false);
//                   setServicesMenu(false);
//                   setCoursesMenu(false);
//                   setContactUsMenu(false);
//                   setGalleryMenu(false);
//                 }}
//               >
//                 <li className={`${homeMenu ? "bg-primary" :  "py-2 border-b border-b-gray hover:text-orange" }`}>
//                   Home
//                 </li>
//               </Link>
//               <Link
//                 to={"/about"}
//                 onClick={() => {
//                   setNavMenu(!navMenu);
//                   setHomeMenu(false);
//                   setAboutUsMenu(!aboutUsMenu);
//                   setServicesMenu(false);
//                   setCoursesMenu(false);
//                   setContactUsMenu(false);
//                   setGalleryMenu(false);
//                 }}
//               >
//                 <li className={`${aboutUsMenu ? "bg-primary" :  "py-2 border-b border-b-gray hover:text-orange" }`}>
//                   AboutUs
//                 </li>
//               </Link>
//               <li className="py-2">
//                 <div className="flex justify-between border-b pb-2 border-b-gray">
//                   <span>Services</span>
//                   <span
//                     className="bg-gray rounded-md transition-all duration-300"
//                     onClick={() => {
//                       setShowService(!showService);
//                       setHomeMenu(false);
//                       setAboutUsMenu(false);
//                       setServicesMenu(!servicesMenu);
//                       setCoursesMenu(false);
//                       setContactUsMenu(false);
//                       setGalleryMenu(false);
                  
//                     }}
//                   >
//                     {showService ? <IconDownArrow /> : <IconRightArrow />}
//                   </span>
//                 </div>
//                 {showService && (
//                   <ul className="flex flex-col gap-2 px-4">
//                     {ServicesDb.map((service) => (
//                       <div key={service.id}>
//                         <Link
//                           to={`services/${service.link}`}
//                           onClick={() => {
//                             setNavMenu(!navMenu); 
//                           }}
//                         >
//                           <li className={`${servicesMenu ? "bg-primary" :  "py-2 border-b border-b-gray hover:text-orange" }`}>
//                             {service.title}
//                           </li>
//                         </Link>
//                       </div>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//               <li className="py-2">
//                 <div className="flex justify-between border-b pb-2 border-b-gray hover:text-orange">
//                   <span>Courses</span>
//                   <span
//                     className="bg-gray rounded-md transition-all duration-300"
//                     onClick={() => {
//                       setShowCourses(!showCourse);
//                       setHomeMenu(false);
//                       setAboutUsMenu(false);
//                       setServicesMenu(false);
//                       setCoursesMenu(!coursesMenu);
//                       setContactUsMenu(false);
//                       setGalleryMenu(false);
                      
                     
//                     }}
//                   >
//                     {showCourse ? <IconDownArrow /> : <IconRightArrow />}
//                   </span>
//                 </div>
//                 {showCourse && (
//                   <ul className="flex flex-col gap-2 px-4">
//                     {CourseData.map((course) => (
//                       <div key={course.id}>
//                         <Link
//                           to={`/courses/${course.id}`}
//                           onClick={() => {
//                             setNavMenu(!navMenu);
//                           }}
//                         >
//                           <li className={`${coursesMenu ? "bg-primary" :  "py-2 border-b border-b-gray hover:text-orange" }`}>
//                             {course.courseName}
//                           </li>
//                         </Link>
//                       </div>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//               <Link
//                 to={"/contact"}
//                 onClick={() => {
//                   setNavMenu(!navMenu);
//                   setHomeMenu(false);
//                   setAboutUsMenu(false);
//                   setServicesMenu(false);
//                   setCoursesMenu(false);
//                   setContactUsMenu(!contactUsMenu);
//                   setGalleryMenu(false);
//                 }}
//               >
//                 <li className={`${contactUsMenu ? "bg-primary" :  "py-2 border-b border-b-gray hover:text-orange" }`}>
//                   ContactUs
//                 </li>
//               </Link>
//               <Link
//                 to={"/gallery"}
//                 onClick={() => {
//                   setNavMenu(!navMenu);
//                   setHomeMenu(false);
//                   setAboutUsMenu(false);
//                   setServicesMenu(false);
//                   setCoursesMenu(false);
//                   setContactUsMenu(false);
//                   setGalleryMenu(!galleryMenu);
//                 }}
//               >
//                 <li className={`${galleryMenu ? "bg-primary" :  "py-2 border-b border-b-gray hover:text-orange" }`}>
//                   Gallery
//                 </li>
//               </Link>
//             </ul>
//           </div>
//         )}
//         {/* In Desktop View */}
//       </nav>
//       <div className="hidden lg:flex w-full">
//         <div className=" bg-gray-light font-medium hover:cursor-pointer pt-2 pb-2 sticky w-full">
//           <div className="flex justify-between px-8 bg-white items-center ">
//             <Link to={"/"}>
//               <img src="/images/Logo1.png" alt="" className="w-40 h-20" />
//             </Link>
//             <ul className="flex gap-8 justify-center items-center">
//               <Link to={"/"}>
//                 <li className="text-black font-semibold hover:text-primary hover:transition hover:duration-150">
//                   Home
//                 </li>
//               </Link>
//               {NavLinks.map((link) => (
//                 <div key={link.id}>
//                   <div className="px-3 text-left md:cursor-pointer group">
//                     <h1
//                       className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
//                       onClick={() => {
//                         heading !== link.name
//                           ? setHeading(link.name)
//                           : setHeading("");
//                       }}
//                     >
//                       {link.name}
//                     </h1>
//                     <div>
//                       <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
//                         <div className="py-3">
//                           <div
//                             className="w-4 h-4 left-3 absolute 
//                     mt-1 bg-white rotate-45"
//                           ></div>
//                         </div>
//                         <ul className="bg-white p-5">
//                           {link.sublinks.map((mysublinks) => (
//                             <li
//                               key={mysublinks.id}
//                               className="text-black font-semibold hover:text-primary hover:transition hover:duration-150 py-2"
//                             >
//                               <Link to={mysublinks.linkname}>
//                                 {mysublinks.subLinkTitle}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <Link to={"/about"}>
//                 <li className="text-black font-semibold hover:text-primary hover:transition hover:duration-150">
//                   About
//                 </li>
//               </Link>
//               <Link to={"/contact"}>
//                 <li className="text-black font-semibold hover:text-primary hover:transition hover:duration-150">
//                   ContactUs
//                 </li>
//               </Link>
//               <Link to={"/gallery"}>
//                 {" "}
//                 <li className="text-black font-semibold hover:text-primary hover:transition hover:duration-150">
//                   Gallery
//                 </li>
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainNavigationBar;


import { Link, useLocation } from "react-router-dom";
import IconMenu from "../../assets/icons/IconMenu";
import { useState } from "react";
import IconClose from "../../assets/icons/IconClose";
import IconRightArrow from "../../assets/icons/IconRightArrow";
import IconDownArrow from "../../assets/icons/IconDownArrow";
import { NavLinks } from "../../database/links/NavLinks";
import { CourseData } from "../../database/static/CoursesData";
import { ServicesDb } from "../../database/static/Services";

function MainNavigationBar() {
  const [navMenu, setNavMenu] = useState(false); // Mobile view state
  const [showService, setShowService] = useState(false); // Mobile view state
  const [showCourse, setShowCourses] = useState(false); // Mobile view state
  const [heading, setHeading] = useState(""); // State for active heading
  const [homeMenu, setHomeMenu] = useState(false);
  const [aboutUsMenu, setAboutUsMenu] = useState(false);
  const [servicesMenu, setServicesMenu] = useState(false);
  const [coursesMenu, setCoursesMenu] = useState(false);
  const [contactUsMenu, setContactUsMenu] = useState(false);
  const [galleryMenu, setGalleryMenu] = useState(false);
  
  const location = useLocation(); // To check the current route

  // Function to check if the current path matches the link path
  const isActive = (path) => location.pathname === path;

  // Function to check if any sublink under "Courses" or "Services" is active
  const isSubLinkActive = (sublinks) => sublinks.some(sublink => isActive(sublink.linkname));

  return (
    // Mobile View
    <div className="text-black text-lg absolute top-0 lg:top-12 w-full left-0 z-10">
      <nav className="lg:hidden bg-white flex justify-between items-center p-4 text-xl font-normal cursor-pointer">
        <Link to={"/"}>
          <img src="/images/Logo1.png" alt="" className="w-36 h-16" />
        </Link>
        <div
          className="p-4 bg-orange rounded-md"
          onClick={() => {
            setNavMenu(!navMenu);
            setHomeMenu(!homeMenu);
            setAboutUsMenu(false);
            setServicesMenu(false);
            setCoursesMenu(false);
            setContactUsMenu(false);
            setGalleryMenu(false);
          }}
        >
          <IconMenu />
        </div>

        {navMenu && (
          <div className={`bg-gray-dark h-full fixed top-0 left-0 w-full`}>
            <nav className="flex justify-between items-center p-4">
              <Link
                to={"/"}
                className="bg-white rounded-md"
                onClick={() => {
                  setNavMenu(!navMenu);
                }}
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
              <Link
                to={"/"}
                onClick={() => {
                  setNavMenu(!navMenu);
                  setHomeMenu(!homeMenu);
                  setAboutUsMenu(false);
                  setServicesMenu(false);
                  setCoursesMenu(false);
                  setContactUsMenu(false);
                  setGalleryMenu(false);
                }}
              >
                <li className={`${homeMenu ? "bg-primary" : "py-2 border-b border-b-gray hover:text-orange"}`}>
                  Home
                </li>
              </Link>

              <Link
                to={"/about"}
                onClick={() => {
                  setNavMenu(!navMenu);
                  setHomeMenu(false);
                  setAboutUsMenu(!aboutUsMenu);
                  setServicesMenu(false);
                  setCoursesMenu(false);
                  setContactUsMenu(false);
                  setGalleryMenu(false);
                }}
              >
                <li className={`${aboutUsMenu ? "bg-primary" : "py-2 border-b border-b-gray hover:text-orange"}`}>
                  About Us
                </li>
              </Link>

              {/* Services Section */}
              <li className="py-2">
                <div className="flex justify-between border-b pb-2 border-b-gray">
                  <span>Services</span>
                  <span
                    className="bg-gray rounded-md transition-all duration-300"
                    onClick={() => {
                      setShowService(!showService);
                      setHomeMenu(false);
                      setAboutUsMenu(false);
                      setServicesMenu(!servicesMenu);
                      setCoursesMenu(false);
                      setContactUsMenu(false);
                      setGalleryMenu(false);
                    }}
                  >
                    {showService ? <IconDownArrow /> : <IconRightArrow />}
                  </span>
                </div>

                {showService && (
                  <ul className="flex flex-col gap-2 px-4">
                    {ServicesDb.map((service) => (
                      <Link
                        to={`services/${service.link}`}
                        key={service.id}
                        onClick={() => setNavMenu(!navMenu)}
                      >
                        <li className={`${isActive(`services/${service.link}`) ? "bg-primary" : "py-2 border-b border-b-gray hover:text-orange"}`}>
                          {service.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>

              {/* Courses Section */}
              <li className="py-2">
                <div className="flex justify-between border-b pb-2 border-b-gray hover:text-orange">
                  <span>Courses</span>
                  <span
                    className="bg-gray rounded-md transition-all duration-300"
                    onClick={() => {
                      setShowCourses(!showCourse);
                      setHomeMenu(false);
                      setAboutUsMenu(false);
                      setServicesMenu(false);
                      setCoursesMenu(!coursesMenu);
                      setContactUsMenu(false);
                      setGalleryMenu(false);
                    }}
                  >
                    {showCourse ? <IconDownArrow /> : <IconRightArrow />}
                  </span>
                </div>

                {showCourse && (
                  <ul className="flex flex-col gap-2 px-4">
                    {CourseData.map((course) => (
                      <Link
                        to={`/courses/${course.id}`}
                        key={course.id}
                        onClick={() => setNavMenu(!navMenu)}
                      >
                        <li className={`${isActive(`/courses/${course.id}`) ? "bg-primary" : "py-2 border-b border-b-gray hover:text-orange"}`}>
                          {course.courseName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>

              {/* Contact Us */}
              <Link
                to={"/contact"}
                onClick={() => {
                  setNavMenu(!navMenu);
                  setHomeMenu(false);
                  setAboutUsMenu(false);
                  setServicesMenu(false);
                  setCoursesMenu(false);
                  setContactUsMenu(!contactUsMenu);
                  setGalleryMenu(false);
                }}
              >
                <li className={`${contactUsMenu ? "bg-primary" : "py-2 border-b border-b-gray hover:text-orange"}`}>
                  Contact Us
                </li>
              </Link>

              {/* Gallery */}
              <Link
                to={"/gallery"}
                onClick={() => {
                  setNavMenu(!navMenu);
                  setHomeMenu(false);
                  setAboutUsMenu(false);
                  setServicesMenu(false);
                  setCoursesMenu(false);
                  setContactUsMenu(false);
                  setGalleryMenu(!galleryMenu);
                }}
              >
                <li className={`${galleryMenu ? "bg-primary" : "py-2 border-b border-b-gray hover:text-orange"}`}>
                  Gallery
                </li>
              </Link>
            </ul>
          </div>
        )}
      </nav>

      {/* Desktop View */}
      <div className="hidden lg:flex w-full">
        <div className="bg-gray-light font-medium hover:cursor-pointer pt-2 pb-2 sticky w-full">
          <div className="flex justify-between px-8 bg-white items-center">
            <Link to={"/"}>
              <img src="/images/Logo1.png" alt="" className="w-40 h-20" />
            </Link>
            <ul className="flex gap-8 justify-center items-center">
              <Link to={"/"}>
                <li className={`text-black font-semibold hover:text-primary hover:transition hover:duration-150 ${isActive("/") && "text-primary"}`}>
                  Home
                </li>
              </Link>

              {NavLinks.map((link) => (
                <div key={link.id}>
                  <div className="px-3 text-left md:cursor-pointer group">
                    <h1
                      className={`py-7 flex justify-between items-center md:pr-0 pr-5 group ${isSubLinkActive(link.sublinks) && "text-primary"}`}
                      onClick={() => {
                        heading !== link.name ? setHeading(link.name) : setHeading("");
                      }}
                    >
                      {link.name}
                    </h1>

                    <div>
                      <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                        <div className="bg-white p-2 mt-3 border border-gray grid grid-cols-1 gap-4">
                          {link.sublinks.map((slink) => (
                            <Link
                              to={slink.linkname}
                              key={slink.name}
                              className={`text-black hover:text-primary ${isActive(slink.linkname) && "text-primary"}`}
                            >
                              {slink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Link to={"/contact"}>
                <li className={`text-black font-semibold hover:text-primary hover:transition hover:duration-150 ${isActive("/contact") && "text-primary"}`}>
                  Contact Us
                </li>
              </Link>

              <Link to={"/gallery"}>
                <li className={`text-black font-semibold hover:text-primary hover:transition hover:duration-150 ${isActive("/gallery") && "text-primary"}`}>
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

export default MainNavigationBar;
