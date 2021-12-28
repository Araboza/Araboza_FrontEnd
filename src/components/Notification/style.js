import styled from "styled-components";

export const NotificationWrapper = styled.div`
  width: 30vw;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(-80%);
  background: #ffffff;
  padding: 5px;
  z-index: 100;
  max-width: 300px;
  border: 1px solid #e5e5e5;

  hr {
    border: 1px solid #000000;
    border-radius: 10px;
    margin: 5px 0;
  }

  .notice {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    max-height: 100px;

    & > div {
      grid-row: -3/-1;
      grid-column: 2/3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 50%;
    }
  }
`;
