import React, { Component } from "react";
import CardCal from "../assets/images/card_cal.png";
import Right from "../assets/icons/right-angle.png";

const RightOption = () => {
  return (
    <>
      <div className="w-48 right-options">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="option-heading">Lorem ipsum</h2>
          <p>
            view all{" "}
            <span className="right-bg">
              <img src={Right} />
            </span>
          </p>
        </div>
        <div className="right-option">
          <div className="d-flex mb-column right-option-container ">
            <img className="right-img" src={CardCal} />
            <div className="option-card">
              <h3>Quote of the month</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
              <p className="my-2">07:00 - 10:00 (March 20, 2021)</p>
              <a href="#">Register Now</a>
            </div>
          </div>
        </div>
        <div className="right-option ">
          <div className="d-flex mb-column right-option-container">
            <img className="right-img" src={CardCal} />
            <div className="option-card">
              <h3>Quote of the month</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
              <p className="my-2">07:00 - 10:00 (March 20, 2021)</p>
              <a href="#">Register Now</a>
            </div>
          </div>
        </div>
        {/* <div className="d-flex left-option-container">
            <img src={CardCal} />
            <div className="option-card">
              <h3>Quote of the month</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita
              </p>
            </div>
          </div> */}
      </div>
    </>
  );
};

export default RightOption;
