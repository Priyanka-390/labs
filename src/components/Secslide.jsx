import React from 'react'
import img1 from "../assets/images/img1.webp"
import img2 from "../assets/images/img2.webp"
import img3 from "../assets/images/img3.webp"
import img4 from "../assets/images/img4.webp"
import img5 from "../assets/images/img5.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Secslide = () => {
   var settings = {
    dots: false,
    infinite: true,
     speed: 1000,
    slidesToShow: 5,
     slidesToScroll: 1,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 0,
     cssEase: 'linear',
     variableWidth: true,
     pauseOnFocus: false,
     pauseOnHover:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 0,
          speed: 4000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 0,
          speed: 4000,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 0,
          speed: 4000,
        },
      },
    ],
  };
  return (
    <div className='py-sm-3'>
          <div className="container mt-3 py-5">
             
                <Slider {...settings}>
                  <div className='h-74 slideimg d-flex pe-5 align-items-end'><img src={img1} alt="1" /></div>
                  <div className='pe-5 slideimg'><img src={img2} alt="2" /></div>
                  <div className='pe-5 slideimg'><img src={img3} alt="3" /></div>
                  <div  className='h-74 slideimg pe-5 d-flex align-items-end' ><img src={img4} alt="4" /></div>
                  <div className='pe-5 slideimg'><img src={img5} alt="5" /></div>
                </Slider>
             
      </div>
    </div>
  )
}

export default Secslide
