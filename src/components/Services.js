import React from "react";

const Services = ({servicesRef}) => {
  return (
    <>
      <section id="services" className="services section-bg" ref={servicesRef}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Web Designing: Setting out an amenable design proclaims an
              impression of your business to a visitor. The mainstay of
              structure that depends on your business idea --- IT Design
              understands.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-briefcase">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/e03a3c/domain.png"
                    alt="domain"
                  />
                </i>
                <h4>
                  <a href="/#">Domain Registration</a>
                </h4>
                <p>
                  Claim your online identity effortlessly with our domain
                  registration services. Secure your digital presence with ease
                  through our streamlined process.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-card-checklist">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/e03a3c/web-design.png"
                    alt="web-design"
                  />
                </i>
                <h4>
                  <a href="/#">Web Designing</a>
                </h4>
                <p>
                  Unlock the potential of your online presence with our bespoke
                  web designs. Elevate user experiences and drive engagement
                  with our expertly crafted designs.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-bar-chart">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/e03a3c/google-code.png"
                    alt="google-code"
                  />
                </i>
                <h4>
                  <a href="/#">Web Development</a>
                </h4>
                <p>
                  Crafting immersive online experiences that captivate and
                  engage users. Elevate your digital presence with our expert
                  web development solutions tailored to your unique goals.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-binoculars">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/e03a3c/windows10-personalization.png"
                    alt="windows10-personalization"
                  />
                </i>
                <h4>
                  <a href="/#">Graphic Design</a>
                </h4>
                <p>
                  Transforming ideas into captivating visuals that resonate with
                  your audience. Elevate your brand's aesthetic with our expert
                  graphic design solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
