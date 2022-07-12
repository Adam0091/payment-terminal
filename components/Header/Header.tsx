import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { routes } from "../../route-path";
import { checkPath } from "../../services/checkPath";

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
        <Link href={routes[0].path}>
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
