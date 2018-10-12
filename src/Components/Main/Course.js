import React, { Component } from "react";
import { css } from "emotion";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { Consumer } from "../../Context";

import Spice from "./spice.jpg";
import { COURSES, COURSES_SHORT } from "../Utils/constants";

function typographyV1Theme() {
  return createMuiTheme({
    typography: {
      suppressDeprecationWarnings: true,
      useNextVariants: true
    }
  });
}

export default class Course extends Component {
  state = {
    selectedValues: []
  };

  handleClick = async (dispatch, id) => {
    if (this.state.selectedValues.includes(id)) {
      dispatch({
        type: "REMOVE_ITEM",
        payload: {
          course: COURSES_SHORT[this.props.step],
          id
        }
      });
      const selectedValues = [
        ...this.state.selectedValues.filter(item => item !== id)
      ];
      this.setState({
        selectedValues
      });
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          course: COURSES_SHORT[this.props.step],
          id
        }
      });
      const selectedValues = [...this.state.selectedValues, id];
      this.setState({
        selectedValues
      });
    }
  };

  renderAllergens = allergens =>
    allergens.length ? (
      <div className={css({ fontStyle: "italic" })}>
        Allergens:{" "}
        {allergens.map((allergen, index) => (
          <span key={index}>
            {allergen}
            {index + 1 !== allergens.length ? ", " : ""}
          </span>
        ))}
      </div>
    ) : null;

  renderSpiceLevel = spiceLevel => {
    let arr = [];
    for (let i = 0; i < spiceLevel; i++) {
      arr.push(i);
    }
    return spiceLevel ? (
      <div className={css({ fontStyle: "italic" })}>
        Spice Level:{" "}
        {arr.map((level, index) => (
          <img
            key={index}
            src={Spice}
            alt="Spice level"
            className={css({ height: "auto", width: "1em" })}
          />
        ))}
      </div>
    ) : null;
  };

  render() {
    const { course } = this.props;

    if (course) {
      return (
        <Consumer>
          {value => {
            const { dispatch } = value;
            return (
              <MuiThemeProvider theme={typographyV1Theme}>
                <Typography variant="h3" gutterBottom>
                  {COURSES[this.props.step]}
                </Typography>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="stretch"
                >
                  {course.map(item => (
                    <Grid
                      key={item.id}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      className={css({ padding: ".5em" })}
                    >
                      <CardActionArea
                        className={css({
                          height: "100%"
                        })}
                        onClick={() => this.handleClick(dispatch, item.id)}
                      >
                        <Card
                          raised={this.state.selectedValues.includes(item.id)}
                          className={css({
                            height: "100%"
                          })}
                        >
                          <CardMedia
                            image={item.image}
                            title={item.title}
                            className={css({
                              height: 0,
                              paddingTop: "56.25%"
                            })}
                          />
                          <CardHeader title={item.title} />
                          <CardContent
                            className={css({ paddingTop: "0", height: "100%" })}
                          >
                            <Typography variant="body1" gutterBottom>
                              {item.description}
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                              {this.renderAllergens(item.allergy)}
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                              {this.renderSpiceLevel(item.spiceLevel)}
                            </Typography>
                          </CardContent>
                        </Card>
                      </CardActionArea>
                    </Grid>
                  ))}
                </Grid>
              </MuiThemeProvider>
            );
          }}
        </Consumer>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
