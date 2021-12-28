import styled from "styled-components";

export const HeartWrapper = styled.span`
  svg {
    color: red;
    transition: 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
