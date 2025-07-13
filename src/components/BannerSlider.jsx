import React from 'react'
import { banner } from '../assets/assets'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    fade:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className=' w-[70%] h-auto mx-auto '>
        <h1 className=' text-3xl font-semibold text-center mb-3 '>Banner Slider</h1>
        <Slider {...settings}>
          {banner.map((item,index)=>(
              <div key={index}>
                <img className=' mx-auto' src={item.img} alt="" />
              </div>
          ))}
        </Slider>



    </div>
  )
}

export default BannerSlider