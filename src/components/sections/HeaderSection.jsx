import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
function HeaderSection({
  backgroundImage,
  MainHeading,
  headingTitle,
  prevNavLink,
  nexNavLink,
  prevNavName,
  nexNavName,
}) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-80 w-full "
    >
      {MainHeading}
      <h1 className={`px-4 grid grid-cols-1 gap-24 md:px-8 lg:px-12 text-4xl text-white font-black`}>
        {headingTitle}
      </h1>
      <nav className={`px-4 grid grid-cols-1 gap-24 md:px-8 lg:px-12`}>
        <ul className="flex gap-2 bg-white rounded-sm px-6 py-3 w-fit shadow-sm">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={prevNavLink}>
            <li className="border border-l-2 px-2 border-gray-dark">{prevNavName}</li>
          </Link>
         { nexNavLink && <Link to={nexNavLink}>
            <li>{nexNavName}</li>
          </Link>}
        </ul>
      </nav>
    </div>
  );
}

export default HeaderSection;
