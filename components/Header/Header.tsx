import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { routes } from "../../route-path";

import { Burger } from "./Burger/";
import { Shadow } from "./Shadow/";

import {
  HeaderWrapper,
  LogoContainer,
  LogoLink,
  LogoWrapper,
  NavLinkStyle,
  NavListStyle,
} from "./Header.style";

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

type TProps = {
  setScroll: (value: boolean) => void;
};

export const Header = ({ setScroll }: TProps) => {
  const { pathname } = useRouter();
  const [active, setActive] = useState(false);

  const handlerBurger = (value: boolean) => {
    setActive(value);
    setScroll(!value);
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
          {routes.map(({ id, title, path: path }) => (
            <Link key={id} href={path}>
              <NavLinkStyle
                onClick={() => {
                  handlerBurger(false);
                }}
                isActiveLink={checkPath(path, pathname)}
              >
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
