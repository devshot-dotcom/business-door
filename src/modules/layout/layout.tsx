import * as React from "react";
import { Footer, NextToNav, Sidebar } from "../../components";
import { SidebarProps } from "../../components/types";

type Props = {
  children?: React.ReactNode;
  sidebarProps?: SidebarProps;
};

const Layout = ({ children, sidebarProps }: Props) => (
  <>
    <NextToNav
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--theme-color-background)",
      }}
    >
      <div style={{ padding: "var(--layout-gap)" }} className="v-gap">
        {children}
      </div>
    </NextToNav>
    <Sidebar {...sidebarProps} />
    <Footer />
  </>
);

export default Layout;
