import React from "react";
import Room1 from "../assets/images/room-1.jpeg";
import Room4 from "../assets/images/room-4.jpeg";
import Room3 from "../assets/images/room-3.jpeg";
import Subscribe from "../assets/images/subscribe.png";
import LeftOption from "./leftOption";
import RightOption from "./rightOption.js";

const Cards = () => {
  return (
    <>
      <section className="cards mb-column d-flex justify-content-between container">
        <div className="card">
          <img className="card-img-top" src={Room1} alt="Card image cap" />
          <span className="card-text-left">Lorem ipsum</span>
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={Room3} alt="Card image cap" />
          <span className="card-text-left">Lorem ipsum</span>
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={Room4} alt="Card image cap" />
          <span className="card-text-left">Lorem ipsum</span>
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
            </p>
          </div>
        </div>
      </section>

      <section className="options">
        <div className="container mb-column d-flex justify-content-between">
          <LeftOption />
          <RightOption />
        </div>
      </section>

      <section className="subscribe mb-column d-flex align-items-center justify-content-center container">
        <div className="subscribe-text m-auto">
          <h3>Subscribe</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div>
            <input
              className="subscribe-input"
              placeholder=" Enter your Email Address"
              type="text"
            />
            <input className="subscribe-btn" type="submit" />
          </div>
        </div>
        <img src={Subscribe} alt="subscribe" />
      </section>
    </>
  );
};

export default Cards;
