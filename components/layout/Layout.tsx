import React, { Fragment } from "react";
import Footer from "./Footer";

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
