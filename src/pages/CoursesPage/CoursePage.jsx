/* eslint-disable react/prop-types */
import {  useState } from "react";
import CompanyInfoNav from "../../components/navBar/CompanyInfoNav";
import HeaderSection from "../../components/sections/HeaderSection";
import backgroundImage from "/images/bgImage/bg2.png";
import OtherSecondMainNavigationBar from "../../components/navBar/OtherSecondNavigation";
import { useParams } from "react-router-dom";
import { CourseData } from "../../database/static/CoursesData";
import HeadingTwo from "../../components/Headings/HeadingTwo";
import Pragraph from "../../components/Pragraph";
import HeadingThree from "../../components/Headings/HeadingThree";
import SocialMedia from "../../components/footer/SocialMedia";
import FileBronchule from "../../assets/icons/FileBronchule";
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

      <main className={`px-4  md:px-8 lg:px-12 py-16 grid lg:grid-cols-6 gap-8`}>
        <section className="lg:col-span-4 ">
          <div className="bg-whiteWhite lg:p-4 p-2 lg:rounded-xl rounded-sm lg:h-[500px] ">
            <img
              src={newCourseData.image}
              alt={newCourseData.imageAlt}
              className="w-full rounded-sm lg:h-full"
            />
          </div>
          <div className="lg:my-12 my-4">
            <div className="bg-whiteWhite p-4 lg:px-12 pb-4 lg:pb-12  myShadow rounded-md">
              <HeadingTwo
                headingTitle={"About Courses"}
                classNameProps={"border-b-2 border-white w-full"}
              />
              <div className="py-2">
                <Pragraph pragraphContent={newCourseData.aboutCourses[0]} classNameText={"font-medium"} />

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
              </div>
            </div>

            <div>
              <HeadingTwo headingTitle={"Course Content"} />
              <div>
                {newCourseData.courseContents.map(
                  ({
                    id,
                    courseHeading,
                    courseSubHeadingInfo,
                    courseHours,
                    courseLevel,
                  }) => {
                    return (
                      <div key={id}>
                        <HeadingThree headingTitle={courseHeading} />
                        <Pragraph pragraphContent={courseSubHeadingInfo} />
                        <Pragraph pragraphContent={courseLevel} />
                        <Pragraph pragraphContent={courseHours} />
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            <div>
              <img
                src={newCourseData.teacher[1]}
                alt={newCourseData.teacher[2]}
                className="w-40 h-40 rounded-full"
              />
              <div>
                <HeadingThree headingTitle={newCourseData.teacher[0]} />
                <Pragraph pragraphContent={newCourseData.teacher[3]} />
                <div>
                  <p>This is Social Media</p>
                  <SocialMedia
                    twitterUsername={newCourseData.teacher[4]}
                    facebookUsername={newCourseData.teacher[5]}
                    instagramUsername={newCourseData.teacher[6]}
                    linkedInUsername={newCourseData.teacher[7]}
                    phoneNumber={newCourseData.teacher[8]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="lg:col-span-2 sticky">
          <section className="flex flex-col gap-4 lg:p-8 p-4 border border-primary lg:m-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="flex">
                  $
                  <HeadingThree
                    headingTitle={newCourseData.courseAsideContent[0]}
                  />
                </div>
                <div>
                  <strike className="flex">
                    {" "}
                    <span> $</span>
                    <HeadingThree
                      headingTitle={newCourseData.courseAsideContent[1]}
                    />
                  </strike>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>
                  <FileBronchule />
                </span>
                <span>{newCourseData.courseAsideContent[2]}</span> Days Left!
              </div>
            </div>
            <div>
              <Button1 title={"Take this Course"} />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">Start Date </span>
                <span>{newCourseData.courseAsideContent[3]} </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Enrlled</span>
                <span>{newCourseData.courseAsideContent[4]}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Lectures</span>
                <span>{newCourseData.courseAsideContent[5]}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Skill Level</span>
                <span>{newCourseData.courseAsideContent[6]}</span>
              </div>
              <div className="flex justify-between items-center">
                <nav className="font-bold">Language</nav>
                <nav>{newCourseData.courseAsideContent[7]}</nav>
              </div>
              <div className="flex justify-between items-center">
                <nav className="font-bold">Quizzes</nav>
                <nav>{newCourseData.courseAsideContent[8]}</nav>
              </div>
              <div className="flex justify-between items-center">
                <nav className="font-bold">Certificate</nav>
                <nav>{newCourseData.courseAsideContent[9]}</nav>
              </div>
              <div className="flex justify-between items-center">
                <nav className="font-bold">Pass Percentage</nav>
                <nav>{newCourseData.courseAsideContent[10]}</nav>
              </div>
            </div>
          </section>
        </aside>
      </main>
    </main>
  );
}

export default CoursePage;
