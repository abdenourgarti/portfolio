import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../images/logo.png"
import contactImg from "../../images/contact.png"
import menu from "../../images/menu.png"
import Close from "../../images/close.png"
import { Link } from 'react-scroll'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
          <Link activeClass='active' to='intro-section' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>About</Link>
          <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Experience</Link>
          <Link activeClass='active' to='education' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Education</Link>
          <Link activeClass='active' to='formation' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Formations</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
          <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <Link activeClass='activeBtn' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuBtn'>
            <img src={contactImg} alt='contact' className='desktopMenuImg'/>
            Contact Me
        </Link>
        <img src={showMenu ? Close : menu} alt='menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
          <Link activeClass='active' to='intro-section' spy={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='experience' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Experience</Link>
          <Link activeClass='active' to='education' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Education</Link>
          <Link activeClass='active' to='formation' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Formations</Link>
          <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='portfolio' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='contact' spy={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>

    </nav>
  )
}

export default Navbar
