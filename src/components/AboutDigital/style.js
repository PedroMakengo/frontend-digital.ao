import styled from "styled-components";

import Fundo from '../../assets/images/fundo.png';

export const SectionAbout = styled.div`
  background: url(${Fundo});
  background-color: #fff;
  background-size: 35%;
  background-position-x: 800px;
  background-position-y: 30px;
  background-repeat: no-repeat;
  height: 70vh;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px 0;

    color: #000;

    h1 {
      font-size: 3rem;
    }
    p {
      width: 500px;
      font-size: 1.3rem;
    }
  }
`;