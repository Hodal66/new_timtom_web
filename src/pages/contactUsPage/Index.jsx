import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import HeaderSection from "../../components/sections/HeaderSection";
import ContactUsPage from "./ContactUsPage";
import backgroundImage from "/images/bgImage/bg2.png";


function ContactIndex() {
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
              headingTitle={"You can Contact Timtom Aviation Now"}
              nexNavLink={"/"}
              currentNavLink={"/contact"}
              currentNavName ={"Contact US"}
              prevNavLink={"/"}
          
            />
          </section>
        </header>
        <main className="bg-white">
          <section>
            <ContactUsPage />
          </section>
        </main>
      </main>
    );
  }
  

export default ContactIndex
