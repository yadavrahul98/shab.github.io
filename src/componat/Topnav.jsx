import React from 'react'
import './Topnav.css';
import vis from './img/a.jpg';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'


export const Topnav = () => {
  return (
    <>
    <div className='navbar'>
      
      <img src={vis} alt="" className='pic' />

    {/* <div>
      ajay
    </div> */}
    <div className='rightmaincontainer' >
      <nav className='rightbox'>
        <Link to="/home"> Home</Link>
        <Link to="/about">About</Link>
        <Link  to="/project">Project</Link>
        <Link  to="/experience">Experience</Link>
        <Link  to="/contact">Contact</Link>
      </nav>
    </div>
    
    </div>
    
    </>
  

  )
}
export default Topnav 