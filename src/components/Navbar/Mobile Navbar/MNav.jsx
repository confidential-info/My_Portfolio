import React from 'react';
import "./MNav.css";

function MNav({isOpen, toggleMenu}) 
{
  return (
    <div>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
            <p className="logo">Portfolio</p>
            <ul>
                <li><a className="menu-item">Home</a></li>
                <li><a className="menu-item">Skills</a></li>
                <li><a className="menu-item">Projects</a></li>
                <li><a className="menu-item">Contact Me</a></li>
                <button className="contact-btn" onClick={() => {}}>Hire Me</button>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default MNav;
