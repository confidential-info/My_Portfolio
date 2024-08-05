import React from 'react';
import "./Navbar.css";

function Navbar() 
{
  return (
    <div>
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
                <button class="menu-btn" onClick={() => {}}>
                    <span class={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}></span>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;