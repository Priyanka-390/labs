import React, { useState } from "react";
import navlogo from "../assets/images/navlogo.webp";

const Mynav = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <div>
      <div className="container">
        <div className="pt-4 d-flex align-items-center justify-content-between">
          <a href="#">
            <img src={navlogo} alt="logo" />
          </a>
          <ul className={`${show ? "left_100" : "left_0"} nav_bar ps-0 mb-0`}>
            <li onClick={() => setshow(!show)}>
              <a
                href="#about"
                className="lh-24 text-lightwhite ff-roboto navhover nav_line position-relative  text-decoration-none list-unstyled fw-normal"
              >
                About Us
              </a>
            </li>
            <li onClick={() => setshow(!show)}>
              <a
                href="#team"
                className="lh-24 text-lightwhite navhover nav_line position-relative ff-roboto  text-decoration-none list-unstyled fw-normal"
              >
                Our Team
              </a>
            </li>
            <li onClick={() => setshow(!show)}>
              <a
                href="#roadmap"
                className="lh-24 text-lightwhite nav_line navhover position-relative ff-roboto  text-decoration-none list-unstyled fw-normal"
              >
                Roadmap
              </a>
            </li>
            <li>
              <button className="ff-roboto  ms-3 navbtn text-white fw-700 fs-18 lh-27">
                Contact Us
              </button>
            </li>
          </ul>
          <div
            onClick={() => setshow(!show)}
            className={`${show ? "" : "cross"} navline`}
          >
            <span className="crl-1"></span>
            <span className="crl-2"></span>
            <span className="crl-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mynav;
