import React from 'react';

import { Empresa, RowEmpresa } from './style.js';

import LogoItel from '../../assets/images/logoItel.png';
import LogoGov from '../../assets/images/logo-angola.png';
import LogoInfosi from '../../assets/images/logo-infosi.png';
import LogoEllonet from '../../assets/images/logo-ellonet.png';
import LogoUnitel from '../../assets/images/logo-unitel.svg';
import LogoJornal from '../../assets/images/logo-jornal.png';

const Empresas = () => {
  return (
    <Empresa>
      <div className="container">
        <div className="title">
          <h1>Nossos Clientes</h1>
          <p>Apresentamos para si os nossos clientes</p>
        </div>
        <RowEmpresa className="row">
          <div>
            <img src={LogoGov} alt="" />
          </div>
          <div>
            <img src={LogoItel} alt="" />
          </div>
          <div>
            <img src={LogoInfosi} alt="" />
          </div>
          <div>
            <img src={LogoEllonet} alt="" />
          </div>
          <div>
            <img src={LogoUnitel} alt="" />
          </div>
          <div>
            <img src={LogoJornal} alt="" />
          </div>
        </RowEmpresa>
      </div>
    </Empresa>
  )
}

export default Empresas;