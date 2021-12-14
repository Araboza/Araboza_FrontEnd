import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh;

  .left {
    display: flex;
    flex-direction: column;

    & > div {
      margin: 0 auto;
    }

    h1 {
      padding: 20px 0;
      font-size: 2.3rem;
    }

    p {
      font-size: 1.3rem;
      margin-bottom: 40px;
    }

    button {
      width: 70%;
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

  .right {
    grid-column: 2 / -1;
    background: url(/PNG/LoginImg.png);
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
