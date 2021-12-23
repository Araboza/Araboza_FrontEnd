import styled from "styled-components";

export const PopupWrapper = styled.div`
  position: absolute;
  width: 15vw;
  top: 110%;
  right: 0;
  background: #fff;
  padding: 10px 0 0;
  border: 1px solid #e5e5e5;
  z-index: 100;
  cursor: auto;

  .user {
    display: flex;
    justify-content: space-around;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .username {
        font-weight: bold;
      }

      .major {
        margin-top: 5px;
        font-size: 0.9rem;
        color: #6bb2b7;
      }
    }
  }

  hr {
    border: 1px solid #e5e5e5;
    margin-top: 10px;
  }

  .navigation section {
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
      width: 100%;
      height: 100%;
      margin-left: 5px;
    }

    &:hover {
      background: #f4f4f4;
    }
  }
`;

export const UserImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150%;
`;
