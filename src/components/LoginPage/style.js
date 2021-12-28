import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh;

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
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
