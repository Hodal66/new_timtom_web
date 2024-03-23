import HeadingOne from "../../components/Headings/HeadingOne";
import HeadingThree from "../../components/Headings/HeadingThree";
import HeadingTwo from "../../components/Headings/HeadingTwo";
import Pragraph from "../../components/Pragraph";

function ServicesHome() {
  return (
    <div>
      <div className="header_container">
        <header>
          <HeadingThree headingTitle={"The Timtom Aviation services"} />
          <HeadingOne headingTitle={"This is Our Services & Solution"} />
          <Pragraph
            pragraphContent={
              " We have partnership with internationally recognized Aviation\
          management institutes from CANADA and INDIA, We also offer other\
          services related to hospitality and tourism, these include; Air\
          ticketing, Hotel reservation and Visa application"
            }
          />
        </header>
      </div>
      <div className="card_container flex gap-8">
        <div className="image_container">
          <img src="/images/HomeImage4.png" alt="" />
        </div>
        <div className="content_container">
          <HeadingTwo headingTitle={"Manufacturing Plant"} />
          <Pragraph
            pragraphContent={
              " Our factory construction projects are planned with production\
            facilities in mind, so that we can build factories that ..."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesHome;
