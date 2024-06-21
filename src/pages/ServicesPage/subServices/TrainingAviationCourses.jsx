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
        <section>
          <HeaderSection
            backgroundImage={backgroundImage}
            MainHeading={<OtherSecondMainNavigationBar />}
            headingTitle={"All Our Services"}
            nexNavLink={"/"}
            currentNavLink={"/services"}
            currentNavName={"Services"}
            prevNavLink={"/"}
          />
        </section>
      </header>
      <main className={`px-4 gap-8 md:pl-8 lg:pl-12 py-16 grid grid-cols-12`}>
        <section className="col-span-3">
          <AsideServices selectedServiceOption={"trainingInAviationCourses"}/>
        </section>
        <section className="col-span-9">
        <Services
            mainImage1={backgroundImage}
            altImage1={"This is Air Ticketing Image"}
            roleOnImage1={"This is Air Ticketing Image"}
            headingTitle1={"All About Services"}
            headingTitle2={"Services overview"}
            pragraphContent1={
              "Consectetur adipisicing elit sed do eiusmod tempor dolor magna aliquat enim veniam, quis nostrud exdra anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan catium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
            }
            pragraphContent2={
              "Consectetur adipisicing elit sed do eiusmod tempor dolor magna aliquat enim veniam, quis nostrud exdra anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan catium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
            }
            whyTitleHeading={"Why Choose Timtom Aviation Ltd ?"}
            whyMainPragraphContent={
              "People choose Timtom Aviation Ltd because our guides are the face of the company who are very well trained in sharing great stories and accurate information for your benefit."
            }
            whyPragraphContent1={
              " We have partnership with internationally recognized Aviation\
          management institutes from CANADA and INDIA,"
            }
            whyPragraphContent2={
              " We have partnership with internationally recognized Aviation\
          management institutes from CANADA and INDIA,"
            }
            whyPragraphContent3={
              " We have partnership with internationally recognized Aviation\
          management institutes from CANADA and INDIA,"
            }
            whyPragraphContent4={
              " We have partnership with internationally recognized Aviation\
          management institutes from CANADA and INDIA,"
            }
            howTitleHeading={"How We Can Help"}
            howMainImage={howImageIs}
            howMainPragraphContent={"We help our clients by keeping up with ever-changing technology\
            and providing the finest available answer. The breadth of these\
            commercial projects, which span from offices to industrial plants,\
            offers us the expertise to take on any commercial project."}
            howPragraphContent1={"Leading industrial solutions with machinery"}
            howPragraphContent2={"Leading industrial solutions with machinery"}
            howPragraphContent3={"Leading industrial solutions with machinery"}
            howPragraphContent4={"Leading industrial solutions with machinery"}
            howPragraphContent5={"Leading industrial solutions with machinery"}
          />
        </section>
      </main>
    </main>
  );
}

export default TrainingAviationCourses;



