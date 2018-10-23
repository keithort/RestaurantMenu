import React from "react";
import { css } from "emotion";

import Logo from "./logo.svg";

const Header = () => {
  return (
    <header>
      <h1 className={css({ padding: "0 1em" })}>
        <a href="https://amazeelabs.com">
          <img
            src={Logo}
            className={css({
              maxWidth: "5em",
              height: "auto",
              width: "100%"
            })}
            alt="Amazee Labs Cafe"
          />
        </a>
      </h1>
    </header>
  );
};

export default Header;
