import React, { Component } from "react";
import { css } from "emotion";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default class Layout extends Component {
  render() {
    return (
      <div className={css({ maxWidth: "900px", margin: "0 auto" })}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
