import backgroundImage from "/images/bgImage/bg2.png";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../components/sections/HeaderSection";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import HeadingTwo from "../../components/Headings/HeadingTwo";
import MainNavigationBar from "../../components/navBar/MainNavigationBar";
import { CourseData } from "../../database/static/CoursesData";
import { Link } from "react-router-dom";

function LocalAdvancedCertificates() {
  const getAllLocalAdvancedCourses = CourseData.filter((localAdvancedCourse)=>{
    return localAdvancedCourse.typeOfCetificate == "Advanced Certificate"
  })

  return (
    <div>
      <header>
      <div>
          <CompanyInfoNav/>
        </div>
        <div className="lg:hidden">
        <MainNavigationBar />
      </div>
        <HeaderSection
          backgroundImage={backgroundImage}
          MainHeading={<OtherSecondMainNavigationBar />}
          headingTitle={
            "All About Our Courses With Local Advanced Certificates"
          }
          nexNavLink={"/"}
          currentNavLink={"/courses"}
          currentNavName={"Our Local Advanced Certificates Courses"}
          prevNavLink={"/"}
        />
      </header>

      <div className="container mx-auto my-10 p-5">
        <div className="flex justify-center">
          <HeadingTwo headingTitle={"Local Advanced Certificate Courses"} />
        </div>

        {/* The table section */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-300 text-gray-700 text-sm uppercase leading-normal">
                <th className="py-3 px-6 text-left border-b border-gray-300">
                  Course Name
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-300">
                  Duration
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-300">
                  Training Fees
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {getAllLocalAdvancedCourses.map((course, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-100 transition-colors duration-200`}
                >
                  <td className="py-3 px-6"><Link to={`/courses/${course.id}`}>{course.courseName}</Link></td>
                  <td className="py-3 px-6">{course.duration} Months</td>
                  <td className="py-3 px-6">{course.money}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center mt-8 text-gray-600 text-lg text-black font-semibold">
          Umpstart your aviation career with globally recognized certificates!
          Gain hands-on experience from industry leaders, master high-demand
          skills, and unlock exciting opportunities. Enroll now and secure your
          future in aviation!
        </p>
      </div>
    </div>
  );
}

export default LocalAdvancedCertificates;
