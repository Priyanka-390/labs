import React from "react";
import logo from "../assets/images/navlogo.webp";
const Preloader = () => {
  return (
    <div className="min-vh-100 herobg-img position-fixed  flex-column overflow-hidden d-flex justify-content-center align-items-center top-0 left-0 right-0 w-100">
      <div className="position-relative d-flex animation justify-content-center align-items-center ">
        <img src={logo} alt="logo" />
      </div>
          <p className="ff-roboto animation pt-3 fs-52 text-white">Loading...</p>

    </div>
  );
};

export default Preloader;
