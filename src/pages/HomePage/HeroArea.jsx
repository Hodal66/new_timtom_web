import { useEffect, useState } from "react";
import Pragraph from "../../components/Pragraph";
import Button1 from "../../components/Buttons/Button1";

function HeroArea() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/HomeImage1.png",
    "/images/HomeImage2.png",
    "/images/HomeImage4.png",
    "/images/HomeImage44.png",

    // Add more images as needed
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [images.length]);
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };
  return (
    <div>
      <div className="relative">
        {/* Dots */}
        {/* Image */}
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="mx-auto w-full h-[480px] md:h-[800px] lg:h-[650px]"
        />
      </div>
      <div className="absolute lg:top-10 top-0 bg-blue bg-opacity-50 md:gap-20 gap-8 flex justify-center content-center items-center w-full lg:h-[96vh] md:h-min-[78vh] h-[72vh] flex-col">
        <div className="lg:px-64 px-4 lg:mt-32 md:mt-24 mt-20 flex justify-center  gap-8 md:gap-2 flex-col items-center ">
          <p className="lg:text-[32px] md:text-[32px] text-24px text-white font-bold">
            Welcome to timtom aviation ltd
          </p>
          <h1 className="text-purple lg:text-[48px] md:text-[36px] text-[24px] font-bold text-white  lg:border-x-8 md:border-x-6 border-x-4 border-orange p-4">
            Fly High with us !!
          </h1>
          <div className="text-[20px] md:text-24 hidden  text-white font-semibold lg:flex flex-col justify-center place-items-center justify-items-start">
            <Pragraph
              pragraphContent={
                " Elevate your travel experience with our air ticketing services.\
            Discover the world from above "
              }
            />
            <Pragraph
              pragraphContent={
                "  and embark on unforgettable journeys\
                  with ease. "
              }
            />
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`md:h-4 md:w-4 h-3 w-3  rounded-full border ${
                  currentSlide === index ? "bg-black" : "bg-white"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
        <div>
          <Button1 title={"Get More ...."} />
        </div>
      </div>
    </div>
  );
}
export default HeroArea;
