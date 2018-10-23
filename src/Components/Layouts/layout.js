import React from "react";
import { css } from "emotion";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={css({ maxWidth: "900px", margin: "0 auto" })}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
