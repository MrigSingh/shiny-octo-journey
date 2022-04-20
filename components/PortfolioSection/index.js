import React from 'react'

function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio">
  <div className="container">
    <div className="row text-center mt-5">
      <h1 className="display-3 fw-bold text-capitalize">Latest work</h1>
      <div className="heading-line"></div>
      <p className="lead">
        We let our work speak on behalf of us. Below are some of our recent works. 
      </p>
    </div>
    <div className="row mt-5 mb-4 g-3 text-center">
      <div className="col-md-12 tabs">
        <button className="btn btn-outline-primary" type="button">All</button>
        <button className="btn btn-outline-primary" type="button">websites</button>
        <button className="btn btn-outline-primary" type="button">design</button>
        <button className="btn btn-outline-primary" type="button">mockup</button>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-md-12 mb-5">
        <div className="portfolio-box shadow">
          <img src="assets/portfolio/web-1.png" alt="portfolio image" title="portfolio 1 picture" className="img-fluid" />
          <div className="portfolio-info">
            <div className="caption">
              <h4>WebsiteWaala</h4>
              <p>WebApp - MVP</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12">
        <div className="portfolio-box shadow">
          <img src="assets/portfolio/web-3.png" alt="portfolio image" title="portfolio 1 picture" className="img-fluid" />
          <div className="portfolio-info">
            <div className="caption">
              <h4>Shachi United</h4>
              <p>WebApp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default PortfolioSection