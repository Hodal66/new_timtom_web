import ExpertTeam from "../../components/ExpertTeam";
import MainNavigationBar from "../../components/navBar/MainNavigationBar";
import TopNavigationBar from "../../components/navBar/TopNavigationBar";
import ClientTestmonials from "./ClientTestmonials";
import CoursesSection from "./CoursesSection";
import HeroArea from "./HeroArea";
import ProfessionalExperty from "./ProfessionalExperty";
import ServicesHome from "./ServicesHome";
import Statistics from "./Statistics";
import Subscribe from "./Subscribe";
function HomePageIndex() {
  return (
    <div>
       <TopNavigationBar />
        <MainNavigationBar />
      <HeroArea />
      <section className="px-4 grid grid-cols-1 gap-24 md:px-8 lg:px-12 py-16">
        <ProfessionalExperty />
        <Statistics />
      </section>
      <ServicesHome />
      <CoursesSection />
       <section className="px-4 grid grid-cols-1 gap-24 md:px-8 lg:px-12 py-16">
        <ExpertTeam/>
      </section>
      <section className="px-8 grid grid-cols-1 gap-24 md:px-8 lg:px-12 py-16">
        <ClientTestmonials />
        <Subscribe />
      </section> 
    </div>
  );
}
export default HomePageIndex;
