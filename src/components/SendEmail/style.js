import styled from "styled-components";

export const SendContainer = styled.div`
  height: 50vh;

  .container {
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      text-align: center;

      h1 {
        font-size: 3rem;
        line-height: 10px;
      }
    }

    form {
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        width: 60%;
        padding: 22px ;
        margin-bottom: 1rem;
        border-radius: 0.25rem;

        ::placeholder {
          font-size: 1.2rem;
          font-family: Poppins;
        }
      }
      
      button {
        width: 20%;
        padding: 22px;
        font-family: Poppins;
        font-size: 1rem;

        background: #000;
        color: #fff;

        border-radius: 0.25rem;
      }
    }
  }
`;