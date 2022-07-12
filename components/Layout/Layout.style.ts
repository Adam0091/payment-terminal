import styled from "styled-components";

export const PageStyle = styled.div<{ canScroll: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;

  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    overflow-y: ${({ canScroll }) => (canScroll ? "visible" : "hidden")};
    min-height: 800px;
  }
`;
