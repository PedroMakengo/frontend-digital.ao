import React from 'react';

import { HeaderStyle } from './style.js';

import {FaBars, FaSearch, FaShoppingCart, FaUserCircle} from 'react-icons/fa'


import Logo from '../../assets/images/logo.png';

const Header = () => {

  return (
    <HeaderStyle>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Digital.ao Logo" />
        </div>
        <nav className="menu">
          <a href="/">
            <FaUserCircle />
          </a>
          <a href="/">
            <FaSearch/>
          </a>
          <a href="/">
            <FaShoppingCart/>
          </a>
          <a href="/">
            <FaBars />
          </a>
        </nav>
      </div>
    </HeaderStyle>
  )
}

export default Header;