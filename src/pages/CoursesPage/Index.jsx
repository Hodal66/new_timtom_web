import { useEffect, useState } from "react";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import OtherFirstTopNavigationBar from "../../components/navBar/OtherFirstTopNavigationBar";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import HeaderSection from "../../components/sections/HeaderSection";
// import CoursesPage from "./CoursesPage";
import backgroundImage from "/images/bgImage/bg2.png";
// import AsideCourses from "../../components/sections/AsideCourses";
import { style } from "../../style";
import IconExist from "../../assets/icons/IconExist";
import AsideDownloads from "../../components/sections/AsideDownloads";
import AsideGetQuote from "../../components/sections/AsideGetQuote";
import AsideGetAnyQuestion from "../../components/sections/AsideGetAnyQuestion";
import HeadingOne from "../../components/Headings/HeadingOne";
import { CourseData } from "../../database/static/CoursesData";
import CoursesCard from "../../components/Cards/CoursesCard";

function CoursesIndex() {
    const [isVisible, setIsVisible] = useState(true);
    const [filter, setFilter] = useState("All");
    const [isCategorySelected, setIsCategorySelected] = useState({
      All:true,
      civilAviation:false,
      airlineAndAirport:false,
      travelAndTouirsm:false,
      ICTSkills:false,
})

    const filteredDataContents = CourseData.filter((items)=>{
      if(filter === "All"){
        return true;
      }else{
        return items.category === filter;
      }
    })
     
    console.log(filteredDataContents);

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
    <main className={`px-4 gap-8 md:pl-8 lg:pl-12 py-16 grid grid-cols-12`}>
      <section className="col-span-3">
        {/* <AsideCourses /> ///////////////////////////////////
        /////////////////////////////////////////////////////////*/}
    <aside>
      <main className="flex gap-8 flex-col text-white">
        <section className="flex gap-2 flex-col">
          <div className={`${style.asidePaddingEffect} ${isCategorySelected.All ? "border-l-4 border-orange" : ""} group`} onClick={()=>{setFilter("All");
          setIsCategorySelected({
            All:true,
            civilAviation:false,
            airlineAndAirport:false,
            travelAndTouirsm:false,
            ICTSkills:false,
          })
        }}>
            <span>All</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
          <div className={`${style.asidePaddingEffect} ${isCategorySelected.civilAviation ? "border-l-4 border-orange" : ""} group`} onClick={()=>{setFilter("Aviation");
          setIsCategorySelected({
            All:false,
            civilAviation:true,
            airlineAndAirport:false,
            travelAndTouirsm:false,
            ICTSkills:false,
          })
        }}>
            <span>Civil Aviation Management</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
           <div className={`${style.asidePaddingEffect} ${isCategorySelected.airlineAndAirport ? "border-l-4 border-orange" : ""} group`} onClick={()=>{setFilter("airlineAndAiport");
          setIsCategorySelected({
            All:false,
            civilAviation:false,
            airlineAndAirport:true,
            travelAndTouirsm:false,
            ICTSkills:false,
          })
        }}>
            <span>Airline And Airport Management</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
           <div className={`${style.asidePaddingEffect} ${isCategorySelected.travelAndTouirsm ? "border-l-4 border-orange" : ""} group`} onClick={()=>{setFilter("travelAndTouirsm");
          setIsCategorySelected({
            All:false,
            civilAviation:false,
            airlineAndAirport:false,
            travelAndTouirsm:true,
            ICTSkills:false,
          })
        }}>
            <span>Traver And Tourism Management</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
          <div className={`${style.asidePaddingEffect} ${isCategorySelected.ICTSkills ? "border-l-4 border-orange" : ""} group`} onClick={()=>{setFilter("ICTSkills");
          setIsCategorySelected({
            All:false,
            civilAviation:false,
            airlineAndAirport:false,
            travelAndTouirsm:false,
            ICTSkills:true,
          })
        }}>
            <span>ICT Skills</span>
            <span className="group-hover:scale-110">
              <IconExist
                strokeCollor={"blue"}
                fill={"none"}
                strokeWidth={1}
                width={35}
                strokeLineJoin={"full"}
                height={35}
              />
            </span>
          </div>
        </section>
        <section>
          <AsideDownloads/>
        </section>
        <section>
          <AsideGetQuote />
        </section>
        <section>
          <AsideGetAnyQuestion />
        </section>
      </main>
    </aside>

      </section>
      <section className="col-span-9">
        {/* < CoursesPage/> //////////////////////////
        /////////////////////////////////////////////*/}
<main>
      <HeadingOne headingTitle={"Courses Offered at Timtom Aviation"} />
      <section className="grid grid-cols-2 gap-4 py-8">
        {filteredDataContents.map((course) => {
          return (
            <div key={course.id}>
              <CoursesCard
                content={course.courseName}
                image={course.image}
                imageAlt={course.imageAlt}
                link={course.link}
                title={course.courseName}
                key={course.id}
                myId ={course.id}
                money={course.money}
              />
            </div>
          );
        })}
      </section>
    </main>
      </section>
    </main>
  </main>
  )
}


export default CoursesIndex
