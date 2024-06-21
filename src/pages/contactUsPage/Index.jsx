import { useEffect, useState } from "react";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import OtherFirstTopNavigationBar from "../../components/navBar/OtherFirstTopNavigationBar";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import HeaderSection from "../../components/sections/HeaderSection";
import ContactUsPage from "./ContactUsPage";
import backgroundImage from "/images/bgImage/bg2.png";


function ContactIndex() {
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
      <main >
        <header>
          {isVisible && <OtherFirstTopNavigationBar />}
          <div className={`bg-orange pt-32}`}>
            <CompanyInfoNav />
          </div>
          <section >
            <HeaderSection
              backgroundImage={backgroundImage}
              MainHeading={<OtherSecondMainNavigationBar />}
              headingTitle={"You can Contact Timtom Aviation Now"}
              nexNavLink={"/"}
              currentNavLink={"/contact"}
              currentNavName ={"Contact US"}
              prevNavLink={"/"}
          
            />
          </section>
        </header>
        <main>
          <section>
            <ContactUsPage />
          </section>
        </main>
      </main>
    );
  }
  

export default ContactIndex
