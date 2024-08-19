import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../images/logo.png"
import contactImg from "../../images/contact.png"
import menu from "../../images/menu.png"
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
          <Link activeClass='active' to='intro-section' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='about' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
          <Link activeClass='active' to='intro-section' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
          <Link activeClass='active' to='intro-section' spy={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
        </div>
        <Link activeClass='activeBtn' to='contact' spy={true} offset={-50} duration={500} className='desktopMenuBtn'>
            <img src={contactImg} alt='contact' className='desktopMenuImg'/>
            Contact Me
        </Link>
        <img src={menu} alt='menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
          <Link activeClass='active' to='intro-section' spy={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='intro-section' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='intro-section' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>

    </nav>
  )
}

export default Navbar
