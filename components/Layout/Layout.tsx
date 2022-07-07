import * as React from "react";

import { PageStyle } from "./Layout.style";
import { Header } from "./../Header/Header";

export interface StandardComponentProps {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: StandardComponentProps) => {
  const [scroll, setScroll] = React.useState(true);
  console.log(scroll);

  return (
    <>
      <PageStyle canScroll={scroll}>
        <Header setScroll={(canScroll: boolean) => setScroll(canScroll)} />
        {children}
      </PageStyle>
    </>
  );
};
