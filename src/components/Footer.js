import React from "react";
import { Link } from "react-router-dom";

const Footer = ({
  mainRef,
  aboutRef,
  servicesRef,
  pricingRef,
  portfolioRef,
  contactRef,
}) => {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrollPortfolio = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 60,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrollContact = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 60,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>
                  IT Design<span>.</span>
                </h3>
                <p>
                  IT Design 149/1, <br />
                  First.Floor, Kilokri <br />
                  Opposite Maharani Bagh,
                  <br />
                  New Delhi (110014)
                  <br />
                  <br />
                  <strong>Phone:</strong> +91 9810095183
                  <br />
                  <strong>Email:</strong> info@itdesignindia.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link
                      className=""
                      onClick={() => {
                        handleScroll(mainRef.current);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link
                      class=""
                      onClick={() => {
                        handleScroll(aboutRef.current);
                      }}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link
                      class=""
                      onClick={() => {
                        handleScroll(servicesRef.current);
                      }}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link
                      class=""
                      onClick={() => {
                        handleScrollPortfolio(portfolioRef.current);
                      }}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link
                      class=""
                      onClick={() => {
                        handleScrollContact(contactRef.current);
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/#">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/#">Product Management</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Domian Hosting</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Enter your e-mail to get our monthly updates.</p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4 justify-content-between">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>IT Design India</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-end pt-3 pt-md-0">
            <a
              href="https://www.facebook.com/people/It-Design/100075789922152/?ref=pages_you_manage"
              className="facebook"
              target="blank"
            >
              {/* <i className="bx bxl-facebook"></i> */}
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"
                alt="facebook-new"
              />
            </a>
            <a
              href="https://www.instagram.com/itdesignindia786/"
              className="instagram"
              target="blank"
            >
              {/* <i className="bx bxl-instagram"></i> */}
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/material-rounded/24/FFFFFF/instagram-new.png"
                alt="instagram-new"
              />
            </a>

            <a href="/#" className="linkedin">
              {/* <i className="bx bxl-linkedin"></i> */}
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
