import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import { style } from "../../style";

function NewServicesSection() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="header_container mb-6">
        <header className={`${style.flexColCenterAlignCenter}`}>
          <HeadingThree headingTitle={"The Timtom Aviation Courses"} />
          <HeadingOne headingTitle={"Enjoy Timtom Aviation Courses In :"} />
          <div className={`${style.flexColCenterAlignCenter} gap-0 text-black`}>
            {/* You can add any additional content here */}
          </div>
        </header>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-whiteWhite rounded-lg shadow-lg">
          <HeadingThree
            headingTitle={"International Certificate Courses in Aviation"}
          />
          <ul className="py-4 font-semibold text-blue flex flex-col gap-3">
            <li>1. IATA Diploma in Airport Operations</li>
            <li>2. IATA Diploma in Foundation in Travel and Tourism</li>
            <li>3. IATA Diploma in Aviation Fundamentals</li>
            <li>4. Air Cabin Crew</li>
            <li>5. IATA Diploma in Air Cargo Management</li>
            <li>6. USOAP CMA Phase I</li>
          </ul>
        </div>

        <div className="p-6 bg-whiteWhite rounded-lg shadow-lg">
          <HeadingThree
            headingTitle={"Local Certificate Courses in Aviation"}
          />
          <ul className="py-4 font-semibold text-blue flex flex-col gap-3">
            <li>1. Airport Operations</li>
            <li>2. Personnel Licensing</li>
            <li>3. Auditing Techniques in Civil Aviation</li>
            <li>4. Safety Management System</li>
            <li>5. USOAP CMA AUDIT</li>
            <li>6. Aviation Management</li>
          </ul>
        </div>

        <div className="p-6 bg-whiteWhite rounded-lg shadow-lg">
          <HeadingThree
            headingTitle={"Local Certificate in ICT Courses And Internship"}
          />
          <ul className="py-4 font-semibold text-blue flex flex-col gap-3">
            <li>1. Get All Microsoft Packages and Google Products</li>
            <li>2. Get Knowledge about Irembo and EBM</li>
            <li>3. All About Tax Declaration</li>
            <li>4. Learn Visa Application and Hotel Booking</li>
            <li>5. Graphic Design & UI/UX Web Design</li>
            <li>6. Basic & Advanced Web Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewServicesSection;
