import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  width: 70vw;
  margin: 5% auto 0;

  .title {
    font-size: 3rem;
    margin: 10px 0;
  }

  .user {
    padding: 20px;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      .info {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
          display: flex;
          span,
          a {
            margin-right: 10px;
          }
          .edit,
          .delete,
          span {
            cursor: pointer;
          }
          .delete {
            color: #ff0000;
          }
        }
      }
    }

    .heart {
      display: flex;
      align-items: center;
      p {
        margin-right: 5px;
        font-weight: bold;
      }
    }
  }

  .view {
    h1 {
      border: none;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    max-width: 500px;
    margin-bottom: 10px;

    .tag {
      padding: 5px 10px;
      margin: 5px;
      background: #e2e2e2;
      border-radius: 50px;
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
