import React, { Component } from "react";
import { css } from "emotion";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
              <Grid container className={css({ marginBottom: "1em" })}>
                {value[this.state.id].map(item => {
                  const menuItem = menu[item];
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      className={css({ padding: ".5em" })}
                      key={menuItem.id}
                    >
                      <Card
                        className={css({
                          height: "100%"
                        })}
                      >
                        <CardMedia
                          image={menuItem.image}
                          title={menuItem.title}
                          className={css({
                            height: 0,
                            paddingTop: "56.25%"
                          })}
                        />
                        <CardHeader title={menuItem.title} />
                        <CardContent
                          className={css({ paddingTop: "0", height: "100%" })}
                        />
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </MuiThemeProvider>
          );
        }}
      </Consumer>
    );
  }
}
