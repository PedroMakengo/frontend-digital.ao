import React from "react";

import { FooterStyle } from "./style.js";

import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="itemFooter">
          <img src={Logo} alt="Digital.ao" />
          <p>
            Dizer sobre a inovação da digital.ao a inovação da digital.aoa
            inovação da digital.aoa inovação da digital.aoa inovação da
            digital.aoa inovação da digital.ao
          </p>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
