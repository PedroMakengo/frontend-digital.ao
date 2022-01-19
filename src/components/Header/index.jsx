import React from 'react';

import { HeaderStyle } from './style.js';


import Logo from '../../assets/images/logo.png';


const Header = () => {

  return (
    <HeaderStyle>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Digital.ao Logo" />
        </div>
        <nav className="menu">
          <a href="/">Home</a>
          <a href="/">Carrinho</a>
          <a href="/">Menu</a>
        </nav>
      </div>
    </HeaderStyle>
  )
}

export default Header;