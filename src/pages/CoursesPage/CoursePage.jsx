/* eslint-disable react/prop-types */
import {  useState } from "react";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../components/sections/HeaderSection";
import backgroundImage from "/images/bgImage/bg2.png";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import { Link, useParams } from "react-router-dom";
import { CourseData } from "../../database/static/CoursesData";
import HeadingTwo from "../../components/Headings/HeadingTwo";
import Pragraph from "../../components/Pragraph";
import HeadingThree from "../../components/Headings/HeadingThree";
import SocialMedia from "../../components/footer/SocialMedia";
import Button1 from "../../components/Buttons/Button1";
import MainNavigationBar from "../../components/navBar/MainNavigationBar";

// import { style } from "../../style";

function CoursePage() {
  const [showMoreContent, setShowMoreContent] = useState(false);

  let { moreInformation } = useParams();
  console.log("The Id of this Element is ", moreInformation);
  let newItemId = parseInt(moreInformation);

  const newCourseData = CourseData.find((item) => {
    return item.id === newItemId;
  });



  return (
    <main className="bg-white">
      <header>
        <div className={`bg-orange pt-32}`}>
          <CompanyInfoNav />
        </div>
        <div className="lg:hidden">
          <MainNavigationBar />
        </div>
        <HeaderSection
          backgroundImage={backgroundImage}
          MainHeading={<OtherSecondMainNavigationBar />}
          headingTitle={"All About Our Courses"}
          nexNavLink={"/"}
          currentNavLink={"/courses"}
          currentNavName={"Our Courses"}
          prevNavLink={"/"}
        />
      </header>

      <main
        className={`px-4  md:px-8 lg:px-12 py-16 grid lg:grid-cols-6 gap-8`}
      >
        <section className="lg:col-span-4 ">
          <div className="bg-whiteWhite lg:p-4 p-2 lg:rounded-xl rounded-sm lg:h-[500px] ">
            <img
              src={newCourseData.image}
              alt={newCourseData.imageAlt}
              className="w-full rounded-sm lg:h-full"
            />
          </div>
          <div className="lg:my-12 my-4 flex flex-col gap-10">
            <div className="bg-whiteWhite p-4 lg:px-12 pb-4 lg:pb-12  myShadow rounded-md">
              <HeadingTwo
                headingTitle={`About ${newCourseData.courseName} Course`}
                classNameProps={"border-b-2 border-white w-full"}
              />
              <div className="py-2">
                <Pragraph
                  pragraphContent={newCourseData.aboutCourses[0]}
                  classNameText={"font-medium"}
                />

                <div className="lg:grid grid-cols-2 gap-4 pb-2">
                  <Pragraph pragraphContent={newCourseData.aboutCourses[1]} />
                  <Pragraph pragraphContent={newCourseData.aboutCourses[2]} />
                </div>
                {showMoreContent && (
                  <div className="grid grid-cols-2 gap-4">
                    <Pragraph pragraphContent={newCourseData.aboutCourses[3]} />
                    <Pragraph pragraphContent={newCourseData.aboutCourses[4]} />
                    <Pragraph pragraphContent={newCourseData.aboutCourses[5]} />
                    <Pragraph pragraphContent={newCourseData.aboutCourses[6]} />
                    <Pragraph pragraphContent={newCourseData.aboutCourses[7]} />
                    <Pragraph pragraphContent={newCourseData.aboutCourses[8]} />
                    <Pragraph pragraphContent={newCourseData.aboutCourses[9]} />
                    <Pragraph pragraphContent={newCourseData.aboutCourses[10]} />
                  </div>
                )}
                <div
                  onClick={() => setShowMoreContent(!showMoreContent)}
                  className="cursor-pointer text-primary font-semibold text-sm"
                >
                  {showMoreContent ? "Show Less ..." : "Show More ..."}
                </div>
              </div>
            </div>
            <div >
              
              {newCourseData.coursePackage[0] ? <HeadingTwo headingTitle={`Main FullPackage of ${newCourseData.courseName} Lesson`}/> : ""}
              <div className={`${newCourseData.coursePackage[0] ? "block" : "hidden"}`}>
                <Pragraph
                  pragraphContent={newCourseData.coursePackage[0]}
                />
                <Pragraph
                  pragraphContent={newCourseData.coursePackage[1]}
                />
                <Pragraph
                  pragraphContent={newCourseData.coursePackage[2]}
                />
                <Pragraph
                  pragraphContent={newCourseData.coursePackage[3]}
                />
                 <Pragraph
                  pragraphContent={newCourseData.coursePackage[4]}
                />
                 <Pragraph
                  pragraphContent={newCourseData.coursePackage[5]}
                />
                 <Pragraph
                  pragraphContent={newCourseData.coursePackage[6]}
                />
                 <Pragraph
                  pragraphContent={newCourseData.coursePackage[7]}
                /> <Pragraph
                pragraphContent={newCourseData.coursePackage[8]}
              />
              </div>

            </div>
            <div>
              <HeadingTwo headingTitle={"Course Content"} />
              <div>
                {newCourseData.courseContents.map(
                  ({ id, courseHeading, courseSubHeadingInfo }) => {
                    return (
                      <div key={id}>
                        <HeadingThree headingTitle={courseHeading} />
                        <Pragraph pragraphContent={courseSubHeadingInfo} />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div>
              <HeadingTwo headingTitle={"Benefits of the course"} />
              <div>
                <Pragraph
                  pragraphContent={newCourseData.benefitsOfTheCourse[0]}
                />
                <Pragraph
                  pragraphContent={newCourseData.benefitsOfTheCourse[1]}
                />
                <Pragraph
                  pragraphContent={newCourseData.benefitsOfTheCourse[2]}
                />
                <Pragraph
                  pragraphContent={newCourseData.benefitsOfTheCourse[3]}
                />
                 <Pragraph
                  pragraphContent={newCourseData.benefitsOfTheCourse[4]}
                />
                 <Pragraph
                  pragraphContent={newCourseData.benefitsOfTheCourse[5]}
                />
                 <Pragraph
                  pragraphContent={newCourseData.benefitsOfTheCourse[6]}
                />
              </div>
            </div>

            <div className="bg-whiteWhite p-4 lg:px-12 pb-4 lg:pb-12  myShadow rounded-md">
              <HeadingTwo
                headingTitle={"About Lecture"}
                classNameProps={"border-b-2 border-white w-full"}
              />
              <div className="flex gap-8 pt-8">
                <img
                  // src={newCourseData.teacher[1]}
                  src={newCourseData.teacher.profilePicture}
                  alt={newCourseData.teacher.name}
                  className="w-64 h-64 rounded-full"
                />
                <div className="flex flex-col gap-4">
                  <HeadingThree headingTitle={newCourseData.teacher.name} />
                  <Pragraph pragraphContent={newCourseData.teacher.bio} />
                  <div>
                    <SocialMedia
                      twitterUsername={newCourseData.teacher.twitter}
                      facebookUsername={newCourseData.teacher.facebook}
                      instagramUsername={newCourseData.teacher.instagram}
                      linkedInUsername={newCourseData.teacher.linkedIn}
                      phoneNumber={newCourseData.teacher.whatSapp}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link to={newCourseData.link} target="_blank">
              <Button1 title={"Take this Course"} />
              </Link>
            </div>
          </div>
        </section>
        <aside className="lg:col-span-2 sticky">
          <section className="flex flex-col gap-4 lg:p-8 p-4 border border-primary lg:m-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="flex">
                  <HeadingThree
                    headingTitle={` Fees: ${newCourseData.money}`}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
            
                <span>🕝 In {newCourseData.duration} Months</span> 
              </div>
            </div>
            <div>
              <Link to={newCourseData.link} target="_blank">
              <Button1 title={"Take this Course"} />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">Start Date </span>
                <span>{newCourseData.startDate} </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Enrolled</span>
                <span>{newCourseData.subCoursesUnllorment}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Lectures</span>
                <span>{newCourseData.lectures}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Skill Level</span>
                <span>{newCourseData.skillsLevel}</span>
              </div>
              <div className="flex justify-between items-center">
                <nav className="font-bold">Language</nav>
                <nav>{newCourseData.languageNeeded}</nav>
              </div>
              <div className="flex justify-between items-center">
                <nav className="font-bold">Quizzes</nav>
                <nav>{newCourseData.numberOfQuizes}</nav>
              </div>
              <div className="flex justify-between items-center">
                <nav className="font-bold">Certificate</nav>
                <nav>{newCourseData.isCertificateOffered}</nav>
              </div>
              <div className="flex justify-between items-center">
                <nav className="font-bold">Pass Percentage</nav>
                <nav>{newCourseData.houMuchToGetCeriticate}</nav>
              </div>
            </div>
          </section>
        </aside>
      </main>
    </main>
  );
}

export default CoursePage;
