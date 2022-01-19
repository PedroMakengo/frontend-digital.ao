import React from 'react';

import { BannerStyle } from './style.js';


const Banner = () => {
  return (
    <BannerStyle>
      <div className="container">
        <div className="redes">
          <a href='face'>W</a>
          <a href='face'>F</a>
          <a href="face">I</a>
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