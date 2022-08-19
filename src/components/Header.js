import React from 'react'
import logo from '../components/Images/logo.png'


const Header = () => {
  return (
    <div className="hero">
        <nav>
            <img src={logo} className='logo' alt='logo'/>
            <ul>
                <li><a href='/'>HOME</a></li>
                <li><a href='/about'>ABOUT</a></li>
                <li><a href='/skills'>SKILLS</a></li>
                <li><a href='/education'>EDUCATION</a></li>
                <li><a href='/experience'>EXPERIENCE</a></li>
            </ul>
            <img src='/images/moon.png' alt='moon' id='icon' />
        </nav>
    </div>
  )
}


export default Header
var icon = document.getElementById("icon");

