import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Burger from "./Burger/";
import Shadow from "./Shadow/";

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
  const [active, setActive] = useState(false);

  const handlerBurger = (value: boolean) => {
    setActive(value);
  };

  return (
    <>
      <Shadow isActive={active} setIsActive={handlerBurger} />
      <HeaderWrapper>
        <Link href="/">
          <LogoLink>
            <LogoWrapper>
              <LogoContainer />
              <h1>CodePay</h1>
            </LogoWrapper>
          </LogoLink>
        </Link>

        <NavListStyle isActive={active}>
          {navigation.map(({ id, title, path: path }) => (
            <Link
              key={id}
              href={path}
              onClick={() => {
                handlerBurger(false);
              }}
            >
              <NavLinkStyle isActiveLink={checkPath(path, pathname)}>
                {title}
              </NavLinkStyle>
            </Link>
          ))}
        </NavListStyle>
        <Burger isActive={active} setIsActive={handlerBurger} />
      </HeaderWrapper>
    </>
  );
};

export default Header;
