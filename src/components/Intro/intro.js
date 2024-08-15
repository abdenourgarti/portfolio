import React from 'react'
import './intro.css'
import bg from "../../images/image sans background 1.png"
import btnImg from "../../images/hireme.png"
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Abdenour</span> <br/> Full Stack Web Developer</span>
            <p className='introParag'>A 24-year-old software engineering graduate specializing in Full Stack Web Development</p>
            <Link><button className='btn'><img className='btnImg' src={btnImg} alt='hire me'/> Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
