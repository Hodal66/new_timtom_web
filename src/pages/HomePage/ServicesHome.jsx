function ServicesHome() {
  return (
    <div>
      <div className="header_container">
        <header>The Timtom Aviation services</header>
        <h1>This is Our Services & Solution</h1>
        <p>
          We have partnership with internationally recognized Aviation
          management institutes from CANADA and INDIA, We also offer other
          services related to hospitality and tourism, these include; Air
          ticketing, Hotel reservation and Visa application
        </p>
      </div>
      <div className="card_container flex gap-8">
        <div className="image_container">
          <img src="/images/HomeImage4.png" alt="" />
        </div>
        <div className="content_container">
          <h1 className="title">Manufacturing Plant</h1>
          <p className="content">
            Our factory construction projects are planned with production
            facilities in mind, so that we can build factories that ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesHome;
