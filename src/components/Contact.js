import React, { useRef } from 'react'
import '../styles/contact.css'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import emailjs from '@emailjs/browser';
import { BrowserRouter, Link } from 'react-router-dom';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('messsageID', 'templateID', form.current, 'publicKey')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert('Email sent successfully!')
        }, (error) => {
          console.log(error.text);
        });
  };

  return (
    <>
      <section id="section">
        <div id="contact">
          <h1 className="contactTitle">Contact Me</h1>
          <form ref={form} onSubmit={sendEmail} className="contactForm">
            <input type='text' className='name' placeholder='Enter your full name' name='from_name'/>
            <input type='email' className='email' placeholder='Enter your email' name='from_email'/>
            <textarea className='message' name='message' rows="5" placeholder='Write your message here...'/>
            <button type='submit' value='send' className="submitbtn">Send</button>

            <div className="links">
              <BrowserRouter>
                <Link to="https://www.linkedin.com/in/rupam-chakraborty-345258196/" target='_blank'>
                  <img src={linkedin} alt='linkedin' className='link'/>
                </Link>
                <Link to="https://github.com/Rupam3220" target='_blank'>
                  <img src={github} alt='github' className='link'/>
                </Link>
              </BrowserRouter>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact