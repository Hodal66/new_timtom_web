import { useEffect, useState } from "react";
import OtherFirstTopNavigationBar from "../../components/navBar/OtherFirstTopNavigationBar";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../components/sections/HeaderSection";
import backgroundImage from "/images/bgImage/bg2.png";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import { useParams } from "react-router-dom";

function CoursePage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 8000); // 60000 milliseconds = 1 minute

    return () => clearTimeout(timeout);
  }, []); // Runs only once when the component mounts

  let Id = useParams();
  console.log("The Id of this Element is ",Id);

  return (
    <div>
      <header>
        {isVisible && <OtherFirstTopNavigationBar />}
        <div className={`bg-orange pt-32}`}>
          <CompanyInfoNav />
        </div>
        <section>
          <HeaderSection
            backgroundImage={backgroundImage}
            MainHeading={<OtherSecondMainNavigationBar />}
            headingTitle={"All About Our Courses"}
            nexNavLink={"/"}
            currentNavLink={"/courses"}
            currentNavName={"Our Courses"}
            prevNavLink={"/"}
          />
        </section>
      </header>
      <div>
        <h1>Here More Information Page</h1>
      </div>
    </div>
  );
}

export default CoursePage;
