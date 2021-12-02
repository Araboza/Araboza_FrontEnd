import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 10vh;

  .logo {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .menu {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .icons {
      display: flex;

      div {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #c4c4c4;
        border-radius: 100%;
        margin: 0 10px;
      }
    }
  }
`;
