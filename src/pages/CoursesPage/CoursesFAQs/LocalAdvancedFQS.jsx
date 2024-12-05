import { useState } from "react";

import IconDownArrow from "../../../assets/icons/IconDownArrow";
import Pragraph from "../../../components/Pragraph";
import HeadingTwo from "../../../components/Headings/HeadingTwo";
import { CourseData } from "../../../database/static/CoursesData";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

/* eslint-disable react-refresh/only-export-components */
function LocalAdvancedFQS() {
  const [openFAQ1, setOpenFAQ1] = useState(false);
  const [openFAQ2, setOpenFAQ2] = useState(false);
  const [openFAQ3, setOpenFAQ3] = useState(false);
  const [openFAQ4, setOpenFAQ4] = useState(false);
  const [openFAQ5, setOpenFAQ5] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };
  const handleLinkClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`courses/${path}`);
      scrollToTop();
    }, 300);
  };

  const getAllLocalAdvancedCourses = CourseData.filter(
    (localAdvancedCourse) => {
      return localAdvancedCourse.typeOfCetificate == "Advanced Certificate";
    }
  );
  const getAllLocalCertificateCoursesOnCivilAviation = CourseData.filter(
    (civilAviation) => {
      return (
        civilAviation.typeOfCetificate == "Local Certificate" &&
        civilAviation.subCategory == "civalAviationMngt"
      );
    }
  );

  const getAllLocalCertificateCoursesAirLineAndAirport = CourseData.filter(
    (airLineAndAirport) => {
      return (
        airLineAndAirport.typeOfCetificate == "Local Certificate" &&
        airLineAndAirport.subCategory == "airLineAndAirportMngt"
      );
    }
  );

  const getAllInternationalCourses = CourseData.filter(
    (InternationalCourse) => {
      return (
        InternationalCourse.typeOfCetificate == "International Certificate"
      );
    }
  );

  const getAllIInternshipCourses = CourseData.filter((internership) => {
    return internership.category == "internship";
  });

  const getAllICTCourses = CourseData.filter((ictCourse) => {
    return ictCourse.category == "ICTSkills";
  });
  return (
    <div>
      <HeadingTwo headingTitle={"Courses Summary"} />
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ClipLoader color={"#ffffff"} loading={loading} size={50} />
        </div>
      )}
      <div className="flex gap-4 flex-col cursor-pointer">
        <div>
          <div
            onClick={() => {
              setOpenFAQ1(!openFAQ1);
              setOpenFAQ2(false);
              setOpenFAQ3(false);
              setOpenFAQ4(false);
              setOpenFAQ5(false);
            }}
            className={`flex items-center justify-between  bg-white px-2 rounded-sm ${
              openFAQ1 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"Local Certificates Courses"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ1 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ1 && (
            <div
              className={
                "border border-l-1 border-t-0 border-white p-4 rounded-sm "
              }
            >
              <HeadingTwo
                headingTitle={"Certificate in Civil Aviation"}
                classNameProps={"font-normal text-sm"}
              />
              {getAllLocalCertificateCoursesOnCivilAviation.map(
                (localCivilAviationCourse) => (
                  <div
                    key={localCivilAviationCourse.id}
                    onClick={() => handleLinkClick(localCivilAviationCourse.id)}
                    className="flex hover:text-primary hover:font-bold items-center justify-between p-2 rounded-sm hover:bg-white cursor-pointer"
                  >
                    <Pragraph
                      pragraphContent={localCivilAviationCourse.courseName}
                      classNameText={"w-full "}
                    />
                    <div className="bg-third p-1 px-3 rounded-full text-primary font-medium">
                      {localCivilAviationCourse.availability}
                    </div>
                  </div>
                )
              )}
              <div>
                <HeadingTwo
                  headingTitle={"Certificate in Airline and Airport"}
                  classNameProps={"font-normal text-sm"}
                />
              </div>
              {getAllLocalCertificateCoursesAirLineAndAirport.map(
                (localAirlineCourse) => (
                  <div
                    key={localAirlineCourse.id}
                    onClick={() => handleLinkClick(localAirlineCourse.id)}
                    className="flex hover:text-primary hover:font-bold items-center justify-between p-2 rounded-sm hover:bg-white cursor-pointer"
                  >
                    <Pragraph
                      pragraphContent={localAirlineCourse.courseName}
                      classNameText={"w-full "}
                    />
                    <div className="bg-third p-1 px-3 rounded-full text-primary font-medium">
                      {localAirlineCourse.availability}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setOpenFAQ2(!openFAQ2);
              setOpenFAQ1(false);
              setOpenFAQ3(false);
              setOpenFAQ4(false);
              setOpenFAQ5(false);
            }}
            className={`flex items-center justify-between bg-white px-2 rounded-sm ${
              openFAQ2 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"Local Advanced Courses"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ2 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ2 && (
            <div
              className={
                "border border-l-1 border-t-0 border-white p-2 rounded-sm"
              }
            >
              {getAllLocalAdvancedCourses.map((localAdvancedCourse) => (
                <div
                  key={localAdvancedCourse.id}
                  onClick={() => handleLinkClick(localAdvancedCourse.id)}
                  className="flex hover:text-primary hover:font-bold items-center justify-between p-2 rounded-sm hover:bg-white cursor-pointer"
                >
                  <Pragraph
                    pragraphContent={localAdvancedCourse.courseName}
                    classNameText={"w-full "}
                  />
                  <div className="bg-third p-1 px-3 rounded-full text-primary font-medium">
                    {localAdvancedCourse.availability}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setOpenFAQ3(!openFAQ3);
              setOpenFAQ2(false);
              setOpenFAQ1(false);
              setOpenFAQ4(false);
              setOpenFAQ5(false);
            }}
            className={`flex items-center justify-between bg-white px-2 rounded-sm ${
              openFAQ3 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"International Certificate Courses in Aviation"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ3 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ3 && (
            <div
              className={
                "border border-l-1 border-t-0 border-white p-2 rounded-sm"
              }
            >
              {getAllInternationalCourses.map((internationalCourse) => (
                <div
                  key={internationalCourse.id}
                  onClick={() => handleLinkClick(internationalCourse.id)}
                  className="flex hover:text-primary hover:font-bold items-center justify-between p-2 rounded-sm hover:bg-white cursor-pointer"
                >
                  <Pragraph
                    pragraphContent={internationalCourse.courseName}
                    classNameText={"w-full "}
                  />
                  <div className="bg-third p-1 px-3 rounded-full text-primary font-medium">
                    {internationalCourse.availability}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setOpenFAQ4(!openFAQ4);
              setOpenFAQ2(false);
              setOpenFAQ1(false);
              setOpenFAQ3(false);
              setOpenFAQ5(false);
            }}
            className={`flex items-center justify-between bg-white px-2 rounded-sm ${
              openFAQ4 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"Local Certificates in Computer Skills"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ4 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ4 && (
            <div
              className={
                "border border-l-1 border-t-0 border-white p-2 rounded-sm"
              }
            >
              {getAllICTCourses.map((ictCourse) => (
                <div
                  key={ictCourse.id}
                  onClick={() => handleLinkClick(ictCourse.id)}
                  className="flex hover:text-primary hover:font-bold items-center justify-between p-2 rounded-sm hover:bg-white cursor-pointer"
                >
                  <Pragraph
                    pragraphContent={ictCourse.courseName}
                    classNameText={"w-full "}
                  />
                  <div className="bg-third p-1 px-3 rounded-full text-primary font-medium">
                    {ictCourse.availability}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              setOpenFAQ5(!openFAQ5);
              setOpenFAQ2(false);
              setOpenFAQ1(false);
              setOpenFAQ4(false);
              setOpenFAQ3(false);
            }}
            className={`flex items-center justify-between bg-white px-2 rounded-sm ${
              openFAQ5 && "transition-all animate-pulse duration-200 "
            }`}
          >
            <HeadingTwo
              headingTitle={"Availlable Internership"}
              classNameProps={"font-normal text-sm"}
            />
            <span className={`${openFAQ5 ? "rotate-180" : "rotate-0"}`}>
              <IconDownArrow />
            </span>
          </div>
          {openFAQ5 && (
            <div
              className={
                "border border-l-1 border-t-0 border-white p-2 rounded-sm"
              }
            >
              {getAllIInternshipCourses.map((internshp) => (
                <div
                  key={internshp.id}
                  onClick={() => handleLinkClick(internshp.id)}
                  className="flex hover:text-primary hover:font-bold items-center justify-between p-2 rounded-sm hover:bg-white cursor-pointer"
                >
                  <Pragraph
                    pragraphContent={internshp.courseName}
                    classNameText={"w-full "}
                  />
                  <div className="bg-third p-1 px-3 rounded-full text-primary font-medium">
                    {internshp.availability}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LocalAdvancedFQS;
