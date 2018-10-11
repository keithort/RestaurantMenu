import React, { Component } from "react";
import { css } from "emotion";

import Grid from "@material-ui/core/Grid";

import { Consumer } from "../../Context";

import Menus from "./Menus";
import Selections from "./Selections";
import Buttons from "./Buttons";
import { COURSES } from "../Utils/constants";

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

  handleButtonClick = nav => {
    const newStep = nav === "prev" ? this.state.step - 1 : this.state.step + 1;
    this.setState({
      step: newStep
    });
  };

  render() {
    if (this.state.step !== 6) {
      return (
        <Consumer>
          {value => {
            return (
              <main className={css({ padding: "1em" })}>
                <Menus step={this.state.step} />
                <Grid container justify="center">
                  <Grid item xs={6}>
                    <Buttons
                      color="default"
                      verb={`View ${COURSES[this.state.step - 1]}`}
                      align="left"
                      disabled={this.state.step === 0}
                      nav="prev"
                      handleClick={() => this.handleButtonClick("prev")}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Buttons
                      color="primary"
                      verb={`View ${COURSES[this.state.step + 1]}`}
                      align="right"
                      nav="next"
                      disabled={this.state.step === 5}
                      handleClick={() => this.handleButtonClick("next")}
                    />
                    <Buttons
                      color="primary"
                      verb={`View Selections`}
                      align="right"
                      nav="next"
                      disabled={this.state.step !== 5}
                      handleClick={() => this.handleButtonClick("next")}
                    />
                  </Grid>
                </Grid>
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
