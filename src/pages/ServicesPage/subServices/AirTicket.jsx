import { useEffect, useState } from "react";
import OtherFirstTopNavigationBar from "../../../components/navBar/OtherFirstTopNavigationBar";
import CompanyInfoNav from "../../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../../components/sections/HeaderSection";
import OtherSecondMainNavigationBar from "../../../components/navBar/OtherSecondNavigation";
import AsideServices from "../../../components/sections/AsideServices";
import Services from "../Services";
import backgroundImage from "/images/ServicesImages/AirTicket6.jpg";
import howImageIs from "/images/ServicesImages/AirTicket4.jpg";

function AirTicket() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 8000); // Set the visibility timeout for the navigation bar

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-white">
      <header>
        {isVisible && <OtherFirstTopNavigationBar />}
        <div className="">
          <CompanyInfoNav />
        </div>
        <section>
          <HeaderSection
            backgroundImage={backgroundImage}
            MainHeading={<OtherSecondMainNavigationBar />}
            headingTitle={"Our Air Ticketing Services"}
            nexNavLink={"/"}
            currentNavLink={"/services"}
            currentNavName={"Services"}
            prevNavLink={"/"}
          />
        </section>
      </header>
      <main className="px-4 gap-8 md:pl-8 lg:pl-12 py-16 grid grid-cols-12">
        <section className="col-span-3">
          <AsideServices selectedServiceOption={"AirTicket"} />
        </section>
        <section className="col-span-9">
          <Services
            mainImage1={backgroundImage}
            altImage1={"Air Ticketing Service"}
            roleOnImage1={"Air Ticketing Service"}
            headingTitle1={"Comprehensive Air Ticketing Solutions"}
            headingTitle2={"Service Overview"}
            pragraphContent1={
              "Timtom Aviation Ltd has been offering air ticketing services since 2017. Our partnership with globally recognized airlines allows us to provide affordable and reliable air ticketing services to individuals and corporate clients."
            }
            pragraphContent2={
              "Whether you're booking domestic or international flights, we ensure seamless service, including visa assistance for specific destinations. Our goal is to provide clients with hassle-free travel arrangements tailored to their needs."
            }
            whyTitleHeading={"Why Choose Timtom Aviation Ltd?"}
            whyMainPragraphContent={
              "At Timtom Aviation Ltd, we offer exceptional air ticketing services through well-established partnerships with recognized airlines. We focus on delivering top-notch service with added benefits such as visa application support."
            }
            whyPragraphContent1={
              "We provide customized travel solutions for both individuals and corporate clients."
            }
            whyPragraphContent2={
              "Partnerships with renowned international airlines."
            }
            whyPragraphContent3={
              "Visa application assistance for various travel destinations."
            }
            whyPragraphContent4={
              "Affordable air ticket prices for international and domestic flights."
            }
            howTitleHeading={"How We Can Help You"}
            howMainImage={howImageIs}
            howMainPragraphContent={
              "We provide full-service support from booking your flight to ensuring a smooth check-in experience. With our added visa assistance service, you can travel confidently knowing that all your paperwork is handled."
            }
            howPragraphContent1={"Visa assistance for select destinations."}
            howPragraphContent2={"Specialized support for corporate clients."}
            howPragraphContent3={"Competitive prices on airfares."}
            howPragraphContent4={"Customer support available 24/7."}
            howPragraphContent5={"Reliable partnerships with global airlines."}
          />
        </section>
      </main>
    </main>
  );
}

export default AirTicket;
