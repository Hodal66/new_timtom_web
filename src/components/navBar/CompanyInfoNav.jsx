import { Link } from "react-router-dom";
import Message from "../../assets/icons/Message";
import Location from "../../assets/icons/Location";
import CallIcon from "../../assets/icons/CallIcon";

function CompanyInfoNav() {
  return (
    //Mobile View
    <div className="bg-yellow text-lg">
      <div className="hidden lg:flex w-full text-black">
        <div className=" bg-gray-light font-medium hover:cursor-pointer w-full">
          <div className="flex justify-between px-8 bg-white items-center ">
            <Link to={"/"}>
              <img src="/images/Logo1.png" alt="" className="w-40 h-20" />
            </Link>
            <ul className="flex">
              <li className="flex px-2">
                <CallIcon
                  width={60}
                  height={60}
                  fill={"red"}
                  strokeCollor={"red"}
                  strokeWidth={2}
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-sm text-gray-dark no-select">Call Us Today</p>
                  <p>(+250)788519634</p>
                </div>
              </li>
              <li className="flex px-2">
                <Message
                  width={60}
                  height={60}
                  fill={"none"}
                  strokeCollor={"red"}
                  strokeWidth={2}
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-sm text-gray-dark no-select">Reply to this Email</p>
                  <p>info@timtomaviation.com</p>
                </div>
              </li>
              <li className="flex px-2">
                <Location
                  width={60}
                  height={60}
                  fill={"none"}
                  strokeCollor={"red"}
                  strokeWidth={2}
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-sm text-gray-dark">Kicukiro-Remera</p>
                  <p>kabeza road, KK 18 AV</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfoNav;
