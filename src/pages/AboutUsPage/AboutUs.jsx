/* eslint-disable react/no-unknown-property */
import ExpertTeam from "../../components/ExpertTeam";
import MainNavigationBar from "../../components/navBar/MainNavigationBar";
import TeacherTeam from "../../components/TeacherTeam";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 lg:px-12 md:px-8 ">
      <div className="lg:hidden">
        <MainNavigationBar />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-16 lg:gap-24 ">
        <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/images/Aboutus/AboutImage.JPG"
              alt="About Timtom Aviation"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg mb-4 md:mb-0"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Timtom Aviation
              </h2>
              <div className="flex items-start mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4.5l3 1.5M12 20h.01M4 6h16M4 10h16m-3 6h-8a2 2 0 01-2-2v-2a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Timtom Aviation was established in 2017 with a major focus on
                  training, consultancy, and offering air ticket services. We
                  provide training in courses related to Airport and Airline
                  Management, Travel and Tourism, and award international
                  professional certificates and diplomas in partnership with
                  ICAO, IATA, and SACCA Institute of Freight and Tourism.
                </p>
              </div>
              <div className="flex items-start mb-4">
                <svg
                  className="w-6 h-6 text-green-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 16h14M5 8h14M4 4h16M4 20h16"
                  />
                </svg>
                <p className="text-gray-600 leading-relaxed text-justify">
                  TIMTOM AVIATION also offers other services related to
                  hospitality and tourism, including air ticketing, admission
                  and visa application assistance, hotel reservations, travel
                  insurance, and international tour packages in partnership with
                  Vibes Tourism.
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-red-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5h18M3 10h18m-7 7h7M3 15h7"
                  />
                </svg>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Additionally, the company provides consultancy services in
                  project/program evaluation, monitoring, implementation,
                  learning and evaluation, research studies, training, and human
                  resources management services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                At our core, we are dedicated to becoming Africa&lsquo; s
                leading hub for knowledge and consultancy in the realms of
                aviation, hospitality, and tourism. Our mission is to deliver
                the most current, relevant, and high-quality education to our
                students, empowering them with the skills and knowledge needed
                to excel in the global job market.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                We strive to foster an environment of excellence, innovation,
                and continuous improvement, ensuring our offerings are aligned
                with industry standards and future trends. Our commitment is to
                equip our students with the tools and confidence to thrive in
                their chosen fields.
              </p>
            </div>
            <img
              src="/images/Aboutus/AboutUsImage3.jpg"
              alt="Our Mission"
              className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
               src="/images/Aboutus/AboutUsImage5.jpg"
              alt="Our Vision"
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-xl"
            />
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                Our Vision
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-4 leading-relaxed text-justify">
                <li>
                  Establish an international first-class aviation institute in
                  Africa that awards high levels of academic qualification to
                  students worldwide.
                </li>
                <li>
                  Provide the best knowledge and practical work experience to
                  our students to ensure their competence in the job market.
                </li>
                <li>
                  Empower, develop, and train human resources from aviation and
                  related companies to perform better in their jobs.
                </li>
                <li>
                  Provide the best consultancy services in aviation, tourism,
                  and hospitality for Rwanda and Africa at large.
                </li>
                <li>
                  Assist students from other schools to complete their
                  internship programs thoroughly and productively.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Team of Consultants
              </h2>
              <div className="flex items-start mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <p className="text-gray-600 leading-relaxed text-justify">
                  TIMTOM Aviation consultancy boasts experts in various
                  management functions, particularly in training, planning,
                  monitoring, evaluation of programs and projects, research, and
                  human resources management. Our team includes highly qualified
                  partners and part-time consultants, many of whom are lecturers
                  at universities in Rwanda and abroad, with an average of 12
                  years of experience.
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6M9 16h6M9 8h6m-4 8v4m0-4V4"
                  />
                </svg>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Their areas of expertise include research, planning,
                  monitoring and evaluation, organizational reform,
                  restructuring, human resources management, policy and
                  procedure formulation, and other management areas.
                </p>
              </div>
            </div>
            <img
              src="/images/Aboutus/consultancyx.jpg"
              alt="Team of Consultants"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg mb-4 md:mb-0"
            />
          </div>
        </section>

        <section>
          <ExpertTeam />
        </section>
        <section>
          <TeacherTeam />
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
