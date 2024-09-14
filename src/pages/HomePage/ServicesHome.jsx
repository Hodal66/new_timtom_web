import HeadingThree from "../../components/Headings/HeadingThree";
import { style } from "../../style";
import Slider from "react-slick";
import ServicesCard from "../../components/Cards/ServicesCard";
import { ServicesDb } from "../../database/static/Services";

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

          </header>
        </div>
        <section className=" text-black">
          <Slider {...settings}>
            {ServicesDb.map((service) => (
              <div key={service.id}>
                <ServicesCard
                  image={service.image}
                  imageAlt={service.imageAlt}
                  title={service.title}
                  content={service.content}
                  link={service.link}
                />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default ServicesHome;
