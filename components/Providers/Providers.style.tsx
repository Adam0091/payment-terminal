import styled from "styled-components";
import { fontColor, fontFamily } from "../../style_constants";

export const Wrapper = styled.div<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => (height ? height : "70%")};
  max-width: 400px;

  padding: 20px 15px 40px 15px;
  margin: 0 40px;
  border-radius: 10px;

  background: rgb(123, 163, 210);
  background: linear-gradient(
    55deg,
    rgba(123, 163, 210, 1) 60%,
    rgba(174, 235, 238, 1) 100%
  );
`;

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  padding-right: 10px;
  max-height: 80%;
  overflow-x: hidden;
  overflow-y: auto;

  border: 1px solid white;
  border-radius: 10px;
  background-color: #ffffff31;

  padding: 20px 10px;

  font-family: ${fontFamily};
  color: ${fontColor};

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
