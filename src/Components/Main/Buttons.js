import React from "react";
import { css } from "emotion";

import Button from "@material-ui/core/Button";

const Buttons = props => {
  return (
    <div
      className={css({
        textAlign: props.align,
        padding: "1em .5em",
        display: props.disabled ? "none" : "block"
      })}
    >
      <Button
        variant="contained"
        color={props.color}
        size="large"
        onClick={props.handleClick}
      >
        {props.verb}
      </Button>
    </div>
  );
};

export default Buttons;
