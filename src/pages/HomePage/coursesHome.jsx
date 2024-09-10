import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";
import { style } from "../../style";
import Slider from "react-slick";
import CoursesCard from "../../components/Cards/CoursesCard";
import { CourseData } from "../../database/static/CoursesData";

function CoursesHome() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-8 grid grid-cols-1 gap-24 md:px-8 lg:px-12 py-16 bg-white">
      <div className="flex flex-col gap-16 ">
        <div className="header_container">
          <header className={`${style.flexColCenterAlignCenter}`}>
            <HeadingThree headingTitle={"The Timtom Aviation Courses"} />
            <HeadingOne headingTitle={"This is Our Courses in Aviation and ICT industry"} />
            <div
              className={`${style.flexColCenterAlignCenter} gap-0 text-black`}
            >
              <Pragraph
                pragraphContent={
                  " We have partnership with internationally recognized Aviation\
          management institutes from CANADA "
                }
              />
              <Pragraph
                pragraphContent={
                  "and INDIA We also offer other Courses related to hospitality, tourism, and Computer"
                }
              />
            </div>
          </header>
        </div>
        <section className=" text-black">
          <Slider {...settings}>
            {CourseData.map((course) => (
              <div key={course.id}>
                <CoursesCard
                  image={course.image}
                  imageAlt={course.imageAlt}
                  title={course.courseName}
                  money={course.money}
                  content={course.mainPragrapContents}
                  myId={course.id}
                />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default CoursesHome;
