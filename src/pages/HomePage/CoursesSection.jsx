import { useState } from "react";
import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";
import { style } from "../../style";
import backgroundImage from "/images/bgImage/bg1.png";
import { CourseData } from "../../database/static/CoursesData";
import { Link } from "react-router-dom";
function CoursesSection() {
  const [filter, setFilter] = useState("All");
  const [isCategorySelected, setIsCategorySelected] = useState({
    All: true,
    Ict: false,
    Aviation: false,
    Ticketing: false,
    Airport: false,
  });

  const filteredData = CourseData.filter((filteredCourse) => {
    if (filter === "All") {
      return true;
    } else {
      return filteredCourse.category === filter;
    }
  });
  return (
    <div className="hidden py-16 text-white">
      <div
        className="bg-cover bg-center h-80"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="grid md:grid-cols-2 md:px-8 lg:px-12 py-12">
          <div className={`${style.flexColCenter}`}>
            <HeadingThree headingTitle={"The Timtom Aviation Courses"} />
            <HeadingOne
              headingTitle={"We Have special Courses for you!!"}
              classNameProps={"text-white"}
            />
          </div>
          <div className="md:border-l-2 lg:border-l-4 md:border-black md:pl-8 lg:pl-16">
            <Pragraph
              pragraphContent={
                "TIMTOM AVIATION  is a private company which offers consultancy services in the field of management and also offers training in the field of aviation management, hospitality, tourism and ICT, after training we awards international professional certificate and diplomas like ICAO and IATA."
              }
            />
          </div>
        </div>
        <div className={`flex justify-center`}>
          <div className="flex gap-4 px-12 text-white font-medium ">
            <button
              className={`${
                isCategorySelected.All
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } px-6 py-2 rounded-md`}
              onClick={() => {
                setFilter("All");
                setIsCategorySelected(() => {
                  return {
                    All: true,
                    Ict: false,
                    Aviation: false,
                    Ticketing: false,
                    Airport: false,
                  };
                });
              }}
            >
              All
            </button>
            <button
              className={`${
                isCategorySelected.Ticketing
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } px-6 py-2 rounded-md`}
              onClick={() => {
                setFilter("Ticketing");
                setIsCategorySelected(() => {
                  return {
                    All: false,
                    Ict: false,
                    Aviation: false,
                    Ticketing: true,
                    Airport: false,
                  };
                });
              }}
            >
              Ticketing
            </button>
            <button
              className={`${
                isCategorySelected.Aviation
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } px-6 py-2 rounded-md`}
              onClick={() => {
                setFilter("Aviation");
                setIsCategorySelected(() => {
                  return {
                    All: false,
                    Ict: false,
                    Aviation: true,
                    Ticketing: false,
                    Airport: false,
                  };
                });
              }}
            >
              Aviation
            </button>
            <button
              className={`${
                isCategorySelected.Ict
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              } px-6 py-2 rounded-md`}
              onClick={() => {
                setFilter("Ict");
                setIsCategorySelected(() => {
                  return {
                    All: false,
                    Ict: true,
                    Aviation: false,
                    Ticketing: false,
                    Airport: false,
                  };
                });
              }}
            >
              ICT
            </button>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <div className="grid grid-cols-2 md:grid-cols-5 h-48">
          {filteredData.map((myData) => {
            return (
              <div key={myData.id} >
                <Link to={myData.link}>
                  <img src={myData.image} alt={myData.imageAlt} className="hover:bg-primary hover:scale-105 hover:rounded-sm" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
