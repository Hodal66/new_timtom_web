import CompanyInfoNav from "../../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../../components/sections/HeaderSection";
import OtherSecondMainNavigationBar from "../../../components/navBar/OtherSecondNavigation";
import AsideServices from "../../../components/sections/AsideServices";
import Services from "../Services";
import backgroundImage from "/images/ServicesImages/consultancy1.jpeg";
import howImageIs from "/images/ServicesImages/consultancy2.jpg";

function Consultancy() {

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
            headingTitle={"Consultancy Services"}
            nexNavLink={"/"}
            currentNavLink={"/services"}
            currentNavName={"Services"}
            prevNavLink={"/"}
          />
        </section>
      </header>
      <main className="px-4 gap-8 md:pl-8 lg:pl-12 py-16 grid grid-cols-12">
        <section className="col-span-3">
          <AsideServices selectedServiceOption={"Consultancy"} />
        </section>
        <section className="col-span-9">
          <Services
            mainImage1={backgroundImage}
            altImage1={"Consultancy Services Image"}
            roleOnImage1={"Consultancy Services"}
            headingTitle1={"Expert Consultancy Solutions"}
            headingTitle2={"Consultancy Service Overview"}
            pragraphContent1={
              "Timtom Aviation Ltd provides top-notch consultancy services specializing in project evaluation, monitoring, and implementation. We offer services across various domains including aviation, hospitality, and human resources."
            }
            pragraphContent2={
              "Our consultancy services include program evaluation, learning and evaluation, research studies, and human resource management services such as recruitment, performance appraisals, and strategic HR planning. We tailor our solutions to meet the specific needs of our clients, ensuring high-quality outcomes."
            }
            whyTitleHeading={"Why Choose Timtom Aviation Ltd for Consultancy?"}
            whyMainPragraphContent={
              "At Timtom Aviation Ltd, we pride ourselves on delivering exceptional consultancy services to a diverse range of clients. Our experts have years of experience in project and program evaluation, ensuring that we provide tailored solutions that align with our clients' goals."
            }
            whyPragraphContent1={
              "Experienced in project and program evaluation across multiple industries."
            }
            whyPragraphContent2={
              "Comprehensive HR consultancy, including recruitment and performance management."
            }
            whyPragraphContent3={
              "Tailored solutions for both large-scale projects and smaller, focused evaluations."
            }
            whyPragraphContent4={
              "Commitment to delivering timely, high-quality outcomes for our clients."
            }
            howTitleHeading={"How We Can Help"}
            howMainImage={howImageIs}
            howMainPragraphContent={
              "We assist organizations by providing in-depth consultancy services across several areas, including project management, human resources, and strategic planning. Our team of experts works closely with clients to deliver customized solutions that drive success."
            }
            howPragraphContent1={
              "Project evaluation and monitoring for both ongoing and completed projects."
            }
            howPragraphContent2={
              "HR management services, including strategic planning and recruitment."
            }
            howPragraphContent3={
              "Customized consultancy solutions based on client needs."
            }
            howPragraphContent4={"Research studies and program evaluations."}
            howPragraphContent5={
              "Organizational structure development and process optimization."
            }
          />
        </section>
      </main>
    </main>
  );
}

export default Consultancy;
