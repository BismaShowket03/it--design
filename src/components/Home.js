import React, { useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Counts from "./Counts";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  const aboutRef = useRef(null);
  const mainRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div>
      <Header
        aboutRef={aboutRef}
        mainRef={mainRef}
        servicesRef={servicesRef}
        portfolioRef={portfolioRef}
        pricingRef={pricingRef}
        contactRef={contactRef}
      />
      <Hero />
      <About aboutRef={aboutRef} />
      <Counts />
      <Services servicesRef={servicesRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <Pricing pricingRef={pricingRef} />
      <Team />
      <Contact contactRef={contactRef} />
      <Footer
        aboutRef={aboutRef}
        mainRef={mainRef}
        servicesRef={servicesRef}
        portfolioRef={portfolioRef}
        pricingRef={pricingRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default Home;
