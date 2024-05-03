/* eslint-disable react/prop-types */
import AngleRight from "../../assets/icons/AngleRignt";
import Progress1 from "../../assets/icons/Progress1";
import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingTwo from "../../components/Headings/HeadingTwo";
import Pragraph from "../../components/Pragraph";
import FAQ from "../../components/sections/FAQ";

function Services({
  mainImage1,
  roleOnImage1,
  altImage1,
  headingTitle1,
  headingTitle2,
  pragraphContent1,
  pragraphContent2,
  whyTitleHeading,
  whyMainPragraphContent,
  whyPragraphContent1,
  whyPragraphContent2,
  whyPragraphContent3,
  whyPragraphContent4,
  howTitleHeading,
  howMainImage,
  howMainPragraphContent,
  howPragraphContent1,
  howPragraphContent2,
  howPragraphContent3,
  howPragraphContent4,
  howPragraphContent5,

}) {
  return (
    <main className="h-full w-full md:pr-8 lg:pr-12">
      <div className="bg-whiteWhite p-4 rounded-xl">
        <img
          src={mainImage1}
          alt={altImage1}
          role={roleOnImage1}
          className="w-full h-96 rounded-sm "
        />
      </div>
      <HeadingOne headingTitle={headingTitle1} classNameProps={"pt-16"} />
      <HeadingTwo headingTitle={headingTitle2} />
      <Pragraph
        pragraphContent={pragraphContent1}
        classNameText={"font-medium"}
      />
      <Pragraph pragraphContent={pragraphContent2} />

      <section className="mainSectionContainer flex flex-col gap-16 pt-16">
        <section>
          <HeadingTwo headingTitle={whyTitleHeading} />

          <Pragraph pragraphContent={whyMainPragraphContent} />
          <div className="cardContainer grid grid-cols-2 gap-8 py-2">
            <div>
              <div className="flex gap-2 py-2">
                <div>
                  <Progress1 />
                </div>
                <Pragraph pragraphContent={whyPragraphContent1} />
              </div>
              <div className="flex gap-2 py-2">
                <div>
                  <Progress1 />
                </div>
                <Pragraph pragraphContent={whyPragraphContent2} />
              </div>
            </div>
            <div>
              <div className="flex gap-2 py-2">
                <div>
                  <Progress1 />
                </div>
                <Pragraph pragraphContent={whyPragraphContent3} />
              </div>
              <div className="flex gap-2 py-2">
                <div>
                  <Progress1 />
                </div>
                <Pragraph pragraphContent={whyPragraphContent4} />
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <img
              src={howMainImage}
              alt="This the Home Image on our services"
              className="h-full"
            />
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <HeadingTwo headingTitle={howTitleHeading} />
            <Pragraph pragraphContent={howMainPragraphContent} />

            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph pragraphContent={howPragraphContent1} />
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph pragraphContent={howPragraphContent2} />
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph pragraphContent={howPragraphContent3} />
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph pragraphContent={howPragraphContent4} />
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph pragraphContent={howPragraphContent5} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <FAQ />
        </section>
      </section>
    </main>
  );
}

export default Services;
