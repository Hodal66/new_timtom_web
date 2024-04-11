import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";
import { style } from "../../style";
import Slider from "react-slick";
import CoursesCard from "../../components/Cards/CoursesCard";


function ServicesHome() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
            <HeadingThree headingTitle={"The Timtom Aviation services"} />
            <HeadingOne headingTitle={"This is Our Services & Solution"} />
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
                  "and INDIA We also offer other services related to hospitality and tourism, these include;\
           "
                }
              />

              <Pragraph
                pragraphContent={
                  "  Air ticketing, Hotel reservation and Visa application"
                }
              />
            </div>
          </header>
        </div>
        <section className=" text-black">

              <Slider {...settings}>
                <CoursesCard 
                image ={"/images/HomeImage1.png"}
                imageAlt={"Ticketing ImageContent"}
                title={"Air ticketing"}
                content={"We The company has helped quite number of individuals and corporates to get affordable air tickets to any destination around the world"}
                link={"/"}
                 />
                  <CoursesCard 
                image ={"/images/HomeImage2.png"}
                imageAlt={"Admission & Visa Assistance"}
                title={"Admission & Visa Assistance"}
                content={"We The company has helped quite number of individuals and corporates to get affordable air tickets to any destination around the world"}
                link={"/"}
                 />
                  <CoursesCard 
                image ={"/images/HomeImage4.png"}
                imageAlt={"Ticketing ImageContent"}
                title={"Air ticketing"}
                content={"We The company has helped quite number of individuals and corporates to get affordable air tickets to any destination around the world"}
                link={"/"}
                 />
                  <CoursesCard 
                image ={"/images/HomeImage4.png"}
                imageAlt={"ICT & Computer Skills"}
                title={"ICT & Computer Skills"}
                content={"We The company has helped quite number of individuals and corporates to get affordable air tickets to any destination around the world"}
                link={"/"}
                 />
              
              </Slider>

        </section>
      </div>
    </div>
  );
}

export default ServicesHome;
