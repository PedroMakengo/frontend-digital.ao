import React from 'react';


import Inovacao from '../../assets/images/2.png';
import Centro from '../../assets/images/1.png';

import { Center } from './style.js';

const CenterDigital = () => {
  return (
    <Center>
      <div className="container">
        <a href="/">
          <img src={Inovacao} alt="" />
          <p>Dizer sobre a inovação da digital.ao 
          a inovação da digital.aoa inovação da digital.aoa inovação da
           digital.aoa
           inovação da digital.aoa inovação da digital.ao
          </p>
        </a>
        <a href="/">
          <img src={Centro} alt="" />
          <p>Dizer sobre a inovação da digital.ao 
          a inovação da digital.aoa inovação da digital.aoa inovação da
           digital.aoa
           inovação da digital.aoa inovação da digital.ao
          </p>
        </a>
      </div>
    </Center>
  )
}

export default CenterDigital;