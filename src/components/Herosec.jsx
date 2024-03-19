import React from 'react'
import heroicon from "../assets/images/heroicon.webp"

const Herosec = () => {
  return (
    <div className='d-flex justify-content-center position-relative flex-grow-1 align-items-center'>
          <div className="container">
              <h1 data-aos="fade-right" className='ff-roboto fw-bold mb-0 fs-72 lh-86 text-white text-center'>Changing the way games<span className='d-lg-block'> are made</span></h1>
              <p data-aos="fade-left" className='pt-2 text-white mb-0 fs-24 text-center fw-normal lh-28'>Redefining the future of play</p>
      </div>
      <img src={heroicon} alt="icon" className='heroicon' />
    </div>
  )
}

export default Herosec
