import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Service from './components/Service/Service'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>  
    </div>
  )
}

export default App