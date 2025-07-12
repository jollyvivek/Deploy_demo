import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [visible,setVisible] = useState(false)

    useEffect(()=>{
        if (visible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return ()=>{document.body.style.overflow = 'auto'}
    },[visible]);

  return (
    <div className=" flex items-center justify-between py-5">
      <img className=" w-36 cursor-pointer" src={assets.logo} alt="logo" />
      <ul className=" hidden sm:flex gap-5 text-[16px] text-gray-500 ">
        <NavLink to={'/'} className=" flex flex-col  items-center gap-1">
            <p>HOME</p>
            <hr className=" w-4/4 border-none h-[1.5px] bg-blue-700 hidden" />
        </NavLink>
        <NavLink to={'/about'}>
            <p>ABOUT</p>
            <hr className=" w-4/4 border-none h-[1.5px] bg-blue-700 hidden"/>
        </NavLink>
        <NavLink to={'/service'}>
            <p>SERVICE</p>
            <hr className=" w-4/4 border-none h-[1.5px] bg-blue-700 hidden"/>
        </NavLink>
        <NavLink to={'/contact'}>
            <p>CONTACT</p>
            <hr className=" w-4/4 border-none h-[1.5px] bg-blue-700 hidden"/>
        </NavLink>
      </ul>
      <img onClick={()=>setVisible(true)} className=" w-5 cursor-pointer sm:hidden" src={assets.menu_icon} alt="menu" />
      {/* Sidebar menu for mobile menu  */}
      <div className={` absolute bg-white transition-all md:hidden right-0 top-0 bottom-0 overflow-hidden ${visible ?'fixed w-full' :'h-0 w-0 '}`} id='mobileMenu' >
            <div className=" flex flex-col text-gray-600 ">
                <div onClick={()=>setVisible(false)} className=" flex items-center gap-4 p-3 cursor-pointer" >
                    <img src={assets.dropdown_icon} className=" h-4 rotate-180" alt="" />
                    <p>Back</p>
                </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-b-[0.5px]' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-b-[0.5px]' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-b-[0.5px]' to='/service'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border-b-[0.5px]' to='/contact'>CONTACT</NavLink>
            </div>
      </div>

    </div>
  );
};

export default Navbar;
