import styled from "styled-components";

export const PostWrapper = styled.div`
  padding: 10px;
  transition: all 0.2s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
  }

  .title {
    text-align: center;
    margin: 5px 0;
  }

  .description {
    display: flex;
    justify-content: space-around;

    span {
      padding: 0 1px;
    }

    .user span {
      font-size: 0.8rem;
    }

    svg {
      color: red;
      transition: 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
