import { useEffect, useState } from "react";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import OtherFirstTopNavigationBar from "../../components/navBar/OtherFirstTopNavigationBar";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import HeaderSection from "../../components/sections/HeaderSection";
import backgroundImage from "/images/bgImage/bg2.png";
import MediaPage from "./MediaPage";
import MainNavigationBar from "../../components/navBar/MainNavigationBar";

function GalleryIndex() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 8000); // 60000 milliseconds = 1 minute
    
        return () => clearTimeout(timeout);
      }, []); // Runs only once when the component mounts
    
  return (
    <main className="bg-textWhite">
    <header>
    <div className="md:hidden">
      <MainNavigationBar/>
      </div>
      {isVisible && <OtherFirstTopNavigationBar />}
      <div className={`bg-orange pt-32}`}>
        <CompanyInfoNav />
      </div>
      <section >
        <HeaderSection
          backgroundImage={backgroundImage}
          MainHeading={<OtherSecondMainNavigationBar />}
          headingTitle={"All Stock of Images and Videos From Timtom Aviation Ltd"}
          nexNavLink={"/"}
          currentNavLink={"/gallery"}
          currentNavName ={"Our Gallery"}
          prevNavLink={"/"}
      
        />
      </section>
    </header>
    <main>
      <section>
   <MediaPage />
      </section>
    </main>
  </main>
  )
}

export default GalleryIndex

