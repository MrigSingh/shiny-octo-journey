import React, { Fragment } from 'react'
import Image from 'next/image'
import hero from '../../public/assets/services//web.png'
import money from '../../public/assets/services/icons/money.png'
import mobile from '../../public/assets/services/icons/mobile.png'
import light from '../../public/assets/services/icons/lightning.png'
import plane from '../../public/assets/services/icons/airplane.png'
import trust from '../../public/assets/services/icons/trust.png'
import ProcessSection from '../../components/ProcessSection'
import GetStartedSection from '../../components/GetStartedSection'

function Services() {
  return (
    <Fragment>
      <section id="home" className="intro-section">
        <div className="container">
          <div className="row align-items-center text-white">
            <div className="col-md-6 intros text-start">
              <h1 className="display-2">
                <span className="display-2--intro">We are the Best in Industry</span>
                <span className="display-2--description lh-base">
                We will help you ship better apps, faster. Our team of expert engineers has created the best user experiences in some of the most popular apps worldwide.
                </span>
              </h1>
              <a href="#services" className='text-decoration-none'>
                <button type="button" className="rounded-pill btn-rounded">
                  Know Why ?
                  <span>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              </a>
            </div>
            <div className="col-md-6 intros text-end">
              <div className="video-box">
                <Image
                  src={hero}
                  alt="video illutration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="services" className="services">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold">Some of our Amazing Features</h1>
            <div className="heading-line mb-1"></div>
          </div>
        </div>
        <div className="container">
          <div className="row services-row">
            <div className="col-3 shadow feature-box mt-3">
              <Image src={light} alt="service" />
              <h5 className="text-capitalize fw-bold mt-3">Blazing Fast Website</h5>
              <p>We keep our tach-stack updated with today&apos;s fast technology, we can deliver on any of your choices or what suits best for your purpose.</p>
            </div>
            <div className="col-3 shadow feature-box mt-3">
              <Image src={money} alt="service" />
              <h5 className="text-capitalize fw-bold mt-3">Efficent Pricing</h5>
              <p>We dicuss pricing with full transparency before hand about your whole project. Don&apos;t worry on budget we got you covered over here.</p>
            </div>
            <div className="col-3 shadow feature-box mt-3">
              <Image src={mobile} alt="service" />
              <h5 className="text-capitalize fw-bold mt-3">Mobile Responsive</h5>
              <p>We always try to build mobile-first websites/webapps so that your apps can we accessible on the fly for your customers.</p>
            </div>
            <div className="col-3 shadow feature-box mt-3">
              <Image src={plane} alt="service" />
              <h5 className="text-capitalize fw-bold mt-3">Trendy Designs</h5>
              <p>No designs? Give a chance to our designers they will always bring a smile on your face and on your products. You will be amazed!</p>
            </div>
            <div className="col-3 shadow feature-box mt-3">
              <Image src={mobile} alt="service" />
              <h5 className="text-capitalize fw-bold mt-3">Quick Delivery</h5>
              <p>Believe me or not we can ship your products in such short span of time you won&apos;t believe.</p>
            </div>
            <div className="col-3 shadow feature-box mt-3">
              <Image src={trust} alt="service" />
              <h5 className="text-capitalize fw-bold mt-3">Increase Trust</h5>
              <p>Whenever we deliver we build trust with our clients which is one of the most important things in today&apos;s world.</p>
            </div>
          </div>
        </div>
      </section>
      <ProcessSection />
      <GetStartedSection />
    </Fragment>
  )
}

export default Services