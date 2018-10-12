import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import { Consumer } from "../../Context";

import Buttons from "../Utils/Buttons";
import { COURSES } from "../Utils/constants";

export default class Navigation extends Component {
  handleButtonClick = (dispatch, nav) => {
    if (nav === "prev") {
      dispatch({
        type: "PREVIOUS_MENU"
      });
    } else {
      dispatch({
        type: "NEXT_MENU"
      });
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, step } = value;
          return (
            <div>
              <Grid container justify="center">
                <Grid item xs={6}>
                  <Buttons
                    color="default"
                    verb={`View ${COURSES[step - 1]}`}
                    align="left"
                    disabled={step === 0}
                    nav="prev"
                    handleClick={() => this.handleButtonClick(dispatch, "prev")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Buttons
                    color="primary"
                    verb={`View ${COURSES[step + 1]}`}
                    align="right"
                    nav="next"
                    disabled={step === 5}
                    handleClick={() => this.handleButtonClick(dispatch, "next")}
                  />
                  <Buttons
                    color="primary"
                    verb={`View Selections`}
                    align="right"
                    nav="next"
                    disabled={step !== 5}
                    handleClick={() => this.handleButtonClick(dispatch, "next")}
                  />
                </Grid>
              </Grid>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
