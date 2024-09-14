import CompanyInfoNav from "../../components/navBar/CompanyInfoNav"
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation"
import HeaderSection from "../../components/sections/HeaderSection"
import AboutUs from "./AboutUs"
import backgroundImage from "/images/bgImage/bg2.png";

function AboutUsIndex() {
  // const [isVisible, setIsVisible] = useState(true);


  return (
    <main >
    <header>
      <div className={`bg-orange pt-32}`}>
        <CompanyInfoNav />
      </div>
      <section >
        <HeaderSection
          backgroundImage={backgroundImage}
          MainHeading={<OtherSecondMainNavigationBar />}
          headingTitle={"All About Timtom Aviation Ltd"}
          nexNavLink={"/"}
          currentNavLink={"/about"}
          currentNavName ={"About Us"}
          prevNavLink={"/"}
      
        />
      </section>
    </header>
    <main className="bg-white">
      <section>
        <AboutUs />
      </section>
    </main>
  </main>
  )
}

export default AboutUsIndex
