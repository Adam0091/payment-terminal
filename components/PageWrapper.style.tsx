import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-image: url("/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;

  @media screen and (max-height: 600px) {
    min-height: 800px;
  }
`;
