import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <>
  {/* Spinner Start */}
  {/* <div
    id="spinner"
    className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-grow text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar Start */}
  <nav
    className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
   
        <NavLink to={"/"} className="navbar-brand ms-4 ms-lg-0">
      <h1 className="mb-0 text-primary text-uppercase">
        <i className="fa fa-cut me-3" />
        HairCut
      </h1>
   
    </NavLink>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
      <NavLink to={"/"} className="nav-item nav-link active">
      Home
      </NavLink>

      <NavLink to={"/about"} className="nav-item nav-link active">
      About
      </NavLink>
      <NavLink to={"/service"} className="nav-item nav-link active">
      Service
      </NavLink>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu m-0">
            <a href="price.html" className="dropdown-item">
              Pricing Plan
            </a>
            <a href="team.html" className="dropdown-item">
              Our Barber
            </a>
            <a href="open.html" className="dropdown-item">
              Working Hours
            </a>
            <a href="testimonial.html" className="dropdown-item">
              Testimonial
            </a>
            <a href="404.html" className="dropdown-item">
              404 Page
            </a>
          </div>
        </div>
        <NavLink to={"/contact"} className="nav-item nav-link active">
      ontact
      </NavLink>
      </div>
      <a
        href=""
        className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block"
      >
        Appointment
        <i className="fa fa-arrow-right ms-3" />
      </a>
    </div>
  </nav>
  {/* Navbar End */}
</>

    </div>
  )
}

export default Nav