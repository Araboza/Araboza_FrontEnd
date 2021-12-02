import styled from "styled-components";

export const MainWrapper = styled.section`
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  .post {
    padding: 10px;

    img {
      width: 100%;
    }

    .description {
      display: flex;
      justify-content: space-around;

      span {
        padding: 0 1px;
      }

      .likes {
        display: flex;
        align-items: center;

        span {
          margin-right: 4px;
        }
      }
    }
  }
`;
