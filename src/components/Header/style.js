import styled from "styled-components";


export const HeaderStyle = styled.header`
  height: 15vh;
  background: #000;
  border-bottom: 4px solid #FE0000;

  .container {
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 50%
    }

    nav a{
      margin-right: 3rem;
      text-decoration: none;
      color: #fff;

      svg {
        font-size: 1.2rem;
      }
    }
  }
`;