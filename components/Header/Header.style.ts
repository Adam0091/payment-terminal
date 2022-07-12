import styled from "styled-components";
import {
  fontColor,
  fontColorHover,
  fontFamily,
  widthHeaderLogo,
  fontColorActive,
  fontSize,
  fontSizeSmall,
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

  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
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

  @media screen and (max-width: 767px) {
    font-size: ${fontSizeSmall};
  }
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
export const NavListStyle = styled.nav<{ isActive: boolean }>`
  display: flex;
  column-gap: 30px;

  @media screen and (max-width: 767px) {
    width: ${({ isActive }) => (isActive ? "320px" : "0")};
    height: 100%;

    position: absolute;
    top: 0;
    right: 0;

    padding-top: 120px;

    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    background: rgb(123, 163, 210);
    background: linear-gradient(
      45deg,
      rgba(123, 163, 210, 1) 60%,
      rgba(174, 235, 238, 1) 100%
    );
    overflow: hidden;
    transition: all 0.5s;
    z-index: 3;

    font-size: 22px;
  }
`;

export const NavLinkStyle = styled.a<{ isActiveLink: boolean }>`
  text-decoration: none;
  color: ${({ isActiveLink }) => (isActiveLink ? fontColorActive : fontColor)};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ isActiveLink }) => (isActiveLink ? null : fontColorHover)};
  }

  @media screen and (max-width: 767px) {
    display: block;
    padding: 10px 0;
    white-space: nowrap;
  }
`;
