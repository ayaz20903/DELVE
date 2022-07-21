import React, { Component } from "react";
import "../App.css";
import calendar from "../assets/icons/calendar.png";
import Counts from "./counts";
import Slider from "./slider";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from "swiper";

const UpcomingTrips = () => {
  return (
    <>
      <section className="upcoming-trip">
        <div className="container mb-column d-flex align-items-center justify-content-between trip-container">
          <div className=" trips-heading">
            <h2>Upcoming Trips</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="trip">
            <img src={calendar} alt="calendar" />
            <div className="ms-2">
              <h3>02th October 2022</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="trip">
            <img src={calendar} alt="calendar" />
            <div className="ms-2">
              <h3>Nov-Dec 2022</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="trip">
            <img src={calendar} alt="calendar" />
            <div className="ms-2">
              <h3>Dec-Jan 2023</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        <Slider />

        <Counts />
      </section>
    </>
  );
};

export default UpcomingTrips;
