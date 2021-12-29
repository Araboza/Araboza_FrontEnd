import styled from "styled-components";

export const MainWrapper = styled.section`
  margin: 0 auto 20px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media ${"(max-width: 1600px)"} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${"(max-width: 1350px)"} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${"(max-width: 900px)"} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${"(max-width: 720px)"} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
