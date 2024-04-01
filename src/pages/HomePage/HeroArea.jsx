import { useEffect, useState } from "react";
// import Pragraph from "../../components/Pragraph";

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
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(intervalId);
  }, [images.length]);
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };
  return (
    <div>
      return (
      <div className="relative">
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-4 w-4 rounded-full border ${
                currentSlide === index ? "bg-black" : "bg-white"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Image */}
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="mx-auto w-full h-[600px]"
        />
      </div>
      );
    </div>
    // <div className="relative">
    //   <img
    //     src="/images/HomeImage1.png"
    //     alt="HomeImage1"
    //     className="opacity-95 w-full h-screen"
    //   />
    //   <div className="absolute top-20 gap-20 flex justify-center content-center items-center w-full h-screen flex-col">
    //     <div className="px-64 flex justify-center flex-col items-center ">
    //       <p className="text-[32px] text-white font-semibold">
    //         Welcome to timtom aviation ltd
    //       </p>
    //       <h1 className="text-purple text-[48px] font-bold text-white  border-x-8 border-orange p-4">
    //         Soar to New Heights with Us!
    //       </h1>
    //       <p className="text-[20px] text-white font-semibold flex justify-center place-items-center">
    //         <Pragraph
    //           pragraphContent={
    //             " Elevate your travel experience with our air ticketing services.\
    //         Discover the world from above and embark on unforgettable journeys\
    //         with ease."
    //           }
    //         />
    //       </p>
    //     </div>
    //     <div className="flex gap-24">
    //       {/* <Button1 content={"Read More..."}/>
    //       <Button1 content={"Read More..."}/> */}
    //     </div>
    //     <div>
    //       <Pragraph
    //         pragraphContent={
    //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum harum voluptas esse illo rem at cum soluta quasi, iure necessitatibus officia, alias modi sint numquam optio officiis hic neque?"
    //         }
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
export default HeroArea;
