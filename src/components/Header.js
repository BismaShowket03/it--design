import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({
  mainRef,
  aboutRef,
  servicesRef,
  pricingRef,
  portfolioRef,
  contactRef,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function mobileNavView() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const mobileNavIcon = isMobileNavOpen ? (
    <img
      width="30"
      height="30"
      src="https://img.icons8.com/ios/50/multiply.png"
      alt="multiply"
    />
  ) : (
    <img
      width="30"
      height="30"
      src="https://img.icons8.com/ios/50/menu--v1.png"
      alt="menu-icon"
    />
  );

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
    closeMobileNav();
  };

  const handleScrollPortfolio = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 60,
      left: 0,
      behavior: "smooth",
    });
    closeMobileNav();
  };

  const handleScrollContact = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 60,
      left: 0,
      behavior: "smooth",
    });
    closeMobileNav();
  };

  return (
    <div>
      <header
        id="header"
        className="fixed-top d-flex align-items-center"
        ref={mainRef}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/">
              <img src="/images/logo.png" alt="" srcset="" />
              <span>.</span>
            </a>
          </div>

          <nav
            id="navbar"
            className={isMobileNavOpen ? "navbar-mobile" : "navbar"}
          >
            <ul>
              <li>
                <Link
                  className="nav-link link-button scrollto"
                  onClick={() => {
                    handleScroll(mainRef.current);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link link-button scrollto"
                  onClick={() => {
                    handleScroll(aboutRef.current);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link link-button scrollto"
                  onClick={() => {
                    handleScroll(servicesRef.current);
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link link-button scrollto"
                  onClick={() => {
                    handleScrollPortfolio(portfolioRef.current);
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link link-button scrollto"
                  onClick={() => {
                    handleScroll(pricingRef.current);
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link link-button scrollto"
                  onClick={() => {
                    handleScrollContact(contactRef.current);
                  }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link link-button scrollto"
                  onClick={() => {
                    handleScroll(aboutRef.current);
                  }}
                >
                  <button className="btn btn-danger nav-btn-left nav-btn-mobile">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
            <button onClick={mobileNavView} className="mobile-nav-toggle btn">
              {mobileNavIcon}
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
