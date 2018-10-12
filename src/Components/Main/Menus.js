import React, { Component } from "react";

import { Consumer } from "../../Context";

import Course from "./Course";

export default class Menu extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { menu, step } = value;
          const options = menu.filter(option =>
            option.courseType.includes(step)
          );
          return <Course course={options} step={step} />;
        }}
      </Consumer>
    );
  }
}
