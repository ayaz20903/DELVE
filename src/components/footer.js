import React from "react";
import Location from "../assets/icons/location.svg";
import Insta from "../assets/icons/insta.svg";
import Youtube from "../assets/icons/youtube.svg";
import Twitter from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mb-column d-flex justify-content-between">
          <div className="footer-container">
            <h3 className="footer-heading">Contact us</h3>
            <p>
              Address: amet, consetetur sadipscing elitr
              <p> Email id:</p>
              <p>Phone no: 123456789</p>
            </p>
          </div>
          <div className="footer-container footer-logo">
            <h3 className="footer-heading">Follow us</h3>
            <div className="d-flex justify-content-around">
              <img src={Insta} alt="insta" />
              <img src={Youtube} alt="youtube" />
              <img src={Twitter} alt="twitter" />
            </div>
          </div>
          <div className="footer-container">
            <h3 className="footer-heading">Head Office</h3>
            <div className="footer-last d-flex mb-2">
              <img src={Location} alt="location" />
              <p className="ms-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam
              </p>
            </div>
            <div className="footer-last d-flex mb-2">
              <img src={Location} alt="location" />
              <p className="ms-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam
              </p>
            </div>
            <div className="footer-last d-flex">
              <img src={Location} alt="location" />
              <p className="ms-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
