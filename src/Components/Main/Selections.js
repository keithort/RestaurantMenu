import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Consumer } from "../../Context";
import { COURSES, COURSES_SHORT } from "../Utils/constants";
import Selection from "./Selection";

export default class Selections extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <Typography variant="h3" gutterBottom>
                Your Selections
              </Typography>
              {COURSES_SHORT.map((course, index) => (
                <div key={course}>
                  <Typography variant="h4" gutterBottom>
                    {COURSES[index]}
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <Selection id={course} />
                  </Grid>
                </div>
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
