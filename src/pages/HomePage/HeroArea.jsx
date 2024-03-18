// import { Button1 } from "../components/button/Button1";

function HeroArea() {
  return (
    <div className="relative">
      <img
        src="/images/HomeImage1.png"
        alt="HomeImage1"
        className="opacity-95 w-full h-screen"
      />
      <div className="absolute top-0 gap-20 flex justify-center content-center items-center w-full h-screen flex-col">
        <div className="px-64 flex justify-center flex-col items-center ">
          <p className="text-[32px] text-white font-semibold">
            {" "}
            Welcome to timtom aviation ltd{" "}
          </p>
          <h1 className="text-purple text-[48px] font-bold text-white  border-x-8 border-orange p-4">
            Soar to New Heights with Us!
          </h1>
          <p className="text-[20px] text-white font-semibold flex justify-center place-items-center">
            Elevate your travel experience with our air ticketing services.
            Discover the world from above and embark on unforgettable journeys
            with ease.
          </p>
        </div>
        <div className="flex gap-24">
          {/* <Button1 content={"Read More..."}/>
          <Button1 content={"Read More..."}/> */}
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Sit nisi  corrupti distinctio debitis mollitia temporibus quo eum tempore rem
          animi nemo, odit consectetur aut laboriosam, provident fuga reiciendis
          ipsam. Dolores!
        </div>
      </div>
    </div>
  );
}
export default HeroArea;
