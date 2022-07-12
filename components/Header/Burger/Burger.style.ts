import styled from "styled-components";

export const BurgerContainer = styled.div<{ isActive: boolean }>`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: block;
    transition: all 0.5s;
    transform: ${({ isActive }) =>
      isActive ? "rotate(90deg)" : "rotate(0deg)"};
    z-index: 3;
  }
`;
