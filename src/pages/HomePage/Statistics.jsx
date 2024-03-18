function Statistics() {
  return (
    <div className="flex gap-8">
      <div className="left_side">
        <img src="/images/HomeImage44.png" alt="" />
      </div>
      <div className="right_side flex gap-8">
        <div className="Rectangles">
          <div className="card">
            <div className="heading">
              <h1>20,345</h1>
            </div>
            <div className="heading">
              <p>Turbines Worldwide</p>
            </div>
          </div>
          <div className="card">
            <div className="heading">
              <h1>9,058</h1>
            </div>
            <div className="heading">
              <p>Projects Completed</p>
            </div>
          </div>
          <div className="card">
            <div className="heading">
              <h1>1,360</h1>
            </div>
            <div className="heading">
              <p>World Employees</p>
            </div>
          </div>
        </div>
        <div className="circles">
          <div className="card">
            <div>
              <p>CountrywideInstalled Capacity</p>
            </div>
            <div>
              <p>
                GW <span>+</span> 68
              </p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>CountrywideInstalled Capacity</p>
            </div>
            <div>
              <p>
                GW <span>+</span> 68
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
