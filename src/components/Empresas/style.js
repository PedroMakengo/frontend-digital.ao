import styled from "styled-components";


export const Empresa = styled.div`
  background: #000;
  color: #fff;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    color: #fff;

    .title {
      padding: 40px 0;
      text-align: center;

      h1 {
        font-size: 3rem;
        line-height: 10px;
      }
    }
  }
`;

export const RowEmpresa = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 60px;

  div {
    margin-top: 1rem;
    width: 30%;
    height: 250px;
    background: #ffffff09;

    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 70%;
    }
  }
`;