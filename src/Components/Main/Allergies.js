import React, { Component } from "react";
import { css } from "emotion";
import Typography from "@material-ui/core/Typography";

import { Consumer } from "../../Context";

import egg from "./icon-egg.png";
import fish from "./icon-fish.png";
import gluten from "./icon-gluten.png";
import milk from "./icon-milk.png";
import mushrooms from "./icon-mushroom.png";
import nuts from "./icon-nuts.png";
import shellfish from "./icon-shellfish.png";

const Icons = {
  egg,
  fish,
  gluten,
  milk,
  mushrooms,
  nuts,
  shellfish
};

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
                marginBottom: "1em",
                marginTop: "1em",
                paddingBottom: ".5em",
                paddingTop: ".5em"
              })}
            >
              <strong
                className={css({ display: "block", marginBottom: "-1em" })}
              >
                Allergens:
              </strong>
              <br />
              {allergens.length
                ? allergens.map((allergen, index) => (
                    <span
                      key={allergen}
                      className={css({
                        display: "inline-block",
                        marginRight: ".75em"
                      })}
                    >
                      <img
                        src={Icons[allergen]}
                        alt={allergen}
                        className={css({ height: "auto", width: "1.5em" })}
                      />
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
