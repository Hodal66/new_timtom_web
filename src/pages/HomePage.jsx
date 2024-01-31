function HomePage() {
  return (
    <div className="relative">
      <img
        src="/images/HomeImage1.png"
        alt="HomeImage1"
        className="opacity-95 w-full h-screen"
      />
      <div className="absolute top-0  flex justify-center content-center items-center w-full h-screen ">
        <div className="px-64 flex justify-center flex-col items-center ">
          <h1 className="text-purple text-[48px] font-bold text-white  border-x-8 border-orange p-4">
            Welcome to timtom aviation ltd
          </h1>
          <p className="text-[32px] text-white">Soar to New Heights with Us!</p>
        </div>
        <div>
          <p>
            Elevate your travel experience with our air ticketing services.
            Discover the world from above and embark on unforgettable journeys
            with ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
