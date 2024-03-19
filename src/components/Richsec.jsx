import React from 'react'
import richimg from "../assets/images/richimg.webp"
import { Youtubeicon } from './Icons'

const Richsec = () => {
  return (
    <div className='py-5 position-relative overflow-x-clip z-2'>
          <div className="container pb-md-5 mb-sm-5">
              <h2 className='text-white text-center pb-sm-4 mb-0 ff-roboto fw-bold fs-52 lh-62'>A rich, inhabited, and licensable world.</h2>
              <div className=' position-relative'>
                  <img src={richimg} alt="rich" className='pt-3 max-h-740 object-fit-cover w-100' />
                  <div className='youtube'><Youtubeicon/></div>
              </div>
              <p className='pt-sm-4 pt-2 mb-0 text-lightwhite ff-roboto fw-normal fs-16 lh-24 text-center'> Illustrated With Original Artwork And A Cinematic Score, Destined Not Only For Mobile And Desktop Gaming But <span className='d-block'></span> Also For Film And Television, Events, Merchandising, And Partnerships.</p>
      </div>
      
          <div className='richellipse d-md-block d-none'></div>
    </div>
  )
}

export default Richsec
