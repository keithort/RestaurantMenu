import React from "react";
import { css } from "emotion";

import { Consumer } from "../../Context";

import Progress from "./Progress";
import Menus from "./Menus";
import Selections from "./Selections";
import Navigation from "../Navigation/Navigation";
import { MAX_STEPS } from "../Utils/constants";

const Main = () => {
  const renderMenu = () => (
    <div>
      <Progress />
      <Menus />
      <Navigation />
    </div>
  );

  const renderSelections = () => (
    <div>
      <Selections />
    </div>
  );

  return (
    <Consumer>
      {value => {
        const { step } = value;
        return (
          <main className={css({ padding: "1em" })}>
            {step <= MAX_STEPS ? renderMenu() : renderSelections()}
          </main>
        );
      }}
    </Consumer>
  );
};

export default Main;
