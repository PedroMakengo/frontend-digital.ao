import React from 'react';

import { BannerStyle } from './style.js';

import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';


const Banner = () => {
  return (
    <BannerStyle>
      <div className="container">
        <div className="redes">
          <a href='face'>
            <FaFacebookF />
          </a>
          <a href='face'>
            <FaWhatsapp />
          </a>
          <a href="face">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="img"></div>
        <div className="content">
          <h1>Tudo começa com o registo de um domínio .ao</h1>
          <a href="/" className='criarConta'>Clica aqui para criar a tua conta</a>
        </div>
      </div>
    </BannerStyle>
  )
}

export default Banner;