import styled from "styled-components";

export const ProviderWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;

  width: 90%;
  height: 70px;
  
  margin: 10px 0;
  padding: 15px 10px;

  border-radius: 10px;
  border: 2px solid #2965aa;

  font-family: sans-serif;
  font-size: 22px;
  color: #ffffff;

  cursor: pointer;

  background-color: #4573a75b;

  &:hover {
    background-color: #4573a7;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 65px;
  height: 65px;
`;

export const LogoStyle = styled.img`
  width: 100%;
  height: 100%;
`;
