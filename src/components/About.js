import React from "react";

const About = ({aboutRef}) => {
  return (
    <>
      <section id="about" className="about section-bg" ref={aboutRef}>
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="content col-xl-5 d-flex align-items-stretch">
              <div className="content">
                <h3>
                  <span style={{ color: "#e03a3c" }}>We</span> Love Creativity
                </h3>
                <p>
                  We are an IT design, a fertile web-designing company, based in
                  Delhi, India. We play a flawless role in web-designing,
                  web-development, and digital marketing with deep admiration
                  for our work; hence, we hold out development schemes for
                  overseas firms. And our services entail professional and
                  custom web designs.
                </p>
                <a href="/#" className="about-btn">
                  <span>About us</span> <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>How are we different?</h4>
                    <p>
                      We are a forthcoming company with colossal experience in
                      web design. We, IT design, understand our responsibility
                      that leads to an optimum result.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bx bx-cube-alt"></i>
                    <h4>Our services include</h4>
                    <p>
                      Web Designing: Setting out an amenable design proclaims an
                      impression of your business to a visitor.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bx bx-images"></i>
                    <h4>Labore consequatur</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-shield"></i>
                    <h4>Beatae veritatis</h4>
                    <p>
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
