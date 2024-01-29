function MainNavigationBar() {
  return (
    <div className=" bg-gray-light font-medium h-screen hover:cursor-pointer pt-2 pb-2">
      <div className="flex justify-between px-8 bg-white items-center">
        <img src="/images/Logo1.png" alt="" className="w-40 h-20" />
        <ul className="flex gap-8 ">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Courses</li>
          <li>ContactUs</li>
          <li>Gallery</li>
        </ul>
        <div>
          <button className="bg-orange py-3 px-6">
            <span>))</span>
            <span>Get Quotes</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainNavigationBar;
