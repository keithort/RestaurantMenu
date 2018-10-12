import React, { Component } from "react";
import { css } from "emotion";
import Typography from "@material-ui/core/Typography";

import { Consumer } from "../../Context";

export default class Allergies extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { allergy } = value;
          const allergens = Array.from(new Set(allergy.flat(1)));
          return (
            <Typography
              color="error"
              variant="body1"
              gutterBottom
              className={css({
                borderBottom: "1px solid red",
                borderTop: "1px solid red",
                paddingBottom: ".5em",
                paddingTop: ".5em"
              })}
            >
              <strong>Allergens:</strong>{" "}
              {allergens.length
                ? allergens.map((allergen, index) => (
                    <span
                      key={allergen}
                      className={css({
                        display: "inline-block",
                        marginRight: ".25em"
                      })}
                    >
                      {allergen}
                      {index + 1 !== allergens.length ? ", " : ""}
                    </span>
                  ))
                : null}
            </Typography>
          );
        }}
      </Consumer>
    );
  }
}
