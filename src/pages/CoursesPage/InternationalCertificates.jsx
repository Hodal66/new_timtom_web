import backgroundImage from "/images/bgImage/bg2.png";
// import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import MainNavigationBar from "../../components/navBar/MainNavigationBar";
import HeaderSection from "../../components/sections/HeaderSection";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import HeadingTwo from "../../components/Headings/HeadingTwo";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";

function InternationalCertificates() {
  const courses = [
    {
      courseName: "Personnel Licensing",
      duration: "1 month",
      fees: "300,000 RWF",
      usdFees: null,
    },
    {
      courseName: "Auditing Techniques in Civil Aviation",
      duration: "1 month",
      fees: "300,000 RWF",
      usdFees: null,
    },
    {
      courseName: "Safety Management System",
      duration: "1 month",
      fees: "300,000 RWF",
      usdFees: null,
    },
    {
      courseName: "USOAP CMA AUDIT",
      duration: "1 month",
      fees: "400,000 RWF",
      usdFees: null,
    },
    {
      courseName: "Aviation Management",
      duration: "2 months",
      fees: "400,000 RWF",
      usdFees: null,
    },
    {
      courseName: "Airport Operations",
      duration: "1 month",
      fees: "200,000 RWF",
      usdFees: null,
    },
    {
      courseName: "Airline Marketing",
      duration: "1 month",
      fees: "200,000 RWF",
      usdFees: null,
    },
    {
      courseName: "Airport Ground Handling",
      duration: "1 month",
      fees: "200,000 RWF",
      usdFees: null,
    },
    {
      courseName: "Air Cabin Crew",
      duration: "1 month",
      fees: "200,000 RWF",
      usdFees: "490 USD",
    },
    {
      courseName: "Dangerous Goods",
      duration: "1 month",
      fees: "200,000 RWF",
      usdFees: null,
    },
    {
      courseName: "Air fares and ticketing with Amadeus",
      duration: "1 month",
      fees: "200,000 RWF",
      usdFees: null,
    },
    {
      courseName: "IATA Diploma in Airport Operations",
      duration: "6 months",
      fees: "400,000 RWF",
      usdFees: "455 USD",
    },
    {
      courseName: "IATA Diploma in Foundation in Travel and Tourism",
      duration: "6 months",
      fees: "400,000 RWF",
      usdFees: "670 USD",
    },
    {
      courseName: "IATA Diploma in Aviation Fundamentals",
      duration: "6 months",
      fees: "400,000 RWF",
      usdFees: "975 USD",
    },
    {
      courseName: "IATA Diploma in Air Cargo Management",
      duration: "6 months",
      fees: "400,000 RWF",
      usdFees: "341 USD",
    },
    {
      courseName: "ICAO Course (Various Specializations)",
      duration: "3 months",
      fees: "400,000 RWF",
      usdFees: "800 USD",
    },
  ];

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
          headingTitle={"All About Our Courses With International Certificates"}
          nexNavLink={"/"}
          currentNavLink={"/courses"}
          currentNavName={"Our International Certificates Courses"}
          prevNavLink={"/"}
        />
      </header>

      <div className="container mx-auto my-10 p-5">
        <div className="flex justify-center">
          <HeadingTwo headingTitle={"International Certificate Courses"} />
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
                  Fees (RWF)
                </th>
                <th className="py-3 px-6 text-left border-b border-gray-300">
                  Fees (USD)
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {courses.map((course, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-100 transition-colors duration-200`}
                >
                  <td className="py-3 px-6">{course.courseName}</td>
                  <td className="py-3 px-6">{course.duration}</td>
                  <td className="py-3 px-6">{course.fees}</td>
                  <td className="py-3 px-6">{course.usdFees || "-"}</td>
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

export default InternationalCertificates;
