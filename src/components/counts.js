import React from "react";
import Dates from "../assets/images/dates.png";

const Counts = () => {
  return (
    <>
      <section className="count-container ">
        <div className="container mb-column d-flex justify-content-between align-items-center">
          <div className="count">
            <h4>Lorem ipsum</h4>
            <h3>123+</h3>
            <h4 className="sub-heading">Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat
            </p>
          </div>

          <div className="count">
            <h4>Lorem ipsum</h4>
            <h3>12+</h3>
            <h4 className="sub-heading">Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat
            </p>
          </div>

          <div className="count">
            <h4>Lorem ipsum</h4>
            <h3>12+</h3>
            <h4 className="sub-heading">Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat
            </p>
          </div>

          <div className="count">
            <h4>Lorem ipsum</h4>
            <h3>123</h3>
            <h4 className="sub-heading">Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat
            </p>
          </div>
        </div>
      </section>

      <section className="date-bg">
        <img className="bg-img" alt="dates" src={Dates} />
        <div className="date-container mb-column container d-flex justify-content-between align-items-center">
          <div className="date">
            <p className="date-text">January 20, 2011 </p>
            <p>Lorem ipsun</p>
            <p>dolor sit amet</p>
          </div>
          <div className="date">
            <p className="date-text">January 20, 2011 </p>
            <p>Lorem ipsun</p>
            <p>dolor sit amet</p>
          </div>
          <div className="date">
            <p className="date-text">January 20, 2011 </p>
            <p>Lorem ipsun</p>
            <p>dolor sit amet</p>
          </div>
          <div className="date">
            <button>Back</button>
            <button>Next</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counts;
