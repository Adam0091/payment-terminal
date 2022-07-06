import Link from "next/link";
import { useRouter } from "next/router";
import {
  HeaderWrapper,
  LogoContainer,
  LogoLink,
  LogoWrapper,
  NavLinkStyle,
  NavListStyle,
} from "./Header.style";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  {
    id: 2,
    title: "Payment terminal",
    path: "payment_terminal",
  },
];

const checkPath = (path: string, pathname: string): boolean => {
  const pathnameWithoutSleshes = path.replace(/\//g, "");
  if (
    pathname.includes(pathnameWithoutSleshes) &&
    pathnameWithoutSleshes !== ""
  )
    return true;
  else if (pathnameWithoutSleshes == "" && pathname === "/") return true;
  return false;
};

const Header = () => {
  const { pathname } = useRouter();

  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoLink>
          <LogoWrapper>
            <LogoContainer />
            <h1>CodePay</h1>
          </LogoWrapper>
        </LogoLink>
      </Link>

      <NavListStyle>
        {navigation.map(({ id, title, path: path }) => (
          <Link key={id} href={path}>
            <NavLinkStyle isActiveLink={checkPath(path, pathname)}>
              {title}
            </NavLinkStyle>
          </Link>
        ))}
      </NavListStyle>
    </HeaderWrapper>
  );
};

export default Header;
