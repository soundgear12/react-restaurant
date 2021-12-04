import React, { useState } from "react";
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';

function NavBar() {

    const[nav, setnav] = useState(false);

    const changeBackGround = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackGround);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt='' />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className="nav-icon"></span> 
            </label>
            <ul className='menu'>
                <li><Link to="main" smooth={true} duration={2000}>Header</Link></li>
                <li><Link to="products" smooth={true} duration={2000}>Products</Link></li>
                <li><Link to="about" smooth={true} duration={2000}>About</Link></li>
                <li><Link to="contact" smooth={true} duration={2000}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;