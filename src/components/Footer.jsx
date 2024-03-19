import React from 'react'
import footerlogo from "../assets/images/footerlogo.webp"
import { Facebook, Instagram, Linkdin, Twitter } from './Icons'

const Footer = () => {
  return (
    <div className='position-relative overflow-y-clip overflow-x-clip pt-sm-5'>
          <div className="container position-relative pt-5 z-3">
              <div className='d-flex pt-md-5  justify-content-center'>
                  <img src={footerlogo} alt="logo" />
              </div>
              <ul className='d-flex list-unstyled gap-sm-4 gap-3  pt-3 justify-content-center mb-0'>
                  <li><a href="#home" className='text-lightwhite navhover text-decoration-none ff-roboto fs-16 lh-18  fw-normal'>Home</a></li>
                                        <li><a href="#roadmap" className='text-lightwhite navhover text-decoration-none ff-roboto fs-16 lh-18  fw-normal'>Roadmap</a></li>
                      <li><a href="#team" className='text-lightwhite text-decoration-none navhover ff-roboto fs-16 lh-18  fw-normal'>Team</a></li>
                      <li><a href="#about" className='text-lightwhite text-decoration-none navhover ff-roboto fs-16 lh-18  fw-normal'>About Us</a></li>
              </ul>
              <div>
                  <div className='d-flex justify-content-center gap-sm-3 gap-2 pt-sm-4 pt-2'>
                      <a className='footericon' href="https://twitter.com/i/flow/login"><Twitter /></a>
                      <a className='footericon' href="https://www.facebook.com/login/"><Facebook /></a>
                      <a className='footericon' href="https://www.instagram.com/accounts/login/"><Instagram /></a>
                      <a className='footericon' href="https://www.linkedin.com/login"><Linkdin/></a>
                  </div>
              </div>
          </div>
          <div className="borderbottom"></div>
          <p className='text-lightwhite ff-roboto fs-14 mb-0 lh-16 fw-normal py-md-4 py-3 text-center'>© 2023 248 Labs. All rights reserved</p>
          <div className="footerrightellips"></div>
          <div className="footerleftellipse d-md-block d-none"></div>
    </div>
  )
}

export default Footer
