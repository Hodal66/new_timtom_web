import Slider from "react-slick";
import TestmonialCard from "../../components/Cards/TestmonialCard";
// import { TestmonialsData } from "../../database/static/Testmonials";

function ClientTestmonials() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
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
    <div className="slider-container">
      <Slider {...settings}>
        <div className="px-2 lg:px-4 ">
          <TestmonialCard
            content={
              "The booking process was incredibly easy, and I was able to find the perfect flight for my schedule and budget. What really stood out to me was the level of customer service I received. The team at [Your Air Ticketing Service] was not only knowledgeable but also genuinely friendly and patient. They answered all my questions and went the extra mile to ensure I felt confident about my travel plans."
            }
            image={"/images/HomeImage4.png"}
            altImage={"Location Florolida"}
            location={"Califonia, USA"}
            name={"Mugabo Fredina"}
          />
        </div>
        <div className="px-2 lg:px-4 ">
          <TestmonialCard
            content={
              "The booking process was incredibly easy, and I was able to find the perfect flight for my schedule and budget. What really stood out to me was the level of customer service I received. The team at [Your Air Ticketing Service] was not only knowledgeable but also genuinely friendly and patient. They answered all my questions and went the extra mile to ensure I felt confident about my travel plans."
            }
            image={"/images/HomeImage4.png"}
            altImage={"Location Florolida"}
            location={"Califonia, USA"}
            name={"Uwonkunda Leontina"}
          />
        </div>
        <div className="px-2 lg:px-4 ">
          <TestmonialCard
            content={
              "The booking process was incredibly easy, and I was able to find the perfect flight for my schedule and budget. What really stood out to me was the level of customer service I received. The team at [Your Air Ticketing Service] was not only knowledgeable but also genuinely friendly and patient. They answered all my questions and went the extra mile to ensure I felt confident about my travel plans."
            }
            image={"/images/HomeImage4.png"}
            altImage={"Location Florolida"}
            location={"Califonia, USA"}
            name={"Mukamwiza Clere"}
          />
        </div>
        <div className="px-2 lg:px-4 ">
          <TestmonialCard
            content={
              "The booking process was incredibly easy, and I was able to find the perfect flight for my schedule and budget. What really stood out to me was the level of customer service I received. The team at [Your Air Ticketing Service] was not only knowledgeable but also genuinely friendly and patient. They answered all my questions and went the extra mile to ensure I felt confident about my travel plans."
            }
            image={"/images/HomeImage4.png"}
            altImage={"Location Florolida"}
            location={"Califonia, USA"}
            name={"Uwera Mary Jane"}
          />
        </div>
      </Slider>
    </div>
  );
}

export default ClientTestmonials;
