import React, { useState, useEffect } from "react";
import "../App.css";
import Search from "../assets/icons/search.svg";

const Header = () => {
  const [show, setShow] = useState(false);

  const changeSize = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", changeSize);

  return (
    <>
      <header className={show ? "site-header active" : "site-header"}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              Logo
            </a>

            <form className="d-flex nav-form">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-nav" type="submit">
                <img alt="search" src={Search} />
              </button>
              <i class="icomoon icon-search"></i>
            </form>

            <div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item nav-item-children">
            <a className="nav-link">Qualifications</a>
            <ul className="sub-menu ">
				<li className=""><a href="#">Item1</a></li>
				<li className=""><a href="#">Item2</a></li>
				<li className=""><a href="#">Item3</a></li>
			</ul>
        </li>
        <li className="nav-item nav-item-children">
            <a className="nav-link">Organization</a>
            <ul className="sub-menu ">
				<li className=""><a href="#">Item1</a></li>
				<li className=""><a href="#">Item2</a></li>
				<li className=""><a href="#">Item3</a></li>
			</ul>
        </li>
        <li className="nav-item nav-item-children">
            <a className="nav-link">Research and Analytics</a>
            <ul className="sub-menu ">
				<li className=""><a href="#">Item1</a></li>
				<li className=""><a href="#">Item2</a></li>
				<li className=""><a href="#">Item3</a></li>
			</ul>
        </li> 
        <li className="nav-item nav-item-children">
            <a className="nav-link">Lorem ipsum</a>
            <ul className="sub-menu ">
				<li className=""><a href="#">Item1</a></li>
				<li className=""><a href="#">Item2</a></li>
				<li className=""><a href="#">Item3</a></li>
			</ul>
        </li> */}
                  <li className="nav-item nav-item-children">
                    <a className="nav-link">about</a>
                    <ul className="sub-menu ">
                      <li className="">
                        <a href="#">Item1</a>
                      </li>
                      <li className="">
                        <a href="#">Item2</a>
                      </li>
                      <li className="">
                        <a href="#">Item3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">rooms</a>
                  </li>
                </ul>
                {/* <form className="d-flex">
        <button className="btn btn-navbar" type="submit">Enrolment</button>
      </form> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
