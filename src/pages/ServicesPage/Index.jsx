import { useEffect, useState } from "react";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import OtherFirstTopNavigationBar from "../../components/navBar/OtherFirstTopNavigationBar";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";

import Services from "./Services";
import HeaderSection from "../../components/sections/HeaderSection";
import backgroundImage from "/images/bgImage/bg2.png";
import AsideServices from "../../components/sections/AsideServices";

function ServicesIndex() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 8000); // 60000 milliseconds = 1 minute

    return () => clearTimeout(timeout);
  }, []); // Runs only once when the component mounts

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  return (
    <main className="bg-white">
      <header>
        {isVisible && <OtherFirstTopNavigationBar />}
        <div className={`bg-orange pt-32}`}>
          <CompanyInfoNav />
        </div>
        <section >
          <HeaderSection
            backgroundImage={backgroundImage}
            MainHeading={<OtherSecondMainNavigationBar />}
            headingTitle={"All Our Services"}
            nexNavLink={"/"}
            currentNavLink={"/services"}
            currentNavName ={"Services"}
            prevNavLink={"/"}
        
          />
        </section>
      </header>
      <main className={`px-4 gap-8 md:pl-8 lg:pl-12 py-16 grid grid-cols-12`}>
      <section className="col-span-3">
        <AsideServices />
      </section>
        <section className="col-span-9">
          <Services />
        </section>
      </main>
    </main>
  );
}

export default ServicesIndex;
