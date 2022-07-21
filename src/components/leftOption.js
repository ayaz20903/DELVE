import React, { Component } from "react";
import Option1 from "../assets/images/options1.png";
const LeftOption = () => {
  return (
    <>
      <div className="w-48">
        <h2 className="option-heading">Lorem ipsum</h2>
        <div className="left-option ms-0">
          <div className="d-flex mb-column left-option-container ">
            <img src={Option1} />
            <div className="option-card">
              <h3>Quote of the month</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
            </div>
          </div>
          <div className="d-flex mb-column left-option-container">
            <img src={Option1} />
            <div className="option-card">
              <h3>Quote of the month</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
            </div>
          </div>
          <div className="d-flex mb-column left-option-container">
            <img src={Option1} />
            <div className="option-card">
              <h3>Quote of the month</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftOption;
