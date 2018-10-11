import React, { Component } from "react";
import { css } from "emotion";

import Grid from "@material-ui/core/Grid";

import Menus from "./Menus";
import Buttons from "./Buttons";

export default class Main extends Component {
  state = {
    step: 0,
    appetizer: "",
    soup: "",
    fish: "",
    salad: "",
    main: "",
    dessert: ""
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

  handleButtonClick = nav => {
    this.setState({
      step: nav === "prev" ? this.state.step - 1 : this.state.step + 1
    });
  };

  render() {
    return (
      <main className={css({ padding: "1em" })}>
        <Menus step={this.state.step} />
        <Grid container justify="center">
          <Grid item xs={6}>
            <Buttons
              color="default"
              verb="Previous Menu"
              align="left"
              disabled={this.state.step === 0}
              nav="prev"
              handleClick={() => this.handleButtonClick("prev")}
            />
          </Grid>
          <Grid item xs={6}>
            <Buttons
              color="primary"
              verb="Next Menu"
              align="right"
              nav="next"
              disabled={this.state.step === 5}
              handleClick={() => this.handleButtonClick("next")}
            />
          </Grid>
        </Grid>
      </main>
    );
  }
}
