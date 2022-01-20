import styled from 'styled-components';


export const Center = styled.div`
  height: 70vh;
  background: #000;
  border-top: 5px solid yellow;

  .container {
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;

    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      flex-direction: column;
      width: 50%;
      background: red;
      margin-right: 3rem;
      text-decoration: none;
      background: none;

      img {
        width: 100%;
      }

      p {
        color: #fff;
      }
    }
  }
`;