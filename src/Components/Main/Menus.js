import React from "react";

import { Consumer } from "../../Context";

import Course from "./Course";

const Menus = () => {
  return (
    <Consumer>
      {value => {
        const { menu, step } = value;
        const options = menu.filter(option => option.courseType.includes(step));
        return <Course course={options} step={step} />;
      }}
    </Consumer>
  );
};

export default Menus;
