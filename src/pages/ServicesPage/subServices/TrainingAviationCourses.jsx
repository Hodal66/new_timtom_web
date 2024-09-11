import { useEffect, useState } from "react";
import OtherFirstTopNavigationBar from "../../../components/navBar/OtherFirstTopNavigationBar";
import CompanyInfoNav from "../../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../../components/sections/HeaderSection";
import OtherSecondMainNavigationBar from "../../../components/navBar/OtherSecondNavigation";
import AsideServices from "../../../components/sections/AsideServices";
import Services from "../Services";
import backgroundImage from "/images/ServicesImages/Aviation4.jpg";
import howImageIs from "/images/ServicesImages/Aviation1.jpg";

function TrainingAviationCourses() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

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
            headingTitle={"Aviation Training Courses"}
            nexNavLink={"/"}
            currentNavLink={"/services"}
            currentNavName={"Services"}
            prevNavLink={"/"}
          />
        </section>
      </header>
      <main className="px-4 gap-8 md:pl-8 lg:pl-12 py-16 grid grid-cols-12">
        <section className="col-span-3">
          <AsideServices selectedServiceOption={"trainingInAviationCourses"} />
        </section>
        <section className="col-span-9">
          <Services
            mainImage1={backgroundImage}
            altImage1={"Aviation Training Image"}
            roleOnImage1={"Aviation Training"}
            headingTitle1={"Comprehensive Aviation Training"}
            headingTitle2={"Service Overview"}
            pragraphContent1={
              "Timtom Aviation Ltd offers a range of training courses in civil aviation, airport operations, and airline management. Our courses are designed to equip students with the necessary skills for a successful career in aviation, offering both local and international certificates in partnership with ICAO, IATA, and SACCA Institute of Freight and Tourism."
            }
            pragraphContent2={
              "Our training programs cover various aspects of aviation, from ground handling and cabin crew training to advanced courses in aviation safety and airport management. With our internationally recognized certifications, students are well-prepared to enter the global aviation job market."
            }
            whyTitleHeading={
              "Why Choose Timtom Aviation Ltd for Aviation Training?"
            }
            whyMainPragraphContent={
              "Timtom Aviation Ltd is committed to providing high-quality, industry-relevant training. Our partnerships with international aviation institutes ensure that students receive the best education and are prepared for the challenges of working in the aviation industry."
            }
            whyPragraphContent1={
              "Partnership with globally recognized aviation institutes like ICAO and IATA."
            }
            whyPragraphContent2={
              "Hands-on training and practical experience in airport operations."
            }
            whyPragraphContent3={
              "Comprehensive courses that cover all aspects of civil aviation."
            }
            whyPragraphContent4={
              "Affordable fees and flexible learning schedules."
            }
            howTitleHeading={"How We Can Help You"}
            howMainImage={howImageIs}
            howMainPragraphContent={
              "We provide industry-standard training courses that cover all aspects of aviation management. Whether you're looking to start a career in aviation or advance your existing skills, we offer flexible training options to fit your needs."
            }
            howPragraphContent1={
              "Comprehensive training in airport operations and ground handling."
            }
            howPragraphContent2={
              "Cabin crew training with a focus on safety and customer service."
            }
            howPragraphContent3={
              "Advanced courses in aviation safety and security management."
            }
            howPragraphContent4={
              "Personalized support and career guidance for students."
            }
            howPragraphContent5={
              "Internationally recognized certifications to enhance career prospects."
            }
          />
        </section>
      </main>
    </main>
  );
}

export default TrainingAviationCourses;
