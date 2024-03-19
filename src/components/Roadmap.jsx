import React from 'react'
import flag1 from "../assets/images/flag-1.webp"
import flag2 from "../assets/images/flag-2.webp"
import flag3 from "../assets/images/flag-3.webp"
import roadmapicon from "../assets/images/roadmapico.webp"
import { Stars } from './Icons'

const Roadmap = () => {
  return (
    <div id='roadmap' className='py-sm-5 mt-md-5 mt-2 roadmapbg overflow-x-clip position-relative z-3'>
      <div className="roadmapellipse d-md-block d-none"></div>
       <h2 className="ff-roboto fw-bold fs-187 lh-224 abouttext text-center text-whiteopacity">
       Roadmap
      </h2>
          <div className="container">
               <div className="d-flex justify-content-center ">
          <span className=" bgbtngradient sideborder">
            <span className=" z-1 btngradient ff-roboto fs-16 lh-19">
              ROAD MAP
            </span>
          </span>
        </div>
        <h2 className="text-white pb-lg-5  mb-sm-5 mb-3 text-center pt-sm-3 pt-1 mb-0 ff-roboto fw-bold fs-52 lh-62">
         Milestones and markers
        </h2>
    <div className='pt-md-5 mt-md-5'>
          <div className='roadmapline mt-md-5 position-relative'>
            <img src={roadmapicon} alt="icon" className='roadmapicon d-sm-block d-none' />
            <div className="roadcircle"></div>
          <div className='d-flex justify-content-md-end ps-md-0 ps-3 ' data-aos="fade-left">
            <div className="roadmapcard cardborder my-md-5 my-2 overflow-hidden position-relative d-flex justify-content-center align-items-center flex-column">
              <h3 className='btngradient mb-0 ff-roboto fs-24 text-center lh-28 fw-normal'>Oct 2014</h3>
              <p className='pt-1 ff-roboto fs-24 lh-28 fw-normal text-center mb-0'>Hired Our First Employee</p>
              <div className="cardellipse"></div>
            </div>
          </div>
           <div className='ps-md-0 ps-3' data-aos="fade-right">
             <div className="roadmapcard cardborder  my-md-5 my-2 overflow-hidden position-relative d-flex justify-content-center align-items-center flex-column">
                <h3 className='btngradient mb-0 ff-roboto text-center fs-24 lh-28 fw-normal'>Nov 2014</h3>
                <p className='pt-1 ff-roboto fs-24 lh-28 text-center fw-normal mb-0'>Launched Bitcoin Wallet</p>
                <div className="cardellipse"></div>
              </div>
           </div>
          <div className='d-flex ps-md-0 ps-3 justify-content-md-end ' data-aos="fade-left">
            <div className="roadmapcard cardborder my-md-5 my-2 overflow-hidden position-relative d-flex justify-content-center align-items-center flex-column">
              <h3 className='btngradient mb-0 ff-roboto fs-24 text-center lh-28 fw-normal'>Oct 2015</h3>
              <p className='pt-1 ff-roboto fs-24 lh-28 text-center fw-normal mb-0'>1st Prize By Bit Angels At Coin Agenda, <span className='d-md-block'></span> Las Vegas</p>
              <div className="cardellipse"></div>
            </div>
          </div>
           <div className='ps-md-0 ps-3' data-aos="fade-right">
             <div className="roadmapcard cardborder my-md-5 my-2 overflow-hidden position-relative d-flex justify-content-center align-items-center flex-column">
                <h3 className='btngradient mb-0 ff-roboto text-center fs-24 lh-28 fw-normal'>Jan 2020</h3>
                <p className='pt-1 ff-roboto fs-24 lh-28 text-center fw-normal mb-0'>launch On <span><img src={flag1} alt="1" /></span> <span><img src={flag2} alt="2" /></span> <span><img src={flag3} alt="" /></span></p>
                <div className="cardellipse"></div>
                       </div>
            </div>
             <div className='d-flex ps-md-0 ps-3 justify-content-md-end ' data-aos="fade-leftt">
            <div className="roadmapcard cardborder my-md-5 my-2 overflow-hidden position-relative d-flex justify-content-center align-items-center flex-column">
              <h3 className='btngradient mb-0 ff-roboto fs-24 text-center lh-28 fw-normal'>Jan 2022</h3>
              <p className='pt-1 ff-roboto fs-24 lh-28 pb-2 fw-normal text-center mb-0'>Trusted By 10 Millions+ Users</p>
              <Stars/>
              <div className="cardellipse"></div>
            </div>
            </div>
          </div>         
        </div>
      </div>

    </div>
  )
}

export default Roadmap
