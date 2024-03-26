import React from "react";

const carddata = [
  {
    heading: "World Building",
    para:
      "Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision",
  },
  {
    heading: "Game Design",
    para:
      "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination.",
  },
  {
    heading: "Art and Sound",
    para:
      "In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down.",
  },
];

const Doerssec = () => {
    const data = carddata.map((carddata, i) => (
        <div key={i} className="col-lg-4 col-sm-6 pb-lg-5 pt-sm-3 pt-2">
            <div className="card-1 mb-md-5 cardborder position-relative overflow-hidden">
              <h3 data-aos="zoom-in" className="text-white ff-roboto mb-0 fw-bold fs-32 lh-38">
               {carddata.heading}
              </h3>
              <p data-aos="zoom-in" className="text-lightwhite pt-xl-3 pt-1 ff-roboto fs-16 lh-24">
               {carddata.para}
                </p>
                <div className="cardellipse"></div>
            </div>
          </div>
    ))
  return (
    <div id="about" className="pt-5 pb-4 position-relative overflow-x-clip z-1 bg-black">
        <h2 className="ff-roboto fw-bold mb-0 fs-187 lh-224 abouttext  text-whiteopacity">
        About Us
      </h2>
      <div className="container pt-lg-5 mt-md-4">
        <div className="row  justify-content-between">
          <div data-aos="fade-right" className="col-md-4 pb-md-5 mb-sm-3 mb-1 d-flex flex-column align-items-center justify-content-center align-items-md-start justify-content-md-start">
            <div>
              <span className=" bgbtngradient sideborder">
                <span className=" z-1 btngradient ff-roboto fs-16 lh-19">
                  DOERS OVER TALKERS
                </span>
              </span>
              </div>
              <h2 className="ff-roboto fw-bold mb-0 text-white fs-52 pt-3 lh-62">
                Game First.Always.
              </h2>
            
          </div>
          <div data-aos="fade-left" className="col-md-7 pb-md-5 mb-sm-3 d-flex flex-column justify-content-end align-items-end">
            <div>
              <p className="text-white text-md-start mb-0 text-center fw-medium fs-18 lh-21">
                This is difficult
              </p>
              <p className=" text-lightwhite pt-md-3 pt-1 text-md-start text-center fs-16 fw-400 lh-24 ff-roboto">
                Web3 Games have a notoriously high barrier-to-entry for casual
                gamers <span className="d-lg-block"></span> who make up the vast
                majority of players. “Link your wallet” before{" "}
                <span className="d-lg-block"></span> gameplay is not just
                off-putting, it’s boring. We’re solving that with{" "}
                <span className="fw-semibold">
                  world- <span className="d-lg-block"></span>class storytelling,
                </span>{" "}
                world-building, game design, art and sound. And fun.
              </p>
            </div>
          </div>
        </div>
        <div className="row py-md-5 py-3 mb-md-0 mb-3 justify-content-center ">
          {data}
        </div>
      </div>
    
      <div className="aboutellipse"></div>
    </div>
  );
};

export default Doerssec;
