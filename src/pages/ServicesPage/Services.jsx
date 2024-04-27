import AngleRight from "../../assets/icons/AngleRignt";
import Progress1 from "../../assets/icons/Progress1";
import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingTwo from "../../components/Headings/HeadingTwo";
import Pragraph from "../../components/Pragraph";
import FAQ from "../../components/sections/FAQ";

function Services() {
  return (
    <main className="h-full w-full md:pr-8 lg:pr-12">
      <img src="images/HomeImage1.png" alt="" className="w-full" />
      <HeadingOne
        headingTitle={"All About Services"}
        classNameProps={"pt-16"}
      />
      <HeadingTwo headingTitle={"Services overview"} />
      <Pragraph
        pragraphContent={
          "Consectetur adipisicing elit sed do eiusmod tempor dolor magna aliquat enim veniam, quis nostrud exdra anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan catium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore."
        }
        classNameText={"font-medium"}
      />
      <Pragraph
        pragraphContent={
          "Curabitur iaculis ligula ac sapien cursus convallis, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comds do consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paria tur. Excepteur sint occaecat cupidatat non proident sunt in culpa."
        }
      />

      <section className="mainSectionContainer flex flex-col gap-16 pt-16">
        <section>
          <HeadingTwo headingTitle={"Why Choose Timtom Aviation Ltd ?"} />

          <Pragraph
            pragraphContent={
              "People choose Timtom Aviation Ltd because our guides are the face of the company who are very well trained in sharing great stories and accurate information for your benefit."
            }
          />
          <div className="cardContainer grid grid-cols-2 gap-8 py-2">
            <div>
              <div className="flex gap-2 py-2">
                <div>
                  <Progress1 />
                </div>
                <Pragraph
                  pragraphContent={
                    " We have partnership with internationally recognized Aviation\
              management institutes from CANADA and INDIA,"
                  }
                />
              </div>
              <div className="flex gap-2 py-2">
                <div>
                  <Progress1 />
                </div>
                <Pragraph
                  pragraphContent={
                    " We have partnership with internationally recognized Aviation\
              management institutes from CANADA and INDIA,"
                  }
                />
              </div>
            </div>
            <div>
              <div className="flex gap-2 py-2">
                <div>
                  <Progress1 />
                </div>
                <Pragraph
                  pragraphContent={
                    " We have partnership with internationally recognized Aviation\
              management institutes from CANADA and INDIA,"
                  }
                />
              </div>
              <div className="flex gap-2 py-2">
                <div>
                  <Progress1 />
                </div>
                <Pragraph
                  pragraphContent={
                    " We have partnership with internationally recognized Aviation\
              management institutes from CANADA and INDIA,"
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <img
              src="public/images/HomeImage2.png"
              alt="This the Home Image on our services"
              className="h-full"
            />
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <HeadingTwo headingTitle={"How We Can Help"} />
            <Pragraph
              pragraphContent={
                " We help our clients by keeping up with ever-changing technology\
              and providing the finest available answer. The breadth of these\
              commercial projects, which span from offices to industrial plants,\
              offers us the expertise to take on any commercial project."
              }
            />

            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph
                  pragraphContent={
                    " Leading industrial solutions with machinery"
                  }
                />
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph
                  pragraphContent={
                    " Leading industrial solutions with machinery"
                  }
                />
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph
                  pragraphContent={
                    " Leading industrial solutions with machinery"
                  }
                />
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph
                  pragraphContent={
                    " Leading industrial solutions with machinery"
                  }
                />
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <AngleRight />
                </span>
                <Pragraph
                  pragraphContent={
                    " Leading industrial solutions with machinery"
                  }
                />
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
