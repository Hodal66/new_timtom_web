/* eslint-disable react/jsx-key */
import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import Pragraph from "../../components/Pragraph";
import { Card1Data } from "../../database/static/Card1Data";
import { style } from "../../style";
import { AiFillCaretRight } from "react-icons/ai";

function ProfessionalExperty() {
  return (
    <div className="grid grid-cols-1 gap-20">
      <section>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className={`${style.flexColCenter} gap-8`}>
            <HeadingThree headingTitle={"Welcome to the heading 3"} />
            <HeadingOne headingTitle={"We Are Professional Expert"} />
            <Pragraph
              classNameText={"text-black"}
              pragraphContent={
                "As a professional and expert, we have acquired a high level of knowledge, skills, and experience in a particular field or industry. We have dedicated significant time and effort to develop our expertise through education, training, and hands-on experience."
              }
            />
            <div className="flex gap-2 items-center">
              <div className="bg-pink3 animate-pulse rounded-full p-1">
                <div className="bg-pink2 rounded-full p-2">
                  <div className="bg-orange rounded-full p-2">
                    <AiFillCaretRight className="text-white" />
                  </div>
                </div>
              </div>
              <button className="text-primary text-xl font-bold">
                Explore Our Solutions
              </button>
            </div>
          </div>
          <div className="rightpart">
            <img src="/images/HomeImage2.png" alt="" />
          </div>
        </div>
      </section>
      {/* Cards Container */}
      <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {Card1Data.map(({ id, number, content, spanned }) => (
          <div key={id} className=" bg-white max-h-96 p-8 flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="krona-one-regular text-3xl text-pink2">{number}</p>
              {/* <p>{iconContent}</p> */}
            </div>
            <p>
              {content} <span className="font-semibold">{spanned}</span>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProfessionalExperty;
