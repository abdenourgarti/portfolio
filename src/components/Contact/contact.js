import React, { useRef } from 'react';
import './contact.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Contact = () => {
    const form = useRef();
    const sendEmail = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://formspree.io/f/xzzpvkkq', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(new FormData(form.current))),
          });
    
          if (response.ok) {
            e.target.reset();
            alert('Email Sent!');
          } else {
            alert('Failed to send email. Please try again.');
          }
        } catch (error) {
          console.error('Error sending email:', error);
          alert('Failed to send email. Please try again.');
        }
      };
    
  return (
    <section id='contact'>
      <h1 className='contactPageTitle'>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Your Name' name='from_name'/>
        <input type='email' className='email' placeholder='Your Email' name='your-email'/>
        <textarea className='msg' rows={5} placeholder='Your Message' name='message'/>
        <button type='submit' value='Send' className='submitBtn'>Submit</button>
        <div className='links'>
            <a href="https://www.linkedin.com/in/abdenour-garti-19177b192/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='link' />
            </a>
            <a href="https://github.com/abdenourgarti" target="_blank" rel="noopener noreferrer">
                <FaGithub className='link' />
            </a>
            <a href="https://x.com/GartiAbdenour" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='link' />
            </a>
        </div>
      </form>
    </section>
  )
}

export default Contact
