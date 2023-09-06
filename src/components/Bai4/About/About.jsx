import React from "react";
import AboutStart from "../AboutStart";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <>
        {/* Page Header Start */}
        <div
          className="container-fluid page-header py-5 mb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container text-center py-5">
            <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">
              About
            </h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                <li className="breadcrumb-item">
                  <NavLink to={"/"} className="text-white">Home </NavLink>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-primary active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}
      </>
      <AboutStart/>
    </div>
  );
}

export default About;
