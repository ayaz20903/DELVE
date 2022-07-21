import React from "react";
import "../App.css";
import home_banner from "../assets/images/home_banner.jpg";

const HeroBanner = () => {
  return (
    <>
      <section className="">
        <img className="banner-img" alt="banner" src={home_banner} />

        {/* <div className='banner-text container'>
                <h1>Lorem ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                </p>    
                <button>Know More</button>
            </div>             */}
      </section>
    </>
  );
};

export default HeroBanner;
