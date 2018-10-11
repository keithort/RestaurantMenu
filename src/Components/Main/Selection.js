import React, { Component } from "react";
import { css } from "emotion";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { Consumer } from "../../Context";

function typographyV1Theme(theme) {
  return createMuiTheme({
    ...theme,
    typography: {
      suppressDeprecationWarnings: true,
      useNextVariants: true
    }
  });
}

export default class Selection extends Component {
  state = {
    id: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { id } = nextProps;
    if (id) {
      return {
        id
      };
    }
    return null;
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { menu } = value;
          return (
            <MuiThemeProvider theme={typographyV1Theme}>
              {value[this.state.id].map(item => {
                const menuItem = menu[item];
                return (
                  <Grid item xs={12} className={css({ marginBottom: "1em" })}>
                    <Paper>
                      <Grid container>
                        <Grid xs={2} className={css({ lineHeight: "0" })}>
                          <img
                            src={menuItem.image}
                            alt={menuItem.title}
                            className={css({
                              height: "auto",
                              width: "100%"
                            })}
                          />
                        </Grid>
                        <Grid
                          xs={10}
                          className={css({
                            paddingLeft: "1em",
                            paddingRight: "1em"
                          })}
                        >
                          <Typography
                            variant="h5"
                            gutterBottom
                            className={css({ marginTop: "1em" })}
                          >
                            {menuItem.title}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                );
              })}
            </MuiThemeProvider>
          );
        }}
      </Consumer>
    );
  }
}
