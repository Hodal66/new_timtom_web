import Blog from "./Blog"
import ClientTestmonials from "./ClientTestmonials"
import CoursesSection from "./CoursesSection"
import ExpertTeam from "./ExpertTeam"
import HeroArea from "./HeroArea"
import ProfessionalExperty from "./ProfessionalExperty"
import ServicesHome from "./ServicesHome"
import Statistics from "./Statistics"

function HomePageIndex() {
  return (
    <div className="flex flex-col gap-24 px-12">
        <HeroArea/>
        <ProfessionalExperty/>
        <Statistics />   
        <ServicesHome />
        <CoursesSection />
        <ExpertTeam />
        <ClientTestmonials />
        <Blog />
    </div>
  )
}

export default HomePageIndex
