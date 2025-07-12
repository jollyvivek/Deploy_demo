import React, { useState } from 'react'
import { slides } from '../assets/assets'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const Carousel = () => {
  const [current,setCurrent] = useState(null)

  const previousSlide = ()=>{
      if(current ===0) setCurrent(slides.length -1);
      else setCurrent(current - 1)
  }

  const nextSlide = ()=>{
    if(current ===slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }


  return (
    <div className=' overflow-hidden relative mt-2'>
      <div className=' flex transition ease-out duration-40 ' style={{transform:`translateX(-${current * 100}%)`}}>
          {slides.map((s,index)=>{
              return <img key={index} src={s} alt="image" className='w-[1000px]' />
          })}
      </div>
      <div className=' absolute top-0 w-full h-full justify-between items-center flex px-3'>
        <button onClick={previousSlide} className=' text-2xl cursor-pointer text-gray-500'><FaArrowCircleLeft/></button>
        <button onClick={nextSlide} className=' text-2xl cursor-pointer text-gray-500'><FaArrowCircleRight/></button>
      </div>
          <div className=' absolute bottom-0 py-4 flex items-center justify-center w-full  gap-5 '>
              {slides.map((s,index)=>{
                return <div onClick={()=> setCurrent(index)}
                 key={index} className={ `rounded-full w-5 h-5 cursor-pointer ${index == current ? 'bg-blue-500':"bg-green-500"} `}></div>
              })}
          </div>


    </div>
  )
}

export default Carousel