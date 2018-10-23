import React from "react";

import Grid from "@material-ui/core/Grid";

import { Consumer } from "../../Context";

import Buttons from "../Utils/Buttons";
import { COURSES, MAX_STEPS, REQUIRED_COURSE } from "../Utils/constants";

const Navigation = () => {
  const handleButtonClick = (dispatch, nav) => {
    if (nav === "prev") {
      dispatch({
        type: "PREVIOUS_MENU"
      });
    } else {
      dispatch({
        type: "NEXT_MENU"
      });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Consumer>
      {value => {
        const { dispatch, step, main } = value;
        return (
          <div>
            <Grid container justify="center">
              <Grid item xs={6}>
                <Buttons
                  color="default"
                  verb={`View ${COURSES[step - 1]}`}
                  align="left"
                  disabled={step === 0}
                  handleClick={() => handleButtonClick(dispatch, "prev")}
                />
              </Grid>
              <Grid item xs={6}>
                <Buttons
                  color="primary"
                  verb={`View ${COURSES[step + 1]}`}
                  align="right"
                  disabled={
                    step === MAX_STEPS ||
                    (step === REQUIRED_COURSE && main.length === 0)
                  }
                  handleClick={() => handleButtonClick(dispatch, "next")}
                />
                <Buttons
                  color="primary"
                  verb={`View Selections`}
                  align="right"
                  disabled={step !== MAX_STEPS}
                  handleClick={() => handleButtonClick(dispatch, "next")}
                />
              </Grid>
            </Grid>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Navigation;
