import React, { Component } from "react";
import { css } from "emotion";

import { Consumer } from "../../Context";

import Menus from "./Menus";
import Selections from "./Selections";
import Navigation from "../Navigation/Navigation";

export default class Main extends Component {
  renderMenu = step => (
    <div>
      <Menus step={step} />
      <Navigation step={step} />
    </div>
  );

  renderSelections = value => (
    <div>
      <Selections choices={value} />
    </div>
  );

  render() {
    return (
      <Consumer>
        {value => {
          const { step } = value;
          return (
            <main className={css({ padding: "1em" })}>
              {step !== 6
                ? this.renderMenu(step)
                : this.renderSelections(value)}
            </main>
          );
        }}
      </Consumer>
    );
  }
}
