import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  background: rgb(123, 163, 210);
  background: linear-gradient(
    55deg,
    rgba(123, 163, 210, 1) 60%,
    rgba(174, 235, 238, 1) 100%
  );
  min-height: 90px;

  font-size: 18px;
  font-family: sans-serif;
  color: white;
`;

export const ImgStyled = styled.img`
  width: 70px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const NavListStyle = styled.ul`
  display: flex;
  column-gap: 30px;
`;

export const NavLinkActiveStyle = styled.a`
  text-decoration: none;
  color: #2965aa;
  cursor: pointer;
`;

export const NavLinkStyle = styled.a`
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #ffd5d5;
  }
`;
