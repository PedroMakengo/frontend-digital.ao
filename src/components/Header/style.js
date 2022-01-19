import styled from "styled-components";


export const HeaderStyle = styled.header`
  height: 15vh;
  background: #000;
  border-bottom: 4px solid red;

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
  }
`;