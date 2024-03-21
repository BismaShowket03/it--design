import React from "react";

const Hero = () => {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-8">
              <h1>
                Welcome to <span style={{ color: "#e03a3c" }}>IT</span> Design
                India
              </h1>
              <h2>Get a Professionally built Website at an Affordable Price</h2>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
