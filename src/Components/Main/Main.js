import React, { Component } from "react";
import { css } from "emotion";

import { Consumer } from "../../Context";

import Menus from "./Menus";
import Selections from "./Selections";
import Navigation from "../Navigation/Navigation";

export default class Main extends Component {
  state = {
    step: 0,
    appetizer: [],
    soup: [],
    fish: [],
    salad: [],
    main: [],
    dessert: []
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.state.step !== 6) {
      return (
        <Consumer>
          {value => {
            return (
              <main className={css({ padding: "1em" })}>
                <Menus step={this.state.step} />
                <Navigation step={this.state.step} />
              </main>
            );
          }}
        </Consumer>
      );
    } else {
      return (
        <Consumer>
          {value => {
            return (
              <main className={css({ padding: "1em" })}>
                <Selections choices={value} />
              </main>
            );
          }}
        </Consumer>
      );
    }
  }
}
