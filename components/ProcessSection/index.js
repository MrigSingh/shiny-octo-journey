import React from "react";

function ProcessSection() {
  return (
    <section id="testimonials" className="testimonials">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <div className="row text-center text-white">
          <h1 className="display-3 fw-bold">Our Process</h1>
          <hr style={{ width: "100px", height: "3px" }} className="mx-auto" />
          <p className="lead pt-1">We believe in good communication and a fully transparent development process.</p>
        </div>
        <div className="row process-row">
          <div className="col-md-2 col-lg-2 process-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="process-box__info">
              <p className="process-box__info--title">PLAN</p>
            </div>
          </div>
          <span className="process-arrow">
            <i className="fas fa-chevron-right"></i>
          </span>
          <div className="col-md-2 col-lg-2 process-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="process-box__info">
              <p className="process-box__info--title">DESIGN</p>
            </div>
          </div>
          <span className="process-arrow">
            <i className="fas fa-chevron-right"></i>
          </span>
          <div className="col-md-2 col-lg-2 process-box pt-1 d-md-block d-lg-flex d-flex">
            <div className="process-box__info">
              <p className="process-box__info--title">DEVELOP</p>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default ProcessSection;
