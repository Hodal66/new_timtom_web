import { Link } from "react-router-dom";
import { style } from "../../style";
import HeadingOne from "../Headings/HeadingOne";
/* eslint-disable react/prop-types */
function HeaderSection({
  backgroundImage,
  MainHeading,
  headingTitle,
  prevNavLink,
  nexNavLink,
  prevNavName,
  nexNavName,
  currentNavLink,
  currentNavName,
}) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`h-80 w-full bg-cover bg-center ${style.heading1} text-black`}
    >
      {MainHeading}
      <main className="px-4 grid grid-cols-1 gap-24 md:px-8 lg:px-32 pt-20">
        <section className="flex flex-col gap-4">
          <HeadingOne headingTitle={headingTitle} classNameProps={"text-white"}/>
          <nav>
            <ul className="flex gap-2 bg-white rounded-sm px-6 py-3 w-fit shadow-sm">
              <Link to={"/"}>
                <li className="text-lg font-semibold">Home</li>
              </Link>
              <Link to={prevNavLink}>
                <li className="border border-r-2 px-2 text-lg font-semibold border-gray-dark">
                  {prevNavName}
                </li>
              </Link>
              {nexNavLink && (
                <Link to={nexNavLink}>
                  <li className="text-lg font-semibold">{nexNavName}</li>
                </Link>
              )}
              {currentNavLink && (
                <Link to={currentNavLink}>
                  <li className="text-lg font-semibold">{currentNavName}</li>
                </Link>
              )}
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default HeaderSection;
