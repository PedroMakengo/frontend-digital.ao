import React from 'react';

import { Empresa, RowEmpresa } from './style.js';

const Empresas = () => {
  return (
    <Empresa>
      <div className="container">
        <div class="title">
          <h1>Nossos Clientes</h1>
          <p>Apresentamos para si os nossos clientes</p>
        </div>
        <RowEmpresa className="row">
          <div>
            <h1>Testando</h1>
          </div>
          <div>
            <h1>Testando</h1>
          </div>
          <div>
            <h1>Testando</h1>
          </div>
          <div>
            <h1>Testando</h1>
          </div>
          <div>
            <h1>Testando</h1>
          </div>
          <div>
            <h1>Testando</h1>
          </div>
        </RowEmpresa>
      </div>
    </Empresa>
  )
}

export default Empresas;