import React from "react";

const Contact = ({ contactRef }) => {
  return (
    <>
      <section id="contact" className="contact" ref={contactRef}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              IT Design India's web designers and development personnel ensures
              that you get an aesthetically appealing, search engine friendly
              and user friendly website. We start work with your given
              parameters and work till your satisfaction.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    {/* <i className="bx bx-map"></i> */}
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios-filled/50/e03a3c/marker.png"
                      alt="marker"
                    />
                    <h3>Our Address</h3>
                    <p>
                      IT Design 149/1, First.Floor, Kilokri Opposite Maharani
                      Bagh, New Delhi 110014
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    {/* <i className="bx bx-envelope"></i> */}
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/material-rounded/50/e03a3c/mail.png"
                      alt="mail"
                    />
                    <h3>Email Us</h3>
                    <p>info@itdesignindia.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    {/* <i className="bx bx-phone-call"></i> */}
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/ios-filled/50/e03a3c/phone-disconnected.png"
                      alt="phone-disconnected"
                    />
                    <h3>Call Us</h3>
                    <p>+91 9810095183</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                // action="forms/contact.php"
                // method="post"
                // role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
