import CompanyInfoNav from "../../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../../components/sections/HeaderSection";
import OtherSecondMainNavigationBar from "../../../components/navBar/OtherSecondNavigation";
import AsideServices from "../../../components/sections/AsideServices";
import Services from "../Services";
import backgroundImage from "/images/bgImage/bg2.png";
import howImageIs from "/images/HomeImage2.png";

function AdmisionAndVisa() {
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
            headingTitle={"Admission and Visa Services"}
            nexNavLink={"/"}
            currentNavLink={"/services"}
            currentNavName={"Services"}
            prevNavLink={"/"}
          />
        </section>
      </header>
      <main className="px-4 gap-8 md:pl-8 lg:pl-12 py-16 grid grid-cols-12">
        <section className="col-span-3">
          <AsideServices selectedServiceOption={"AdmissionAndVisa"} />
        </section>
        <section className="col-span-9">
          <Services
            mainImage1={backgroundImage}
            altImage1={"Admission and Visa Assistance"}
            roleOnImage1={"Admission and Visa Services"}
            headingTitle1={"Comprehensive Admission & Visa Assistance"}
            headingTitle2={"Service Overview"}
            pragraphContent1={
              "At Timtom Aviation Ltd, we offer professional visa application assistance for individuals seeking to travel internationally. Our services include guidance on document preparation, application submission, and tracking for various visa types."
            }
            pragraphContent2={
              "In addition to visa assistance, we also provide consultancy on admission to international universities. Our team works with students to help them choose the best academic programs and navigate through the admission process for universities in the USA, Canada, and Europe."
            }
            whyTitleHeading={
              "Why Choose Timtom Aviation Ltd for Admission & Visa Services?"
            }
            whyMainPragraphContent={
              "We understand the complexities of visa applications and university admissions. With our team’s expertise, we provide reliable assistance ensuring that your applications are accurate, timely, and stress-free."
            }
            whyPragraphContent1={
              "We have strong partnerships with international institutions and embassies."
            }
            whyPragraphContent2={
              "We provide full visa application support, from documentation to submission."
            }
            whyPragraphContent3={
              "Our team offers tailored consultancy services for students applying to top universities worldwide."
            }
            whyPragraphContent4={
              "Affordable service fees with comprehensive support for both admission and visa processes."
            }
            howTitleHeading={"How We Can Help You"}
            howMainImage={howImageIs}
            howMainPragraphContent={
              "Our services include document checks, personalized consultancy on visa requirements, and university admissions. We make sure that clients are fully prepared to meet embassy requirements and university criteria."
            }
            howPragraphContent1={
              "Complete guidance on visa applications for USA, Canada, and Europe."
            }
            howPragraphContent2={
              "Admission consultancy for international academic programs."
            }
            howPragraphContent3={"Document review and submission tracking."}
            howPragraphContent4={
              "Timely updates on application status and embassy appointments."
            }
            howPragraphContent5={
              "Personalized support to increase the chances of successful applications."
            }
          />
        </section>
      </main>
    </main>
  );
}

export default AdmisionAndVisa;
