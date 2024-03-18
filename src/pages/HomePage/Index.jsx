import HeroArea from "./HeroArea"
import ProfessionalExperty from "./ProfessionalExperty"
import ServicesHome from "./ServicesHome"
import Statistics from "./Statistics"

function HomePageIndex() {
  return (
    <div className="flex flex-col gap-16">
        <HeroArea/>
        <ProfessionalExperty/>
        <Statistics />   
        <ServicesHome />
    </div>
  )
}

export default HomePageIndex
