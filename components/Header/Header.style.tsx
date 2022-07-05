import styled from "styled-components";
import {
  fontColor,
  fontColorHover,
  fontFamily,
  widthHeaderLogo,
  fontColorActive,
  fontSize,
} from "../../style_constants/index";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  min-height: 90px;

  font-size: ${fontSize};
  font-family: ${fontFamily};
  color: ${fontColor};

  background: rgb(123, 163, 210);
  background: linear-gradient(
    55deg,
    rgba(123, 163, 210, 1) 60%,
    rgba(174, 235, 238, 1) 100%
  );
`;
// Logo

export const LogoLink = styled.a`
  text-decoration: none;
  color: ${fontColor};

  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  user-select: none;
`;

export const LogoContainer = styled.div`
  width: ${widthHeaderLogo};
  height: ${widthHeaderLogo};

  background-image: url("/logo3.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: cover;
`;

// Navigation
export const NavListStyle = styled.nav`
  display: flex;
  column-gap: 30px;
`;

export const NavLinkStyle = styled.a<{ isActiveLink: boolean }>`
  text-decoration: none;
  color: ${({ isActiveLink }) => (isActiveLink ? fontColorActive : fontColor)};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ isActiveLink }) => (isActiveLink ? null : fontColorHover)};
  }
`;
