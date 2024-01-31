import { Link } from "react-router-dom";

function MainNavigationBar() {
  return (
    <div className=" bg-gray-light font-medium hover:cursor-pointer pt-2 pb-2">
      <div className="flex justify-between px-8 bg-white items-center">
        <img src="/images/Logo1.png" alt="" className="w-40 h-20" />
        <ul className="flex gap-8 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/about"}>Services</Link>
          <Link to={"/courses"}>Courses</Link>
          <Link to={"/contact"}>ContactUs</Link>
          <Link to={"/gallery"}>Gallery</Link>
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
