import styled from "styled-components";

export const ChooseProviderWrapper = styled.div`
  width: 100%;
  height: 70%;
  max-width: 400px;

  padding: 40px;
  margin: 0 40px;
  border-radius: 10px;

  background: rgb(123, 163, 210);
  background: linear-gradient(
    55deg,
    rgba(123, 163, 210, 1) 60%,
    rgba(174, 235, 238, 1) 100%
  );
`;

export const ChooseProviderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  margin-top: 20px;
  padding-right: 10px;
  max-height: 90%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
    padding-left: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(123, 163, 210);
    background: linear-gradient(55deg, #3982d5 60%, #66e1e8 100%);
    border-radius: 5px;
    border: 1px solid #ffffff;
  }
`;

export const TitleStyle = styled.h2`
  font-family: sans-serif;
  font-size: 28px;
  color: white;
`;
