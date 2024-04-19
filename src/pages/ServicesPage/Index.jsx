import { useEffect, useState } from "react";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import OtherFirstTopNavigationBar from "../../components/navBar/OtherFirstTopNavigationBar";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";

import Services from "./Services";
import HeaderSection from "../../components/sections/HeaderSection";
import backgroundImage from "/images/bgImage/bg1.png";

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
    <main className="bg-primary">
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
            nexNavLink={"/courses"}
            prevNavLink={"/"}
            nexNavName={"Services"}
          />
        </section>
      </header>
      <main>
        <section>
          <Services />
        </section>
      </main>
    </main>
  );
}

export default ServicesIndex;
