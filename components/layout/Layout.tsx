import Footer from "./Footer";
import React, { Fragment } from "react";

type Children = {
  children: React.ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <Fragment>
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
