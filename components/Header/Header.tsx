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
  { id: 1, title: "Home", paths: ["/home", "/"] },
  {
    id: 2,
    title: "Payment terminal",
    paths: ["/payment_terminal", "/payment_terminal/add_provider"],
  },
];

const checkPath = (paths: Array<string>, pathname: string): boolean => {
  for (const path of paths) {
    if (path === pathname) return true;
  }
  if (pathname.includes(paths[0])) return true;
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
        {navigation.map(({ id, title, paths }) => (
          <Link key={id} href={paths[0]}>
            <NavLinkStyle isActiveLink={checkPath(paths, pathname)}>
              {title}
            </NavLinkStyle>
          </Link>
        ))}
      </NavListStyle>
    </HeaderWrapper>
  );
};

export default Header;
