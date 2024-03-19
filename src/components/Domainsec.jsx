import React from "react";

const Domainsec = () => {
  return (
    <div className="py-md-5 position-relative overflow-x-clip z-2 ">
      <div className="aboutellipse d-md-block d-none"></div>
      <div className="container my-md-5 my-3 domainbg"></div>
      <div className="container">
        <div className="row pt-lg-4 justify-content-between">
          <div data-aos="fade-right" className="col-lg-3">
            <div className="d-flex justify-content-lg-start justify-content-center">
              <button className="text-white z-1 mb-lg-4 mb-2 sideborder domainbtn playbtn ff-roboto fw-bold fs-18 lh-27">
                name@domain.com
              </button>
               </div>
              <div className="d-flex justify-content-lg-start justify-content-center">
                <button className="makebtn ms-lg-0 ms-sm-2 ms-0 navbtn ff-roboto text-white fw-bold fs-18 lh-2">
                  Make Your Move
                </button>
              </div>
           
          </div>
          <div data-aos="fade-left" className="col-lg-9 d-flex justify-content-end align-items-center">
            <div>
                <p className="text-lightwhite pt-lg-0 pt-3 mb-0 text-lg-start text-center ff-roboto fs-16 lh-24 fw-normal">
                  Unveiled is a unique
                  <span className="text-white fw-semibold">
                    Collectible Card Game
                  </span>
                  in which you gain fervour for your ventures, spending it on <span className="d-xl-block"></span>
                  mercenaries, spies, automata, and influence.
                </p>
                <p className="text-lightwhite text-lg-start py-md-3 py-1 mb-0 text-center ff-roboto fs-16 lh-24 fw-normal">
                  You play
                  <span className="text-white fw-semibold">
                    A Rogue Merchant Trader
                  </span>
                  allied to a noble house, alongside your{" "}
                  <span className="text-white fw-semibold">
                    Cryptid-Humanoid Companions
                  </span>
                  in <span className="d-xl-block"></span> a game of ambition and
                  alliance, deception and miracles, manipulation and annihilation.
                  Bells chime in the <span className="d-xl-block"></span> harbour, and
                  markets are opening. Guards have swept the streets of the more
                  obvious dangers.
                          </p>
                          <p className="text-white ff-roboto fw-semibold fs-16 text-lg-start text-center lh-24">What’s your next move?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domainsec;
