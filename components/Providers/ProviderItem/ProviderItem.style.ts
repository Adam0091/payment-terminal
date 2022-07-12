import styled from "styled-components";

export const ProviderWrapper = styled.div`
  width: 90%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 40px;

  padding: 15px 10px;

  border-radius: 10px;
  border: 2px solid #2965aa;

  font-family: sans-serif;
  font-size: 22px;
  color: #ffffff;

  cursor: pointer;

  background-color: #4573a75b;
  transition: all 0.5s ease;

  &:hover {
    background-color: #4573a7;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    row-gap: 30px;
  }
`;
