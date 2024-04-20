import { useEffect, useState } from "react";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import OtherFirstTopNavigationBar from "../../components/navBar/OtherFirstTopNavigationBar";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import HeaderSection from "../../components/sections/HeaderSection";
import CoursesPage from "./CoursesPage";
import backgroundImage from "/images/bgImage/bg2.png";
import { style } from "../../style";
import AsideCourses from "../../components/sections/AsideCourses";

function CoursesIndex() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 8000); // 60000 milliseconds = 1 minute
    
        return () => clearTimeout(timeout);
      }, []); // Runs only once when the component mounts
    
  return (
    <main className="bg-white">
    <header>
      {isVisible && <OtherFirstTopNavigationBar />}
      <div className={`bg-orange pt-32}`}>
        <CompanyInfoNav />
      </div>
      <section >
        <HeaderSection
          backgroundImage={backgroundImage}
          MainHeading={<OtherSecondMainNavigationBar />}
          headingTitle={"All About Our Courses"}
          nexNavLink={"/"}
          currentNavLink={"/courses"}
          currentNavName ={"Our Courses"}
          prevNavLink={"/"}
      
        />
      </section>
    </header>
    <main className={`${style.mainPaddingX} grid grid-cols-12`}>
      <section className="col-span-3">
        <AsideCourses />
      </section>
      <section className="col-span-9">
        < CoursesPage/>
      </section>
    </main>
  </main>
  )
}


export default CoursesIndex
