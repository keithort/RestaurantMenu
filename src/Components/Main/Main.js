import React, { Component } from "react";
import { css } from "emotion";

import { Consumer } from "../../Context";

import Progress from "./Progress";
import Menus from "./Menus";
import Selections from "./Selections";
import Navigation from "../Navigation/Navigation";

export default class Main extends Component {
  renderMenu = () => (
    <div>
      <Progress />
      <Menus />
      <Navigation />
    </div>
  );

  renderSelections = () => (
    <div>
      <Selections />
    </div>
  );

  render() {
    return (
      <Consumer>
        {value => {
          const { step } = value;
          return (
            <main className={css({ padding: "1em" })}>
              {step !== 6 ? this.renderMenu() : this.renderSelections()}
            </main>
          );
        }}
      </Consumer>
    );
  }
}
