import * as React from "react";
import Header from "./../Header/";
import { PageStyle } from "./Layout.style";

export interface StandardComponentProps {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: StandardComponentProps) => (
  <>
    <PageStyle>
      <Header />
      {children}
    </PageStyle>
  </>
);
export default Layout;
