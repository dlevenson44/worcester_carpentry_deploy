import React from 'react'
import Logo from './imgs/logo.jpg'

const Header = () => {
    return(
        <div className="header-container">
        <img className="header-img" src={Logo} />
        <div className="header-subcont">
        <ul className="header-list">
            <li><a href="tel:508-523-6797">508-523-6797</a></li>
            <li>Worcester County and the surrounding areas</li>
            <li>Need masonry work done?  <a href="http://worcesterchimneys.com/" target="_blank">Click here!</a></li>
        </ul>
        </div>
        </div>
    )
}

export default Header;

