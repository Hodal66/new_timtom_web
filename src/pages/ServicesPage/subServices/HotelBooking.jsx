import CompanyInfoNav from "../../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../../components/sections/HeaderSection";
import OtherSecondMainNavigationBar from "../../../components/navBar/OtherSecondNavigation";
import AsideServices from "../../../components/sections/AsideServices";
import Services from "../Services";
import backgroundImage from "/images/ServicesImages/hotelBooking1.jpg";
import howImageIs from "/images/ServicesImages/hotelBooking.jpg";

function HotelBooking() {
  return (
    <main className="bg-white">
      <header>
        <div className="">
          <CompanyInfoNav />
        </div>
        <section>
          <HeaderSection
            backgroundImage={backgroundImage}
            MainHeading={<OtherSecondMainNavigationBar />}
            headingTitle={"Hotel Booking Services"}
            nexNavLink={"/"}
            currentNavLink={"/services"}
            currentNavName={"Services"}
            prevNavLink={"/"}
          />
        </section>
      </header>
      <main className="px-4 gap-8 md:pl-8 lg:pl-12 py-16 grid grid-cols-12">
        <section className="col-span-3">
          <AsideServices selectedServiceOption={"HotelBooking"} />
        </section>
        <section className="col-span-9">
          <Services
            mainImage1={backgroundImage}
            altImage1={"Hotel Booking Service"}
            roleOnImage1={"Hotel Booking Service"}
            headingTitle1={"Comprehensive Hotel Booking Services"}
            headingTitle2={"Service Overview"}
            pragraphContent1={
              "Timtom Aviation Ltd offers seamless hotel booking services in partnership with trusted hotels both locally and internationally. Whether you're traveling for business or leisure, we ensure that you have a comfortable stay at competitive rates."
            }
            pragraphContent2={
              "Our team works closely with hotel partners to secure the best deals for our clients, offering a range of options from budget accommodations to luxury stays. We also provide additional services such as airport transfers and special requests for clients."
            }
            whyTitleHeading={
              "Why Choose Timtom Aviation Ltd for Hotel Booking?"
            }
            whyMainPragraphContent={
              "Timtom Aviation Ltd guarantees a stress-free hotel booking experience. With our strong partnerships and focus on customer satisfaction, we ensure that you get the best possible accommodations at affordable prices."
            }
            whyPragraphContent1={
              "Exclusive partnerships with local and international hotels."
            }
            whyPragraphContent2={
              "Competitive rates with a wide range of accommodation options."
            }
            whyPragraphContent3={
              "24/7 customer support for hotel bookings and special requests."
            }
            whyPragraphContent4={
              "Additional services like airport transfers and customized arrangements."
            }
            howTitleHeading={"How We Can Help"}
            howMainImage={howImageIs}
            howMainPragraphContent={
              "We assist our clients with booking the best hotels based on their preferences and budget. From arranging airport transfers to meeting any special accommodation requirements, we ensure a smooth and enjoyable stay."
            }
            howPragraphContent1={
              "Seamless booking process for both local and international hotels."
            }
            howPragraphContent2={
              "Special discounts for corporate clients and large groups."
            }
            howPragraphContent3={
              "Tailored services for airport transfers and other requests."
            }
            howPragraphContent4={
              "Collaboration with top hotel brands worldwide."
            }
            howPragraphContent5={
              "24/7 customer support to handle booking modifications."
            }
          />
        </section>
      </main>
    </main>
  );
}

export default HotelBooking;
