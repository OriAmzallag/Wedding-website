import React, {useEffect, useState} from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const NavBar = () => {

  const [sticky, setSticky] = useState(false); // navigation bar background effect

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[])


  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className = {`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu? '': 'hide-mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-240} duration={500}>Our Dream</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500}>Our Story</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-400} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-300} duration={500} className= 'btn dark-btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar
