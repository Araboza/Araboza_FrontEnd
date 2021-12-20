import styled from "styled-components";

export const MyWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  .userInfo {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    height: 20vh;
    grid-gap: 50px;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .major {
        margin: 10px 0;
      }
    }
    .edit {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        background-color: #000;
        color: #fff;
        border-radius: 30px;
        border: none;
        outline: none;
        padding: 5px 30px;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          background-color: #4e4b4b;
        }
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
