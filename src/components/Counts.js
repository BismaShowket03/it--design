import React from "react";
import Counter from "./Counter";

const Counts = () => {
  return (
    <>
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/e03a3c/happy--v1.png"
                    alt="happy--v1"
                  />
                </i>
                <span className="purecounter">
                  <Counter end={2100} delay={3} />
                </span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/e03a3c/group-of-projects.png"
                    alt="group-of-projects"
                  />
                </i>
                <span className="purecounter">
                  <Counter end={1250} delay={3} />
                </span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/e03a3c/customer-support.png"
                    alt="customer-support"
                  />
                </i>
                <span className="purecounter">
                  <Counter end={24} delay={3} />
                </span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-people">
                  <img
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/e03a3c/group-foreground-selected.png"
                    alt="group-foreground-selected"
                  />
                </i>
                <span className="purecounter">
                  <Counter end={15} delay={3} />
                </span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counts;
