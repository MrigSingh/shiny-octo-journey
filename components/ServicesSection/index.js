import Link from 'next/link'
import Image from "next/image";
import service1 from "../../public/assets/services/service-1.png";
import service2 from "../../public/assets/services/service-2.png";
import service3 from "../../public/assets/services/service-3.png";

const customLoader = ({ src }) => {
  return src
}

function ServiceSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold">Our Services</h1>
          <div className="heading-line mb-1"></div>
        </div>
        <div className="row pt-2 pb-2 mt-0 mb-3">
          <div className="col-md-6 border-right">
            <div className="bg-white p-3">
              <h2 className="fw-bold text-capitalize text-center">
                Our Services Range From Initial Design To Deployment Anywhere
                Anytime
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-4 text-start">
              <p className="fw-light">
              Our expert team provide a variety of services which can help you and your business to scale in online world too. Some of our best services are stated below.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
            <div className="services__content">
              <div className="icon d-block fas fa-paper-plane"></div>
              <h3 className="display-3--title mt-1">Mobile App development</h3>
              <p className="lh-lg">
              We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.
              </p>
              <Link href="/services" passHref>
              <button
                type="button"
                className="rounded-pill btn-rounded border-primary"
              >
                Learn more
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
            <div className="services__pic">
              <Image
                src={service1}
                alt="marketing illustration"
                className="img-fluid"
                loader={customLoader}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
            <div className="services__pic">
              <Image
                src={service2}
                alt="web development illustration"
                className="img-fluid"
                loader={customLoader}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
            <div className="services__content">
              <div className="icon d-block fas fa-code"></div>
              <h3 className="display-3--title mt-1">web development</h3>
              <p className="lh-lg">
              Your website is your business’s online shop window. As such, it’s the most important part of your online marketing efforts. There are so many things about your website that can damage your SEO and credibility online. H1 tags, images, load speed, and functional links are just a few of the things that add value to your site. A good digital agency will go through your website carefully and ensure that every aspect of it is working to your benefit.
              </p>
              <Link href="/services" passHref>
                <button
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  Learn more
                  <span>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
            <div className="services__content">
              <div className="icon d-block fas fa-cloud-upload-alt"></div>
              <h3 className="display-3--title mt-1">cloud hosting</h3>
              <p className="lh-lg">
              Cloud computing solutions will make your business more responsive and efficient. Use SaaS to significantly decrease the role of manual maintenance, increase productivity, and improve the end user experience in your business. Implement the PaaS solution to quickly design, deploy, and scale. Lower costs on storage, server, and in-house maintenance with IaaS. Intellectsoft can help you leverage any solution on the most popular and reliable cloud storages.
              </p>
              <Link href="/services" passHref>
                <button
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  Learn more
                  <span>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
            <div className="services__pic">
              <Image
                src={service3}
                alt="cloud hosting illustration"
                className="img-fluid"
                loader={customLoader}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
