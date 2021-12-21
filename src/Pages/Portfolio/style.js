import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  width: 70vw;
  margin: 5% auto 0;

  .title {
    font-size: 3rem;
    margin: 10px 0;
  }

  .user {
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    padding: 20px;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .heart {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin-right: 5px;
      font-weight: bold;
    }
  }

  .view {
    h1 {
      border: none;
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
