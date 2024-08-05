import React, { useState } from 'react';

//CSS import
import "./Navbar.css";
import MNav from './Mobile Navbar/MNav';

function Navbar() 
{
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };
  return (
    <div>
        <MNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className="nav-wrapper">
            <div className="nav-content">
                <p className="logo">Portfolio</p>
                <ul>
                    <li><a className="menu-item">Home</a></li>
                    <li><a className="menu-item">Skills</a></li>
                    <li><a className="menu-item">Projects</a></li>
                    <li><a className="menu-item">Contact Me</a></li>
                    <button className="contact-btn" onClick={() => {}}>Hire Me</button>
                </ul>
                <button class="menu-btn" onClick={toggleMenu}>
                    <span class={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                        {openMenu ? "c" : "m"}
                    </span>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;