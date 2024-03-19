import React from "react";


const Updatedsec = () => {
  return (
    <div className="updatebg position-relative z-3 d-flex pt-5 justify-content-center min-vh-100 align-items-center">
      <div className="container py-md-5 pt-3 my-md-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="updatecard updateborder">
              <h2 data-aos="zoom-in-down" className="text-white pb-md-4 pb-2 fw-bold fs-52 lh-62 ff-roboto">
                Get updated with us
              </h2>
              <form>
                <div className="d-sm-flex w-100 gap-md-4 gap-2">
                  <div className=" w-sm-50">
                    <label className="ff-roboto text-white fs-16 lh-18 fw-medium">
                      Frist Name
                    </label>
                    <div className="holder">
                      <input
                        type="text"
                        placeholder="Frist Name"
                        className="placeholdertext mt-md-2 mt-1 input-box"
                      />
                    </div>
                  </div>
                  <div className=" w-sm-50">
                    <label className="ff-roboto text-white fs-16 lh-18 fw-medium">
                      Last Name
                    </label>
                    <div className="holder">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="placeholdertext mt-md-2 mt-1 input-box"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-sm-flex w-100 pt-md-4 pt-sm-3  gap-md-4 gap-2">
                  <div className=" w-sm-50">
                    <label className="ff-roboto text-white fs-16 lh-18 fw-medium">
                     Phone Number
                    </label>
                    <div className="holder">
                      <input
                        type="tel"
                        placeholder="Phone No."
                        className="placeholdertext mt-md-2 mt-1 input-box"
                      />
                    </div>
                  </div>
                  <div className=" w-sm-50">
                    <label className="ff-roboto text-white fs-16 lh-18 fw-medium">
                      Email
                    </label>
                    <div className="holder">
                      <input
                        type="text"
                        placeholder="Email"
                        className="placeholdertext input-box mt-md-2 mt-1 "
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="pt-3 d-flex align-items-start">
                <div className="pt-1">
                  <input type="checkbox" />
                </div>
                <p data-aos="zoom-in-down" className="ps-3  ff-roboto fs-18 fw-normal mb-0 lh-21 text-white">
                  By sending this form I confirm that I have read and accept the 
                      <span className="fw-semibold ps-1 lh-27"> 
                    Privacy <span className="d-xl-block"></span>Policy
                  </span>
                </p>
              </div>
              <button className="playbtn mt-3 navbtn text-white position-relative z-3 lh-18 fs-16 fw-medium ff-roboto">
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <p data-aos="zoom-in-down" className="text-white mb-0 text-md-start text-center pt-md-0 pt-3 fw-medium fs-24 ff-roboto lh-28 ">
              Stay updated
            </p>
            <p data-aos="zoom-in-down" className=" text-lightwhite text-md-start text-center pt-md-0 lh-24 fs-16 ff-roboto fw-normal">
              At 248 Labs, Our Constant Pursuit Is To Build Engaging Games That
              Sared Joy. Don’t Hesitate To Reach Out To Us With Your Thoughts
              And Messages - We Are All Ears!
            </p>
            <p data-aos="zoom-in-down" className="text-white mb-0 fw-medium fs-24 text-md-start text-center  pt-md-4 pt-0 mt-lg-2 ff-roboto lh-28 ">
              Address
            </p>
            <p data-aos="zoom-in-down" className=" text-lightwhite lh-24 fs-16 text-md-start text-center ff-roboto fw-normal">
             390 Orchard Road, 03-07, Palais Renaissance.
            </p>
          </div>
        </div>
          </div>
          {/* <div className="updatetop"></div> */}
         <div className="updatbottom"></div>
    </div>
  );
};

export default Updatedsec;
