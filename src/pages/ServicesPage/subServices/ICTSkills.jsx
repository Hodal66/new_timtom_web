import CompanyInfoNav from "../../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../../components/sections/HeaderSection";
import OtherSecondMainNavigationBar from "../../../components/navBar/OtherSecondNavigation";
import AsideServices from "../../../components/sections/AsideServices";
import Services from "../Services";
import backgroundImage from "/images/ServicesImages/ICT3.avif";
import howImageIs from "/images/ServicesImages/ICT4.avif";
import MainNavigationBar from "../../../components/navBar/MainNavigationBar";

function ICTSkills() {
  return (
    <main className="bg-white">
      <header>
      <div>
          <CompanyInfoNav/>
        </div>
        <div className="lg:hidden">
        <MainNavigationBar />
      </div>
        <section>
          <HeaderSection
            backgroundImage={backgroundImage}
            MainHeading={<OtherSecondMainNavigationBar />}
            headingTitle={"ICT Skills Services"}
            nexNavLink={"/"}
            currentNavLink={"/services"}
            currentNavName={"Services"}
            prevNavLink={"/"}
          />
        </section>
      </header>
      <main className="px-4 gap-8 md:pl-8 lg:pl-12 py-16 lg:grid grid-cols-12">
      <section className="lg:col-span-3">
          <AsideServices selectedServiceOption={"ICTSkills"} />
        </section>
        <section className="lg:col-span-9">
          <Services
            mainImage1={backgroundImage}
            altImage1={"ICT Skills Service"}
            roleOnImage1={"ICT Skills Service"}
            headingTitle1={"Comprehensive ICT Skills Training"}
            headingTitle2={"Service Overview"}
            pragraphContent1={
              "Timtom Aviation Ltd offers comprehensive training in ICT skills, including Microsoft Office, Irembo services, and more. These courses are designed to equip individuals with the necessary digital skills to excel in various fields, including Web Development and UI/UX Design."
            }
            pragraphContent2={
              "Our ICT skills training covers topics like Microsoft Office (Word, Excel, PowerPoint), Irembo Services, Electronic Billing Machine (EBM), and Tax Declaration. Additionally, we provide specialized courses in web development using HTML, CSS, JavaScript, PHP, and GraphQL, as well as UI/UX Design for students aspiring to enter the tech industry."
            }
            whyTitleHeading={"Why Choose Timtom Aviation Ltd for ICT Training?"}
            whyMainPragraphContent={
              "We provide hands-on ICT training that empowers individuals with the digital skills needed in today's job market. Our courses are practical, affordable, and led by experienced professionals. Furthermore, we help students secure internships in the ICT field, giving them real-world experience."
            }
            whyPragraphContent1={
              "Comprehensive ICT training tailored to current market demands."
            }
            whyPragraphContent2={
              "Practical experience with Microsoft Office, Irembo, EBM, and Web Development."
            }
            whyPragraphContent3={
              "Affordable fees with flexible training schedules."
            }
            whyPragraphContent4={
              "Partnerships with internationally recognized organizations and support in finding internships."
            }
            howTitleHeading={"How We Can Help You"}
            howMainImage={howImageIs}
            howMainPragraphContent={
              "We offer a range of ICT training programs that help individuals improve their digital proficiency. Whether you're looking to learn basic office tools, manage tax declarations, or dive into web development and UI/UX design, we provide the necessary skills and internship opportunities."
            }
            howPragraphContent1={
              "Training in Microsoft Office tools for document creation, data management, and presentations."
            }
            howPragraphContent2={
              "Comprehensive Irembo services training, covering various government services."
            }
            howPragraphContent3={
              "Web development courses, covering HTML, CSS, JavaScript, PHP, and GraphQL."
            }
            howPragraphContent4={
              "UI/UX design training, focusing on user-centered design and prototyping."
            }
            howPragraphContent5={
              "Internship assistance for students in ICT-related fields, including web development and design."
            }
          />
        </section>
      </main>
    </main>
  );
}

export default ICTSkills;
