import Link from "next/link";
import { useRouter } from "next/router";
import {
  HeaderWrapper,
  ImgStyled,
  LogoWrapper,
  NavLinkActiveStyle,
  NavLinkStyle,
  NavListStyle,
} from "./Header.style";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Payment terminal", path: "/payment_terminal" },
];

const Header = () => {
  const { pathname } = useRouter();

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <ImgStyled src="logo3.svg" alt="Logo" />
        <h1>CodePay</h1>
      </LogoWrapper>

      <nav>
        <NavListStyle>
          {navigation.map(({ id, title, path }) => (
            <Link key={id} href={path}>
              {pathname === path ? (
                <NavLinkActiveStyle>{title}</NavLinkActiveStyle>
              ) : (
                <NavLinkStyle>{title}</NavLinkStyle>
              )}
            </Link>
          ))}
        </NavListStyle>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
