import styled from "styled-components";

import DigitalCentral from '../../assets/images/art-1.png';


export const BannerStyle = styled.section`
  height: 80vh; 
  background: url(${DigitalCentral});
  background-size: 42%;
  background-position: center;
  background-repeat: no-repeat;
  background-position-x: 20px;
  border-top: 2px solid #FFFF00;
  background-color: #000;
  color: #fff;

  .container {
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;


    .redes {
      width: 10%;
      position: relative;
      float: left;
      left: -110px;

      display: flex;
      flex-direction: column;

      a {
        width: 30px;
        height: 20px;
        background: #FFFF00;
        padding: 10px;
        margin-bottom: 0.70rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 0.25rem;

        color: #000;
        font-weight: bold;
        text-decoration: none;

        svg {
          font-size: 1.4rem;
        }
      }
    }

    .content {
      width: 50%;
      h1 {
        font-size: 3.5rem;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        background: #FFFF00;

        width: 310px;
        height: 70px;

        border-radius: 0.25rem;
        text-decoration: none;

        color: #000;
      }
    }
  
  }
`;