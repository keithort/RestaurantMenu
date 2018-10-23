import React from "react";
import { css } from "emotion";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { Consumer } from "../../Context";
import { COURSES_SHORT } from "../Utils/constants";

import appetizer from "./icon-appetizer.png";
import dessert from "./icon-dessert.png";
import fish from "./icon-fish2.png";
import main from "./icon-main.png";
import salad from "./icon-salad.png";
import soup from "./icon-soup.png";

const Icons = {
  appetizer,
  dessert,
  fish,
  main,
  salad,
  soup
};

const Progress = () => {
  return (
    <Consumer>
      {value => {
        const { step } = value;
        return (
          <Paper>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              className={css({ marginBottom: "2em", padding: "1em" })}
            >
              {COURSES_SHORT.map((course, index) => (
                <Grid
                  item
                  key={index}
                  className={css({
                    opacity: step === index ? "1.0" : ".4",
                    padding: "0 .5em",
                    textAlign: "center"
                  })}
                >
                  <img
                    src={Icons[course]}
                    alt=""
                    className={css({
                      height: "auto",
                      maxWidth: "4em",
                      width: "100%"
                    })}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        );
      }}
    </Consumer>
  );
};

export default Progress;
