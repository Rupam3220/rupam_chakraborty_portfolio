import React, { useState } from 'react'
import '../styles/navbar.css'
import logo from '../assets/rcnavlogo.png'
import { Link } from 'react-scroll'
import menu from '../assets/ham.png'


const Navbar = () => {

  // Adding hook for disappear menu for mobile
  const[showMenu, setShowMenu] = useState(false)


  return (
    <>
        <nav className="navbar">
            <img src={logo} alt='Navbar Logo' className='navLogo'/>
            <div className="navMenu">
                <Link activeClass='active' to='header' spy={true} smooth={true} offset={-100} duration={500} className="navMenuList">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="navMenuList">Skills</Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} className="navMenuList">Portfolio</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="navMenuList">Experience</Link>
            </div>
            <button className="navContactBtn" onClick={() => {document.getElementById('contact').scrollIntoView({behavior:'smooth'}) }}>
                Connect with me
            </button>

            {/* Burger Menu for small screen */}
            <img src={menu} alt='menu' className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
            <div className="mobNavMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' to='header' spy={true} smooth={true} offset={-100} duration={500} className="mobMenuList" onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="mobMenuList" onClick={()=> setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} className="mobMenuList" onClick={()=> setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-50} duration={500} className="mobMenuList" onClick={()=> setShowMenu(false)}>Experience</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="mobMenuList" onClick={()=> setShowMenu(false)}>Contact</Link>
            </div>


        </nav>
    </>
  )
}

export default Navbar