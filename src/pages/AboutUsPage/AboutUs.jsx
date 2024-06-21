import ExpertTeam from "../../components/ExpertTeam";
import TeacherTeam from "../../components/TeacherTeam";


const AboutUs = () => {
 
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row">
            <img src="/images/Aboutus/About3.png" alt="About Timtom Aviation" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Timtom Aviation</h2>
              <p className="text-gray-600 mb-4">
                Timtom Aviation was established in 2017 with a major focus on training, consultancy, and offering air ticket services.
                We provide training in courses related to Airport and Airline Management, Travel and Tourism, and award international
                professional certificates and diplomas in partnership with ICAO, IATA, and SACCA Institute of Freight and Tourism.
              </p>
              <p className="text-gray-600 mb-4">
                TIMTOM AVIATION also offers other services related to hospitality and tourism, including air ticketing, admission and
                visa application assistance, hotel reservations, travel insurance, and international tour packages in partnership with
                Vibes Tourism.
              </p>
              <p className="text-gray-600">
                Additionally, the company provides consultancy services in project/program evaluation, monitoring, implementation,
                learning and evaluation, research studies, training, and human resources management services.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex flex-col md:flex-row-reverse">
            <img src="/images/Aboutus/About3.png" alt="Our Mission" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:ml-4" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To become an African hub in providing knowledge and consultancy services in the fields of aviation, hospitality,
                and tourism. We aim to provide the best, updated, and relevant knowledge to our students, ensuring they are
                competitive in the global job market.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex flex-col md:flex-row">
            <img src="/images/Aboutus/About3.png" alt="Our Vision" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Establish an international first-class aviation institute in Africa that awards high levels of academic qualification to students worldwide.</li>
                <li>Provide the best knowledge and practical work experience to our students to ensure their competence in the job market.</li>
                <li>Empower, develop, and train human resources from aviation and related companies to perform better in their jobs.</li>
                <li>Provide the best consultancy services in aviation, tourism, and hospitality for Rwanda and Africa at large.</li>
                <li>Assist students from other schools to complete their internship programs thoroughly and productively.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row-reverse">
            <img src="/images/Aboutus/About3.png" alt="Team of Consultants" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:ml-4" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Team of Consultants</h2>
              <p className="text-gray-600 mb-4">
                TIMTOM Aviation consultancy boasts experts in various management functions, particularly in training, planning,
                monitoring, evaluation of programs and projects, research, and human resources management. Our team includes
                highly qualified partners and part-time consultants, many of whom are lecturers at universities in Rwanda and
                abroad, with an average of 12 years of experience.
              </p>
              <p className="text-gray-600">
                Their areas of expertise include research, planning, monitoring and evaluation, organizational reform, restructuring,
                human resources management, policy and procedure formulation, and other management areas.
              </p>
            </div>
          </div>
        </section>
       
      <section>
        <ExpertTeam/>
      </section>
      <section>
        <TeacherTeam />
      </section>
  
      </div>
    </div>
  );
};

export default AboutUs;
