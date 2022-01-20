import styled from "styled-components";

import Item1 from '../../assets/images/3.png';
import Item2 from '../../assets/images/4.png';
import Item3 from '../../assets/images/5.png';

export const ServicoContent = styled.div `
  height: 85vh;
  background: #fff;


  .container {
    max-width: 1100px;
    margin: 0 auto;

    .title {
      padding: 20px 0;
      text-align: center;

      h1 {
        font-size: 3rem;
        line-height: 10px;
      }
      p {
        color: #000;
      }
    }
  }
`;


export const RowServico = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  .item {
    width: 50%;
    height: 55vh;
    margin-right: 1rem;
    color: #fff;

    display: flex;
    align-items: flex-end;
    padding: 0 20px;
    border-radius: 0.25rem;

    text-decoration: none;

    h2 {
      height: 120px;
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  .item-1 {
    background: linear-gradient(#00000011, #000) ,url(${Item1});
  }
  .item-2 {
    background: linear-gradient(#00000011, #000) ,url(${Item2});
  }
  .item-3 {
    background: linear-gradient(#00000011, #000) ,url(${Item3});
  }
`;