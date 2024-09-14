import MainNavigationBar from "../../components/navBar/MainNavigationBar";
import TopNavigationBar from "../../components/navBar/TopNavigationBar";
import ClientTestmonials from "./ClientTestmonials";
import CoursesDropDown from "./CoursesDropDown";
import CoursesHome from "./coursesHome";
import HeroArea from "./HeroArea";
import NewServicesSection from "./NewServicesSection";
// import ProfessionalExperty from "./ProfessionalExperty";
import ServicesHome from "./ServicesHome";
import Statistics from "./Statistics";
import Subscribe from "./Subscribe";
function HomePageIndex() {
  return (
    <div>
      <TopNavigationBar />
      <MainNavigationBar />
      <div>
        <HeroArea />
      </div>
      <section className="px-4 grid grid-cols-1 gap-24 md:px-8 lg:px-12 py-16">
        <NewServicesSection />
      </section>
      <section className="px-4 grid grid-cols-1 gap-24 md:px-8 lg:px-12 py-16">
        <CoursesDropDown />
      </section>
      <section>
        <ServicesHome />
      </section>
      <section className="px-4 grid grid-cols-1 gap-24 md:px-8 lg:px-12 py-16">
        {/* <ProfessionalExperty /> */}
        <Statistics />
      </section>
      <section>
        <CoursesHome />
      </section>

      <section className="px-4 grid grid-cols-1 gap-24 md:px-8 lg:px-12 py-16">
        <ClientTestmonials />
        <Subscribe />
      </section>
    </div>
  );
}
export default HomePageIndex;
