import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 10vh;
  margin-bottom: 50px;

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

      .icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        margin: 0 10px;
        color: #000000;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          background-color: #dbd5d5ff;
        }
      }
      .notification {
        position: relative;
        width: 50px;
        height: 50px;
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          width: 100%;
          height: 100%;
          margin: 0;
        }
      }

      .my {
        position: relative;
      }
    }
  }
`;

export const UserImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150%;
`;
