import React, { Component } from "react";
import { css } from "emotion";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className={css({
          textAlign: "center",
          fontSize: ".8em",
          margin: "2em 0"
        })}
      >
        &copy; 2018 Amazee Labs Cafe &bull; Developed by Keith Ort
      </footer>
    );
  }
}
