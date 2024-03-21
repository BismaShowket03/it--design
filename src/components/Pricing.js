import React from "react";

const Pricing = ({pricingRef}) => {
  return (
    <>
      <section id="pricing" className="pricing section-bg" ref={pricingRef}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Pricing</h2>
            <p>
              IT Design India's web designers and development personnel ensures
              that you get an aesthetically appealing, search engine friendly
              and user friendly website. We start work with your given
              parameters and work till your satisfaction.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="box" data-aos="fade-up" data-aos-delay="100">
                <h3>Startup Package</h3>
                <h4>
                  <sup>Rs. </sup>4999<span></span>
                </h4>
                <ul>
                  <li>Up to 4 HTML Pages</li>
                  <li>Customised to Your Business Needs</li>
                  <li>Home Page Responsive Design</li>
                  <li>Domain Name, 1-Email Id, Web Hosting One Year Free</li>
                  <li>Web-Optimised Images</li>
                  <li>1 Contact Form </li>
                  <li>No word limit on Content</li>
                  <li>Multiple Browser Friendly</li>
                </ul>
                <div className="btn-wrap">
                  <a href="/#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div
                className="box featured"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Premium Package</h3>
                <h4>
                  <sup>Rs.</sup>9999<span> / month</span>
                </h4>
                <ul>
                  <li>Up to 10 HTML Pages</li>
                  <li>Customised to Your Business Needs</li>
                  <li>Home Page Responsive Design</li>
                  <li>Domain Name, 3-Email Id, Web Hosting One Year Free</li>
                  <li>Web-Optimised Images</li>
                  <li>Contact & Feedback Form</li>
                  <li>No word limit on Content</li>
                  <li>Multiple Browser Friendly</li>
                  <li>Free Content Modification for one Month</li>
                </ul>
                <div className="btn-wrap">
                  <a href="/#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="300">
                <h3>Gold Package</h3>
                <h4>
                  <sup>Rs.</sup>14999<span> / month</span>
                </h4>
                <ul>
                  <li>Up to 25 HTML Pages</li>
                  <li>Customised to Your Business Needs</li>
                  <li>Home Page Responsive Design</li>
                  <li>Domain Name, 5-Email Id, Web Hosting One Year Free</li>
                  <li>5 Dynamic Pages</li>
                  <li>Web-Optimised Images</li>
                  <li>Contact Form</li>
                  <li>No word limit on Content</li>
                  <li>Multiple Browser Friendly</li>
                </ul>
                <div className="btn-wrap">
                  <a href="/#" className="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
