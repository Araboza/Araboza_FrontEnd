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

  div {
    display: flex;
    img {
      width: 100%;
    }
  }

  svg {
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
  }
`;
