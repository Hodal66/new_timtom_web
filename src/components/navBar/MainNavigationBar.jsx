import { Link } from "react-router-dom";
// import Button1 from "../button/Button1";

function MainNavigationBar() {
  return (
    <div className=" bg-gray-light font-medium hover:cursor-pointer pt-2 pb-2 sticky">
      <div className="flex justify-between px-8 bg-white items-center ">
        <Link to={"/"}>
        <img src="/images/Logo1.png" alt="" className="w-40 h-20" />
        </Link>
        <ul className="flex gap-8 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/about"}>Services</Link>
          <Link to={"/courses"}>Courses</Link>
          <Link to={"/contact"}>ContactUs</Link>
          <Link to={"/gallery"}>Gallery</Link>
        </ul>
        <div>
          <button>Sign Up</button>
        {/* <Button1 content="Sign Up" /> */}
        </div>
      </div>
    </div>
  );
}

export default MainNavigationBar;
