import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/" className='menu-link'>Home</NavLink>
      <NavLink to="/about" className='menu-link'>About</NavLink>
      <NavLink to='/service' className='menu-link'>Service</NavLink>
      <NavLink to="/contact" className='menu-link'>Contact</NavLink>
    </div>
  )
}

export default Navbar