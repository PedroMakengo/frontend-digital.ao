import React from "react";

import {ServicoContent, RowServico} from './style.js';

const Servicos = () => {
  return (
    <ServicoContent>
      <div className="container">
        <div className="title">
          <h1>Os principais Serviços</h1>
          <p>Peça-nos apoio nos principais serviços</p>
        </div>
        <RowServico>
          <a href="/" className="item item-1">
            <h2>Registo Assistido de Domínios, Alojamento e Email</h2>
          </a>
          <a href="/" className="item item-2">
            <h2>Apoio na Criação de Páginas na Internet</h2>
          </a>
          <a href="/" className="item item-3">
            <h2>Fornecimento de soluções à Medida</h2>
          </a>
        </RowServico>
      </div>
    </ServicoContent>
  )
}

export default Servicos;