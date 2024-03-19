import React from "react";

const Levelbg = () => {
  return (
    <div className="min-vh-100 mb-5 levelbg d-flex flex-column">
      <div className=" d-flex flex-grow-1 align-items-center">
          <div className="container d-flex justify-content-center align-items-end flex-column">
                <div data-aos="zoom-in-up" className="levecard levelborder">
                  <h2 className="text-white fw-bold ff-roboto fs-52 lh-67">
                    Level up your gaming <span className="d-block">experience</span>{" "}
                  </h2>
                  <button className="text-white position-relative z-3 ff-roboto playbtn fs-18 lh-27 fw-bold navbtn">
                    Play Unvilled
                  </button>
                </div>
          </div>
      </div>
    </div>
  );
};

export default Levelbg;
