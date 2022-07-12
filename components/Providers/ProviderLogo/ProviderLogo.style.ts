import styled from "styled-components";

export const LogoWrapper = styled.div<{ isAnimated?: boolean }>`
  width: 65px;
  height: 65px;

  user-select: none;
  transition: all 0.5s ease;

  &:hover {
    transform: ${(props) =>
      props.isAnimated ? "rotate(180deg)" : "rotate(0)"};
  }
`;

export const LogoStyle = styled.img`
  width: 100%;
  height: 100%;
`;
