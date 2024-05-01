import React from 'react'
import '../styles/header.css'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import resume from '../assets/Rupam Chakraborty_Resume.pdf'

const Header = () => {
  return (
    <>
        <section id='header'>
            <div className="headerContent">
                <span className="hiThere">Hi there,</span>
                <span className="heroText">I am <span className="heroName">Rupam</span><br/>Full Stack Developer</span>
                <a href={resume} download='Rupam Chakraborty_Resume'><button className="heroBtn"><CloudDownloadIcon sx={{mr:1}}/>Download Resume</button></a>
            </div>
            {/* <img src={} alt="heroImg" className="heroBg" /> */}
        </section>
    </>
  )
}

export default Header