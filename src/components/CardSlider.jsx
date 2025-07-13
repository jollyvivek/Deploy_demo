import React from 'react'
import { cardslider } from '../assets/assets'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide:0,
    responsive:[
      {breakpoint:768,
        settings : {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,}
      },
      {breakpoint:576,
        settings : {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,}
      }
    ]
  };
  return (
    <div className=' w-3/4 m-auto'>
      <div className=''>
        <h3 className=' text-3xl text-center mb-10'>Card Items Slider</h3>
        <Slider {...settings}>
            {cardslider.map((item,index)=>{
                 return <div key={index} className=' bg-gray-500 text-black  h-[450px] rounded-xl overflow-hidden ml-3 '>
                        <div className=' h-56 rounded-t-xl bg-indigo-500 flex items-center justify-center w-full'>
                            <img className=' w-30 h-30 rounded-full cursor-pointer' src={item.img} alt="img" />
                        </div>                        
                        <h3 className=' text-center text-semibold'>{item.name}</h3>
                        <p className=' text-center'>{item.review}</p>
                        <div className=' flex items-center justify-center my-2 '>
                            <button className=' px-8 py-1 cursor-pointer rounded bg-black text-white hover:bg-blue-600'>READ MORE</button>
                        </div>
                        
                       </div>
            })}
          </Slider>
      </div>

    </div>
  )
}

export default CardSlider