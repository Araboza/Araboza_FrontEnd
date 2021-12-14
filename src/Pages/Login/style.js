import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .left {
    display: flex;
    flex-direction: column;

    h1 {
      padding: 20px 0;
      font-size: 2.3rem;
    }
    p {
      font-size: 1.3rem;
      margin-bottom: 40px;
    }
    button {
      width: 50%;
      background: #000000;
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      padding: 10px 0;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;

      .svg {
        background: #ffffff;
        color: #000000;
        border-radius: 100%;
        margin-right: 10px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-center: center;
      }
    }
  }
`;
